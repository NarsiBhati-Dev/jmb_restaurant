const JSON_LD_Home = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Jai Maa Bhawani Dal Bati Churma',
  image: [
    'https://www.jaimaabhawanidalbatichurma.in/images/jmb-social-banner.png',
    'https://www.jaimaabhawanidalbatichurma.in/images/menu/churma.webp',
    'https://www.jaimaabhawanidalbatichurma.in/images/menu/masala-papad.webp',
    'https://www.jaimaabhawanidalbatichurma.in/images/menu/laddu.webp',
    'https://www.jaimaabhawanidalbatichurma.in/images/menu/lasun-chatni.webp',
  ],
  description:
    'Enjoy the best Dal Bati in Jodhpur at Jai Maa Bhawani Dal Bati Churma. We offer an authentic Rajasthani dining experience, specializing in Dal Bati Churma and traditional Rajasthani flavors.',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Hp Petrol Pump, Opp Spicy Kitchen, Panji Ka Bera, Pal Road, near Gayatri Nagar',
    addressLocality: 'Jodhpur',
    addressRegion: 'Rajasthan',
    postalCode: '342001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.2389,
    longitude: 73.0243,
  },
  telephone: '+91-75680-87763',
  priceRange: 'INR 20 - INR 150',
  servesCuisine: ['Rajasthani', 'Indian'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '23:30',
    },
  ],
  acceptsReservations: false,
  menu: 'https://www.jaimaabhawanidalbatichurma.in/menu',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.5,
    reviewCount: 707,
  },
  sameAs: [
    'https://www.jaimaabhawanidalbatichurma.in/',
    'https://zoma.to/order/20219963',
  ],
};

const JSON_LD_About_Us = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Jai Maa Bhawani Dal Bati Churma | about us',
  url: 'https://www.jaimaabhawanidalbatichurma.in/about',
  logo: 'https://www.jaimaabhawanidalbatichurma.in/images/jmb-social-banner.png',
  description:
    'JMB Restaurant is a renowned restaurant in Jodhpur, specializing in authentic Rajasthani Dal Bati Churma and traditional dishes.',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Hp Petrol Pump, Opp Spicy Kitchen, Panji Ka Bera, Pal Road, near Gayatri Nagar',
    addressLocality: 'Jodhpur',
    addressRegion: 'Rajasthan',
    postalCode: '342001',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-75680-87763',
    contactType: 'customer service',
    availableLanguage: ['Hindi', 'English'],
  },
  sameAs: [
    'https://www.jaimaabhawanidalbatichurma.in/',
    'https://zoma.to/order/20219963',
  ],
};

const JSON_LD_Faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Jai Maa Bhawani Dal Bati Churma | FAQs',
  url: 'https://www.jaimaabhawanidalbatichurma.in/faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Dal Bati Churma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dal Bati Churma is a traditional Rajasthani dish consisting of baked wheat rolls (Bati), lentil curry (Dal), and a sweet crumbled wheat dessert (Churma).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does JMB Restaurant offer home delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer home delivery through Zomato. You can order online at https://zoma.to/order/20219963.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your opening hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open daily from 10:00 AM to 11:30 PM.',
      },
    },
  ],
};

const JSON_LD_Contact_Us = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Jai Maa Bhawani Dal Bati Churma | Contact us',
  url: 'https://www.jaimaabhawanidalbatichurma.in/contact',
  logo: 'https://www.jaimaabhawanidalbatichurma.in/images/jmb-social-banner.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-75680-87763',
    contactType: 'customer service',
    email: 'support@jaimaabhawanidalbatichurma.in',
    availableLanguage: ['Hindi', 'English'],
    areaServed: 'Jodhpur, Rajasthan',
    contactOption: 'TollFree',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '23:30',
    },
  },
};

const JSON_LD_Menu = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Jai Maa Bhawani Dal Bati Churma | Menu',
  url: 'https://www.jaimaabhawanidalbatichurma.in/menu',
};

export {
  JSON_LD_Home,
  JSON_LD_About_Us,
  JSON_LD_Faq,
  JSON_LD_Contact_Us,
  JSON_LD_Menu,
};
