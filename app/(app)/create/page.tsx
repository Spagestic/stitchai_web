"use client";

import { useMemo, useTransition } from "react";
import { useQueryState, useQueryStates, parseAsString } from "nuqs";
import { colorPalettes, jerseyStyles, ColorPalette } from "@/constants/jersey";
import { allTeams, Team } from "@/constants/teams";
import { generateJerseyImage } from "@/lib/actions/generateJersey";
import StyleSelector from "@/components/create/StyleSelector";
import TeamSelector from "@/components/create/TeamSelector";
import PaletteSelector from "@/components/create/PaletteSelector";

import PersonalizeSection from "@/components/create/PersonalizeSection";
import DescriptionSection from "@/components/create/DescriptionSection";
import JerseyPreview from "@/components/create/JerseyPreview";
import CreateHeader from "@/components/create/CreateHeader";
import GenerateFooter from "@/components/create/GenerateFooter";

import { communityCreations } from "../dashboard/communityCreations";

function getRandomJerseyImage() {
  const index = Math.floor(Math.random() * communityCreations.length);
  return communityCreations[index].source;
}

import { Shirt, Zap, Clock, Sparkles, Palette } from "lucide-react";
const styleIcons = {
  classic: Shirt,
  modern: Zap,
  retro: Clock,
  minimalist: Shirt,
  bold: Sparkles,
  gradient: Palette,
};

export default function CreateJerseyPage() {
  const [isPending, startTransition] = useTransition();

  // Form state synced with URL using nuqs
  const [selectedStyle, setSelectedStyle] = useQueryState(
    "style",
    parseAsString.withDefault("classic").withOptions({ startTransition })
  );

  const [teamId, setTeamId] = useQueryState(
    "team",
    parseAsString.withOptions({ startTransition })
  );

  const [paletteId, setPaletteId] = useQueryState(
    "palette",
    parseAsString.withDefault(colorPalettes[0].id).withOptions({
      startTransition,
    })
  );

  const [{ playerName, playerNumber, description }, setPersonalization] =
    useQueryStates(
      {
        playerName: parseAsString.withDefault(""),
        playerNumber: parseAsString.withDefault(""),
        description: parseAsString.withDefault(""),
      },
      { startTransition }
    );

  const [generatedImage, setGeneratedImage] = useQueryState(
    "generated",
    parseAsString.withOptions({ history: "replace" })
  );

  const [isGenerating, setIsGenerating] = useQueryState(
    "generating",
    parseAsString.withOptions({ history: "replace" })
  );

  // Dialog state (local only, not in URL)
  const [isTeamDialogOpen, setIsTeamDialogOpen] = useQueryState(
    "teamDialog",
    parseAsString.withOptions({ history: "replace" })
  );
  const [teamSearchQuery, setTeamSearchQuery] = useQueryState(
    "teamSearch",
    parseAsString.withDefault("").withOptions({ history: "replace" })
  );

  // Derive selected team from teamId
  const selectedTeam = useMemo(() => {
    return teamId ? allTeams.find((t) => t.id === teamId) || null : null;
  }, [teamId]);

  // Derive selected palette from paletteId
  const selectedPalette = useMemo((): ColorPalette | null => {
    return colorPalettes.find((p) => p.id === paletteId) || null;
  }, [paletteId]);

  // Filter teams based on search
  const filteredTeams = useMemo(() => {
    if (!teamSearchQuery?.trim()) {
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

  const handleRandomize = () => {
    // Randomize style
    const randomStyleIndex = Math.floor(Math.random() * jerseyStyles.length);
    setSelectedStyle(jerseyStyles[randomStyleIndex].id);

    // Randomize palette
    const randomPaletteIndex = Math.floor(Math.random() * colorPalettes.length);
    setPaletteId(colorPalettes[randomPaletteIndex].id);

    // Randomize team
    const randomTeamIndex = Math.floor(Math.random() * allTeams.length);
    setTeamId(allTeams[randomTeamIndex].id);

    // Randomize player name
    const playerNames = [
      "Jordan",
      "Smith",
      "Williams",
      "Johnson",
      "Brown",
      "Davis",
      "Miller",
      "Wilson",
      "Moore",
      "Taylor",
    ];
    const randomNameIndex = Math.floor(Math.random() * playerNames.length);

    // Randomize player number (1-99)
    const randomNumber = Math.floor(Math.random() * 99) + 1;

    // Randomize description
    const descriptions = [
      "Dynamic and energetic jersey design",
      "Classic elegance with modern flair",
      "Bold statement piece for champions",
      "Sleek and professional appearance",
      "Eye-catching vibrant design",
      "Timeless sports tradition",
      "Contemporary athletic style",
      "Striking visual impact",
    ];
    const randomDescIndex = Math.floor(Math.random() * descriptions.length);

    // Batch update personalization fields
    setPersonalization({
      playerName: playerNames[randomNameIndex],
      playerNumber: randomNumber.toString(),
      description: descriptions[randomDescIndex],
    });
  };

  const handleGenerate = async () => {
    try {
      setIsGenerating("true");
      setGeneratedImage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });

      const imageUrl = await generateJerseyImage(
        selectedStyle,
        selectedTeam,
        selectedPalette,
        playerNumber,
        playerName,
        description
      );

      if (imageUrl) {
        setGeneratedImage(imageUrl);
      }
    } catch (error) {
      console.error("Generation error:", error);
      // Display a random jersey image on error
      const randomImage = getRandomJerseyImage();
      setGeneratedImage(randomImage);
    } finally {
      setIsGenerating(null);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <CreateHeader onRandomize={handleRandomize} />
      <JerseyPreview
        isGenerating={isGenerating === "true"}
        generatedImage={generatedImage}
      />
      <main className="container mx-auto px-4 py-6 space-y-8 flex-1">
        <StyleSelector
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          styleIcons={styleIcons}
        />
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="size-5 text-muted-foreground">🏆</span>
            <h2 className="font-semibold">Team Logo</h2>
            <span className="text-sm text-muted-foreground">(optional)</span>
          </div>
          <TeamSelector
            isOpen={isTeamDialogOpen === "true"}
            setIsOpen={(open) => setIsTeamDialogOpen(open ? "true" : null)}
            selectedTeam={selectedTeam}
            setSelectedTeam={(team) => setTeamId(team?.id || null)}
            teamsByLeague={teamsByLeague}
            filteredTeams={filteredTeams}
            teamSearchQuery={teamSearchQuery || ""}
            setTeamSearchQuery={setTeamSearchQuery}
          />
        </section>
        <PaletteSelector
          selectedPalette={selectedPalette}
          setSelectedPalette={(palette) => setPaletteId(palette?.id || null)}
        />
        <PersonalizeSection
          playerName={playerName}
          setPlayerName={(name) =>
            setPersonalization({ playerName: name || "" })
          }
          playerNumber={playerNumber}
          setPlayerNumber={(num) =>
            setPersonalization({ playerNumber: num || "" })
          }
        />
        <DescriptionSection
          description={description}
          setDescription={(desc) =>
            setPersonalization({ description: desc || "" })
          }
        />
      </main>
      <GenerateFooter
        onGenerate={handleGenerate}
        isGenerating={isGenerating === "true" || isPending}
        generatedImage={generatedImage}
      />
    </div>
  );
}
