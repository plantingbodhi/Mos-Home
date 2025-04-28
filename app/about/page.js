"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bodhi's Story Section */}
        <section className="mb-24">
          <div className="bg-white border-2 border-black rounded-[32px] p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Bodhi&apos;s Story
            </h2>

            <div className="flex flex-col md:flex-row gap-8 mb-12">
              {/* Left column - Image */}
              <div className="w-full md:w-1/3">
                <div className="border-2 border-black rounded-[32px] overflow-hidden">
                  <Image
                    src="https://cwkokjxznczqdzrqfcpt.supabase.co/storage/v1/object/public/profile-photos/bodhiprofile.jpg"
                    alt="Bodhi"
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Right column - Text */}
              <div className="w-full md:w-2/3">
                <div className="space-y-6">
                  <p className="text-lg">
                    When I was a child, my father taught me about manifestation,
                    and I was introduced to transcendental meditation before I
                    was ten. Those early experiences shaped how I saw the world
                    — and stayed with me.
                  </p>

                  <p className="text-lg">
                    But even with that foundation, life wasn&apos;t easy. By the
                    time I was a teenager, I struggled with depression,
                    self-doubt, and a deep sadness I couldn&apos;t explain.
                    After high school, I tried to escape through partying,
                    drinking, and distractions — until, at twenty, something
                    shifted.
                  </p>

                  <p className="text-lg">
                    After a routine surgery, I woke up feeling like I
                    didn&apos;t want to be here anymore. It was a turning point.
                    I withdrew from my old life and turned inward — studying
                    spirituality, practicing meditation, and searching for
                    something real.
                  </p>

                  <p className="text-lg">
                    During that time, I had a powerful experience that changed
                    me: I saw through the surface of life and touched something
                    infinite inside myself — a sense of peace, connection, and
                    wholeness that I had never known before.
                  </p>

                  <p className="text-lg">
                    This led me on a long journey: traveling to India, spending
                    years with my teacher, planting trees in the forests of
                    Sweden, and living close to the earth. At twenty-six, I took
                    another leap — buying a farm and retreat center in South
                    Africa with a partner.
                  </p>

                  <p className="text-lg">
                    But instead of the peace I was seeking, I found deep
                    isolation, burnout, and eventually a mental and emotional
                    breakdown. I left it all behind with nothing but a backpack
                    — starting over once again.
                  </p>

                  <p className="text-lg">
                    In Australia, I rebuilt my life — starting a tech company
                    for tree planting, finding love again, and continuing deep
                    inner work through plant medicine and ceremony. But despite
                    all the outer success, a deeper part of me was still running
                    from the real work inside.
                  </p>

                  <p className="text-lg">
                    Then, within a short span, life dismantled everything I had
                    built: I lost my company, my closest friends drifted away,
                    my relationship ended, my spiritual teacher passed away, and
                    I lost much of my financial stability.
                  </p>

                  <p className="text-lg">
                    But this time was different. I didn&apos;t resist it. I
                    faced it all — openly, consciously, and with as much love as
                    I could.
                  </p>

                  <p className="text-lg">
                    Out of that time, something deeper was born — a way of
                    living and seeing that wasn&apos;t based on chasing or
                    escaping anything. It was a simple recognition: we are
                    already whole, already connected, already part of something
                    sacred.
                  </p>

                  <p className="text-lg">
                    This is where MOS began to truly take form. Not as a
                    business idea, but as a natural expression of what I had
                    lived through — a way to help others navigate their own
                    challenges, awaken to their true nature, and live from a
                    place of purpose, connection, and freedom.
                  </p>

                  <p className="text-lg">
                    Today, MOS is my work and my offering. It&apos;s the path I
                    walk, and the way I serve — helping people remember who they
                    really are, and create lives that reflect that truth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
