import { Check, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Team } from "@/constants/teams";

interface TeamSelectorProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedTeam: Team | null;
  setSelectedTeam: (team: Team | null) => void;
  teamsByLeague: Record<string, Team[]>;
  filteredTeams: Team[];
  teamSearchQuery: string;
  setTeamSearchQuery: (query: string) => void;
}

export default function TeamSelector({
  isOpen,
  setIsOpen,
  selectedTeam,
  setSelectedTeam,
  teamsByLeague,
  filteredTeams,
  teamSearchQuery,
  setTeamSearchQuery,
}: TeamSelectorProps) {
  const handleSelectTeam = (team: Team) => {
    setSelectedTeam(team);
    setIsOpen(false);
    setTeamSearchQuery("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl h-[80vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <DialogTitle>Select Team Logo</DialogTitle>
          <div className="relative mt-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search teams..."
              value={teamSearchQuery}
              onChange={(e) => setTeamSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base rounded-xl bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </DialogHeader>
        <ScrollArea className="flex-1 px-6">
          <div className="py-4 space-y-6">
            {Object.entries(teamsByLeague).map(([league, teams]) => (
              <div key={league}>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                  {league}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {teams.map((team) => (
                    <button
                      key={team.id}
                      onClick={() => handleSelectTeam(team)}
                      className={cn(
                        "flex flex-col items-center p-3 rounded-xl border transition-all",
                        selectedTeam?.id === team.id
                          ? "border-foreground bg-foreground/5"
                          : "border-border bg-card hover:bg-accent"
                      )}
                    >
                      <div className="flex items-center justify-center w-12 h-12 mb-2">
                        <Image
                          src={team.logo}
                          alt={team.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-center line-clamp-2">
                        {team.name}
                      </span>
                      {selectedTeam?.id === team.id && (
                        <Check className="size-4 text-foreground mt-1" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {filteredTeams.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No teams found for &quot;{teamSearchQuery}&quot;
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
