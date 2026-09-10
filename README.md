<div align="center">

<img src="https://raw.githubusercontent.com/Crohnoz/Crohnoz/main/brand/assets/logo-horizontal-dark.svg" alt="Crohnoz Labs" width="360" />

# Crohnoz Systems

### Public Portfolio Surface · Operational Systems & Engineering Work

**A curated interface to the systems, engineering decisions and public evidence behind Crohnoz Labs.**

[![Quality Gate](https://github.com/Crohnoz/Crohnoz-Systems/actions/workflows/quality.yml/badge.svg)](https://github.com/Crohnoz/Crohnoz-Systems/actions/workflows/quality.yml)

<a href="https://github.com/Crohnoz"><img src="https://img.shields.io/badge/PROFILE-ENRIQUE_FLORES-8B5CF6?style=for-the-badge" height="34" alt="Enrique Flores profile" /></a>
<a href="https://github.com/Crohnoz/Crohnoz/tree/main/evidence"><img src="https://img.shields.io/badge/EXPLORE-PUBLIC_EVIDENCE-3B82F6?style=for-the-badge" height="34" alt="Public evidence" /></a>
<a href="https://crohnozlabs.cl"><img src="https://img.shields.io/badge/ENTER-CROHNOZ_LABS-EC4899?style=for-the-badge" height="34" alt="Crohnoz Labs" /></a>

**Problem → System → Evidence → Scale**

</div>

---

## Portfolio role

Crohnoz Systems is the public presentation layer for selected work by **Enrique Flores / Crohnoz Labs**. It is deliberately different from a source-code catalog: the goal is to explain **what operational problem exists, how the system is shaped, which engineering decisions matter and what can be inspected safely**.

> **Evidence is public by design. Implementation is private by default.**

The surface is bilingual, responsive and built to connect visitors with curated engineering cases without implying that every underlying production repository is open source.

---

## Current portfolio hierarchy

| System | Public role | Maturity / position | Primary evidence |
|---|---|---|---|
| **FDR** | Flagship healthcare operations system | `L2+ · Advanced Pilot` | Domain integrity · public/private boundaries · lifecycle · staging · regressions |
| **Rental Operations** | Selected operational engineering case | Operational evidence | Financial rules · traceability · environment isolation · RLS |
| **Crohnoz Forge** | Product reasoning R&D | `L1 · Prototype / R&D` | Discovery · assumptions · evidence · stage gates · local-first workflow |
| **Crohnoz Fresh Market** | Retail operations R&D | `L1 · Prototype / R&D` | Perishable inventory · FEFO · continuity · backend controls |
| **IncluMe** | Accessibility / civic product exploration | `L1 · Early Product` | Citizen + institutional workflows · geospatial UX · review loops |

Maturity is intentionally explicit. A polished demo does not automatically equal a production system.

---

## What this repository demonstrates

| Surface | Engineering signal |
|---|---|
| **Product presentation** | Operational problems are explained before technology choices |
| **Responsive React UI** | Public evidence remains usable across desktop and mobile |
| **Case-oriented portfolio** | Systems are presented through problem, architecture, evidence and maturity |
| **Public/private separation** | Sensitive client implementation remains outside the public surface |
| **Portfolio contract** | CI prevents key positioning, maturity, brand and evidence links from drifting silently |
| **Reproducible delivery** | Node 20, validation, linting and production build are enforced consistently |

---

## Engineering principle

### **Understand the operation first. Then design the system.**

A public engineering case should make it possible to answer four questions quickly:

1. What real problem is being solved?
2. Which operational rules shape the system?
3. What engineering behavior can actually be inspected?
4. What maturity can honestly be claimed today?

Screenshots, feature counts and technology badges are supporting evidence—not substitutes for those answers.

---

## Public / private boundary

**Safe to expose:** sanitized architecture, product behavior, public demos with fictitious data, engineering decisions, test strategy, privacy controls and stable non-sensitive evidence.

**Kept private:** credentials, customer data, private infrastructure, production topology, proprietary implementation, internal repositories and client-confidential logic.

---

## Technology

`React` · `Vite` · `JavaScript` · `Tailwind CSS` · `ESLint` · `Node 20`

<details>
<summary><strong>Quality gate and local development</strong></summary>

<br/>

The repository pins Node through `.nvmrc` and validates the public portfolio contract before lint/build.

Every push and pull request to `main` runs:

```bash
npm ci
npm run validate:portfolio
npm run lint
npm run build
```

The validator checks, among other things:

- FDR remains the declared `L2+` flagship;
- Forge/Fresh Market remain explicitly `L1` unless intentionally advanced;
- key case-study and demo links are present;
- Crohnoz brand typography remains Sora + Inter;
- the old `Full-Stack Developer` positioning does not return;
- required public assets are present.

Run the full local gate with:

```bash
npm run check
```

Local development:

```bash
nvm use
npm ci
npm run dev
```

</details>

---

## Explore the evidence

| Destination | Purpose |
|---|---|
| **[Enrique Flores / Crohnoz profile](https://github.com/Crohnoz)** | Main professional portfolio surface |
| **[Public Evidence Library](https://github.com/Crohnoz/Crohnoz/tree/main/evidence)** | Curated engineering case studies |
| **[Crohnoz Forge](https://github.com/Crohnoz/Crohnoz-Forge)** | Product reasoning and discovery R&D |
| **[Crohnoz Fresh Market](https://github.com/Crohnoz/Crohnoz-FreshMarket)** | Fresh-retail operational modeling R&D |
| **[IncluMe](https://github.com/Crohnoz/IncluMe)** | Accessibility and civic-product exploration |
| **[Crohnoz Rental Ops](https://github.com/Crohnoz/Crohnoz-Rental-Ops)** | Operational rules, finance and data isolation |
| **[Crohnoz Labs](https://crohnozlabs.cl)** | Main product-engineering ecosystem |

---

<div align="center">

### Crohnoz Labs

**Tecnología que resuelve problemas reales.**

`BUILD` · `INTEGRATE` · `AUTOMATE` · `OBSERVE` · `PROTECT` · `IMPROVE`

</div>
