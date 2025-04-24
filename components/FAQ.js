"use client";

import { useRef, useState } from "react";

// <FAQ> component is a list of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

export const faqList = [
  {
    question: "What is MOS?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        MOS is a sacred system for remembering who you are. It&apos;s not a new
        method, but an ancient rhythm — a pattern that&apos;s been whispered
        through mystery schools and wisdom traditions for millennia. It helps
        you see clearly, live truthfully, and return to what matters. <br />
        It won&apos;t give you answers. It will help you listen. It&apos;s a map
        and a mirror. And it begins where you are.
      </div>
    ),
  },
  {
    question: "Is MOS a course, a framework, or a community?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        MOS is all of these — and more. It&apos;s a living system that adapts to
        you. <br />
        • A map to locate where you are in your life journey <br />
        • A rhythm to deepen your spiritual practice <br />
        • A framework for building aligned work in the world <br />
        • A space for connection, community, and healing <br />
        MOS is not something you follow. It&apos;s something you live.
      </div>
    ),
  },
  {
    question: "What does MOS stand for?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        MOS stands for <strong>Mystery</strong>, <strong>Odyssey</strong>, and{" "}
        <strong>Sanctity</strong>. <br />
        • Mystery: Mindfulness, awareness, the unknown <br />
        • Odyssey: Action, creation, your unique path <br />
        • Sanctity: Heart, connection, belonging <br />
        Together, they form a sacred cycle — a way to navigate both inner and
        outer life.
      </div>
    ),
  },
  {
    question: "Is MOS right for me?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        MOS is for anyone feeling the call. <br />
        If you&apos;re awakening, questioning, healing, or simply ready for a
        more aligned life, this system can support your journey. <br />
        You don&apos;t need to be &apos;spiritual&apos; — just honest about
        where you are.
      </div>
    ),
  },
  {
    question: "How do I get started?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You can begin with a 1:1 session, a Gene Keys reading, or by exploring
        the free tools in the ecosystem. <br />
        The easiest path is to <strong>book a discovery call</strong>.
        We&apos;ll connect, feel into where you are, and go from there.
      </div>
    ),
  },
  {
    question: "Can I work with Bodhi 1:1?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes. Alongside the MOS system, Bodhi offers 1:1 sessions for those
        seeking personal guidance, clarity, and transformation. <br />
        These are not formulas or programs — they are spaces of presence,
        listening, and real inner work.
      </div>
    ),
  },
  {
    question: "What kind of 1:1 sessions are available?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You can work with Bodhi through:
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Gene Keys Guidance</strong> — Explore your soul&apos;s
            blueprint through your Hologenetic Profile, uncovering purpose,
            patterns, and gifts.
          </li>
          <li>
            <strong>MOS Mentorship</strong> — Ongoing or one-off sessions based
            on the Mystery → Odyssey → Sanctity framework to help you find
            clarity, direction, and truth.
          </li>
          <li>
            <strong>Live Events & Community</strong> — Join workshops, group
            sessions, and contemplative spaces with others walking the path.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How does MOS 1:1 guidance work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Every session is unique. Some include meditation, somatic check-ins,
        guided inquiry, or business visioning. Others unfold through deep
        silence and listening. <br />
        You bring where you are. Bodhi meets you there — with presence,
        compassion, and intuitive reflection.
      </div>
    ),
  },
  {
    question: "What are the Gene Keys?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        The Gene Keys are a contemplative system of wisdom that helps you unlock
        your unique genius and transform your life from the inside out. <br />
        Through your personal profile, you&apos;ll explore the shadows, gifts,
        and siddhis encoded in your DNA — a map to your purpose, relationships,
        and prosperity.
      </div>
    ),
  },
  {
    question: "Is this religious or spiritual?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        MOS is spiritual in essence, but not religious. It honors many lineages
        but belongs to none. <br />
        It&apos;s a universal path — rooted in presence, reverence, and the
        direct experience of being alive. <br />
        No dogma. Just awareness, action, and love.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-black/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-[#d988d7]" : ""
          }`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="pt-24 pb-24 bg-white" id="faq">
      <div className="max-w-6xl mx-auto px-8">
        <div className="border-2 border-black rounded-[32px] p-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-center mb-12">
            Common questions about MOS and how it can support your journey
          </p>

          <ul className="space-y-4">
            {faqList.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
