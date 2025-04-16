"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMoon, FiActivity, FiCoffee } from "react-icons/fi";
import ButtonOutline from "./ButtonOutline";
import { getActivities, createTestActivities } from "@/libs/supabase";
import WhatIsMOS from "./WhatIsMOS";

export default function Dashboard() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const whatIsMOSRef = useRef(null);

  useEffect(() => {
    async function initializeActivities() {
      console.log("Fetching activities...");
      let data = await getActivities();
      console.log("Activities data:", data);

      // If no activities exist, create test data
      if (data.length === 0) {
        console.log("No activities found, creating test data...");
        await createTestActivities();
        data = await getActivities(); // Fetch again after creating test data
      }

      setActivities(data);
      setLoading(false);
    }

    initializeActivities();
  }, []);

  const scrollToWhatIsMOS = () => {
    whatIsMOSRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Content */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Profile and Stats */}
            <div className="space-y-8">
              {/* Profile Section */}
              <div className="bg-card rounded-[32px] p-8 border-2 border-black">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black mb-4">
                    <Image
                      src="/images/profile.png"
                      alt="Profile"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Bodhi</h2>
                  <p className="text-muted-foreground mb-6">
                    Building mos so we can remember, connect, and create bliss
                    together. IRL offerings available and digital tools coming
                    soon.
                  </p>

                  {/* Buttons */}
                  <div className="w-full grid grid-cols-2 gap-3">
                    <ButtonOutline
                      title="What is Mos?"
                      onClick={scrollToWhatIsMOS}
                    />
                    <ButtonOutline title="Explore Offerings" />
                  </div>
                </div>
              </div>

              {/* Today's Stats */}
              <div className="bg-card rounded-[32px] p-8 border-2 border-black">
                <h2 className="text-xl font-bold mb-6">Today</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
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
                      </div>
                      <div className="text-muted-foreground">
                        8h 20m <span className="opacity-50">/ 7h 0m</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[119%] bg-black rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
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
                      <div className="text-muted-foreground">
                        817 kcal <span className="opacity-50">/ 500 kcal</span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#d988d7]/20 rounded-full overflow-hidden">
                      <div className="h-full w-[163%] bg-[#d988d7] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
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
                      </div>
                      <div className="text-muted-foreground">
                        815 kcal <span className="opacity-50">/ 3000 kcal</span>
                      </div>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden border-2 border-black">
                      <div className="h-full w-[27%] bg-transparent border-r-2 border-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Recent Activity */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Recent activity</h2>
              <div className="space-y-6 relative">
                {/* Timeline line */}
                <div className="absolute left-[15px] top-[24px] bottom-0 w-[2px] bg-black/10" />

                {loading ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Loading activities...
                  </div>
                ) : activities.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No activities yet
                  </div>
                ) : (
                  activities.map((activity, index) => (
                    <div key={activity.id} className="relative">
                      {/* Timeline logo dot */}
                      <div className="absolute left-0 top-[12px]">
                        <Image
                          src="/images/logo 60.png"
                          alt="Timeline marker"
                          width={30}
                          height={30}
                          className="w-[30px] h-[30px]"
                        />
                      </div>

                      <div className="pl-12">
                        <div className="text-sm text-muted-foreground mb-2">
                          {new Date(activity.created_at).toLocaleString()}
                        </div>
                        <div className="bg-card rounded-[32px] p-6 border-2 border-black">
                          <div className="flex gap-6">
                            <div className="w-32 h-32 bg-muted rounded-[32px] overflow-hidden shrink-0 border-2 border-black">
                              <Image
                                src={
                                  activity.image_url ||
                                  "https://placehold.co/400x400/f5f5f5/000000"
                                }
                                alt={activity.title}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-grow space-y-4">
                              <div>
                                <h3 className="text-xl font-bold">
                                  {activity.title}
                                </h3>
                                <p className="text-muted-foreground">
                                  {activity.source}
                                </p>
                              </div>
                              <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6">
                                    <Image
                                      src={activity.mos_aspects.icon_url}
                                      alt={activity.mos_aspects.name}
                                      width={24}
                                      height={24}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <span className="font-medium">
                                    {activity.mos_aspects.name}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">
                                    {activity.duration} minutes
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {activity.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatIsMOS Section */}
      <div ref={whatIsMOSRef}>
        <WhatIsMOS />
      </div>
    </div>
  );
}
