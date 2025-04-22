"use client";

export default function WhoThisIsFor() {
  return (
    <section className="mb-24">
      <div className="bg-white border-2 border-black rounded-[32px] p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Who This Is For</h2>
        <div className="space-y-6 text-lg text-center">
          <p>
            This is for the ones who feel something stirring.
            <br />
            A quiet truth beneath the noise.
            <br />
            A longing that success couldn&apos;t satisfy.
            <br />A soul that&apos;s tired of pretending.
          </p>
          <p>
            You&apos;ve tasted suffering, maybe even danced with despair.
            <br />
            But something in you didn&apos;t die.
            <br />
            Something is ready now.
          </p>
          <p>
            This work is for those who are ready to wake up
            <br />
            and live a life aligned with the sacred.
            <br />
            Whether you&apos;re a seeker, a guide, a healer — or simply lost and
            yearning —
            <br />
            If your heart says yes, you&apos;re in the right place.
          </p>
        </div>

        {/* Dividing line */}
        <div className="border-t-2 border-black my-8"></div>

        <h2 className="text-3xl font-bold mb-8 text-center">
          Who This Is Not For
        </h2>
        <div className="space-y-4 text-lg text-center">
          <p>You want a productivity hack or quick fix.</p>
          <p>You&apos;re looking for someone to save you.</p>
          <p>You&apos;re not ready to be honest with yourself.</p>
          <p>
            This is sacred work. It requires presence, humility, and devotion.
          </p>
        </div>
      </div>
    </section>
  );
}
