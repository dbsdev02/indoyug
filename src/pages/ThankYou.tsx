import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { company } from '../data/company';

interface State { submitted?: boolean; reference?: string | null; product?: string }

export default function ThankYou() {
  const state = (useLocation().state ?? {}) as State;
  // Only confirm when the form navigated here after a backend-confirmed submission.
  if (!state.submitted) {
    return (
      <>
        <SEO title="Enquiry status" description="Enquiry confirmation page." path="/thank-you" noindex />
        <section className="container max-w-2xl py-24 text-center">
          <h1 className="text-3xl font-bold">No enquiry to confirm</h1>
          <p className="mt-3 text-ink-soft">This page confirms enquiries after they have been received. If you meant to contact us, please use the form or call us directly.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/request-a-quote" className="btn-primary">Request a quote</Link><Link to="/contact-us" className="btn-outline">Contact us</Link></div>
        </section>
      </>
    );
  }
  return (
    <>
      <SEO title="Thank you — enquiry received" description="Your enquiry has been received by Indoyug Clean Tech LLP." path="/thank-you" noindex />
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="bg-blueprint-dark absolute inset-0" aria-hidden />
        <div className="container relative max-w-3xl py-20 text-center md:py-28">
          <CheckCircle2 className="mx-auto h-14 w-14 text-teal-400" aria-hidden />
          <h1 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">Thank you — we’ve received your enquiry</h1>
          <p className="mt-4 text-lg text-white/80">{state.product ? `Our team will review your requirement for the ${state.product} and get back to you.` : 'Our team will review your requirement and get back to you.'}</p>
          {state.reference && <p className="mt-6 inline-block rounded border border-white/20 px-4 py-2 font-mono text-sm">Reference: {state.reference}</p>}
        </div>
      </section>
      <section className="container grid max-w-4xl gap-6 py-14 md:grid-cols-3">
        <Link to="/products" className="card group p-6 hover:shadow-lift"><p className="font-bold group-hover:text-brand-700">Browse products</p><ArrowRight className="mt-3 h-5 w-5 text-brand-500" aria-hidden /></Link>
        <Link to="/" className="card group p-6 hover:shadow-lift"><p className="font-bold group-hover:text-brand-700">Back to homepage</p><ArrowRight className="mt-3 h-5 w-5 text-brand-500" aria-hidden /></Link>
        <div className="card p-6"><p className="font-bold">Urgent?</p>{company.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="mt-2 flex items-center gap-2 text-sm font-semibold text-brand-800"><Phone className="h-4 w-4" aria-hidden />{p.display}</a>)}<a href={`mailto:${company.email}`} className="mt-2 flex items-center gap-2 text-sm font-semibold text-brand-800"><Mail className="h-4 w-4" aria-hidden />{company.email}</a></div>
      </section>
    </>
  );
}
