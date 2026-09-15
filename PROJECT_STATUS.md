# SCK Aviation — first frontend milestone

Implemented: responsive homepage, aircraft page, design story, special projects, three-step demo inquiry form, one-way/round-trip/multi-city inputs, mobile navigation, reduced-motion support, accessible field labels, static export, compressed real aircraft imagery.

Run `npm install`, then `npm run dev`. Run `npm run build` for static output in `out/`. Node 22 or newer recommended. Use a static host supporting extensionless HTML routes, or Next.js development preview.

The form never transmits data. Sample data is held only in React state. Real email links deliberately open the visitor's email client. No backend, database, pricing, availability service, authentication, tracking or booking capability exists.

Remaining production work: custom reference-validated OE-LSC 3D model and adaptive viewer; broader approved image/video library; gallery/press content; official logo/font replacement if provided; airport autocomplete; dedicated launch legal review; device performance measurement and accessibility audit. Search indexing is disabled for this prototype. A 120fps experience is a target, not a measured guarantee.

This is an initial visual milestone, not the complete production website. No public deployment has been created.
