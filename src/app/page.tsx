import Image from 'next/image';
import Loading from '../../components/loading';
import FeatureSelector from '../../components/FeatureSelector';
import { Suspense } from 'react';

interface Feature {
  title: string;
  points: string[];
}

interface Features {
  cognitive?: Feature;
  ai_problem_solving?: Feature;
  dynamic_paths?: Feature;
  ai_mentor?: Feature;
}

async function getFeatures(): Promise<Features> {
  const res = await fetch('http://localhost:3000/api/cognify/key-features', {
    cache: 'no-store',
  });

  if (!res.body) {
    throw new Error('No response body');
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let features: Features = {};

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value);
    const parsedChunk = JSON.parse(chunk);
    features = { ...features, ...parsedChunk };
  }

  return features;
}

export default async function CognifyPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Content />
    </Suspense>
  );
}

async function Content() {
  const features = await getFeatures();

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white max-h-screen">
      <h1 className="text-3xl font-medium mb-10 text-center text-gray-700 w-[25%] leading-10">
        CognifyNow doesn&apos;t just teach, it thinks with you
      </h1>

      <div className="relative w-[1000px] h-[600px]">
        <Image src="/assets/brain.svg" alt="Brain" width={500} height={500} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <FeatureSelector features={features} />
      </div>
    </div>
  );
}
