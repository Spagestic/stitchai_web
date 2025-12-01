import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JerseyCard } from "@/components/JerseyCard";
import { TeamCard } from "@/components/TeamCard";
import { popularTeams } from "@/constants/teams";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { SiteHeader } from "@/components/sidebar/site-header";
import { communityCreations } from "./communityCreations";

export default function Page() {
  return (
    <div>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <main className="container mx-auto px-4 py-6 pb-24 space-y-8">
          {/* Popular Teams Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                Popular Teams
              </h2>
              <Link
                href="/teams"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                View All
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-3 pb-4">
                {popularTeams.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>

          {/* Get Inspired Section */}
          <section>
            <h2 className="text-sm font-semibold text-muted-foreground tracking-wide uppercase mb-4">
              Get Inspired
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {communityCreations.map((jersey) => (
                <JerseyCard key={jersey.id} jersey={jersey} />
              ))}
            </div>
          </section>
        </main>

        {/* Floating Create Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link href="/create">
            <Button
              size="lg"
              className="rounded-full shadow-lg px-6 gap-2 bg-foreground text-background hover:bg-foreground/90"
            >
              <Plus className="size-5" />
              Create
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
