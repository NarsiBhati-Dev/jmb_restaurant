import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className='rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105'>
      <h3 className='text-xl font-semibold'>{title}</h3>
      <p className='mt-2 text-gray-600'>{description}</p>
    </div>
  );
};

export default FeatureCard;
