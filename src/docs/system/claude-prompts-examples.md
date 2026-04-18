# NEEX Design System — Claude Context

This design system is built with React, TypeScript and Storybook.

## Structure

### Foundations
- colors
- typography
- spacing
- radius
- shadows

### Components
- Button
- Card
- Badge
- Input
- Select
- Textarea
- Container
- Section
- SectionTitle

### Patterns
- Hero
- ContactForm

### Templates
- LandingPage

---

## Visual language
- Premium, clean, modern
- Strong contrast
- Soft light backgrounds
- Dark burgundy primary tone
- Rounded corners
- Soft shadows
- Clear spacing and hierarchy

---

## Component rules

### Button
Variants:
- primary
- secondary
- ghost

Use for:
- CTA
- actions
- form submit

### Card
Use for:
- grouped content
- feature blocks
- service blocks

### Badge
Use for:
- labels
- small highlights
- section markers

### Input
Use for:
- single-line text fields

### Select
Use for:
- option selection

### Textarea
Use for:
- longer text input

### Container
Use for:
- page width control
- horizontal layout consistency

### Section
Use for:
- vertical spacing between page blocks

### SectionTitle
Props pattern:
- eyebrow
- title
- description

Use for:
- section headings
- hero copy
- content intros

---

## Pattern rules

### Hero
Props:
- eyebrow
- title
- description
- primaryAction
- secondaryAction

Use for:
- top section of landing pages
- brand introduction
- CTA header

### ContactForm
Props:
- title
- buttonText

Use for:
- enquiry forms
- lead capture
- project contact blocks

---

## Template rules

### LandingPage
Built from:
- Container
- Section
- Hero
- ContactForm

Use this template as a base for:
- lead generation pages
- studio pages
- service landing pages

---

## Instruction for page generation
When generating new pages, prefer composing pages from existing:
1. components
2. patterns
3. templates

Do not invent a new visual style unless explicitly requested.
Prefer reuse over custom one-off UI.
Keep the same premium visual language.