# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Durable ACCELERATE POLAND decisions

- Preserve the earlier visual-direction prototype running at port 4174; this project is the separate production homepage build.
- Source visual truth: `reference-4174-desktop.png` plus the approved ACCELERATE POLAND graphic-language pack.
- White is the dominant surface. Use Polish red and graphite for hierarchy; avoid the earlier blue section direction.
- Use only real, licence-traceable Polish photography from `public/assets/photos/`; never substitute AI-generated cityscapes.
- Keep programme and audience information visible without hover. Hover may add secondary detail only.
- Motion should follow the Artzzs principles—directional reveals, drawn rules, staged panels—but remain restrained and institutional, with a complete reduced-motion fallback.
- Major homepage sections alternate left/right entrance directions and replay when re-entered from either scroll direction; keep the movement subtle on mobile and fully disabled for reduced-motion users.
- V2V always means From Vision to Venture.
- The grants interface is a CMS-ready demonstrator pending Shubham's OdraVenture database integration details.
- At tablet widths, pillar labels must remain fully readable and must not sit beneath the central ACCELERATE POLAND badge.
- Numeric evidence labels should explain their meaning directly; avoid ambiguous ranges such as “01—06”.
- Present the six-pillar model as six named, icon-supported areas—Wiedza, Technologia, Biznes, Nauka, Administracja and Kapitał—rather than as an unexplained oversized number.
- Use the approved graphic-language-pack master for the shared six-pillar visual: a dark institutional grid, a full-height red programme core, and three paired rows containing the six named pillars with their short descriptors. Keep the same master on the homepage and `/inicjatywa`.
- Programme icons use a muted grey resting state and return to full black on hover or keyboard focus.
- Desktop navigation uses restrained Phosphor line icons that reveal before Inicjatywa, Programy, Akceleracja, Granty and Partnerzy on hover or keyboard focus.
- Footer navigation mirrors the line-icon reveal for all six links, including Kontakt, and changes the icon and label to red on hover or keyboard focus.
- Large ecosystem totals may use restrained, viewport-triggered count-up animation with a reduced-motion fallback.
- The first standalone content route is `/inicjatywa`. It reuses the approved homepage identity, exact supplied Polish initiative copy, the named six-pillar system and real Polish photography; subpage navigation routes back to homepage anchors for Programy, Akceleracja, Granty, Partnerzy and Kontakt.
- The standalone Programy route is `/programy`. Keep all four programmes visually equal, use the supplied Polish names and descriptions verbatim, and do not invent programme outcomes, eligibility rules or detailed claims before Hubert supplies them.
- On the Programy hero, cards 02 Innovation Nation and 03 Architekci Cyfrowego Jutra keep their light surface on hover/focus; only the number, programme name, arrow and icon turn Polish red.
- Across all routes, card interactions that reveal grey or graphite use a bottom-to-top fill animation. Keep red, photography and non-grey hover treatments unchanged, and preserve a reduced-motion fallback.
- The four “Zapytaj o program” links on `/programy` rest with a right-pointing arrow, then transition smoothly to the up-right diagonal arrow on hover or keyboard focus.
- The standalone Akceleracja route is `/akceleracja`. It uses the supplied V2V copy verbatim, makes the four custom V2V stage icons the primary graphic system, and supports them with the licensed Katowice workshop photograph and approved digital patterns. Do not replace the V2V graphics with generic acceleration imagery.
- The standalone Partnerzy route is `/partnerzy`. Keep the supplied four partner categories explicit, use the network diagram and category pictograms as its primary graphic system, and support it with the licensed Gdańsk business photograph. Qualify the “60+” figure as information stated in the supplied materials, and show referenced technology-company names as typography rather than unverified logo artwork.
