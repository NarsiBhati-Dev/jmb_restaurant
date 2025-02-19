import React from 'react';
import { Email, Phone, Whatsapp, Location } from '@/data/icons/contact-icons';
import Link from 'next/link';

const components = {
  phone: Phone,
  whatsapp: Whatsapp,
  email: Email,
  location: Location,
};

export type Kind = keyof typeof components;

interface ContactProps {
  kind: Kind;
  label: string;
  value: string;
  link: string;
}

const Contact = ({ kind, label, value, link }: ContactProps) => {
  const ContactSvg = components[kind];

  return (
    <Link
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='col-1 flex flex-col items-center justify-center rounded-lg border-2 border-white bg-black p-8 text-center text-white shadow-lg'
    >
      {ContactSvg && <ContactSvg />}
      <h2 className='py-2 text-xl font-bold'>{label}</h2>
      <p>{value}</p>
    </Link>
  );
};

export default Contact;
