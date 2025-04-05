'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import FeatureIcon from '../../../components/FeatureIcon';
import FeatureInfo from '../../../components/FeatureInfo';
import Loading from './loading';

interface Feature {
  title: string;
  points: string[];
}

interface Features {
  cognitive: Feature;
  ai_problem_solving: Feature;
  dynamic_paths: Feature;
  ai_mentor: Feature;
}

async function getFeatures(): Promise<Features> {
  const res = await fetch('http://localhost:3000/api/cognify/key-features', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.features;
}

export default function CognifyPage() {
  const [features, setFeatures] = useState<Features | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [featureId, setFeatureId] = useState<string>("cognitive");

  useEffect(() => {
    getFeatures().then((fetchedFeatures) => {
      setFeatures(fetchedFeatures);
      setSelectedFeature(fetchedFeatures.cognitive);
    });
  }, []);

  const handleFeatureClick = (feature: Feature, id: string) => {
    setSelectedFeature(feature);
    setFeatureId(id);
  };

  console.log(featureId)

  if (!features) return <div><Loading /></div>;

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white max-h-screen">
      <h1 className="text-3xl font-medium mb-10 text-center text-gray-700 w-[25%] leading-10">
        CognifyNow doesn&apos;t just teach, it thinks with you
      </h1>

      <div className="relative w-[1000px] h-[600px]">
        <Image src="/assets/brain.svg" alt="Brain" width={500} height={500} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

        {selectedFeature && (
          <FeatureInfo feature={selectedFeature} featureId={featureId} />
        )}

        <FeatureIcon
          iconSrc="/assets/cognitive.svg"
          feature={features.cognitive}
          className="absolute top-0 left-0"
          id="cognitive"
          onClick={() => handleFeatureClick(features.cognitive, "cognitive")}
        />
        <Image
          src="/assets/line.svg"
          alt="Line"
          width={100}
          height={100}
          className="absolute top-40 left-30 transform -translate-x-1/2 -translate-y-1/2 scale-x-[-1] rotate-180"
          style={{ filter: featureId === "cognitive" ? "invert(37%) sepia(74%) saturate(1045%) hue-rotate(203deg) brightness(91%) contrast(91%)" : "none" }}
        />
        <FeatureIcon
          iconSrc="/assets/problem-solving.svg"
          feature={features.ai_problem_solving}
          className="absolute bottom-0 left-0"
          id="ai_problem_solving"
          onClick={() => handleFeatureClick(features.ai_problem_solving, "ai_problem_solving")}
        />
        <Image
          src="/assets/line.svg"
          alt="Line"
          width={100}
          height={100}
          className="absolute bottom-20 left-30 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: featureId === "ai_problem_solving" ? "invert(37%) sepia(74%) saturate(1045%) hue-rotate(203deg) brightness(91%) contrast(91%)" : "none" }}
        />
        <FeatureIcon
          iconSrc="/assets/dynamic-paths.svg"
          feature={features.dynamic_paths}
          className="absolute top-0 right-0"
          id="dynamic_paths"
          onClick={() => handleFeatureClick(features.dynamic_paths, "dynamic_paths")}
        />
        <Image
          src="/assets/line.svg"
          alt="Line"
          width={100}
          height={100}
          className="absolute top-40 right-20 transform -translate-x-1/2 -translate-y-1/2 rotate-180"
          style={{ filter: featureId === "dynamic_paths" ? "invert(37%) sepia(74%) saturate(1045%) hue-rotate(203deg) brightness(91%) contrast(91%)" : "none" }}
        />
        <FeatureIcon
          iconSrc="/assets/ai-mentor.svg"
          feature={features.ai_mentor}
          className="absolute bottom-0 right-0"
          id="ai_mentor"
          onClick={() => handleFeatureClick(features.ai_mentor, "ai_mentor")}
        />
        <Image
          src="/assets/line.svg"
          alt="Line"
          width={100}
          height={100}
          className="absolute bottom-20 right-20 transform -translate-x-1/2 -translate-y-1/2 scale-y-[-1] rotate-180"
          style={{ filter: featureId === "ai_mentor" ? "invert(37%) sepia(74%) saturate(1045%) hue-rotate(203deg) brightness(91%) contrast(91%)" : "none" }}
        />
      </div>
    </div>
  );
}
