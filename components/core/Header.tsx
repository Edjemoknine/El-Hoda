"use client";

import { Search, Headphones, Bell, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 border-b border-border bg-background px-6 flex items-center justify-between">
      {/* Left: Navigation Tabs */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-foreground">Quran</h1>
          <span className="text-muted-foreground">Hadith</span>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search" className="pl-10 bg-muted border-0" />
        </div>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Headphones className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </Button>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Support
        </Button>
      </div>
    </header>
  );
}
