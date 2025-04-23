"use client";

export default function WhatToExpect() {
  return (
    <section className="mb-24">
      <div className="bg-white p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">What to Expect</h2>
        <p className="text-lg mb-12 text-center">
          A Gene Keys reading is a profound journey of self-discovery.
          <br />
          Here&apos;s what you can expect from our time together.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black rounded-[32px] p-6">
              <h3 className="text-2xl font-bold mb-4">Initial Consultation</h3>
              <p className="text-lg">
                We begin with a deep dive into your birth chart.
                <br />
                We explore your unique genetic blueprint and its implications.
              </p>
            </div>
            <div className="bg-white border-2 border-black rounded-[32px] p-6">
              <h3 className="text-2xl font-bold mb-4">Personalized Guidance</h3>
              <p className="text-lg">
                I provide insights and practices tailored to your unique
                profile.
                <br />
                We work with your specific challenges and opportunities.
              </p>
            </div>
            <div className="bg-white border-2 border-black rounded-[32px] p-6">
              <h3 className="text-2xl font-bold mb-4">Integration Support</h3>
              <p className="text-lg">
                We develop a practical plan for integrating the insights.
                <br />
                You receive ongoing support as you embody the wisdom.
              </p>
            </div>
            <div className="bg-white border-2 border-black rounded-[32px] p-6">
              <h3 className="text-2xl font-bold mb-4">
                Transformational Tools
              </h3>
              <p className="text-lg">
                You learn practical tools and practices for daily life.
                <br />
                These help you embody and live your highest potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
