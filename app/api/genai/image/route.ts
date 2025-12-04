import { client } from "@/lib/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await client.models.generateContent({
      model: "gemini-2.0-flash-exp", // Ensure you use a model that supports image output
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        responseModalities: ["IMAGE"], // Explicitly request image output
      },
    });

    // The response usually contains inline binary data (base64)
    const candidates = response.candidates;
    if (!candidates || !candidates[0]?.content?.parts?.[0]?.inlineData) {
      throw new Error("No image data received");
    }

    const imagePart = candidates[0].content.parts[0].inlineData;
    const base64Image = imagePart.data;
    const mimeType = imagePart.mimeType || "image/png";

    // Return as a data URL so the frontend can display it directly: <img src={url} />
    const dataUrl = `data:${mimeType};base64,${base64Image}`;

    return NextResponse.json({ imageUrl: dataUrl });
  } catch (error) {
    console.error("Image Gen Error:", error);
    return NextResponse.json(
      { error: "Image generation failed" },
      { status: 500 }
    );
  }
}
