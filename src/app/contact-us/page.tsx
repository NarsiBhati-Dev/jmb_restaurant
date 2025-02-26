import ContactCard from '@/components/contact-card';
import { type Kind } from '@/components/contact-card';
import GoogleMap from '@/components/google-map';
import contactList from '@/data/contact-list';
import { JSON_LD_Contact_Us } from '@/data/json-ld';
import getPageMetadata from '@/lib/getPageMetadata';
import React from 'react';

export const metadata = getPageMetadata({
  title: 'Contact Us',
  description:
    "We'd love to hear from you! Find our contact information and location.",
  path: 'contact-us',
});

const ContactPage = () => {
  return (
    <main className='mx-auto flex max-w-5xl flex-col items-center justify-center space-y-8 px-2 py-8'>
      <header className='text-center'>
        <h1 className='text-jmb-red mb-2 text-5xl font-bold md:text-6xl'>
          Contact Us
        </h1>
        <p className='mx-auto mt-4 max-w-2xl text-center text-lg tracking-tight text-gray-700 md:text-2xl'>
          {"We'd love to hear from you!"}
        </p>
      </header>

      <section
        className='grid w-full grid-cols-1 gap-6 rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl md:grid-cols-2'
        aria-label='Contact Details'
      >
        {contactList.map(contact => (
          <ContactCard
            kind={contact.icon as Kind}
            key={contact.label}
            label={contact.label}
            value={contact.value}
            link={contact.link}
          />
        ))}
      </section>

      <section
        className='w-full overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl'
        aria-label='Our Location'
      >
        <GoogleMap />
      </section>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(JSON_LD_Contact_Us, null, 0),
        }}
      />
    </main>
  );
};

export default ContactPage;
