import Contact, { type Kind } from '@/components/contact';
import GoogleMap from '@/components/google-map';
import { contactData } from '@/data/ContactList';
import React from 'react';

const ContactPage = () => {
  return (
    <main className='mx-auto flex max-w-5xl flex-col items-center justify-center px-2'>
      <h1 className='text-jmb-red mb-8 flex flex-col py-4 text-center text-5xl font-bold md:text-6xl'>
        <span>Contact Us</span>
        <span className='text-lg font-medium text-gray-600'>
          We’d love to hear from you!
        </span>
      </h1>
      <section
        className={'grid w-full grid-cols-1 gap-4 md:grid-cols-2'}
        aria-label='Contact Details'
      >
        {contactData.map((contact, index) => (
          <Contact
            kind={contact.icon as Kind}
            key={index}
            label={contact.label}
            value={contact.value}
            link={contact.link}
          />
        ))}
      </section>

      <GoogleMap />
    </main>
  );
};

export default ContactPage;
