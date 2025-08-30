"use client";

import { useState } from "react";

import { Sidebar } from "@/components/core/Sidebar";
import { Header } from "@/components/core/Header";
import { QuranGrid } from "@/components/core/QuranList";
import { FavoritesView } from "@/components/core/FavoriteQuran";
import { UserDashboard } from "@/components/core/AvatarView";

const initialChapters = [
  {
    id: 1,
    number: 1,
    arabic: "Al-Fatiah",
    english: "THE OPENING",
    liked: true,
  },
  { id: 2, number: 2, arabic: "Al-Baqarah", english: "THE COW", liked: false },
  {
    id: 3,
    number: 3,
    arabic: "Al Imran",
    english: "FAMILY OF IMRAN",
    liked: false,
  },
  { id: 4, number: 4, arabic: "An-Nisa", english: "THE WOMEN", liked: false },
  {
    id: 5,
    number: 5,
    arabic: "Al-Ma'idah",
    english: "THE TABLE SPREAD",
    liked: false,
  },
  { id: 6, number: 6, arabic: "Al-An'am", english: "THE CATTLE", liked: false },
  { id: 7, number: 7, arabic: "Al-A'raf", english: "THE HEIGHTS", liked: true },
  {
    id: 8,
    number: 8,
    arabic: "Al-Anfal",
    english: "THE SPOILS OF WAR",
    liked: false,
  },
  {
    id: 9,
    number: 9,
    arabic: "At-Tawbah",
    english: "THE REPENTANCE",
    liked: false,
  },
  { id: 10, number: 10, arabic: "Yunus", english: "JONAH", liked: false },
  { id: 11, number: 11, arabic: "Hud", english: "HUD", liked: false },
  { id: 12, number: 12, arabic: "Yusuf", english: "JOSEPH", liked: false },
  {
    id: 13,
    number: 13,
    arabic: "Ar-Ra'd",
    english: "THE THUNDER",
    liked: false,
  },
  { id: 14, number: 14, arabic: "Ibrahim", english: "ABRAHAM", liked: true },
  {
    id: 15,
    number: 15,
    arabic: "Al-Hijr",
    english: "THE ROCKY TRACT",
    liked: false,
  },
  { id: 16, number: 16, arabic: "An-Nahl", english: "THE BEE", liked: false },
];

export default function HomePage() {
  const [chapters, setChapters] = useState(initialChapters);
  const [activeView, setActiveView] = useState<"quran" | "favorites">("quran");

  const handleToggleLike = (id: number) => {
    setChapters(
      chapters.map((chapter) =>
        chapter.id === id ? { ...chapter, liked: !chapter.liked } : chapter
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Left Sidebar */}
        <Sidebar activeView={activeView} onViewChange={setActiveView} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <Header />

          <div className="flex-1 flex">
            {/* Main Content */}
            <main className="flex-1 p-6">
              {activeView === "quran" ? (
                <QuranGrid
                  chapters={chapters}
                  onToggleLike={handleToggleLike}
                />
              ) : (
                <FavoritesView
                  chapters={chapters}
                  onToggleLike={handleToggleLike}
                />
              )}
            </main>

            {/* Right User Dashboard */}
            <aside className="w-80 p-6 border-l border-border">
              <UserDashboard />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
