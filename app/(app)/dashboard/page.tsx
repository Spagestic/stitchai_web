import { Menu, Bookmark, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JerseyCard } from "@/components/JerseyCard";
import { TeamCard } from "@/components/TeamCard";
import { popularTeams } from "@/constants/teams";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

// Community creations with web-compatible paths
const communityCreations = [
  {
    id: 1,
    source: "/jerseys/black_jersey.png",
    name: "Midnight Edition",
    creator: "Alex",
    tags: ["Modern", "Bold"],
  },
  {
    id: 10,
    source: "/jerseys/noel_diwali.png",
    name: "Festive Flair",
    creator: "Noel",
    tags: ["Festive", "Elegant"],
  },
  {
    id: 2,
    source: "/jerseys/Classic_red_and_whit.png",
    name: "Classic Red",
    creator: "Maria",
    tags: ["Classic"],
  },
  {
    id: 6,
    source: "/jerseys/helloween_2.png",
    name: "Halloween Special",
    creator: "Liam",
    tags: ["Festive", "Bold"],
  },
  {
    id: 3,
    source: "/jerseys/Modern_blue_gradient.png",
    name: "Ocean Wave",
    creator: "João",
    tags: ["Modern"],
  },
  {
    id: 4,
    source: "/jerseys/Retro_90s_style_jers.png",
    name: "Retro Vibes",
    creator: "Carlos",
    tags: ["Retro", "Bold"],
  },
  {
    id: 11,
    source: "/jerseys/noel_helloween_2.png",
    name: "Ghostly Glow",
    creator: "Noel",
    tags: ["Festive", "Classic"],
  },
  {
    id: 5,
    source: "/jerseys/hunyuan.png",
    name: "Nature's Touch",
    creator: "Sofia",
    tags: ["Modern", "Futuristic"],
  },
  {
    id: 7,
    source: "/jerseys/velocity.png",
    name: "Velocity",
    creator: "Emma",
    tags: ["Modern", "Futuristic"],
  },
  {
    id: 8,
    source: "/jerseys/noel_helloween.png",
    name: "Spooky Night",
    creator: "Noel",
    tags: ["Festive", "Modern"],
  },
  {
    id: 9,
    source: "/jerseys/diwali.png",
    name: "Diwali Delight",
    creator: "Olivia",
    tags: ["Festive", "Elegant"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="icon">
            <Menu className="size-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bookmark className="size-5" />
          </Button>
        </div>
      </header>

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
  );
}
