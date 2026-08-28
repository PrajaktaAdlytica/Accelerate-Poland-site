# Design QA — ACCELERATE POLAND homepage

## Comparison setup

- Source visual truth: `reference-4174-desktop.png`
- Final implementation: `implementation-desktop-final-v2.png`
- Combined comparison: `qa-comparison-desktop.png`
- Viewport: 1440 × 1100 px
- Page state: initial desktop hero after the route-loader and entrance animation complete
- Source pixels: 1440 × 1100 px
- Implementation pixels: 1440 × 1100 px
- Responsive evidence: `implementation-tablet-final.png` at 768 × 1024 px and `implementation-mobile-final.png` at 390 × 844 px

## Fidelity assessment

The implementation preserves the approved visual direction's dominant white canvas, Polish red/graphite palette, compact institutional header, large left-aligned typographic hero and modular right-hand composition. The earlier generic city treatment was replaced with a real Warsaw photograph and the approved vector map while retaining the original hierarchy, density and card proportions.

The implementation expands the direction into a coherent full homepage rather than copying the hero mechanically. Repeated rules, restrained mono labels, square card geometry, staged red detail panels and directional reveal motion carry the identity through programmes, V2V, grants, partners and contact.

## Focused state evidence

- Programme hover: `implementation-programme-hover-final.png` shows the staged secondary red panel while the essential title and programme identity remain visible.
- V2V active-state switching: `implementation-v2v-v1.png` and `implementation-mobile-v2v-v1.png`.
- Grant search/filter state: `implementation-grants-v1.png`; a search for “administracji” reduced the list to the matching record.
- Contact/footer: `implementation-contact-final.png`; the approved logo remains legible on the graphite surface.
- Mobile navigation: `implementation-mobile-menu-v1.png`.

## Findings and comparison history

1. **P2 — hero scroll control overlapped the lower-right programme tile.** Fixed by removing the redundant control; `implementation-desktop-final-v2.png` confirms the mosaic is unobstructed.
2. **P2 — inverse filtering reduced footer-logo fidelity.** Fixed by displaying the approved red/white logo without a filter; `implementation-contact-final.png` confirms correct contrast.
3. **P2 — hero contained three separate H1 elements.** Fixed by using one semantic H1 with three animated line wrappers. Automated browser verification reports one H1 at desktop and mobile widths.
4. **P3 — live social destinations, privacy-policy destination and the final form endpoint are awaiting client inputs.** Placeholder destinations and a clearly labelled demonstrator response are retained so the prototype remains honest.
5. **P3 — the grants catalogue uses a small demonstrator dataset.** The UI is CMS-ready, but the OdraVenture/Notion integration requires Shubham's schema and access details.

## Automated checks

- Production build: passed.
- Sites packaging tests: 4/4 passed.
- Desktop horizontal overflow: none (`scrollWidth` 1440 at viewport width 1440).
- Tablet horizontal overflow: none (`scrollWidth` 768 at viewport width 768).
- Mobile horizontal overflow: none (`scrollWidth` 390 at viewport width 390).
- Broken images: none at desktop or mobile widths.
- Core controls: V2V switching, grant search/filtering, mobile menu and form completion state verified.

## Final result

passed

## Annotation follow-up — 28 August 2026

- Verified at the annotated 812 × 814 px viewport that “Technologia” no longer intersects the central badge.
- Replaced the unclear “01—06” label with “Sześć filarów” and explicit supporting copy.
- Verified the partners metric animates from 0 to 60 when entering the viewport and resolves exactly to `60+`.
- Re-ran the production build and Sites packaging tests: passed, 4/4 tests.

## Visual refinement follow-up — 28 August 2026

- Programme icons now rest at 34% opacity for a softer grey appearance and transition to full black on hover or keyboard focus; programme content remains readable without interaction.
- Rebuilt the six-pillar network with a consistent icon-and-label system. At the previously problematic 812 × 814 px viewport, all six labels align to the same internal baseline and none intersects the central badge.
- Replaced the ambiguous oversized “6” panel with an explicit six-item directory naming Wiedza, Technologia, Biznes, Nauka, Administracja and Kapitał, each with a clean vector icon and short explanation.
- Verified the revised network and directory at 1440 × 900, 812 × 814 and 390 × 844 px. No horizontal overflow was present at the 390 px viewport.
- Production build and Sites packaging: passed. Sites tests: 4/4 passed.
- Final result: passed.

## Navigation interaction follow-up — 28 August 2026

- Added distinct Phosphor line icons for Programy, Akceleracja, Granty and Partnerzy.
- Icons remain hidden at rest and reveal from the left on hover or keyboard focus without disturbing the existing active underline.
- Verified the desktop navigation at 1440 × 900 px: all five labels remain on one line, the four icon hooks render, and no horizontal overflow is introduced.
- Production build and Sites packaging: passed. Sites tests: 4/4 passed.
- Final result: passed.

## Bidirectional section-motion follow-up — 28 August 2026

- Added alternating left/right entrance motion to every major homepage section after the hero.
- Each section resets only after leaving the viewport and animates back in when re-entered while scrolling either down or up.
- Mobile translation is reduced to 38 px; desktop uses 76 px. The existing `prefers-reduced-motion` path removes all section transforms and opacity transitions.
- Browser verification confirmed the Programy section reached full opacity and zero translation after entering from both scroll directions.
- Production build and Sites packaging: passed. Sites tests: 4/4 passed.
- Final result: passed.

## Initiative navigation icon follow-up — 28 August 2026

