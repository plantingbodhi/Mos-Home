"use client";

import Image from "next/image";

export default function WhatIsMOS() {
  return (
    <section id="what-is-mos" className="pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="border-2 border-black rounded-[32px] p-6">
          <h2 className="text-3xl font-bold text-center mb-4">What is Mos?</h2>
          <p className="text-lg text-center mb-12">
            A sacred system for remembering who you are.
          </p>

          <div className="mb-16">
            <p className="text-lg text-center mb-6">
              You&apos;re not alone in what you&apos;re feeling. Something deep
              is stirring, in the world and within you. We&apos;re living
              through a collective remembering. Old systems are breaking. Truth
              is rising. And many are waking up without a clear path to walk.
            </p>
            <p className="text-lg text-center mb-6">
              Mos is not a new idea. It&apos;s an ancient pattern, one that has
              flowed through sacred teachings across time. It has many names,
              and no name. Now, it&apos;s returned as a system for this moment.
            </p>
            <p className="text-lg text-center mb-6">
              A way to see clearly. To live truthfully. To return to what
              matters.
            </p>
            <p className="text-lg text-center">
              It won&apos;t give you answers, but it will help you listen.
              It&apos;s both a map, and a mirror. And it begins where you are.
            </p>
          </div>

          <div className="border-t-2 border-black pt-6">
            <p className="text-2xl font-bold mb-4 text-center">Mos is a map </p>
            <p className="text-lg mb-8 text-center">
              A way to navigate your life through clarity, action, and love.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mystery */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src="/images/mystery icon.png"
                    alt="Mystery"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Mystery</h3>
                <p className="text-lg">To observe. To feel. To become aware.</p>
              </div>

              {/* Odyssey */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src="/images/odyssey icon.png"
                    alt="Odyssey"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Odyssey</h3>
                <p className="text-lg">
                  To walk the path, share your gift, meet your challenge.
                </p>
              </div>

              {/* Sanctity */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src="/images/sanctity icon.png"
                    alt="Sanctity"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Sanctity</h3>
                <p className="text-lg">
                  The unity of all things, love and open heart.
                </p>
              </div>
            </div>

            <p className="text-lg text-center mt-8 mb-12">
              It is a rhythm. A ritual. A system.
            </p>
          </div>

          <div className="border-t-2 border-black pt-6">
            <h3 className="text-2xl font-bold text-center mb-4">
              Mos is a way
            </h3>
            <p className="text-lg text-center mb-8">
              There&apos;s no one way to walk the Way.
            </p>

            <div className="space-y-8">
              <p className="text-lg text-center">
                Mos isn&apos;t a rigid method — it&apos;s a living system. You
                can start with Mystery, move through Odyssey, or rest in
                Sanctity. Or live all three in a single breath. Some come for
                stillness. Some to create. Some to heal.
              </p>

              <p className="text-lg text-center">
                Mos takes form — not just as an idea, but as something you can
                use. A simple way to see where you are, and return to what
                matters.
              </p>

              <p className="text-lg text-center">
                It adapts to you. To your life, your season, your soul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
