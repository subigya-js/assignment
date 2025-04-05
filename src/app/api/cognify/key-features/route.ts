import { NextResponse } from "next/server";

export async function GET() {
  // Add a 5-second delay before starting to stream
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const features = {
    cognitive: {
      title: "Cognitive & IQ assessment for growth",
      points: [
        "AI-powered diagnostics analyze IQ, memory, and attention span",
        "Builds a dynamic cognitive profile to tailor learning styles",
        "Tracks cognitive load to avoid burnout and boost retention",
      ],
    },
    ai_problem_solving: {
      title: "AI-Powered problem solving",
      points: [
        "Uses contextual reasoning for decision making",
        "Learns from past mistakes to improve outcomes",
        "Integrates with real-world data to adapt in real-time",
      ],
    },
    dynamic_paths: {
      title: "Dynamic learning paths",
      points: [
        "Adapts to user pace and preferences",
        "Recommends personalized next steps",
        "Continuously updates based on feedback and performance",
      ],
    },
    ai_mentor: {
      title: "Evolving AI mentor & insights",
      points: [
        "Tracks long-term growth and milestones",
        "Provides contextual tips and nudges",
        "Uses pattern recognition to suggest focus areas",
      ],
    },
  };

  const stream = new ReadableStream({
    async start(controller) {
      for (const [key, value] of Object.entries(features)) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay between chunks
        controller.enqueue(JSON.stringify({ [key]: value }));
      }
      controller.close();
    },
  });

  return new NextResponse(stream, {
    headers: { 'Content-Type': 'application/json' },
  });
}
