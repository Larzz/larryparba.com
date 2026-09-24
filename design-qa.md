# Design QA — Larry Parba homepage

- Source visual truth: `/Users/larryparba/Downloads/stitch_larry_parba_tech_portfolio/screen.png` and its accompanying `code.html` and `DESIGN.md` as visual/source references.
- Implementation: [desktop capture](artifacts/design-qa/implementation-composite.png), [mobile capture](artifacts/design-qa/mobile-top.jpg).
- Full-view comparison: [source left, implementation right](artifacts/design-qa/design-comparison.png).
- Focused comparisons: [header, hero, logo, metrics](artifacts/design-qa/design-comparison-hero.png); [booking and form](artifacts/design-qa/design-comparison-booking.png).
- Viewport and state: homepage, light theme, initial desktop state at 1250 × 800 CSS px; mobile checked at 390 × 844 CSS px. Desktop capture is assembled from six 1250 × 800 browser viewport screenshots to avoid a browser full-page screenshot stitching defect. The sticky header is omitted from the overlapping slices after the first.
- Pixel dimensions and density normalization: source 499 × 1600 px; implementation 1250 × 3987 px at the browser's output density; implementation normalized to 499 × 1592 px for a same-width comparison. The comparison canvas is 998 × 1600 px. The source's CSS viewport and device pixel ratio are not embedded in the PNG, so its CSS width cannot be verified; normalization uses the image width. The implementation's browser reported a 1250 px CSS viewport and no horizontal overflow.

## Findings

No actionable P0, P1, or P2 visual differences remain. The same Material Symbols terminal mark, Space Grotesk heading family, Geist body family, JetBrains Mono data labels, blue accents, dot-grid hero, service-card grid, pipeline panel, result card, and booking layout are present. The major section boundaries and overall page height align in the normalized full-view comparison.

The source's testimonial and guarantee/ROI metrics are illustrative and not substantiated by this portfolio's data. The implementation uses Larry's existing profile, actual contact address, and a conservative selected-project count. This is an intentional copy difference. The production experience card is not presented as a client quotation.

P3: Text density in the pipeline and result cards differs slightly because the copy was grounded in the existing portfolio. The desktop mock does not define a mobile target, so mobile QA covers legibility, navigation, and overflow rather than exact visual parity.

## Comparison history

1. Initial comparison showed the hero headline wrapping “AI” on the second line, wider pipeline/result panels, and cumulative vertical drift before booking. These were P2 layout issues. The headline width, panel widths, second-row card height, and section padding were refined.
2. The final desktop comparison linked above shows the three-line headline wrapping “AI automations.” together, aligned pipeline/result/booking section starts, and an implementation height of 1592 normalized pixels against the 1600-pixel source. Focused hero and booking comparisons show matching geometry and control placement.

## Interaction and code checks

- Production build passed (`npm run build`); TypeScript and targeted ESLint for changed TSX files passed.
- Mobile menu opens and closes, its Services link navigates and dismisses the drawer, the Book link reaches the booking form, focus-area selections and required name/email fields are functional, and no browser console errors appeared in the production preview.
- Mobile document width equals the 390 px viewport. Form submission was not sent to Formspree during QA.
- Repository-wide `npm run lint` still reports unrelated existing errors in `components/site/theme-toggle.tsx`, `lib/mongodb.ts`, and `lib/mongoose.ts`.

final result: passed
