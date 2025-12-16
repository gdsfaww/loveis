import { GoogleGenAI } from "@google/genai";

// Note: In a real production app, you'd fetch this from a secure backend or require user input.
// For this specific personal use-case, we assume the API key is available via environment.
const apiKey = process.env.API_KEY || ''; 

export const getQuestHint = async (questTitle: string, questDescription: string): Promise<string> => {
  if (!apiKey) {
    return "Мое сердце подсказывает, что нужно спросить меня лично... ❤️";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      You are a deeply romantic, poetic, and mysterious Game Master for a love quest I made for my wife.
      She is stuck on a quest titled "${questTitle}".
      Description: "${questDescription}".
      
      Give a helpful but slightly cryptic hint. 
      Tone: Gentle, loving, like a romantic poet or a mysterious admirer. Use emojis (✨, 🌹, 💖).
      Keep it short (max 2 sentences). Do not give the exact code.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Любовь терпелива... посмотри внимательнее ✨";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Звезды сейчас скрыты облаками. Спроси меня лично ❤️";
  }
};