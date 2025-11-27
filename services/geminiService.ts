import { GoogleGenAI } from "@google/genai";
import type { ChatMessage } from "../types";

// Note: In a production app, never expose API keys on the client side like this unless restricted by HTTP referer.
// This is for demonstration purposes. In Vite, use import.meta.env.VITE_API_KEY.
const apiKey = import.meta.env.VITE_API_KEY;

let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (
  history: ChatMessage[], 
  newMessage: string
): Promise<string> => {
  if (!aiClient) {
    // Fallback if no API key is present
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "ACCESS DENIED. API_KEY_MISSING. Please configure the environment to enable neural link.";
  }

  try {
    // Using gemini-2.5-flash for speed in a chat interface
    const model = 'gemini-2.5-flash';
    
    const chat = aiClient.chats.create({
      model: model,
      config: {
        systemInstruction: "You are 'CYBER_ASSIST', a helpful, witty, and slightly sarcastic AI assistant living in a cyberpunk software engineer's portfolio. Your tone is futuristic, technical, and concise. Use computer terminology (e.g., 'Processing...', 'Affirmative', 'Error'). You are knowledgeable about React, TypeScript, and modern web tech. Keep answers short and punchy.",
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "NO DATA RECEIVED.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "SYSTEM MALFUNCTION. CONNECTION RESET.";
  }
};