- Added a compass-style Phosphor icon to Inicjatywa using the same hidden-at-rest, reveal-on-hover/focus behavior as the other desktop navigation links.
- Final result: passed.

## Footer navigation interaction follow-up — 28 August 2026

- Added matching line icons to all six footer navigation links, including Kontakt.
- Footer icons reveal from the left and both icon and label transition to red on hover or keyboard focus.
- Final result: passed.

## Inicjatywa standalone page — 28 August 2026

- Added `/inicjatywa` as the first standalone page in the supplied information architecture.
- Preserved the approved white/red/graphite institutional direction, compact navigation, Archivo/IBM Plex Mono typography, square geometry and restrained directional motion.
- Used the exact supplied Polish initiative title and mission copy, then made the six-pillar model explicit with the existing named icon system: Wiedza, Technologia, Biznes, Nauka, Administracja and Kapitał.
- Reused the approved Poland map and licence-traceable Polish photography; no AI cityscape imagery was introduced.
- Desktop hero was visually compared with `reference-4174-desktop.png`. The new page retains the same split composition, large typographic hierarchy, red map treatment and compact institutional navigation while introducing page-specific content.
- Responsive evidence: `implementation-initiative-desktop-final.png` at 1440 × 900 px and `implementation-initiative-mobile-final.png` at 390 × 844 px. Additional live inspection completed at 812 × 814 px.
- Desktop horizontal overflow: none (`scrollWidth` 1440 at viewport width 1440).
- Tablet horizontal overflow: none (`scrollWidth` 812 at viewport width 812).
- Mobile horizontal overflow: none (`scrollWidth` 390 at viewport width 390).
- All seven rendered images completed successfully; all route-aware navigation and CTA destinations resolve to the correct homepage anchors or standalone route.
- Fixed two visual defects discovered during QA: opaque pattern tiles masking red background surfaces, and mobile pillar labels widening the two-column grid.
- Production build and Sites packaging: passed. Sites tests: 4/4 passed.
- Final result: passed.

## Programy standalone page — 28 August 2026

- Added `/programy` as the second standalone page in the supplied information architecture.
- Used the supplied Polish programme heading, introduction, four programme names and descriptions without adding unsupported programme claims.
- Preserved equal visual hierarchy for Local Content Hub, Innovation Nation, Architekci Cyfrowego Jutra and Startup Nation 5.0 through equal modules, consistent icon scale and matching detail-row anatomy.
- Visually compared the desktop hero with `reference-4174-desktop.png`. The approved white/red/graphite palette, compact institutional navigation, strong left typography and modular right composition remain consistent while the page has a distinct programme-led structure.
- Responsive evidence: `implementation-programy-desktop-final.png` at 1440 × 900 px, `implementation-programy-tablet-final.png` at 812 × 814 px and `implementation-programy-mobile-final.png` at 390 × 844 px.
- Desktop, tablet and mobile horizontal overflow: none. Tablet verification reported `scrollWidth` 812 at viewport width 812.
- All eleven rendered images loaded successfully at the tablet viewport; programme icons remain visible and correctly scaled in the two-column mobile/tablet matrix.
- Route-aware header and footer navigation resolve to `/inicjatywa`, `/programy` or the appropriate homepage section, and the page keeps complete keyboard-focus states and reduced-motion behavior.
- Production build and Sites packaging: passed. Sites tests: 4/4 passed.
- Final result: passed.

## Akceleracja standalone page — 28 August 2026

- Added `/akceleracja` using the supplied “V2V — From Vision to Venture” title, introduction and complete four-stage methodology copy.
- Reused all four approved V2V vector icons in three purposeful contexts: the hero process graphic, interactive stage selector and compact end-to-end process rail.
- Added the licensed Katowice technology-workshop photograph and existing connection/data patterns; no AI cityscape imagery or generic acceleration illustration was introduced.
- Preserved the established white/red/graphite identity, square institutional geometry, bottom-up fills, restrained directional motion and reduced-motion fallback.
- Added responsive single-column and two-column compositions for tablet and mobile widths.
- Local route response: 200. Production build and Sites packaging: passed. Sites tests: 4/4 passed.

## Partnerzy standalone page — 28 August 2026

- Skipped the Granty route as requested and added `/partnerzy` as the next standalone page.
- Used the supplied partner copy and four explicit categories: Technologiczni, Merytoryczni, Gospodarczy and Medialni.
- Made the approved network diagram and clean category pictograms the page's primary graphic system, supported by the licensed Gdańsk business photograph and existing grid/connection patterns.
- Added a reduced-motion-safe count-up for the qualified “60+” ecosystem figure. Technology-company references are shown as text, not as unverified logos or implied endorsements.
- Preserved the established white/red/graphite identity, bottom-to-top graphite card fills, alternating directional reveals and complete tablet/mobile layouts.
- Local `/partnerzy` response: 200. Production build and Sites packaging: passed. Sites tests: 4/4 passed.

## Approved six-pillar master — 28 August 2026

- Replaced the shared light six-pillar matrix with the approved graphic-language-pack master from the reference project at port 4180.
- The revised component uses a dark institutional grid, a full-height Polish-red programme core and three paired pillar rows.
- Pillar labels and descriptors now match the approved master: Wiedza, Technologia, Biznes, Nauka, Administracja and Kapitał.
- The component is shared by the homepage and `/inicjatywa`, with two-column tablet and single-column mobile adaptations.
- Production build and Sites packaging: passed. Sites tests: 4/4 passed.
- Final result: passed.
