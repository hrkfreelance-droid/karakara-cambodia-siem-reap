# KARAKARA Cambodia V2 — visual system

## Surface

- Mobile-first static store-access page for Siem Reap.
- Matcha Times Cambodia-derived composition: fixed background image, centered 390px page, compact logo/location pill, one direct-on-background store information block, actions, optional socials, footer.
- The V1 dark palette, red accent, thin borders, and restrained surface language remain without a large translucent card.

## World

- Dark charcoal overlay over the supplied KARAKARA background PNG.
- The main store information has no panel, border, radius, or backdrop blur. A localized radial dark gradient behind the content preserves contrast while keeping the supplied background visible.
- Supplied logo SVG, background PNG, and menu PDF are used without editing or regeneration.

## Type

- Display fallback: Syne. UI/body: DM Sans for neutral mobile readability.

## Interaction

- Call is hidden until a confirmed phone number exists; Location uses the supplied Google Maps URL; Menu is always available.
- Menu is a direct link to `assets/menu.pdf`; no intermediate page or custom PDF viewer is shown.
- Foodpanda uses the supplied Siem Reap HTTPS store URL; no unverified app scheme is introduced, so compatible platform handling can use the normal link and browsers fall back to the web page.
- Hover is supplemental; focus-visible, pointer-down feedback, and keyboard Escape closing are supported.

## Confirmed data

- Phone: `097 367 4978`
- Hours: Mon–Sat 11:00–21:30 / Sun closed
- Address: `Sivutha Blvd, Krong Siem Reap`
- Location: the user-provided Google Maps short URL in `site-config.js`
- Social URLs remain optional and are hidden until supplied.
