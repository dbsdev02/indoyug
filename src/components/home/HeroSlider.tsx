import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { cn } from '../../lib/utils';

type Slide = {
  image: string;
  position?: string;
  eyebrow: string;
  title: string;
  text: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
};

const slides: Slide[] = [
  {
    image: '/assets/projects/microbiology-cleanroom-lab.webp',
    position: 'object-[70%_center]',
    eyebrow: 'Cleanroom · Laboratory · HVAC',
    title: 'Engineered Cleanroom & Laboratory Solutions',
    text: 'Purpose-built cleanroom equipment, laboratory furniture and stainless steel systems for demanding controlled environments — manufactured in Umbergaon, Gujarat.',
    primary: { label: 'Request a Quote', to: '/request-a-quote' },
    secondary: { label: 'Explore Our Products', to: '/products' },
  },
  {
    image: '/assets/brand/hero-cleanroom-lab.webp',
    position: 'object-[65%_center]',
    eyebrow: 'Cleanroom equipment',
    title: 'Air showers, pass boxes, LAF units & biosafety cabinets',
    text: 'Personnel and material entry systems and clean-air devices that keep contamination out of your critical zones.',
    primary: { label: 'Cleanroom equipment', to: '/products?category=cleanroom-equipment' },
    secondary: { label: 'Request a Quote', to: '/request-a-quote' },
  },
  {
    image: '/assets/products/laboratory-furniture-island-bench.webp',
    position: 'object-center',
    eyebrow: 'Laboratory furniture',
    title: 'Modular laboratory furniture, built to your layout',
    text: 'Wall and island benches, sink units, fume hoods, storage and anti-vibration tables in standard and custom sizes.',
    primary: { label: 'Laboratory furniture', to: '/products?category=laboratory-furniture' },
    secondary: { label: 'Request a Quote', to: '/request-a-quote' },
  },
  {
    image: '/assets/manufacturing/stainless-steel-lab-benches.webp',
    position: 'object-center',
    eyebrow: 'Stainless steel fabrication',
    title: 'Crevice-free SS 304 / 316L modular furniture',
    text: 'Fully welded, electropolished trolleys, cabinets, racks and workstations — factory tested before dispatch.',
    primary: { label: 'Manufacturing capabilities', to: '/manufacturing' },
    secondary: { label: 'SS furniture range', to: '/products/stainless-steel-modular-furniture' },
  },
  {
    image: '/assets/projects/cleanroom-process-facility.webp',
    position: 'object-center',
    eyebrow: 'Turnkey projects',
    title: 'From first drawing to final handover',
    text: 'Cleanroom, HVAC and laboratory turnkey projects — design, manufacturing, installation and validation under one roof.',
    primary: { label: 'Turnkey projects', to: '/turnkey-projects' },
    secondary: { label: 'Request a Quote', to: '/request-a-quote' },
  },
];

const DURATION = 6500;

export function HeroSlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((n: number) => setIndex((n + slides.length) % slides.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  const running = !paused;
  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(next, DURATION);
    return () => window.clearTimeout(t);
  }, [index, running, next]);

  // Preload the other slide images so crossfades never show a blank frame
  useEffect(() => { slides.slice(1).forEach((s) => { const im = new Image(); im.src = s.image; }); }, []);

  const slide = slides[index];
  const Heading = index === 0 ? 'h1' : 'h2';
  const item = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
  });

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Indoyug highlights"
      className="relative overflow-hidden bg-brand-950 text-white"
      onKeyDown={(e) => { if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); }}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      {/* Background images: crossfade + slow zoom */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.1, ease: 'easeOut' } }}
          exit={{ opacity: 0, transition: { duration: 1.1, ease: 'easeIn' } }}
          aria-hidden
        >
          <motion.img
            src={slide.image}
            alt=""
            className={cn('h-full w-full object-cover', slide.position)}
            initial={{ scale: reduce ? 1 : 1.12 }}
            animate={{ scale: 1, transition: { duration: reduce ? 0 : DURATION / 1000 + 1.5, ease: 'linear' } }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-950/50 lg:via-brand-950/70 lg:to-brand-950/10" aria-hidden />
      <div className="bg-blueprint-dark absolute inset-0 opacity-60 [mask-image:linear-gradient(to_right,black_30%,transparent_70%)]" aria-hidden />
      <div className="hero-glow absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" aria-hidden />

      <div className="container relative grid min-h-[620px] items-center py-20 lg:min-h-[680px]">
        <div className="max-w-2xl" aria-live={running ? 'off' : 'polite'}>
          {/* Enter-only text animation: a new key remounts the block, so it never waits on an exit */}
            <motion.div key={index} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`}>
              <motion.p {...item(0.05)} className="eyebrow mb-5 flex items-center gap-3 text-teal-400">
                <motion.span className="h-px bg-teal-400" initial={{ width: 0 }} animate={{ width: 32, transition: { duration: 0.6, delay: 0.1 } }} aria-hidden />
                {slide.eyebrow}
              </motion.p>
              <motion.div {...item(0.15)}>
                <Heading className="text-[2.4rem] font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-[4.1rem]">{slide.title}</Heading>
              </motion.div>
              <motion.p {...item(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">{slide.text}</motion.p>
              <motion.div {...item(0.45)} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to={slide.primary.to} className="btn-accent group px-6 py-3.5 text-base">
                  {slide.primary.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
                <Link to={slide.secondary.to} className="btn-ghost-light px-6 py-3.5 text-base">{slide.secondary.label}</Link>
              </motion.div>
            </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="container flex items-end justify-between gap-6 pb-7">
          <div className="flex flex-1 items-center gap-2 sm:max-w-md" role="tablist" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}: ${s.eyebrow}`}
                onClick={() => go(i)}
                className="group relative h-8 flex-1"
              >
                <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/25 transition-colors group-hover:bg-white/40">
                  {i === index && (
                    <span
                      key={`${index}-${running}`}
                      className={cn('absolute inset-y-0 left-0 rounded-full bg-teal-400', running ? 'hero-progress' : 'w-full')}
                      style={running ? { animationDuration: `${DURATION}ms` } : undefined}
                    />
                  )}
                  {i < index && <span className="absolute inset-0 bg-white/60" />}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-2 hidden font-mono text-xs tabular-nums text-white/70 sm:inline">
              {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <button type="button" onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} className="hero-ctrl">
              {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
            </button>
            <button type="button" onClick={prev} aria-label="Previous slide" className="hero-ctrl"><ChevronLeft className="h-5 w-5" aria-hidden /></button>
            <button type="button" onClick={next} aria-label="Next slide" className="hero-ctrl"><ChevronRight className="h-5 w-5" aria-hidden /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
