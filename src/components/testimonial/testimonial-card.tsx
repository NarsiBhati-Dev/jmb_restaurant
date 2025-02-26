import React from 'react';

interface TestimonialCardProps {
  review: string;
  name: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  review,
  name,
  rating = 5,
}) => {
  return (
    <section className='mx-4 max-w-sm rounded-lg bg-white p-4 shadow-md transition-transform duration-300 md:hover:scale-105'>
      {/* Review Text */}
      <blockquote className='text-black italic'>
        &ldquo;{review}
        &rdquo;
      </blockquote>

      {/* Star Rating */}
      <div className='mt-3 flex justify-center gap-1 text-amber-500'>
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>

      {/* Reviewer Name */}
      <h3 className='text-jmb-red mt-4 font-semibold'>{name}</h3>
    </section>
  );
};

export default TestimonialCard;
