"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function WhatIsMOS() {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandedContentRef = useRef(null);
  const buttonRef = useRef(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsInitialLoad(false);
  };

  useEffect(() => {
    // Only scroll if it's not the initial load and the user has interacted with the component
    if (!isInitialLoad) {
      if (isExpanded && expandedContentRef.current) {
        // Small delay to ensure the content is rendered
        setTimeout(() => {
          expandedContentRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);
      } else if (!isExpanded && buttonRef.current) {
        // Scroll back to the button when collapsing
        setTimeout(() => {
          buttonRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 50);
      }
    }
  }, [isExpanded, isInitialLoad]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What is MOS?</h2>

        <div className="border border-black rounded-lg p-6">
          <p className="text-lg mb-4 text-center">
            A sacred system for remembering who you are.
          </p>
          <div className="text-lg mb-4 text-center">
            MOS is made of three principles: <br />
            <div className="flex items-center justify-center gap-2 mt-2">
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
          </div>
          <p className="text-lg mb-6 text-center">
            That&apos;s how we listen, create, and connect.
          </p>

          <div className="text-center">
            <button
              ref={buttonRef}
              onClick={handleExpand}
              className="inline-flex items-center text-lg font-medium hover:underline"
            >
              {isExpanded ? "↑ Collapse" : "→ Expand"}
            </button>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                ref={expandedContentRef}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden mt-6"
              >
                <div className="border-t border-black pt-6">
                  <p className="text-lg mb-4 text-center">MOS is a map.</p>
                  <p className="text-lg mb-4 text-center">
                    A way to navigate your life through clarity, action, and
                    love.
                  </p>
                  <div className="text-lg mb-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-6 h-6">
                        <Image
                          src="/images/mystery icon.png"
                          alt="Mystery"
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-medium">Mystery</span>
                    </div>
                    To observe. To feel. To become aware.
                  </div>
                  <div className="text-lg mb-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-6 h-6">
                        <Image
                          src="/images/odyssey icon.png"
                          alt="Odyssey"
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-medium">Odyssey</span>
                    </div>
                    To walk the path, share your gift, meet your challenge.
                  </div>
                  <div className="text-lg mb-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-6 h-6">
                        <Image
                          src="/images/sanctity icon.png"
                          alt="Sanctity"
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-medium">Sanctity</span>
                    </div>
                    To remember that you are not alone.
                  </div>
                  <p className="text-lg text-center">
                    It is a rhythm. A ritual. A system. <br />
                    It&apos;s how we create the sacred internet, together.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
