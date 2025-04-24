import { supabase } from "../libs/supabase";
import fs from "fs";
import path from "path";

async function importConversations() {
  try {
    // Read the conversations.json file
    const conversationsPath = path.join(process.cwd(), "conversations.json");
    const conversationsData = JSON.parse(
      fs.readFileSync(conversationsPath, "utf8")
    );

    // Process each conversation
    for (const conversation of conversationsData) {
      // Create the conversation record
      const { data: conversationData, error: conversationError } =
        await supabase
          .from("conversations")
          .insert({
            title: conversation.title || "Untitled Conversation",
            metadata: {
              source: "chatgpt-import",
              original_id: conversation.id,
              ...conversation.metadata,
            },
          })
          .select()
          .single();

      if (conversationError) {
        console.error("Error creating conversation:", conversationError);
        continue;
      }

      // Process messages
      if (conversation.messages && conversation.messages.length > 0) {
        const messages = conversation.messages.map((message) => ({
          conversation_id: conversationData.id,
          role: message.role,
          content: message.content,
          created_at: message.created_at || new Date().toISOString(),
          metadata: message.metadata || {},
        }));

        // Insert messages in batches of 100
        const batchSize = 100;
        for (let i = 0; i < messages.length; i += batchSize) {
          const batch = messages.slice(i, i + batchSize);
          const { error: messagesError } = await supabase
            .from("messages")
            .insert(batch);

          if (messagesError) {
            console.error("Error inserting messages batch:", messagesError);
          }
        }
      }

      console.log(`Imported conversation: ${conversationData.title}`);
    }

    console.log("Import completed successfully!");
  } catch (error) {
    console.error("Error during import:", error);
  }
}

// Run the import
importConversations();
