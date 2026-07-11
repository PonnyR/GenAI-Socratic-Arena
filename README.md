# GenAI Socratic Arena

[Open the public GitHub Pages site](https://ponnyr.github.io/genai-socratic-arena/)

An English-language interactive prototype for an AI-powered business debate learning platform. The experience turns a business decision into a structured Socratic practice session with competing AI personas, evidence prompts, formative feedback, and instructor oversight.

## Prototype routes

- `/` — product landing page and teaching-method overview
- `/student` — student dashboard and assignment entry point
- `/arena` — interactive debate experience
- `/results` — post-debate formative scorecard
- `/instructor` — cohort analytics and review dashboard

The debate interaction is currently a front-end prototype with realistic scripted responses. It does not yet call an LLM, persist student data, or connect to university authentication.

## Run locally

Requires Node.js 22.13 or later.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm run build
node --test tests/rendered-html.test.mjs
```

## GitHub Pages

The public site is deployed automatically from the `main` branch through the
workflow in `.github/workflows/deploy-pages.yml`. The Pages build preserves all
front-end interactions while publishing a fully static version under the
repository path.

## Next implementation phase

1. Connect CityUHK or Microsoft Entra ID authentication.
2. Add the Arena state machine and server-side session persistence.
3. Implement the controlled multi-agent orchestration layer.
4. Add the approved knowledge-base ingestion and citation-verification pipeline.
5. Add consent, retention, audit, and de-identified research-export workflows.

The detailed product and implementation roadmap is available in `WEBSITE_PLAN.md`.
