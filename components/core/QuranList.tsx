"use client";

import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Chapter {
  id: number;
  number: number;
  arabic: string;
  english: string;
  liked: boolean;
}

interface QuranGridProps {
  chapters: Chapter[];
  onToggleLike: (id: number) => void;
}

export function QuranGrid({ chapters, onToggleLike }: QuranGridProps) {
  const [sortBy, setSortBy] = useState("serial");

  return (
    <div className="space-y-6">
      {/* Sort Controls */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>Sort by:</span>
        <div className="flex gap-4">
          <button
            className={`flex items-center gap-1 ${
              sortBy === "serial" ? "text-foreground" : ""
            }`}
            onClick={() => setSortBy("serial")}
          >
            Serial ↑
          </button>
          <button
            className={`flex items-center gap-1 ${
              sortBy === "alphabet" ? "text-foreground" : ""
            }`}
            onClick={() => setSortBy("alphabet")}
          >
            Alphabet ↓
          </button>
          <button
            className={`flex items-center gap-1 ${
              sortBy === "ayah" ? "text-foreground" : ""
            }`}
            onClick={() => setSortBy("ayah")}
          >
            Total Ayah ↓
          </button>
          <button
            className={`flex items-center gap-1 ${
              sortBy === "parah" ? "text-foreground" : ""
            }`}
            onClick={() => setSortBy("parah")}
          >
            Parah ↓
          </button>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-4 gap-4">
        {chapters.map((chapter) => (
          <Card
            key={chapter.id}
            className="p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium text-sm">
                {chapter.number}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleLike(chapter.id);
                }}
              >
                <Heart
                  className={`w-4 h-4 ${
                    chapter.liked
                      ? "fill-primary text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                />
              </Button>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-foreground">
                {chapter.arabic}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {chapter.english}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
