# Content needed from Indoyug before launch

Everything below is currently a clearly labelled placeholder on the site. Nothing has been invented to fill these gaps.

## Photographs
- [ ] Factory / facility photos: SS fabrication & welding, electropolishing, equipment assembly, lab furniture production, FAT testing, office exterior (Manufacturing, About, Contact pages).
- [ ] Product photos for 13 products with no brochure image: dispensing booth, sampling booth, reverse LAF unit, garment / UV garment cabinets, wall benches, mobile storage units, lab chairs & stools, lab accessories, SS slotted-angle racks, cross-over bench, SS visual inspection table, SS stools & chairs, cleanroom airflow solutions (plus the hermetic door variant); plus dedicated photos for SS trolleys / SS cabinets / SS shelving (currently share one range photo).
- [ ] Note: brochure images appear to be rendered/illustrative. Replace with real photographs where possible; the site labels gallery images "Brochure imagery".

## Technical data
- [ ] Specifications (dimensions, materials, filtration, airflow) for every product currently showing "Specifications available on request" — 26 of 35 products.
- [ ] Static/dynamic pass box, cleanroom door and fume hood specification tables (brochure gives features only).
- [ ] Model-wise datasheets / GA drawings, installation & maintenance guides, sample FAT document (Resources page shows "Request document" for these).
- [ ] **Discrepancy to resolve:** LAF page states HEPA **99.999%**, air shower and BSC pages state **99.99% at 0.3 µm**. Site shows each as printed.

## Company information
- [ ] Founding year, history/milestones, approved vision & mission (About page).
- [ ] Business hours; confirm Google Maps pin for J-809, III Phase, GIDC Umbergaon.
- [ ] Certificates (ISO, etc.) — copies required before any certification badge or claim is shown. The brochure mentions "International Standards", "cGMP, ISO & international standards" and "ISO Class 5 / Grade A"; these are **not** presented as company certifications.
- [ ] "Trusted by leading pharma and biotech organisations globally" (brochure) — omitted until client names/logos with permission are available.
- [ ] Testimonials and client logos (with written permission) — section omitted until supplied.
- [ ] Confirm which turnkey phases are done in-house vs with partners (HVAC, commissioning, validation are marked "scope-dependent").

## Case studies
- [ ] Real projects: client (or anonymised sector), location, year, scope, products, photos. Add to `src/data/projects.ts` with `status: 'case-study'`.

## Review / sign-off
- [ ] Technical review of 4 Insights articles → set `reviewStatus: 'approved'`.
- [ ] Legal review of Privacy Policy (DPDP Act 2023, retention period, processors, grievance officer) and Terms & Conditions.
- [ ] Old-site name: the current website footer says "IndoYug Power Solution" — confirm the legal entity is "Indoyug Clean Tech LLP".

## Backend
- [ ] Deploy the enquiry endpoint (`server/enquiry-handler.mjs` or equivalent) with SMTP credentials, and set `VITE_ENQUIRY_ENDPOINT`.
