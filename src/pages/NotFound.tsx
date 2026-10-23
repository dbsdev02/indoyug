import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { company } from '../data/company';

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="The page you were looking for could not be found." path="/404" noindex />
      <section className="relative overflow-hidden bg-surface">
        <div className="bg-blueprint absolute inset-0" aria-hidden />
        <div className="container relative max-w-3xl py-24 text-center md:py-32">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand-500">Error 404</p>
          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">This page isn’t in our catalogue</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">The page may have moved when we rebuilt our website. Try the product catalogue, search, or contact our team.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">Go to homepage</Link>
            <Link to="/products" className="btn-outline">Product catalogue <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            <Link to="/contact-us" className="btn-outline">Contact us</Link>
          </div>
          <a href={`tel:${company.phones[0].tel}`} className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-800"><Phone className="h-4 w-4" aria-hidden />{company.phones[0].display}</a>
        </div>
      </section>
    </>
  );
}
