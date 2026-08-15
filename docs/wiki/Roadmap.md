# Roadmap

**Wiki page** — product and go-to-market sequence through version 1  
**Status:** discovery / not built  
**Related:** [[Home]] (business case)

The same document lives in the repository at [`docs/wiki/Roadmap.md`](https://github.com/MvuyisiMcithwaCPUT/PropertyManagement/blob/docs/business-case-and-wiki/docs/wiki/Roadmap.md).

This page is the source of truth for *what we build in which order*. It covers two workstreams that move in parallel:

1. **The operations product** — four-sided fault management (work orders).
2. **The marketing website** — public story, waitlist, and signups so we can find the first owners, managers, tenants, and contractors.

Version 1 is a **production fault product used daily by one real portfolio**, plus a **live marketing site that can collect and confirm signups**. It is not a complete property-management suite.

---

## 1. Principles

- Prove **one fault** end to end before leases, rent, or accounting.
- Do not wait for v1 of the app to start talking to the market. A site that cannot take a signup is not a go-to-market asset.
- Charge (eventually) the **owner / manager** side. Tenants and contractors should be able to join without paying.
- Operating model: the property manager triages and dispatches; the owner is notified and only approves above a spend threshold.
- Keep the marketing site **separate from the application**. The site sells and captures interest; the app runs jobs.

---

## 2. Workstreams

| Workstream | Outcome | First proof |
| --- | --- | --- |
| **Operations product** | One live fault, four roles, no WhatsApp to close the job | A real leaking-geyser (or equivalent) run in the product |
| **Marketing website** | Public narrative + signup pipeline | A visitor can choose a role, submit a signup, and we can contact them |

These are not sequential gates for each other. Spec and build the site while the MVP is still being designed. Do **not** let the marketing site become a second product (no fake tenant portals on the brochure site).

---

## 3. Marketing website (signups and demand)

Build a public website for the solution **before** we need a crowd in the app. It exists to explain the fault-management thesis, collect the right waitlist, and feed MVP design with real role mix.

### 3.1 In scope for the marketing site (by v1)

- Positioning and story aligned with the [[Home|business case]] (four roles; fault as a work order).
- Clear primary audience on the home page: **owners and property managers** (the buyers), with secondary paths for tenants and contractors (the network).
- **Signups / waitlist:** name, email, role (owner, manager, tenant, contractor), optional portfolio size or trade.
- Confirmation (email or equivalent) and a simple “you’re on the list” state.
- Basic privacy notice and consent for us to contact them about early access.
- Contact or “talk to us” for managers who will not wait for a form.
- Role-appropriate next copy after signup (do not dump a tenant into an owner sales sequence).

### 3.2 Explicitly not the marketing site

- Logging into the operations product.
- Raising a real fault, uploading job photos, or dispatching contractors.
- Payments, invoicing, or a contractor marketplace.
- Full CMS / blog unless it unblocks SEO later; the first site can be a few pages.

### 3.3 Marketing-site releases

| Slice | Goal | Ships |
| --- | --- | --- |
| **MS-0** | Story is visible | One landing page: problem, four roles, fault thesis, waitlist CTA |
| **MS-1** | Signups work | Role-aware signup form, confirmation, store of leads we can export or view |
| **MS-2** | Serious buyers can convert | Owner/manager deeper page, “talk to us”, signup tagged by role and intent |
| **MS-3** (with v1) | Site matches a shippable product | Production hosting, analytics, unsubscribe/privacy, copy freeze to match v1 claims |

Signup data is an early **customer file**, not a product database. Keep it boring and private.

---

## 4. Operations product through version 1

The MVP is done when a real manager can run a leaking geyser (or equivalent) **without WhatsApp to finish the job**.

### 4.1 MVP

1. Properties and units — a unit identity every fault hangs off.
2. Four roles and a simple login — owner, manager, tenant, contractor, with role-appropriate views.
3. Tenant report — description, photos, unit, urgency.
4. Manager triage queue — priority, landlord vs tenant vs body-corporate duty, assign contractor.
5. Fault state machine — Reported → Triaged → Awaiting approval (if over threshold) → Scheduled → In progress → Blocked → Completed with evidence → Invoiced → Closed.
6. Owner visibility and spend gate — notified on every job; must approve when estimated spend exceeds the threshold; emergency override is recorded.
7. Contractor job pack — accept/decline, access slot, on-site notes, completion photos.
8. Access coordination — proposed time, tenant confirmation or key instruction, failed-visit / blocked state.
9. Unit history — closed jobs remain searchable on the unit for the next failure.
10. Notifications — in-app plus email (or SMS later) on next-action events only.

**Not MVP:** rent collection, owner statements, full lease CRM, contractor marketplace, inspections-only workflows, accounting exports, IoT.

### 4.2 Releases to v1.0

| Release | Goal | Ships |
| --- | --- | --- |
| **MVP** | One live job, four roles, no chat to close | Items 1–10 above; one property / small book |
| **v0.2** | Access stops being the failure mode | Diary, no-show handling, key/access notes, duplicate-fault detection |
| **v0.3** | Money is on the ticket | Quotes, threshold rules, extra-work sign-off, invoice attached to the job |
| **v0.4** | The file survives an argument | Permissions, immutable event log, photo/evidence retention, basic owner report |
| **v1.0** | Daily driver for one manager | Reliability, mobile-usable tenant and contractor flows, onboarding, SLAs, support runbook. Marketing site at MS-3. |

**v1 done when:** one real portfolio runs faults daily in the product, **and** the marketing site is live with working signups (not a static mock).

---

## 5. Suggested sequence (calendar-agnostic)

```text
Now          Spec + parallel build
 |           ├─ Wiki: Home (done), Roadmap (this page)
 |           ├─ Marketing MS-0 → MS-1 (landing + signups)
 |           └─ Product: fault lifecycle, roles, domain model
 |
 MVP         First live job in the app; marketing MS-1/MS-2 feeding waitlist
 |
 v0.2–v0.4   Access, money, evidence (product)
 |
 v1.0        Daily driver + marketing MS-3
 |
 After v1    Inspections, leases, planned maintenance, rent — see below
```

Do **not** start leases or rent until a real job has closed in the product.

---

## 6. After version 1 (not version 1)

- Incoming / outgoing inspections.
- Lease documents on the unit.
- Planned maintenance.
- Rent and arrears.
- Owner distributions and contractor payments.
- Body-corporate workflows.
- Marketing: insight content, referral, role-specific landing pages — only after the signup pipeline is trusted.

---

## 7. Open decisions that affect dates (not order)

- Geography and tenancy-law baseline.
- Spend-threshold and emergency-override policy.
- Stack for the app vs the marketing site (they may differ).
- How signups become product users (invite-only vs self-serve at v1).

Order does not wait on those decisions. Geography changes copy and legal; it does not remove the need for a signup form.

---

## Document control

- **Created:** 15 August 2026
- **Based on:** [[Home]] business case; product discovery (four roles, fault-management wedge)
- **Adds:** marketing website with signups as a first-class workstream through v1
