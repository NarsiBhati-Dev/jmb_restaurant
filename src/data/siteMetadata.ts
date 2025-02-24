const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (!envSiteUrl) {
  throw new Error(
    '❌ NEXT_PUBLIC_SITE_URL is missing or empty! Check your .env file.',
  );
}

const SITE_URL = envSiteUrl.replace(/\/$/, '');

const siteMetadata = {
  title: 'Jai Maa Bhawani Dal Bati Churma',
  headerTitleHindi: 'जय माँ भवानी दाल बाटी चूरमा',

  owner: 'Sunil Bhati',

  description:
    'Enjoy the best Dal Bati in Jodhpur at Jai Maa Bhawani Dal Bati Churma offers an authentic Rajasthani dining experience, specializing in Dal Bati Churma and traditional flavors of Rajasthan',

  language: 'en-US',
  locale: 'en-IN',

  siteUrl: SITE_URL,

  siteLogo: `${SITE_URL}/images/jmb-logo.png`,
  socialBanner: `${SITE_URL}/images/jmb-social-banner.png`,
};

export default siteMetadata;
