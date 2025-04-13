"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMoon, FiActivity, FiCoffee } from "react-icons/fi";

export default function Dashboard() {
  const recentMeals = [
    {
      title:
        "Boiled Egg (100g), Purple Cabbage (30g), Tomatoes (50g), Carrot Sticks (30g)",
      time: "about 2 hours ago",
      image: "https://placehold.co/400x400/png",
      nutrition: {
        calories: 185,
        protein: 15,
        carbs: 15,
        fat: 11,
      },
    },
    {
      title: "Pea Protein Powder (40g)",
      time: "about 2 hours ago",
      image: "https://placehold.co/400x400/png",
      nutrition: {
        calories: 160,
        protein: 32,
        carbs: 3,
        fat: 2,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile and Stats */}
          <div className="space-y-8">
            {/* Profile Section */}
            <div className="bg-card rounded-[32px] border border-border overflow-hidden">
              <div className="h-[140px] bg-gradient-to-r from-[#4776E6] to-[#8E54E9]" />
              <div className="-mt-[64px] px-8 pb-8">
                <div className="mb-6">
                  <div className="w-[128px] h-[128px] rounded-full border-4 border-white overflow-hidden">
                    <Image
                      src="https://placehold.co/400x400/png"
                      alt="Profile"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-[32px] font-bold text-foreground leading-tight mb-2">
                  Marc Lou
                </h1>
                <p className="text-[20px] text-[#6B7280] mb-8">
                  Just settings up this app, no idea what I&apos;m doing really.
                </p>
                <div className="flex gap-16">
                  <div>
                    <div className="text-[32px] font-bold leading-none mb-1">
                      27
                    </div>
                    <div className="text-[16px] text-[#6B7280]">Bio age</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-bold leading-none mb-1">
                      0.84
                    </div>
                    <div className="text-[16px] text-[#6B7280]">
                      Aging speed
                    </div>
                  </div>
                  <div>
                    <div className="text-[32px] font-bold leading-none mb-1">
                      —
                    </div>
                    <div className="text-[16px] text-[#6B7280]">Rank</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Stats */}
            <div className="bg-card rounded-3xl p-8 border border-border">
              <h2 className="text-xl font-bold mb-6">Today</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FiMoon className="text-blue-400" />
                      <span>Sleep</span>
                    </div>
                    <div className="text-muted-foreground">
                      8h 20m <span className="opacity-50">/ 7h 0m</span>
                    </div>
                  </div>
                  <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full w-[100%] bg-blue-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FiActivity className="text-green-400" />
                      <span>Burned</span>
                    </div>
                    <div className="text-muted-foreground">
                      817 kcal <span className="opacity-50">/ 500 kcal</span>
                    </div>
                  </div>
                  <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                    <div className="h-full w-[100%] bg-green-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FiCoffee className="text-red-400" />
                      <span>Intake</span>
                    </div>
                    <div className="text-muted-foreground">
                      815 kcal <span className="opacity-50">/ 3000 kcal</span>
                    </div>
                  </div>
                  <div className="h-2 bg-red-100 rounded-full overflow-hidden">
                    <div className="h-full w-[27%] bg-red-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Recent activity</h2>
            <div className="space-y-6">
              {recentMeals.map((meal, index) => (
                <div key={index}>
                  <div className="text-sm text-muted-foreground mb-2">
                    {meal.time}
                  </div>
                  <div className="bg-card rounded-3xl p-6 border border-border">
                    <div className="flex gap-6">
                      <div className="w-32 h-32 bg-muted rounded-2xl overflow-hidden shrink-0">
                        <Image
                          src={meal.image}
                          alt={meal.title}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium mb-4">{meal.title}</h3>
                        <div className="flex gap-6">
                          <div className="flex items-center gap-2">
                            <span className="text-orange-500">🔥</span>
                            <div>
                              <div className="font-bold">
                                {meal.nutrition.calories}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                calories
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>🍖</span>
                            <div>
                              <div className="font-bold">
                                {meal.nutrition.protein}g
                              </div>
                              <div className="text-sm text-muted-foreground">
                                protein
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>⚪️</span>
                            <div>
                              <div className="font-bold">
                                {meal.nutrition.carbs}g
                              </div>
                              <div className="text-sm text-muted-foreground">
                                carbs
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>🫒</span>
                            <div>
                              <div className="font-bold">
                                {meal.nutrition.fat}g
                              </div>
                              <div className="text-sm text-muted-foreground">
                                fat
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
