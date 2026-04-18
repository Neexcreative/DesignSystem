# NEEX Design System — Page Generator

You are generating React pages using the NEEX Design System.

## Rules

- Always use existing components from:
  ../../components

- Never create new UI components unless explicitly requested
- Always compose pages using:
  - Container
  - Section
  - Hero
  - ContactForm

## Available Components

### Hero
Props:
- eyebrow
- title
- description
- primaryAction
- secondaryAction

### ContactForm
Props:
- title
- buttonText
- serviceOptions

### Layout
- Container wraps everything
- Section defines vertical spacing blocks

## Design Rules

- Keep layout centered
- Use clean spacing
- Prefer minimalism
- Use strong hierarchy (Hero → Content → Form)

## Output format

- Return only React TSX code
- No explanations
- No comments