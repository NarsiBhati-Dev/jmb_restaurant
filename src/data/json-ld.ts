const JSON_LD = {
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
  priceRange: '₹20 - ₹150',
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
    ratingValue: '4.5',
    reviewCount: '707',
  },
  sameAs: [
    'https://www.jaimaabhawanidalbatichurma.in/',
    'https://zoma.to/order/20219963',
  ],
};

export default JSON_LD;
