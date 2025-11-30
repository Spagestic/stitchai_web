"use client";

import { useState, useMemo } from "react";
import {
  ArrowLeft,
  RefreshCw,
  Shield,
  Palette,
  Type,
  Sparkles,
  Plus,
  Search,
  Shirt,
  Zap,
  Clock,
  X,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { colorPalettes, jerseyStyles, ColorPalette } from "@/constants/jersey";
import { allTeams, Team } from "@/constants/teams";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const styleIcons = {
  classic: Shirt,
  modern: Zap,
  retro: Clock,
  minimalist: Shirt,
  bold: Sparkles,
  gradient: Palette,
};

export default function CreateJerseyPage() {
  // Form state
  const [selectedStyle, setSelectedStyle] = useState("classic");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedPalette, setSelectedPalette] = useState<ColorPalette | null>(
    colorPalettes[0]
  );
  const [customColors, setCustomColors] = useState<string[]>([
    "#FFFFFF",
    "#000000",
    "#FF0000",
  ]);
  const [playerName, setPlayerName] = useState("");
  const [playerNumber, setPlayerNumber] = useState("");
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Dialog state
  const [isTeamDialogOpen, setIsTeamDialogOpen] = useState(false);
  const [teamSearchQuery, setTeamSearchQuery] = useState("");

  // Filter teams based on search
  const filteredTeams = useMemo(() => {
    if (!teamSearchQuery.trim()) {
      return allTeams;
    }
    const query = teamSearchQuery.toLowerCase();
    return allTeams.filter(
      (team) =>
        team.name.toLowerCase().includes(query) ||
        team.league.toLowerCase().includes(query)
    );
  }, [teamSearchQuery]);

  // Get unique leagues for grouping
  const teamsByLeague = useMemo(() => {
    const grouped: Record<string, Team[]> = {};
    filteredTeams.forEach((team) => {
      if (!grouped[team.league]) {
        grouped[team.league] = [];
      }
      grouped[team.league].push(team);
    });
    return grouped;
  }, [filteredTeams]);

  const handleSelectTeam = (team: Team) => {
    setSelectedTeam(team);
    setIsTeamDialogOpen(false);
    setTeamSearchQuery("");
  };

  const handleClearTeam = () => {
    setSelectedTeam(null);
  };

  const handleRandomize = () => {
    // Randomize style
    const randomStyleIndex = Math.floor(Math.random() * jerseyStyles.length);
    setSelectedStyle(jerseyStyles[randomStyleIndex].id);

    // Randomize palette
    const randomPaletteIndex = Math.floor(Math.random() * colorPalettes.length);
    setSelectedPalette(colorPalettes[randomPaletteIndex]);

    // Optionally randomize a team
    const randomTeamIndex = Math.floor(Math.random() * allTeams.length);
    setSelectedTeam(allTeams[randomTeamIndex]);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // TODO: Implement actual generation logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsGenerating(false);
  };

  const handleCustomColorChange = (index: number, color: string) => {
    const newColors = [...customColors];
    newColors[index] = color;
    setCustomColors(newColors);
    setSelectedPalette({
      id: "custom",
      name: "Custom",
      colors: newColors,
      isCustom: true,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <button className="p-2 rounded-full hover:bg-accent transition-colors">
              <ArrowLeft className="size-5" />
            </button>
          </Link>
          <h1 className="text-xl font-bold">Create Jersey</h1>
          <button
            onClick={handleRandomize}
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            <RefreshCw className="size-5" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-32 space-y-8">
        {/* Style Selection */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Shirt className="size-5 text-muted-foreground" />
            <h2 className="font-semibold">Style</h2>
          </div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-3 pb-2">
              {jerseyStyles.map((style) => {
                const Icon =
                  styleIcons[style.id as keyof typeof styleIcons] || Shirt;
                return (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-3 rounded-xl border transition-all min-w-fit",
                      selectedStyle === style.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-card hover:bg-accent"
                    )}
                  >
                    <Icon className="size-4" />
                    <span className="font-medium">{style.name}</span>
                  </button>
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Team Logo Selection */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="size-5 text-muted-foreground" />
            <h2 className="font-semibold">Team Logo</h2>
            <span className="text-sm text-muted-foreground">(optional)</span>
          </div>
          <button
            onClick={() => setIsTeamDialogOpen(true)}
            className="w-full p-4 rounded-2xl border-2 border-dashed border-border hover:border-muted-foreground transition-colors bg-card"
          >
            {selectedTeam ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-muted/50 p-2">
                  <Image
                    src={selectedTeam.logo}
                    alt={selectedTeam.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold">{selectedTeam.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedTeam.league}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClearTeam();
                  }}
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                >
                  <X className="size-4 text-muted-foreground" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-muted/50">
                  <Shield className="size-8 text-muted-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Select a team logo</p>
                  <p className="text-sm text-muted-foreground">
                    Browse {allTeams.length} teams from{" "}
                    {Object.keys(teamsByLeague).length} leagues
                  </p>
                </div>
              </div>
            )}
          </button>
        </section>

        {/* Color Palette Selection */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Palette className="size-5 text-muted-foreground" />
            <h2 className="font-semibold">Color Palette</h2>
            <span className="text-sm text-muted-foreground">
              ({colorPalettes.length} available)
            </span>
          </div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-3 pb-2">
              {/* Custom Color Option */}
              <button
                onClick={() =>
                  setSelectedPalette({
                    id: "custom",
                    name: "Custom",
                    colors: customColors,
                    isCustom: true,
                  })
                }
                className={cn(
                  "flex flex-col items-center gap-2 min-w-[100px] p-3 rounded-xl border transition-all",
                  selectedPalette?.id === "custom"
                    ? "border-foreground bg-foreground/5"
                    : "border-border bg-card hover:bg-accent"
                )}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50">
                  <Plus className="size-5 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium">Custom</span>
              </button>

              {/* Preset Palettes */}
              {colorPalettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => setSelectedPalette(palette)}
                  className={cn(
                    "flex flex-col items-center gap-2 min-w-[100px] p-3 rounded-xl border transition-all",
                    selectedPalette?.id === palette.id
                      ? "border-foreground bg-foreground/5"
                      : "border-border bg-card hover:bg-accent"
                  )}
                >
                  <div className="flex -space-x-1">
                    {palette.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-background"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{palette.name}</span>
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {/* Custom Color Pickers */}
          {selectedPalette?.isCustom && (
            <div className="mt-4 p-4 rounded-xl bg-muted/30 border border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Customize your colors
              </p>
              <div className="flex gap-4">
                {customColors.map((color, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <label
                      className="w-12 h-12 rounded-full border-2 border-border cursor-pointer overflow-hidden"
                      style={{ backgroundColor: color }}
                    >
                      <input
                        type="color"
                        value={color}
                        onChange={(e) =>
                          handleCustomColorChange(index, e.target.value)
                        }
                        className="opacity-0 w-full h-full cursor-pointer"
                      />
                    </label>
                    <span className="text-xs text-muted-foreground">
                      Color {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Personalize Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Type className="size-5 text-muted-foreground" />
            <h2 className="font-semibold">Personalize</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="playerName" className="text-muted-foreground">
                Player Name
              </Label>
              <Input
                id="playerName"
                placeholder="RONALDO"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value.toUpperCase())}
                className="h-14 text-base rounded-xl bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-ring uppercase"
                maxLength={20}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="playerNumber" className="text-muted-foreground">
                Number
              </Label>
              <Input
                id="playerNumber"
                placeholder="7"
                value={playerNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 2);
                  setPlayerNumber(value);
                }}
                className="h-14 text-base rounded-xl bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-ring"
                maxLength={2}
              />
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="size-5 text-muted-foreground" />
            <h2 className="font-semibold">Describe Your Jersey</h2>
          </div>
          <Textarea
            placeholder="Add any specific details you'd like for your jersey design... (e.g., 'geometric patterns', 'vintage 90s style', 'gradient effect')"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[100px] text-base rounded-xl bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-ring resize-none"
          />
        </section>
      </main>

      {/* Generate Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-linear-to-t from-background via-background to-transparent">
        <div className="container mx-auto">
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full h-14 rounded-xl text-base font-semibold gap-2"
            size="lg"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="size-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="size-5" />
                Generate Jersey
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Team Selection Dialog */}
      <Dialog open={isTeamDialogOpen} onOpenChange={setIsTeamDialogOpen}>
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
    </div>
  );
}
