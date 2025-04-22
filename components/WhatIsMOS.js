"use client";

import Image from "next/image";

export default function WhatIsMOS() {
  return (
    <section className="pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-4">What is Mos?</h2>
        <p className="text-lg text-center mb-8">
          A sacred system for remembering who you are.
        </p>

        <div className="border-2 border-black rounded-[32px] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="flex items-center justify-center">
              <div className="w-80 h-80 relative">
                <Image
                  src="https://cwkokjxznczqdzrqfcpt.supabase.co/storage/v1/object/public/mos-icons//logo.png"
                  alt="MOS Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg mb-6">
                You&apos;re not alone in what you&apos;re feeling. Something
                deep is stirring, in the world and within you. We&apos;re living
                through a collective remembering. Old systems are breaking.
                Truth is rising. And many are waking up without a clear path to
                walk.
              </p>
              <p className="text-lg mb-6">
                Mos is not a new idea. It&apos;s an ancient pattern, one that
                has flowed through sacred teachings across time. It has many
                names, and no name. Now, it&apos;s returned as a system for this
                moment.
              </p>
              <p className="text-lg mb-6">
                A way to see clearly. To live truthfully. To return to what
                matters.
              </p>
              <p className="text-lg">
                It won&apos;t give you answers, but it will help you listen.
                It&apos;s both a map, and a mirror. And it begins where you are.
              </p>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
}
