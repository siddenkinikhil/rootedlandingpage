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


