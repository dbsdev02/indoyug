import { lazyPage } from '../lib/lazyPage';

export const Pages = {
  Home: lazyPage(() => import('../pages/Home')),
  AboutUs: lazyPage(() => import('../pages/AboutUs')),
  Manufacturing: lazyPage(() => import('../pages/Manufacturing')),
  Products: lazyPage(() => import('../pages/Products')),
  ProductDetail: lazyPage(() => import('../pages/ProductDetail')),
  Industries: lazyPage(() => import('../pages/Industries')),
  IndustryDetail: lazyPage(() => import('../pages/IndustryDetail')),
  TurnkeyProjects: lazyPage(() => import('../pages/TurnkeyProjects')),
  Projects: lazyPage(() => import('../pages/Projects')),
  ProjectDetail: lazyPage(() => import('../pages/ProjectDetail')),
  Quality: lazyPage(() => import('../pages/Quality')),
  Resources: lazyPage(() => import('../pages/Resources')),
  Blog: lazyPage(() => import('../pages/Blog')),
  BlogDetail: lazyPage(() => import('../pages/BlogDetail')),
  FAQ: lazyPage(() => import('../pages/FAQ')),
  RequestQuote: lazyPage(() => import('../pages/RequestQuote')),
  ContactUs: lazyPage(() => import('../pages/ContactUs')),
  Search: lazyPage(() => import('../pages/Search')),
  PrivacyPolicy: lazyPage(() => import('../pages/PrivacyPolicy')),
  TermsAndConditions: lazyPage(() => import('../pages/TermsAndConditions')),
  ThankYou: lazyPage(() => import('../pages/ThankYou')),
  NotFound: lazyPage(() => import('../pages/NotFound')),
};

export type PageKey = keyof typeof Pages;

/** Single source of truth for routing, preloading and the sitemap. */
export const routeTable: { path: string; page: PageKey }[] = [
  { path: '/', page: 'Home' },
  { path: '/about-us', page: 'AboutUs' },
  { path: '/manufacturing', page: 'Manufacturing' },
  { path: '/products', page: 'Products' },
  { path: '/products/:slug', page: 'ProductDetail' },
  { path: '/industries', page: 'Industries' },
  { path: '/industries/:slug', page: 'IndustryDetail' },
  { path: '/turnkey-projects', page: 'TurnkeyProjects' },
  { path: '/projects', page: 'Projects' },
  { path: '/projects/:slug', page: 'ProjectDetail' },
  { path: '/quality', page: 'Quality' },
  { path: '/resources', page: 'Resources' },
  { path: '/blog', page: 'Blog' },
  { path: '/blog/:slug', page: 'BlogDetail' },
  { path: '/faq', page: 'FAQ' },
  { path: '/request-a-quote', page: 'RequestQuote' },
  { path: '/contact-us', page: 'ContactUs' },
  { path: '/search', page: 'Search' },
  { path: '/privacy-policy', page: 'PrivacyPolicy' },
  { path: '/terms-and-conditions', page: 'TermsAndConditions' },
  { path: '/thank-you', page: 'ThankYou' },
  { path: '*', page: 'NotFound' },
];
