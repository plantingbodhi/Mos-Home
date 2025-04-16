"use client";

import Image from "next/image";

export default function WhatIsMOS() {
  return (
    <div className="bg-white max-w-3xl mx-auto p-6">
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
      </div>
    </div>
  );
}
