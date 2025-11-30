"use client";

import Image from "next/image";
import { Team } from "@/constants/teams";

type TeamCardProps = {
  team: Team;
  onPress?: (teamId: string) => void;
};

// Convert @/assets/logos/... path to /logos/... for web
const getLogoPath = (logo: string): string => {
  if (logo.startsWith("@/assets/logos/")) {
    return logo.replace("@/assets/logos/", "/logos/");
  }
  if (logo.startsWith("/")) {
    return logo;
  }
  return `/logos/${logo}`;
};

export const TeamCard = ({ team, onPress }: TeamCardProps) => {
  const logoSrc = getLogoPath(team.logo);

  return (
    <button
      className="flex flex-col items-center gap-2 min-w-[100px] group"
      onClick={() => onPress?.(team.id)}
    >
      <div className="flex items-center justify-center w-24 h-24 rounded-2xl border border-border bg-card hover:bg-accent transition-colors p-3">
        <Image
          src={logoSrc}
          alt={team.name}
          width={64}
          height={64}
          className="object-contain transition-transform group-hover:scale-110"
        />
      </div>
      <span className="text-xs text-muted-foreground font-medium truncate max-w-[100px]">
        {team.league.split(" - ")[1] || team.league}
      </span>
    </button>
  );
};
