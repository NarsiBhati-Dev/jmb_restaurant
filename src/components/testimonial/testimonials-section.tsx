import { reviewList } from '@/data/reviewList';
import TestimonialCard from './testimonial-card';

const TestimonialsSection = () => {
  return (
    <section className='mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
      {reviewList.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          review={testimonial.review}
          name={testimonial.name}
          rating={testimonial.rating}
        />
      ))}
    </section>
  );
};

export default TestimonialsSection;
