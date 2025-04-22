"use client";

export default function WhatHappensInSession() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-center">
        What Happens in a Session
      </h2>
      <p className="text-lg mb-8 text-center">There is no script.</p>
      <p className="text-lg mb-12 text-center">But most sessions include:</p>

      <div className="max-w-3xl mx-auto">
        {/* Session Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* First Column */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-black rounded-[32px] p-4">
              <p className="text-lg">Deep presence and listening</p>
            </div>
            <div className="bg-white border-2 border-black rounded-[32px] p-4">
              <p className="text-lg">Meditation or guided inquiry</p>
            </div>
            <div className="bg-white border-2 border-black rounded-[32px] p-4">
              <p className="text-lg">Insight and reflection</p>
            </div>
          </div>
          {/* Second Column */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-black rounded-[32px] p-4">
              <p className="text-lg">Gene Keys contemplation</p>
            </div>
            <div className="bg-white border-2 border-black rounded-[32px] p-4">
              <p className="text-lg">Somatic check-ins</p>
            </div>
            <div className="bg-white border-2 border-black rounded-[32px] p-4">
              <p className="text-lg">Next steps and practice</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-lg mt-12 text-center">
        Sometimes we cry. Sometimes we laugh.
        <br />
        Sometimes we sit in silence.
        <br />
        All of it is welcome.
      </p>
    </section>
  );
}
