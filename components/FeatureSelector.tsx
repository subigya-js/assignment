'use client';

import { useState } from 'react';
import FeatureIcon from './FeatureIcon';
import FeatureInfo from './FeatureInfo';
import Image from 'next/image';

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

export default function FeatureSelector({ features }: { features: Features }) {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(features.cognitive || null);
  const [featureId, setFeatureId] = useState<string>("cognitive");

  const handleFeatureClick = (feature: Feature, id: string) => {
    setSelectedFeature(feature);
    setFeatureId(id);
  };

  return (
    <>
      {selectedFeature && (
        <FeatureInfo feature={selectedFeature} featureId={featureId} />
      )}
      {features.cognitive && (
        <FeatureIcon
          iconSrc="/assets/cognitive.svg"
          feature={features.cognitive}
          className="absolute top-0 left-0"
          id="cognitive"
          onClick={() => handleFeatureClick(features.cognitive!, "cognitive")}
        />
      )}
      <Image
        src="/assets/line.svg"
        alt="Line"
        width={100}
        height={100}
        className="absolute top-40 left-30 transform -translate-x-1/2 -translate-y-1/2 scale-x-[-1] rotate-180"
        style={{ filter: featureId === "cognitive" ? "invert(37%) sepia(74%) saturate(1045%) hue-rotate(203deg) brightness(91%) contrast(91%)" : "none" }}
      />
      {features.ai_problem_solving && (
        <FeatureIcon
          iconSrc="/assets/problem-solving.svg"
          feature={features.ai_problem_solving}
          className="absolute bottom-0 left-0"
          id="ai_problem_solving"
          onClick={() => handleFeatureClick(features.ai_problem_solving!, "ai_problem_solving")}
        />
      )}
      <Image
        src="/assets/line.svg"
        alt="Line"
        width={100}
        height={100}
        className="absolute bottom-20 left-30 transform -translate-x-1/2 -translate-y-1/2"
        style={{ filter: featureId === "ai_problem_solving" ? "invert(37%) sepia(74%) saturate(1045%) hue-rotate(203deg) brightness(91%) contrast(91%)" : "none" }}
      />
      {features.dynamic_paths && (
        <FeatureIcon
          iconSrc="/assets/dynamic-paths.svg"
          feature={features.dynamic_paths}
          className="absolute top-0 right-0"
          id="dynamic_paths"
          onClick={() => handleFeatureClick(features.dynamic_paths!, "dynamic_paths")}
        />
      )}
      <Image
        src="/assets/line.svg"
        alt="Line"
        width={100}
        height={100}
        className="absolute top-40 right-20 transform -translate-x-1/2 -translate-y-1/2 rotate-180"
        style={{ filter: featureId === "dynamic_paths" ? "invert(37%) sepia(74%) saturate(1045%) hue-rotate(203deg) brightness(91%) contrast(91%)" : "none" }}
      />
      {features.ai_mentor && (
        <FeatureIcon
          iconSrc="/assets/ai-mentor.svg"
          feature={features.ai_mentor}
          className="absolute bottom-0 right-0"
          id="ai_mentor"
          onClick={() => handleFeatureClick(features.ai_mentor!, "ai_mentor")}
        />
      )}
      <Image
        src="/assets/line.svg"
        alt="Line"
        width={100}
        height={100}
        className="absolute bottom-20 right-20 transform -translate-x-1/2 -translate-y-1/2 scale-y-[-1] rotate-180"
        style={{ filter: featureId === "ai_mentor" ? "invert(37%) sepia(74%) saturate(1045%) hue-rotate(203deg) brightness(91%) contrast(91%)" : "none" }}
      />
    </>
  );
}
