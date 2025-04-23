"use client";

export default function JourneyStructure() {
  return (
    <section className="mb-24">
      <div className="bg-white p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">The Journey</h2>
        <p className="text-lg mb-12 text-center">
          This is a sacred container of transformation.
          <br />
          It is not &quot;coaching&quot; as usual.
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-black/10" />

          <div className="space-y-16">
            {/* Opening Ceremony */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full" />
              <div className="ml-8 bg-white border-2 border-black rounded-[32px] p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Opening Ceremony – 90-minute initiation session
                </h3>
                <p className="text-lg">
                  We map your journey and orient you in the MOS framework.
                  <br />
                  We meet your story with love and awareness.
                </p>
              </div>
            </div>

            {/* Ongoing Sessions */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full" />
              <div className="ml-8 bg-white border-2 border-black rounded-[32px] p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Ongoing Sessions – weekly 60-minute sessions
                </h3>
                <p className="text-lg">
                  Held over 3 or 6 months depending on the depth you&apos;re
                  ready for.
                  <br />
                  Includes messaging support between calls.
                </p>
              </div>
            </div>

            {/* Integration & Reflection */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full" />
              <div className="ml-8 bg-white border-2 border-black rounded-[32px] p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Integration & Reflection – Closing session to anchor your
                  shifts
                </h3>
                <p className="text-lg">
                  We harvest your insights and create a practice path forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
