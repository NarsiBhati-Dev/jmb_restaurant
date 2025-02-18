'use client';

import faqs from '@/data/faqs';
import React, { useState } from 'react';

const FaqCom = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mx-auto mt-8 max-w-3xl space-y-4'>
      {faqs.map((faq, index) => (
        <div key={index} className='rounded-lg bg-white p-4 shadow-md'>
          <button
            className='flex w-full items-center justify-between text-left text-lg font-medium'
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className='text-orange-600'>
              {openIndex === index ? '-' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <p className='mt-2 text-gray-600'>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqCom;
