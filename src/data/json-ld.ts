const commonRestaurantInfo = {
  '@type': 'Restaurant',
  name: 'Jai Maa Bhawani Dal Bati Churma',
  telephone: '+91-75680-87763',
  priceRange: 'INR 20 - INR 150',
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
    latitude: '26.2614',
    longitude: '73.0104',
  },
  servesCuisine: ['Rajasthani', 'Indian'],
  image: [
    'https://www.jaimaabhawanidalbatichurma.in/images/jmb-social-banner.png',
    'https://www.jaimaabhawanidalbatichurma.in/images/menu/churma.webp',
    'https://www.jaimaabhawanidalbatichurma.in/images/menu/dal-bati.webp',
    'https://www.jaimaabhawanidalbatichurma.in/images/menu/masala-papad.webp',
  ],
  openingHoursSpecification: {
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
    opens: '11:00',
    closes: '22:00',
  },
  foundingDate: '2004',
};

const JSON_LD_Home = {
  '@context': 'https://schema.org',
  ...commonRestaurantInfo,
  description:
    'Authentic Rajasthani Dal Bati Churma restaurant in Jodhpur, serving traditional dishes like Dal Bati, Churma, and more. Experience the true taste of Rajasthan.',
  url: 'https://www.jaimaabhawanidalbatichurma.in',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '100',
  },
};

const JSON_LD_About_Us = {
  '@context': 'https://schema.org',
  ...commonRestaurantInfo,
  description:
    'Established in 2004, Jai Maa Bhawani Dal Bati Churma has been serving authentic Rajasthani cuisine in Jodhpur for nearly two decades. Our commitment to quality and traditional recipes has made us a favorite among locals and tourists alike.',
  url: 'https://www.jaimaabhawanidalbatichurma.in/about',
};

const JSON_LD_Contact_Us = {
  '@context': 'https://schema.org',
  ...commonRestaurantInfo,
  url: 'https://www.jaimaabhawanidalbatichurma.in/contact',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-75680-87763',
    contactType: 'customer service',
    availableLanguage: ['Hindi', 'English'],
    email: 'contact@jaimaabhawanidalbatichurma.in',
  },
};

const JSON_LD_Faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are your restaurant hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open daily from 10:00 AM to 11:00 PM, including weekends and holidays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer home delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer home delivery through Zomato. You can order online at https://zoma.to/order/20219963.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your specialty dishes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our specialty dishes include Dal Bati Churma, traditional Rajasthani Dal, homemade Churma, and authentic Lasun Chatni.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is parking available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we have ample parking space available near our restaurant at HP Petrol Pump, Pal Road location.',
      },
    },
  ],
};

const JSON_LD_Menu = {
  '@context': 'https://schema.org',
  ...commonRestaurantInfo,
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Drinks',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Chach (Bottle)',
            description:
              'A refreshing buttermilk drink, perfect for digestion.',
            offers: {
              '@type': 'Offer',
              price: '60.00',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Chach (Glass)',
            description: 'A traditional buttermilk drink served in a glass.',
            offers: {
              '@type': 'Offer',
              price: '20.00',
              priceCurrency: 'INR',
            },
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Main Course',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Dal Bati',
            description:
              'Classic Rajasthani dish with baked wheat balls and lentil curry.',
            offers: {
              '@type': 'Offer',
              price: '70.00',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Churma',
            description:
              'Sweetened crushed wheat dessert topped with dry fruits.',
            offers: {
              '@type': 'Offer',
              price: '120.00',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Laddu',
            description: 'Traditional Rajasthani gram flour sweet balls.',
            offers: {
              '@type': 'Offer',
              price: '50.00',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Dal',
            description:
              'Slow-cooked lentil soup infused with rich Indian spices.',
            offers: {
              '@type': 'Offer',
              price: '30.00',
              priceCurrency: 'INR',
            },
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Sides',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Masala Papad',
            description:
              'Crispy spiced papad topped with onions, tomatoes, and masala.',
            offers: {
              '@type': 'Offer',
              price: '35.00',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Plain Papad',
            description: 'Classic thin crispy wafer, a staple side dish.',
            offers: {
              '@type': 'Offer',
              price: '20.00',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Lasun Chatni',
            description:
              'Spicy garlic chutney, a perfect accompaniment to Dal Bati.',
            offers: {
              '@type': 'Offer',
              price: '40.00',
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'MenuItem',
            name: 'Mirchi ka Kutta',
            description: 'Traditional crushed green chili with spices.',
            offers: {
              '@type': 'Offer',
              price: '40.00',
              priceCurrency: 'INR',
            },
          },
        ],
      },
    ],
  },
};

export {
  JSON_LD_Home,
  JSON_LD_About_Us,
  JSON_LD_Faq,
  JSON_LD_Contact_Us,
  JSON_LD_Menu,
};
