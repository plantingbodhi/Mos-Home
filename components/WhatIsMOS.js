"use client";

import Image from "next/image";

export default function WhatIsMOS() {
  return (
    <div className="bg-white max-w-7xl mx-auto px-8">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-4">What is MOS?</h2>
        <p className="text-lg text-center mb-8">
          A sacred system for remembering who you are.
        </p>

        <div className="border-2 border-black rounded-[32px] p-6">
          <div className="text-lg font-bold mb-8 text-center">
            MOS is made of three principles:
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-6 h-6">
              <Image
                src="/images/mystery icon.png"
                alt="Mystery"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <span>Mystery</span>
            <span className="mx-2">–</span>
            <div className="w-6 h-6">
              <Image
                src="/images/odyssey icon.png"
                alt="Odyssey"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <span>Odyssey</span>
            <span className="mx-2">–</span>
            <div className="w-6 h-6">
              <Image
                src="/images/sanctity icon.png"
                alt="Sanctity"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <span>Sanctity</span>
          </div>
          <p className="text-lg mb-8 text-center">
            That&apos;s how we listen, create, and connect.
          </p>

          <div className="border-t-2 border-black pt-6">
            <p className="text-lg font-bold mb-4 text-center">MOS is a map.</p>
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
                <p className="text-lg">To remember that you are not alone.</p>
              </div>
            </div>

            <p className="text-lg text-center mt-8">
              It is a rhythm. A ritual. A system.
            </p>
          </div>

          <div className="border-t-2 border-black pt-6 mt-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              The Way of MOS
            </h3>
            <p className="text-lg mb-6 text-center">
              There&apos;s no one way to walk the Way.
            </p>
            <p className="text-lg mb-6 text-center">
              MOS isn&apos;t a rigid program — it&apos;s a living system.
              <br />
              You can enter it from wherever you are.
            </p>
            <p className="text-lg mb-6 text-center">
              Some people come for stillness.
              <br />
              Some come to create.
              <br />
              Some come to heal.
            </p>
            <p className="text-lg mb-2 text-center">You might:</p>
            <p className="text-lg mb-6 text-center">
              → Use it as a daily rhythm
              <br />
              → Take it into your business
              <br />
              → Contemplate it in solitude
              <br />→ Or walk it with a guide
            </p>
            <p className="text-lg mb-6 text-center">
              You can start with Mystery,
              <br />
              act through Odyssey,
              <br />
              and come home in Sanctity.
            </p>
            <p className="text-lg mb-6 text-center">
              Or you might live all three in a single breath.
            </p>
            <p className="text-lg mb-6 text-center">
              There is no more right or wrong.
            </p>
            <p className="text-lg text-center">
              MOS adapts to you.
              <br />
              To your life, your season, your soul.
            </p>
          </div>

          <div className="border-t-2 border-black pt-6 mt-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              The Vision of MOS
            </h3>
            <p className="text-lg mb-6 text-center">
              What if the world was built from the inside out?
            </p>
            <p className="text-lg mb-6 text-center">
              A world where clarity, love, and sacred rhythm are not luxuries —
              but the baseline.
            </p>
            <p className="text-lg mb-6 text-center">
              Where people know who they are.
              <br />
              Where work feels like expression.
              <br />
              Where communities are woven through care, contemplation, and
              creativity.
            </p>
            <p className="text-lg mb-6 text-center">
              MOS is not just for personal transformation.
              <br />
              It&apos;s a blueprint for a new kind of world.
            </p>
            <p className="text-lg mb-2 text-center">A world where:</p>
            <p className="text-lg mb-6 text-center">
              → Business is guided by purpose, not pressure
              <br />
              → Tech serves soul, not addiction
              <br />
              → Healing is shared, not hidden
              <br />→ We build systems that honor life
            </p>
            <p className="text-lg mb-6 text-center">
              This is what MOS creates, one being at a time:
              <br />
              A sacred internet.
              <br />
              A web of awakened souls.
              <br />A quiet revolution in every corner of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
