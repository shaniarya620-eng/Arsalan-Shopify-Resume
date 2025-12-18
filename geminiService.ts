
import { GoogleGenAI } from "@google/genai";

export const optimizeSummary = async (baseSummary: string, targetRole: string) => {
  // Always use process.env.API_KEY directly as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `As an executive resume writer, optimize the following professional summary for a ${targetRole} role. Keep it concise, high-impact, and growth-focused. Summary: "${baseSummary}"`,
      config: {
        temperature: 0.7,
        // Removed maxOutputTokens as it's better avoided unless setting a thinkingBudget.
      }
    });
    // Use .text property directly.
    return response.text?.trim() || baseSummary;
  } catch (error) {
    console.error("AI Summary generation failed", error);
    return baseSummary;
  }
};