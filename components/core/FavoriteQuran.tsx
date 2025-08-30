"use client";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Chapter {
  id: number;
  number: number;
  arabic: string;
  english: string;
  liked: boolean;
}

interface FavoritesViewProps {
  chapters: Chapter[];
  onToggleLike: (id: number) => void;
}

export function FavoritesView({ chapters, onToggleLike }: FavoritesViewProps) {
  const favoriteChapters = chapters.filter((chapter) => chapter.liked);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Favorites</h2>
        </div>
        <span className="text-sm text-muted-foreground">
          {favoriteChapters.length} chapter
          {favoriteChapters.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Favorites Grid */}
      {favoriteChapters.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {favoriteChapters.map((chapter) => (
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
                  <Heart className="w-4 h-4 fill-primary text-primary" />
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
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Heart className="w-12 h-12 text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            No favorites yet
          </h3>
          <p className="text-muted-foreground max-w-sm">
            Start adding chapters to your favorites by clicking the heart icon
            on any chapter.
          </p>
        </div>
      )}
    </div>
  );
}
