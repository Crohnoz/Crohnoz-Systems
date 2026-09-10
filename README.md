# Crohnoz Systems

[![Quality Gate](https://github.com/Crohnoz/Crohnoz-Systems/actions/workflows/quality.yml/badge.svg)](https://github.com/Crohnoz/Crohnoz-Systems/actions/workflows/quality.yml)

**Public Portfolio Surface · Selected Systems & Engineering Work**

Crohnoz Systems is the bilingual presentation layer for selected work by Enrique Flores / Crohnoz Labs. Its purpose is to show **what operational problem was addressed, how the system was shaped and what can be demonstrated publicly** without pretending that every underlying production repository is open source.

> Understand the operation first. Then design the system.

## What this repository demonstrates

- bilingual ES / EN product presentation;
- responsive React interface built with Vite;
- selected system and project case summaries;
- screenshots and public-facing evidence where appropriate;
- service and delivery model focused on real operational workflows;
- reusable portfolio structure for systems, dashboards, commerce and automation work;
- explicit separation between public presentation and confidential implementation.

## Portfolio role

This repository is **not a product maturity claim**. It is a curated public surface that connects visitors with selected systems and supporting evidence.

The broader Crohnoz portfolio uses an evidence-based maturity model:

`L0 IDEA → L1 PROTOTYPE → L2 PILOT → L3 PRODUCTION → L4 SCALE`

Individual products are labeled separately according to the evidence available for each one. The flagship engineering reference remains FDR; experimental products such as Forge and Fresh Market are intentionally presented at earlier maturity levels.

## Public / private boundary

Public material may describe:

- the operational problem;
- the system boundary;
- architecture and technology choices;
- sanitized workflows;
- screenshots or demonstrations;
- measurable engineering evidence that can be disclosed safely.

Private material may include client data, credentials, production topology, internal infrastructure, private repositories and implementation details that do not belong in a public portfolio.

## Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- ESLint

## Quality gate

Every push and pull request to `main` runs:

```bash
npm ci
npm run lint
npm run build
```

The goal is simple: the public presentation surface should remain reproducible, lint-clean and buildable.

## Local development

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
```

## Related public work

- **Crohnoz profile / engineering evidence:** https://github.com/Crohnoz
- **Crohnoz Forge:** https://github.com/Crohnoz/Crohnoz-Forge
- **Crohnoz Fresh Market:** https://github.com/Crohnoz/Crohnoz-FreshMarket
- **IncluMe:** https://github.com/Crohnoz/IncluMe
- **Operational administration case:** https://github.com/Crohnoz/sistema_gestion_de_arriendos
- **Crohnoz Labs:** https://crohnozlabs.cl

## Engineering principle

**Evidence, not claims.**

A public case should make it possible to understand why a system exists and which engineering decisions can actually be demonstrated. Production status, scale and maturity are not inferred from screenshots or feature lists; they are stated only when the available evidence supports them.

---

**Problem → System → Evidence → Scale**
