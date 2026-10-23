import { useEffect, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search as SearchIcon, SearchX } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { search } from '../lib/search';

const suggestions = ['pass box', 'biosafety cabinet', 'fume hood', 'air shower', 'SS trolley', 'laminar air flow'];

export default function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const [input, setInput] = useState(q);
  useEffect(() => setInput(q), [q]);
  const results = search(q);
  const submit = (e: FormEvent) => { e.preventDefault(); setParams(input.trim() ? { q: input.trim() } : {}); };

  return (
    <>
      <SEO title={q ? `Search: ${q}` : 'Search'} description="Search Indoyug products, industries, projects, articles and resources." path="/search" noindex />
      <PageHero compact crumbs={[{ label: 'Search' }]} title="Search the website">
        <form role="search" onSubmit={submit} className="flex max-w-xl gap-2">
          <label htmlFor="site-search" className="sr-only">Search products, industries and articles</label>
          <input id="site-search" type="search" value={input} onChange={(e) => setInput(e.target.value)} placeholder="e.g. dynamic pass box" className="field flex-1 border-transparent py-3" autoFocus />
          <button type="submit" className="btn-accent"><SearchIcon className="h-4 w-4" aria-hidden /><span className="hidden sm:inline">Search</span></button>
        </form>
      </PageHero>
      <section className="py-12 md:py-14">
        <div className="container max-w-4xl">
          {!q ? (
            <div><p className="text-ink-soft">Popular searches:</p><ul className="mt-3 flex flex-wrap gap-2">{suggestions.map((s) => <li key={s}><Link to={`/search?q=${encodeURIComponent(s)}`} className="inline-block rounded-full border border-surface-line px-4 py-2 text-sm font-semibold hover:border-brand-500">{s}</Link></li>)}</ul></div>
          ) : results.length ? (
            <>
              <p className="mb-6 text-sm text-steel" aria-live="polite">{results.length} result{results.length === 1 ? '' : 's'} for “<span className="font-semibold text-ink">{q}</span>”</p>
              <ul className="divide-y divide-surface-line border-y border-surface-line">
                {results.map((r) => {
                  const external = r.href.endsWith('.pdf');
                  const inner = <><p className="font-mono text-[10.5px] uppercase tracking-wider text-brand-500">{r.type}{r.meta && ` · ${r.meta}`}</p><h2 className="mt-1 text-lg font-bold group-hover:text-brand-700">{r.title}</h2><p className="mt-1 text-[15px] text-ink-soft">{r.description}</p></>;
                  return (
                    <li key={r.type + r.href}>
                      {external ? <a href={r.href} target="_blank" rel="noopener" className="group block py-5">{inner}</a> : <Link to={r.href} className="group block py-5">{inner}</Link>}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <div className="rounded border border-dashed border-surface-line bg-surface p-10 text-center">
              <SearchX className="mx-auto h-10 w-10 text-brand-500" aria-hidden />
              <h2 className="mt-4 text-2xl font-bold">No results for “{q}”</h2>
              <p className="mx-auto mt-2 max-w-md text-ink-soft">Check the spelling or try a broader term such as “cabinet” or “bench”. You can also browse the full catalogue or ask our team.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3"><Link to="/products" className="btn-outline">Browse products</Link><Link to="/contact-us" className="btn-primary">Ask our team <ArrowRight className="h-4 w-4" aria-hidden /></Link></div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
