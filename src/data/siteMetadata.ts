const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (!envSiteUrl) {
  throw new Error(
    '❌ NEXT_PUBLIC_SITE_URL is missing or empty! Check your .env file.',
  );
}

const SITE_URL = envSiteUrl.replace(/\/$/, '');

const siteMetadata = {
  title: 'JMB - Dal Bati Churma',
  headerTitle: 'Jai Maa Bhawani Dal Bati Churma',
  headerTitleHindi: 'जय माँ भवानी दाल बाटी चूरमा',

  owner: 'Sunil Bhati',

  description:
    'Jai Maa Bhawani Dal Bati Churma offers an authentic Rajasthani dining experience, specializing in Dal Bati Churma and traditional flavors of Rajasthan',

  language: 'en-US',
  locale: 'en-IN',
  theme: 'system',

  siteUrl: SITE_URL,
  siteRepo: 'https://github.com/NarsiBhati-Dev/NextBlog.git',

  siteLogo: `${SITE_URL}/images/jmb-logo.png`,
  socialBanner: `${SITE_URL}/images/jmb-social-banner.png`,

  email: 'narsibhati2000@gmail.com',
  github: 'https://github.com/NarsiBhati-Dev',
  x: 'https://x.com/NarsiBhati31',
  linkedin: 'https://www.linkedin.com/in/narsi-bhati-b43459224/',
  youtube: 'http://www.youtube.com/@Narsi-B',

  stickyNav: false,
};

export default siteMetadata;
