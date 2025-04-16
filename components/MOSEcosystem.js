"use client";

import { useRef } from "react";

export default function MOSEcosystem({ ecosystemRef }) {
  return (
    <section ref={ecosystemRef} className="pt-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          The MOS Ecosystem
        </h2>
        <p className="text-lg text-center mb-12">
          Explore the various offerings and tools that make up the MOS ecosystem
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Way of MOS */}
          <div className="bg-white border-2 border-black rounded-[32px] p-6">
            <div className="text-2xl mb-2">🌀</div>
            <h3 className="text-xl font-bold mb-2">Way of MOS</h3>
            <p className="text-muted-foreground mb-2">
              The full system.
              <br />
              Mystery, Odyssey, Sanctity—learn how to navigate life from within.
            </p>
            <button className="px-4 py-2 bg-transparent hover:bg-transparent text-black hover:text-[#d988d7] transition-colors">
              → Enter
            </button>
          </div>

          {/* Sacred.Directory */}
          <div className="bg-white border-2 border-black rounded-[32px] p-6">
            <div className="text-2xl mb-2">📖</div>
            <h3 className="text-xl font-bold mb-2">Sacred.Directory</h3>
            <p className="text-muted-foreground mb-2">
              The sacred internet.
              <br />A living map of teachers, traditions, and wisdom paths.
            </p>
            <button className="px-4 py-2 bg-transparent hover:bg-transparent text-black hover:text-[#d988d7] transition-colors">
              → Explore
            </button>
          </div>

          {/* Deepre.st */}
          <div className="bg-white border-2 border-black rounded-[32px] p-6">
            <div className="text-2xl mb-2">🌑</div>
            <h3 className="text-xl font-bold mb-2">Deepre.st</h3>
            <p className="text-muted-foreground mb-2">
              A place to feel.
              <br />
              For those in the dark night, with love and compassion.
            </p>
            <button className="px-4 py-2 bg-transparent hover:bg-transparent text-black hover:text-[#d988d7] transition-colors">
              → Enter
            </button>
          </div>

          {/* Rawpo.st */}
          <div className="bg-white border-2 border-black rounded-[32px] p-6">
            <div className="text-2xl mb-2">📣</div>
            <h3 className="text-xl font-bold mb-2">Rawpo.st</h3>
            <p className="text-muted-foreground mb-2">
              Share what&apos;s real.
              <br />
              Build in public. Post with truth. Heal through honesty.
            </p>
            <button className="px-4 py-2 bg-transparent hover:bg-transparent text-black hover:text-[#d988d7] transition-colors">
              → Post
            </button>
          </div>

          {/* Mos Mountain */}
          <div className="bg-white border-2 border-black rounded-[32px] p-6">
            <div className="text-2xl mb-2">🗻</div>
            <h3 className="text-xl font-bold mb-2">Mos Mountain</h3>
            <p className="text-muted-foreground mb-2">
              A mythic journey.
              <br />
              Climb the mountain. Meet yourself through story, archetype, and
              challenge.
            </p>
            <button className="px-4 py-2 bg-transparent hover:bg-transparent text-black hover:text-[#d988d7] transition-colors">
              → Begin
            </button>
          </div>

          {/* MOS Gardens */}
          <div className="bg-white border-2 border-black rounded-[32px] p-6">
            <div className="text-2xl mb-2">🌿</div>
            <h3 className="text-xl font-bold mb-2">MOS Gardens</h3>
            <p className="text-muted-foreground mb-2">
              Grow what&apos;s sacred.
              <br />
              Track living ecosystems with a regenerative guild for gardeners,
              planters, and stewards of the Earth.
            </p>
            <button className="px-4 py-2 bg-transparent hover:bg-transparent text-black hover:text-[#d988d7] transition-colors">
              → Grow
            </button>
          </div>
        </div>

        <div className="mt-24 text-center mb-24">
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
