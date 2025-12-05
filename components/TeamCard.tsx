import Image from "next/image";
import Link from "next/link";
import { Team } from "@/constants/teams";

type TeamCardProps = {
  team: Team;
};

export const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Link
      href={`/create?team=${team.id}`}
      className="flex flex-col items-center gap-2 min-w-[100px] group"
    >
      <div className="flex items-center justify-center w-24 h-24 rounded-2xl border border-border bg-card hover:bg-accent transition-colors p-3">
        <Image
          src={team.logo}
          alt={team.name}
          width={64}
          height={64}
          className="object-contain transition-transform group-hover:scale-110"
        />
      </div>
      <span className="text-xs text-muted-foreground font-medium truncate max-w-[100px]">
        {team.league.split(" - ")[1] || team.league}
      </span>
    </Link>
  );
};
