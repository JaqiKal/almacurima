# The 5 Planes of Web Development: A Blueprint for Almacurima

In the ever-evolving landscape of web development, a structured approach is essential for creating successful projects. This document outlines the **5 Planes of Web Development** as a comprehensive blueprint for **Almacurima**, a wellness brand website that promotes holistic services including lymphatic massage, herbal therapy, and personal development coaching.

Each plane—**Strategy, Scope, Structure, Skeleton, and Surface**—offers a clear framework for making purposeful design and development decisions.

By applying these principles, Almacurima seeks to create a calming, intuitive, and trustworthy user experience that supports client engagement and communicates the brand's holistic values. Special attention has been given to visual choices such as typography, color, and layout to ensure the design reflects balance, clarity, and warmth.

*Welcome to explore the details that shape our vision and execution!*

## Contents

- [Strategy (Why?)](#strategy-why)
- [Scope (What?)](#scope-what)
- [Structure (How does it work?)](#structure-how-does-it-work)
- [Skeleton (How is it designed?)](#skeleton-how-is-it-designed)
- [Surface (What does it look like?)](#surface-what-does-it-look-like)

---

## Strategy (Why?)

Almacurima is designed to serve individuals seeking wellness and balance through natural methods. By offering services such as lymphatic massage, herbal knowledge, and coaching, the brand promotes sustainable self-care and mind-body awareness. The strategy focuses on clear communication, personal trust, and an emotionally safe digital experience.

Key goals include:

- Promote holistic wellness services in a professional and accessible way
- Reflect the founder's values of care, calm, and connection
- Offer a scalable, responsive web platform to support bookings, education, and client relationships

## Scope (What?)

This section defines the core functionality and features of the Almacurima website. The scope covers all frontend aspects with the option to extend backend functionality in the future.

### Technology Stack

- **React** with **Vite**: Component-based UI with fast development experience
- **Tailwind CSS** + Custom CSS: Utility-first styling with semantic class names
- **React Router**: SPA navigation
- **GitHub Pages**: Static hosting of the frontend site

### User Stories (Initial MVP)

- As a visitor, I can view information about available wellness services
- As a client, I can contact the practitioner via a form
- As a visitor, I can view the practitioner’s resume or portfolio
- As a client, I can find details about upcoming events or offers

### Summary of Core Features

- Hero landing section with brand message and CTA buttons
- About section with personal introduction and skills
- Services overview (massage, herbs, coaching)
- Contact form with responsive layout and feedback message
- Dark/light mode toggle
- Footer with copyright, icon links, and favicon credit

## Structure (How does it work?)

The Structure Plane defines how users interact with and move through the site. Almacurima follows a single-page application structure with clearly defined navigation routes and consistent content sections.

### Platform Structure

- Top-level routing: `/` for homepage, anchor scrolling for sections
- Component hierarchy:
  - `App.jsx` wraps the layout and routing logic
  - `MasterLayout.jsx` contains shared elements (Navbar, Footer)
  - Individual sections are modular components (Hero, About, Resume, Contact)

### Flow Diagram  <!-- TODO : chart image to be added -->

User opens landing page → Reads about services → Chooses to view resume or contact → Sends message

## Skeleton (How is it designed?)

The Skeleton Plane concerns the layout, hierarchy, and component interaction.

### Layout Principles

- **Mobile-first** layout with responsive breakpoints
- **Consistent margins and paddings** via Tailwind spacing scale
- **Component reusability**: buttons, headings, containers, form fields

### Key UI Patterns

- Navigation with dark/light toggle + hamburger menu
- Expandable skill grid for mobile
- Image-text split layout for contact form

## Surface (What does it look like?)

The Surface Plane focuses on the visual interface and how users experience the site through color, typography, layout, and imagery. Almacurima's design choices are aimed at creating a tranquil and engaging interface that supports the brand's identity and message.

### Color Scheme    <!-- TODO : to be decided -->

Almacurima uses a custom palette that communicates calmness, femininity, and clarity:

| Name     | Hex      | Usage                     |
|----------|----------|---------------------------|
| Gold     | `#ffc502`| Highlights, labels, CTA   |
| Sand     | `#f2d398`| Default text, backgrounds |
| Pink     | `#fa2dab`| Alerts, CTA details       |
| Black    | `#0e0b0e`| Main background           |
| White    | `#ffffff`| Contrast, clean sections  |

All colors have been tested for WCAG AA accessibility compliance to ensure readability.

### Typography

We use a self-hosted font stack with clear typographic hierarchy:

- **Poppins**: Primary font used for most body text and UI elements. Offers a modern, rounded, and approachable feel.
- **Cinzel Decorative**: Used sparingly for H1/H2 to create visual identity and ceremonial elegance.
- **Open Sans**: Acts as a fallback font for maximum readability and wide system support.
- **sans-serif**: System-wide fallback to ensure graceful degradation.

```css
font-family: 'Poppins', 'Open Sans', 'Cinzel Decorative', sans-serif;
```

Fonts are loaded in `.woff2` format for performance and GDPR compliance.

### Spacing & Layout

Spacing and flow are structured using a consistent mobile-first system based on a 4/8/16 unit scale:

- Section padding: `py-16` on mobile, `py-24` on desktop
- Container width: `max-w-7xl` with horizontal padding `px-4`
- Vertical spacing uses Tailwind utility classes or equivalent custom CSS rules

This ensures a harmonious and readable layout on all screen sizes.

### Iconography & Favicon

Icons are minimal, meaningful, and stylistically coherent:

- **FontAwesome** and **Heroicons** are used for UI
- **Icons8** provides branding elements and the favicon (credited appropriately)
- All icons are accessible (with `aria-labels`) and styled for dark/light mode compatibility

---

[Back to the Top](#the-5-planes-of-web-development-a-blueprint-for-almacurima)
