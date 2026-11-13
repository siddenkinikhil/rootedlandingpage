# Rooted Nursery: Landing Page

A responsive landing page for a fictional plant nursery in Hyderabad, built with plain HTML, CSS and JavaScript (no frameworks or build step).

## Features
- Sticky navbar with working anchor links, active-section highlighting and a hamburger menu on mobile
- Hero section with heading, description and two call-to-action buttons
- About Us, Services and Contact sections
- Expandable service cards ("More details")
- Contact form with client-side validation and a success message
- Responsive layout (tested at desktop, tablet and phone widths)

## How to run
1. Clone or download this repository.
2. Open `index.html` in any modern browser. No install needed.

Optional, to use a local server:
```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Files
```
index.html   page structure and content
style.css    styling and responsive rules
script.js    menu, scroll highlighting, card toggles, form validation
```

## Notes
- The contact form does not send data anywhere; it validates input and shows a confirmation message.
- Fonts (Bricolage Grotesque, DM Sans) load from Google Fonts. The page falls back to system fonts offline.

## Screenshots
All screenshots are in the `screenshots/` folder:

| File | What it shows |
|---|---|
| `01-desktop-hero.png` | Desktop navbar and hero |
| `02-desktop-full-page.png` | Full page on desktop |
| `03-desktop-services-expanded.png` | Services with a card opened |
| `04-desktop-form-validation.png` | Contact form error messages |
| `05-tablet-full-page.png` | Full page at tablet width |
| `06-mobile-hero.png` | Mobile hero |
| `07-mobile-full-page.png` | Full page on mobile |
| `08-mobile-menu-open.png` | Mobile hamburger menu open |
