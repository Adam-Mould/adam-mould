# adam-mould

Adam Mould's personal portfolio site, built on the Tailwind Plus "Spotlight" template (Next.js App Router, Tailwind CSS v4, MDX articles).

## Agent skills

### Issue tracker

Issues live in GitHub Issues on Adam-Mould/adam-mould, via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one root `GLOSSARY.md` plus `docs/adr/`, created lazily. See `docs/agents/domain.md`.

## Articles

Articles are built but hidden: `/articles` and `/feed.xml` return 404 until the first `src/app/articles/<slug>/page.mdx` exists. When publishing the first one, also add `Articles` back to the nav in `src/components/Header.tsx` and `src/components/Footer.tsx`, and restore the RSS `alternates` entry in `src/app/layout.tsx` metadata.
