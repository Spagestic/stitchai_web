"use client";

import { ChevronDownIcon, Check } from "lucide-react";
import { useId } from "react";
import Image from "next/image";
import { Team } from "@/constants/teams";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  teamSearchQuery,
  setTeamSearchQuery,
}: TeamSelectorProps) {
  const id = useId();

  const handleSelectTeam = (team: Team) => {
    setSelectedTeam(team);
    setIsOpen(false);
    setTeamSearchQuery("");
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={isOpen}
          className="w-full justify-between border-input bg-background px-3 font-normal outline-none outline-offset-0 hover:bg-background focus-visible:outline-[3px]"
          id={id}
          role="combobox"
          variant="outline"
        >
          {selectedTeam ? (
            <span className="flex min-w-0 items-center gap-2">
              <Image
                src={selectedTeam.logo}
                alt={selectedTeam.name}
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="truncate text-sm font-medium">
                {selectedTeam.name}
              </span>
            </span>
          ) : (
            <span className="text-muted-foreground">Select team</span>
          )}
          <ChevronDownIcon
            aria-hidden="true"
            className="shrink-0 text-muted-foreground/80"
            size={16}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-full min-w-(--radix-popper-anchor-width) border-input p-0"
      >
        <Command>
          <CommandInput
            placeholder="Search teams..."
            value={teamSearchQuery}
            onValueChange={setTeamSearchQuery}
          />
          <CommandList>
            <CommandEmpty>No teams found.</CommandEmpty>
            <ScrollArea className="h-[300px]">
              {Object.entries(teamsByLeague).map(([league, teams]) => {
                const leagueTeams = teams.filter((team) =>
                  team.name
                    .toLowerCase()
                    .includes(teamSearchQuery.toLowerCase())
                );

                if (leagueTeams.length === 0) return null;

                return (
                  <CommandGroup key={league} heading={league}>
                    {leagueTeams.map((team) => (
                      <CommandItem
                        key={team.id}
                        value={team.id}
                        onSelect={() => handleSelectTeam(team)}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src={team.logo}
                            alt={team.name}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                          <span className="text-sm font-medium">
                            {team.name}
                          </span>
                        </div>
                        {selectedTeam?.id === team.id && (
                          <Check className="size-4 text-foreground" />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                );
              })}
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
