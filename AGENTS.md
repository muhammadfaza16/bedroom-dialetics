## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Writing & Content Guidelines

All articles and essays in *Bedroom Dialectics* must follow the **No AI Slop** editorial standard (`.agents/skills/no-ai-slop/SKILL.md`) and the **Bedroom Dialectics Essay Craft** framework (`.agents/skills/bedroom-dialectics/SKILL.md`):
- Avoid AI cliches and generic templates (*"It's not X, it's Y"*, *"In today's fast-paced world"*, *"The future is already here"*).
- Ground arguments in concrete mechanisms, sensory details, and specific lived observations.
- Preserve authentic human voice, cadence, honest uncertainty, and personal reflections.
- Apply the 3-step dialectic (Thesis -> Antithesis -> Synthesis) and street-to-theory conceptual leaps.
- Pure prose essays without code blocks or unnecessary artificial diagrams.
- Punctuation rules: Zero em-dash (`—`), zero colon (`:`) in body prose, zero semicolon (`;`).

## Shorthand Commands

Recognize and execute these shorthands immediately whenever entered by the user:

- **`/unslop [text|file]`** or **`unslop [text|file]`**: Edit and clean the draft from AI slop, returning the polished prose + brief "What Changed" breakdown.
- **`/check-slop [text|file]`** or **`cek slop [text|file]`** or **`slop? [text|file]`**: Audit mode — scan and list all detected AI slop patterns with quotes and brief fixes without rewriting.
- **`/draft [topic]`** or **`tulis [topic]`** or **`/essay [topic]`**: Generate a new essay for *Bedroom Dialectics* strictly following the No AI Slop and Bedroom Dialectics dialectical guidelines.
