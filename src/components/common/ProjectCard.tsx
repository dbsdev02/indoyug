import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { ImagePlaceholder } from './ImagePlaceholder';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group card flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        {project.image ? (
          <img src={project.image.src} alt={project.image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        ) : (
          <ImagePlaceholder label={project.title} compact />
        )}
        {project.status === 'reference-imagery' && (
          <span className="absolute left-3 top-3 rounded-sm bg-white/95 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-800 shadow-sm">Brochure imagery</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand-500">{project.category}</p>
        <h3 className="mt-1.5 text-lg font-bold group-hover:text-brand-700">{project.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{project.summary}</p>
      </div>
    </Link>
  );
}
