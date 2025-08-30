import { Book, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserDashboard() {
  return (
    <div className="space-y-6">
      {/* User Greeting */}
      <div className="flex items-center gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Salam,</p>
          <h2 className="text-lg font-semibold text-foreground">Tanvir</h2>
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src="/muslim-man-avatar.png" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            T
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Last Read Section */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Book className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            Last Read
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Al-Fatiah</h3>
          <p className="text-sm text-muted-foreground">Ayah no. 1</p>
        </div>
      </Card>

      {/* Last Listened Section */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Headphones className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            Last Listened
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Al-Ma'idah</h3>
          <p className="text-sm text-muted-foreground">Ayah no. 3</p>
        </div>
      </Card>

      {/* Ayah of the Day */}
      <Card className="p-4 bg-primary text-primary-foreground">
        <div className="mb-3">
          <span className="text-xs font-medium uppercase tracking-wide opacity-90">
            Ayah of the Day
          </span>
        </div>
        <div className="space-y-3">
          <p className="text-sm leading-relaxed">
            It is Allah who erected the heavens without pillars that you [can]
            see; then He established Himself above the Throne...
          </p>
          <Button
            variant="secondary"
            size="sm"
            className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
          >
            Read now
          </Button>
        </div>
      </Card>
    </div>
  );
}
