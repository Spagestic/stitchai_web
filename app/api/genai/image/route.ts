import { client } from "@/lib/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        responseModalities: ["IMAGE"],
      },
    });

    // Extract image data from response
    const candidates = response.candidates;
    if (!candidates || !candidates[0]) {
      throw new Error("No candidates in response");
    }

    const imagePart = candidates[0]?.content?.parts?.[0]?.inlineData;

    if (!imagePart?.data) {
      throw new Error("No image data received from model");
    }

    const base64Image = imagePart.data;
    const mimeType = imagePart.mimeType || "image/png";

    // Return as a data URL for direct display
    const dataUrl = `data:${mimeType};base64,${base64Image}`;

    return NextResponse.json({
      imageUrl: dataUrl,
      mimeType,
    });
  } catch (error) {
    console.error("Image Generation Error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: "Image generation failed",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
