import Image from 'next/image';
import FeatureIcon from '../../../components/FeatureIcon';

async function getFeatures() {
  const res = await fetch('http://localhost:3000/api/cognify/key-features', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.features;
}

export default async function CognifyPage() {
  const features = await getFeatures();

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white h-screen">
      <h2 className="text-3xl font-medium mb-10 text-center text-gray-700 w-[25%] leading-10">
        CognifyNow doesn’t just teach, it thinks with you
      </h2>

      <div className="relative w-[800px] h-[600px]">
        <Image src="/assets/brain.svg" alt="Brain" width={400} height={400} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

        <FeatureIcon
          iconSrc="/assets/cognitive.svg"
          feature={features.cognitive}
          className="absolute top-0 left-10"
        />
        <FeatureIcon
          iconSrc="/assets/problem-solving.svg"
          feature={features.ai_problem_solving}
          className="absolute bottom-0 left-10"
        />
        <FeatureIcon
          iconSrc="/assets/dynamic-paths.svg"
          feature={features.dynamic_paths}
          className="absolute top-0 right-10"
        />
        <FeatureIcon
          iconSrc="/assets/ai-mentor.svg"
          feature={features.ai_mentor}
          className="absolute bottom-0 right-10"
        />
      </div>
    </div>
  );
}
