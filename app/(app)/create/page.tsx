"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { colorPalettes, jerseyStyles, ColorPalette } from "@/constants/jersey";
import { allTeams, Team } from "@/constants/teams";
import StyleSelector from "@/components/create/StyleSelector";
import TeamSelector from "@/components/create/TeamSelector";
import PaletteSelector from "@/components/create/PaletteSelector";
import CustomColorPicker from "@/components/create/CustomColorPicker";
import PersonalizeSection from "@/components/create/PersonalizeSection";
import DescriptionSection from "@/components/create/DescriptionSection";
import JerseyPreview from "@/components/create/JerseyPreview";
import CreateHeader from "@/components/create/CreateHeader";
import GenerateFooter from "@/components/create/GenerateFooter";

// Dummy list of jersey images (should match files in public/jerseys/)
const jerseyImageList = [
  "Classic_red_and_whit.png",
  "hunyuan.png",
  "Modern_blue_gradient.png",
  "Retro_90s_style_jers.png",
  "velocity.png",
  "black_jersey.png",
  "base.png",
];

function getRandomJerseyImage() {
  const index = Math.floor(Math.random() * jerseyImageList.length);
  return `/jerseys/${jerseyImageList[index]}`;
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
  const [generatedImage, setGeneratedImage] = useState<string | null>(null); // New

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
    try {
      setIsGenerating(true);
      setGeneratedImage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Build the prompt from form data
      const styleLabel = jerseyStyles.find((s) => s.id === selectedStyle)?.name;
      const teamInfo = selectedTeam
        ? `with ${selectedTeam.name} logo`
        : "without a team logo";
      const colorsInfo =
        selectedPalette?.colors?.join(", ") ||
        selectedPalette?.name ||
        "vibrant colors";
      const numberInfo = playerNumber ? ` with number ${playerNumber}` : "";
      const nameInfo = playerName ? ` and name "${playerName}"` : "";

      const prompt = `Create a professional ${styleLabel} style sports jersey design ${teamInfo}. 
        Color scheme: ${colorsInfo}.
        Jersey should feature: ${selectedPalette?.name || "custom colors"}.
        ${numberInfo}${nameInfo}
        Description/Theme: ${description || "Modern sports jersey"}
        
        The jersey should be front-facing, professional, clean design, suitable for sports teams.
        Generate as a high-quality image with realistic fabric texture.`;

      const response = await fetch("/api/genai/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate jersey");
      }

      const data = await response.json();
      if (data.imageUrl) {
        setGeneratedImage(data.imageUrl);
      } else {
        throw new Error("No image URL in response");
      }
    } catch (error) {
      console.error("Generation error:", error);
      // Display a random jersey image on error
      const randomImage = getRandomJerseyImage();
      setGeneratedImage(randomImage);
    } finally {
      setIsGenerating(false);
    }
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
    <div className="min-h-screen bg-background flex flex-col">
      <CreateHeader onRandomize={handleRandomize} />
      <JerseyPreview
        isGenerating={isGenerating}
        generatedImage={generatedImage}
      />
      <main className="container mx-auto px-4 py-6 space-y-8 flex-1">
        <StyleSelector
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          styleIcons={styleIcons}
        />
        {/* Team Logo Selection Button */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            {/* Team logo icon and label */}
            <span className="size-5 text-muted-foreground">🏆</span>
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
                    setSelectedTeam(null);
                  }}
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                >
                  <span className="size-4 text-muted-foreground">✕</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-muted/50">
                  <span className="size-8 text-muted-foreground">🏆</span>
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
        <PaletteSelector
          selectedPalette={selectedPalette}
          setSelectedPalette={setSelectedPalette}
          customColors={customColors}
          setSelectedCustom={() =>
            setSelectedPalette({
              id: "custom",
              name: "Custom",
              colors: customColors,
              isCustom: true,
            })
          }
        />
        {selectedPalette?.isCustom && (
          <CustomColorPicker
            customColors={customColors}
            handleCustomColorChange={handleCustomColorChange}
          />
        )}
        <PersonalizeSection
          playerName={playerName}
          setPlayerName={setPlayerName}
          playerNumber={playerNumber}
          setPlayerNumber={setPlayerNumber}
        />
        <DescriptionSection
          description={description}
          setDescription={setDescription}
        />
      </main>
      <GenerateFooter onGenerate={handleGenerate} isGenerating={isGenerating} />
      <TeamSelector
        isOpen={isTeamDialogOpen}
        setIsOpen={setIsTeamDialogOpen}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
        teamsByLeague={teamsByLeague}
        filteredTeams={filteredTeams}
        teamSearchQuery={teamSearchQuery}
        setTeamSearchQuery={setTeamSearchQuery}
      />
    </div>
  );
}
