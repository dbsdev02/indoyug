export interface NavItem { label: string; href: string; menu?: 'products' | 'industries' }

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Products', href: '/products', menu: 'products' },
  { label: 'Industries', href: '/industries', menu: 'industries' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact Us', href: '/contact-us' },
];
