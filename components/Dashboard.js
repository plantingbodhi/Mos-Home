"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMoon, FiActivity, FiCoffee } from "react-icons/fi";
import ButtonOutline from "./ButtonOutline";

export default function Dashboard() {
  const recentMeals = [
    {
      title:
        "Boiled Egg (100g), Purple Cabbage (30g), Tomatoes (50g), Carrot Sticks (30g)",
      time: "about 2 hours ago",
      image: "/images/meal1.jpg",
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
      image: "/images/meal2.jpg",
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
                  <ButtonOutline title="What is Mos?" />
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

              {recentMeals.map((meal, index) => (
                <div key={index} className="relative">
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
                      {meal.time}
                    </div>
                    <div className="bg-card rounded-[32px] p-6 border-2 border-black">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
