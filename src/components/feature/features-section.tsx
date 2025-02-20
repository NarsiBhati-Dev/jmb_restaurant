import FeatureCard from './feature-card';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Authentic Flavors',
      description: 'Experience the true essence of Rajasthan in every bite.',
    },
    {
      title: 'Fresh Ingredients',
      description:
        'We use only the freshest ingredients to maintain quality and taste.',
    },
    {
      title: 'Great Ambience',
      description:
        'Enjoy a cozy and welcoming environment with family and friends.',
    },
  ];

  return (
    <section className='mt-6 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3'>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default FeaturesSection;
