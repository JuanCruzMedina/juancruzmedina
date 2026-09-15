---
title: "Tire Shop Management Platform"
---

## Context

Neumáticos Usados Córdoba is a neighborhood tire shop in Córdoba, Argentina. For more than fifteen years, catalog, stock, and pricing lived across fragmented Excel files. Updates to the public price list meant manual edits, copy-paste, and risk of stale or inconsistent data.

I have worked with this client since 2020—first on desktop tooling to normalize tax files from ARCA (Argentina's tax agency), later on a standalone web app, and now on a single integrated platform.

## My role

End-to-end ownership: product shape, data model, migration from historical spreadsheets, backend and admin UI, and the public storefront. The users are non-technical staff; the interface had to stay simple enough for daily operations without developer intervention.

## What we built

**Backoffice** — One place for catalog, inventory, pricing, and contact details. Staff update availability and prices through a lightweight workflow instead of editing spreadsheets.

**Public site** — [neumaticosusadoscba.com](https://neumaticosusadoscba.com/) exposes a filterable, always-current price list driven from the same data. Publishing changes takes minutes, not a manual export cycle.

**ARCA integration** — Tax file normalization (previously a separate tool) now lives inside the platform. Accounting-related imports stay in the same system the shop already uses for stock and sales.

## Technical notes

- **Next.js** and **TypeScript** for the web app and API surface.
- **PostgreSQL** on **Neon** for a managed, low-ops database with room to grow.
- **Tailwind CSS** for a consistent UI without heavy custom CSS overhead.
- Migrations and modeling focused on real legacy data—not greenfield schemas—so historical stock and pricing could be trusted after cutover.

## Outcomes

- Replaced fifteen years of spreadsheet fragmentation with a single source of truth.
- Public pricing stays aligned with internal stock without duplicate maintenance.
- Long-lived client relationship (2020 → today) with tooling that evolved in place instead of throwing away prior work.

## What I'd do differently

Earlier consolidation would have saved duplicate UI and deploy surfaces. Folding ARCA into the main app earlier was the right call; the portfolio now reflects one product, not two side projects for the same shop.
