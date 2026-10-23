import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { company } from '../../data/company';
import { categories } from '../../data/categories';
import { industries } from '../../data/industries';

const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Turnkey Projects', href: '/turnkey-projects' },
  { label: 'Quality Assurance', href: '/quality' },
  { label: 'Projects & Gallery', href: '/projects' },
  { label: 'Resources', href: '/resources' },
  { label: 'Insights', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-brand-950 text-white/75">
      <div className="bg-blueprint-dark absolute inset-0" aria-hidden />
      <div className="container relative">
        <div className="grid gap-10 border-b border-white/10 py-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={company.logoWhite} alt="Indoyug Clean Tech LLP" className="h-12 w-auto" loading="lazy" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
              Cleanroom equipment, laboratory furniture, stainless steel modular furniture and HVAC — with cleanroom and laboratory turnkey projects under one roof.
            </p>
            <Link to="/request-a-quote" className="btn-accent mt-6">Request a Quote <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <div className="lg:col-span-3">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">Products</h2>
            <ul className="space-y-2 text-[15px]">
              {categories.map((c) => <li key={c.id}><Link to={`/products?category=${c.id}`} className="hover:text-white">{c.name}</Link></li>)}
              <li><Link to="/products" className="font-semibold text-white hover:underline">All products</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">Company</h2>
            <ul className="space-y-2 text-[15px]">{companyLinks.map((l) => <li key={l.href}><Link to={l.href} className="hover:text-white">{l.label}</Link></li>)}</ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">Contact</h2>
            <address className="space-y-3 text-[15px] not-italic">
              <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-teal-400" aria-hidden /><span>{company.name}<br />{company.address.line1}<br />{company.address.line2}<br />{company.address.city} – {company.address.postalCode}, {company.address.region}, {company.address.country}</span></p>
              {company.phones.map((p) => <p key={p.tel}><a href={`tel:${p.tel}`} className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4 text-teal-400" aria-hidden />{p.display}</a></p>)}
              <p><a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-white"><Mail className="h-4 w-4 text-teal-400" aria-hidden />{company.email}</a></p>
            </address>
          </div>
        </div>
        <div className="border-b border-white/10 py-6">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">Industries served</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">{industries.map((i) => <li key={i.slug}><Link to={`/industries/${i.slug}`} className="hover:text-white">{i.name}</Link></li>)}</ul>
        </div>
        <div className="flex flex-col gap-3 py-6 text-[13px] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} {company.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/search" className="hover:text-white">Search</Link></li>
            <li><a href="/sitemap.xml" className="hover:text-white">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
