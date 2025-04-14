import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase credentials. Please check your .env.local file"
  );
}

console.log("Initializing Supabase client with URL:", supabaseUrl);
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// Function to get all activities
export async function getActivities() {
  console.log("Fetching activities...");
  const { data, error } = await supabase
    .from("activities")
    .select(
      `
      id,
      title,
      source,
      description,
      duration,
      image_url,
      mos_aspect_id,
      created_at,
      mos_aspects (
        id,
        name,
        icon_url
      )
    `
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching activities:", {
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
      status: error.status,
      statusText: error.statusText,
    });
    throw error;
  }

  console.log("Successfully fetched activities:", data);
  return data;
}

// Helper function to create an activity
export async function createActivity(activity) {
  console.log("Creating activity with data:", activity);
  const { data, error } = await supabase
    .from("activities")
    .insert([activity])
    .select();

  if (error) {
    console.error("Error creating activity:", {
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
      status: error.status,
      statusText: error.statusText,
    });
    throw error;
  }

  console.log("Activity created successfully:", data[0]);
  return data[0];
}

// Function to create test activities
export async function createTestActivities() {
  // First, fetch the mos_aspects to get their UUIDs
  const { data: aspects, error: aspectsError } = await supabase
    .from("mos_aspects")
    .select("id")
    .order("id");

  if (aspectsError) {
    console.error("Error fetching mos_aspects:", {
      message: aspectsError.message,
      code: aspectsError.code,
      details: aspectsError.details,
      hint: aspectsError.hint,
      status: aspectsError.status,
      statusText: aspectsError.statusText,
    });
    throw aspectsError;
  }

  if (!aspects || aspects.length === 0) {
    throw new Error("No mos_aspects found in the database");
  }

  const testActivities = [
    {
      title: "Morning Meditation",
      source: "Personal Practice",
      description: "Started the day with 20 minutes of mindfulness meditation",
      duration: 20,
      image_url: "https://placehold.co/400x400/f5f5f5/000000",
      mos_aspect_id: aspects[0].id,
      created_at: new Date().toISOString(),
    },
    {
      title: "Yoga Session",
      source: "Home Practice",
      description: "Completed a 45-minute vinyasa flow",
      duration: 45,
      image_url: "https://placehold.co/400x400/f5f5f5/000000",
      mos_aspect_id: aspects[1].id,
      created_at: new Date().toISOString(),
    },
    {
      title: "Nature Walk",
      source: "Local Park",
      description: "Took a peaceful walk in the park for 30 minutes",
      duration: 30,
      image_url: "https://placehold.co/400x400/f5f5f5/000000",
      mos_aspect_id: aspects[2].id,
      created_at: new Date().toISOString(),
    },
  ];

  try {
    console.log("Attempting to create test activities...");
    const results = await Promise.all(
      testActivities.map(async (activity) => {
        console.log("Creating activity:", activity);
        try {
          const result = await createActivity(activity);
          console.log("Activity created successfully:", result);
          return result;
        } catch (error) {
          console.error("Error creating individual activity:", {
            message: error.message,
            code: error.code,
            details: error.details,
            hint: error.hint,
            status: error.status,
            statusText: error.statusText,
          });
          throw error;
        }
      })
    );
    console.log("All test activities created successfully:", results);
    return results;
  } catch (error) {
    console.error("Error in createTestActivities:", {
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
      status: error.status,
      statusText: error.statusText,
    });
    throw error;
  }
}
