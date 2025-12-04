import { GoogleGenAI } from "@google/genai";

export const client = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});
