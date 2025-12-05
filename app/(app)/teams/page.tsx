"use client";

import { useState, useMemo } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { allTeams } from "@/constants/teams";
import Image from "next/image";
import Link from "next/link";

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeams = useMemo(() => {
    if (!searchQuery.trim()) {
      return allTeams;
    }

    const query = searchQuery.toLowerCase();
    return allTeams.filter(
      (team) =>
        team.name.toLowerCase().includes(query) ||
        team.league.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/dashboard">
            <button className="p-2 rounded-full hover:bg-accent transition-colors">
              <ArrowLeft className="size-5" />
            </button>
          </Link>
          <h1 className="text-xl font-bold">All Teams</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search teams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-base rounded-2xl bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        {/* Teams Grid */}
        {filteredTeams.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No teams found for &quot;{searchQuery}&quot;
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredTeams.map((team) => (
              <Link
                key={team.id}
                // Updated to point to the create page with the team ID in the query string
                href={`/create?team=${team.id}`}
                className="flex flex-col items-center p-4 rounded-2xl border border-border bg-card hover:bg-accent transition-colors group"
              >
                <div className="flex items-center justify-center w-20 h-20 mb-3">
                  <Image
                    src={team.logo}
                    alt={team.name}
                    width={80}
                    height={80}
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <span className="text-sm font-semibold text-center line-clamp-2">
                  {team.name}
                </span>
                <span className="text-xs text-muted-foreground text-center mt-1">
                  {team.league}
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* Results count */}
        <div className="text-center text-sm text-muted-foreground pb-6">
          {filteredTeams.length} {filteredTeams.length === 1 ? "team" : "teams"}{" "}
          found
        </div>
      </main>
    </div>
  );
}
