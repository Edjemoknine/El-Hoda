"use client";

import { Book, Heart, Send, DollarSign, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeView: "quran" | "favorites";
  onViewChange: (view: "quran" | "favorites") => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const navItems = [
    { icon: Book, label: "Quran", key: "quran" as const },
    { icon: Heart, label: "Favorites", key: "favorites" as const },
    { icon: Send, label: "Share", key: "share" as const },
    { icon: DollarSign, label: "Donate", key: "donate" as const },
  ];

  const bottomItems = [
    { icon: Settings, label: "Settings" },
    { icon: LogOut, label: "Logout" },
  ];

  return (
    <div className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4">
      {/* Logo */}
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-8">
        <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant={activeView === item.key ? "default" : "ghost"}
            size="icon"
            className={`w-10 h-10 ${
              activeView === item.key
                ? "bg-primary text-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
            onClick={() => {
              if (item.key === "quran" || item.key === "favorites") {
                onViewChange(item.key);
              }
            }}
          >
            <item.icon className="w-5 h-5" />
          </Button>
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="flex flex-col gap-2">
        {bottomItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-10 h-10 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <item.icon className="w-5 h-5" />
          </Button>
        ))}
      </div>
    </div>
  );
}
