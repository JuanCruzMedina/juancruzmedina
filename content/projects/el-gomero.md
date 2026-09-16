---
title: "El Gomero"
---

## Context

El Gomero is a neighborhood tire shop in Córdoba, Argentina. For more than fifteen years, its catalog, stock, and pricing lived across fragmented Excel files. Every price update meant manual edits, copy-paste between sheets, and the risk of stale or inconsistent data reaching customers.

I had already worked with this client since 2020 on a standalone tool that normalized tax files from ARCA (Argentina's tax agency). In 2026 that relationship grew into a full platform: a single system covering inventory, sales, reporting, and the public storefront, with the ARCA tool folded in as one more feature instead of a separate app.

## My role

End-to-end ownership, solo: product shape, data model, migration from fifteen years of historical spreadsheets, backend, admin UI, and the public storefront. The primary users are non-technical staff running daily operations, so the interface had to stay simple enough to use without developer intervention, while still giving the owner enough visibility to run the business.

The owner stayed engaged as an active stakeholder: he drove new requests and bug reports through an in-app ticketing system, opening dozens of tickets over the first months of production use. It was a real feedback loop, not a build-and-forget project.

![El Gomero ticketing system with an owner-reported request and a developer response](/projects/el-gomero/tickets.png)

## What we built

![El Gomero dashboard showing daily sales, critical stock alerts, and top-selling tire sizes](/projects/el-gomero/dashboard.png)

### Inventory across seven catalogs

The shop sells seven kinds of product: used tires, new tires, steel wheels, alloy wheels, anti-theft devices, helmets, and motorcycle tires, each with its own identification logic. A used tire, for example, is graded by condition (excellent, good, worn) on top of size and brand, while a helmet needs none of that. Rather than force everything into one generic "product" model, each catalog has its own filters, inline price/stock editing, and pagination.

Stock only moves through recorded sales, never manual edits, with automatic reversal when a sale is voided. Every change is audited: who did what, when, and what the value was before and after.

### Sales, built for daily volume

Beyond a standard sales ledger with combinable filters (date, category, brand, payment method, free text) and CSV export, the most distinctive piece is bulk sale entry: keyboard shortcuts, draft autosave, sale duplication, and a review screen before confirming. It's designed for someone entering dozens of sales in a row during a busy afternoon, not for a one-off form.

![Bulk sale entry screen with keyboard shortcuts and draft autosave](/projects/el-gomero/bulk-sales.png)

### Reporting and administration

Nine report views (sales by month/day/category, payment method breakdowns, top-selling tire sizes and services, per-product detail) turn the same transactional data into something the owner can act on without asking anyone to pull a spreadsheet. On the admin side: full audit trails, role-based permissions (Admin/Operator), bulk stock upload via CSV, and a small CMS so the owner can edit the public price list's copy without touching code.

![Reports section with monthly sales and top tire sizes](/projects/el-gomero/report.png)

### Public storefront

The storefront exposes a filterable, always-current price list (by category and tire size) drawn from the same data the backoffice writes to. Publishing a price change takes effect immediately, instead of a manual export cycle. A global search bar understands tire sizes typed in whatever format a customer might paste ("195/65/15", "195 65 15", "195/65 R15"). If prices fail to load, the fallback is a direct WhatsApp contact link instead of a technical error.

![El Gomero public storefront landing page](/projects/el-gomero/landing.jpg)

### The ARCA tool, folded in

The original ARCA tax-file normalizer, previously a separate app, now lives inside the platform as a utility that runs entirely in the browser (the file never touches a server). Consolidating it here removed a second app and deploy surface for the same client, at the cost of some duplicate UI work earlier on.

## Technical notes

Next.js, TypeScript, and Prisma over PostgreSQL on Neon make up the application and data layer, styled with Tailwind CSS and a full dark mode that persists per user. Sessions run on JWTs with rate limiting on login and bulk operations, and the whole thing installs as a PWA for daily use on shop devices. In production, error tracking, uptime monitoring, and storefront analytics run alongside health checks split by cost, so routine monitoring doesn't wake up the database unnecessarily.

Migrating fifteen years of real, messy spreadsheet history took two passes. Brand names had inconsistent spellings, tire sizes came in mixed formats, and the same physical item often showed up as duplicate rows. The first migration attempt was discarded; the second used a staging step with hard validation and an exported report of rejected rows, which was worth the extra time.

## By the numbers

- **1,409 inventory items** migrated from the original spreadsheets across all seven catalogs, plus **40,000+ historical sales records** dating back to 2013.
- **~1,900 new sales** recorded in the first five months of production use.
- **371 commits** over roughly seven months of continuous development, starting from a blank foundation in February 2026.
- Dozens of feedback tickets from the owner in the first months of use, each closed with a comment and a visible changelog entry inside the app.

## Outcomes

- Replaced fifteen years of spreadsheet fragmentation with one system where a price update reaches the public site immediately, not through a manual export cycle.
- The ARCA tool and the core platform are now one product instead of two separate side projects for the same client.
- The system grew past its original scope during real use: new catalogs (helmets, motorcycle tires) and modules (tickets, changelog, CRM-style customer records) were added as the shop's actual needs surfaced.

## What I'd do differently

I'd consolidate the ARCA tool into the main platform earlier instead of maintaining it as a separate app for years first. The eventual merge was clearly the right call, and getting there sooner would have saved duplicate UI and deploy surfaces. I'd also start capturing a documented "before" benchmark (like time spent updating prices manually) before migration, since that kind of number is hard to reconstruct after the fact and would make the improvement easier to quantify going forward.
