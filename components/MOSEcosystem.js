"use client";

import { useRef } from "react";

export default function MOSEcosystem() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          The MOS Ecosystem
        </h2>
        <p className="text-lg text-center mb-8">
          These are the living expressions of the system.
          <br />
          Offerings, tools, and spaces to remember, create, and connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}
