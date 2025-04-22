"use client";

import Image from "next/image";

export default function VisionOfMOS() {
  return (
    <section className="pt-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="max-w-md mx-auto border-2 border-black rounded-[32px] overflow-hidden mb-12">
            <Image
              src="https://cwkokjxznczqdzrqfcpt.supabase.co/storage/v1/object/public/website-images//Mos%20hero%20banner.jpg"
              alt="MOS Hero Banner"
              width={400}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-3xl font-bold mb-8">The Vision of MOS</h2>
          <p className="text-lg text-center mb-6">
            What if the world was built from the inside out?
          </p>
          <p className="text-lg text-center mb-6">
            A world where clarity, love, and sacred rhythm are not luxuries —
            but the baseline.
          </p>
          <p className="text-lg text-center mb-6">
            Where people know who they are.
            <br />
            Where work feels like expression.
            <br />
            Where communities are woven through care, contemplation, and
            creativity.
          </p>
          <p className="text-lg text-center mb-6">
            MOS is not just for personal transformation.
            <br />
            It&apos;s a blueprint for a new kind of world.
          </p>
          <p className="text-lg text-center mb-2">A world where:</p>
          <p className="text-lg text-center mb-6">
            → Business is guided by purpose, not pressure
            <br />
            → Tech serves soul, not addiction
            <br />
            → Healing is shared, not hidden
            <br />→ We build systems that honor life
          </p>
          <p className="text-lg text-center">
            This is what MOS creates, one being at a time:
            <br />
            A sacred internet.
            <br />
            A web of awakened souls.
            <br />A quiet revolution in every corner of life.
          </p>
        </div>
      </div>
    </section>
  );
}
