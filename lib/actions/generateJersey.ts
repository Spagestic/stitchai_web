"use server";

import { jerseyStyles } from "@/constants/jersey";

export async function generateJerseyImage(
  selectedStyle: string,
  selectedTeam: { id: string; name: string } | null,
  selectedPalette: { id: string; name: string; colors?: string[] } | null,
  playerNumber: string,
  playerName: string,
  description: string
): Promise<string | null> {
  try {
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
      return data.imageUrl;
    } else {
      throw new Error("No image URL in response");
    }
  } catch (error) {
    console.error("Generation error:", error);
    throw error;
  }
}
