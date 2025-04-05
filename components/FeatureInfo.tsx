import React from 'react';

interface Feature {
  title: string;
  points: string[];
}

interface FeatureInfoProps {
  feature: Feature;
  featureId: string;
}

const FeatureInfo: React.FC<FeatureInfoProps> = ({ feature, featureId }) => {
  const getPositionClass = () => {
    switch (featureId) {
      case "cognitive":
        return "top-50 left-90";
      case "ai_problem_solving":
        return "bottom-10 left-90";
      case "dynamic_paths":
        return "top-50 right-30";
      case "ai_mentor":
        return "bottom-10 right-30";
      default:
        return "";
    }
  };

  return (
    <div className={`absolute ${getPositionClass()} transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-xl shadow-lg z-20 w-74`}>
      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
      <ul className="text-sm space-y-1">
        {feature.points.map((pt, idx) => (
          <li key={idx}>• {pt}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureInfo;
