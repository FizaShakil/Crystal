import React from "react";
import Heading from "../Reusable/Heading";

const FeatureCard = ({ title, description }) => (
  <div className="p-6 border-2 text-center border-orange-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
    <p className="text-sm md:text-base">{description}</p>
  </div>
);

const TechnologyFeatures = () => {
  const features = [
    {
      title: "Cutting-edge Technology",
      description: "Revolutionizing mail reading"
    },
    {
      title: "Intuitive User Experience",
      description: "User-friendly interface"
    },
    {
      title: "Seamless Cloud Integration",
      description: "Cloud technology integration"
    }
  ];

  return (
    <div>
       <Heading head={'Features'}/>
    <div className="max-w-6xl mx-auto px-4 py-12 mb-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default TechnologyFeatures;