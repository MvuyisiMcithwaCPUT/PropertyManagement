# Property Management Platform

**Working name:** PropertyManagement  
**Wiki home** — product north star and business case  
**Status:** discovery / not built  
**Repository:** [MvuyisiMcithwaCPUT/PropertyManagement](https://github.com/MvuyisiMcithwaCPUT/PropertyManagement)

This page is the first source of truth for *why* we are building the product, *who* it is for, and *what* we will prove first. Sequence and releases — including the marketing website and signups — are on [[Roadmap]].

The same document lives in the repository at [`docs/wiki/Home.md`](https://github.com/MvuyisiMcithwaCPUT/PropertyManagement/blob/docs/business-case-and-wiki/docs/wiki/Home.md).

---

## 1. Executive summary

Residential landlords and the people around them still run maintenance on WhatsApp, phone calls, and memory. When something breaks, four parties need to act together: the **tenant** who lives with the fault, the **property manager** who must triage and dispatch, the **contractor** who must get on site and get paid, and the **owner** who pays and carries the asset risk.

Today that loop has no shared state. Reports are incomplete. Access visits fail. Spend is authorised verbally, then disputed. Jobs close with no photos, no invoice on the unit file, and no history for the next failure.

We will build a **four-sided property operations product**, starting with **fault management** (work orders): a single ticket that carries status, access, spend authority, and evidence until it is closed. Rent collection, full accounting, and lease CRM are real needs, but they are later products. If we cannot make one leak trustworthy for all four roles, we should not expand scope.

**First bet:** a property manager–led fault lifecycle, with the owner in the money-and-proof loop rather than in the dispatcher seat.

---

## 2. Problem

### 2.1 The job that fails

A fault is not “a tenant complaint”. It is a **work order** that must travel through people, access, money, and proof. The current tools (chat, email, spreadsheets, generic ticketing) do not model that job.

### 2.2 What goes wrong, stage by stage

| Stage | Failure | Consequence |
|---|---|---|
| Report | Incomplete description; duplicates; wrong person notified | Re-asking, delay, contractor arrives blind |
| Triage | No shared definition of emergency vs wait; unclear who may spend | Burst geyser treated like a dripping tap, or the reverse |
| Dispatch & access | Diary, keys, tenant-at-home, contractor no-show | Failed visit costs the contractor; tenant still has a leak |
| Authority & money | Verbal quotes; owner lag; extra work found on site | Job stalls, or invoice is disputed after the fact |
| Close-out | No photos, warranty, or invoice tied to the unit | No history; deposit fights; owner distrust |

### 2.3 Pain by role

- **Tenant:** repeats themselves, hears silence, lives with the problem, fears being blamed at deposit time.
- **Property manager:** drowned in chats; spends the day chasing access; liable if they pick the wrong contractor or spend without a trail.
- **Contractor:** vague scope, failed access visits, slow payment, extra work with no sign-off.
- **Owner:** surprise invoices, no visibility, no unit history, paid management with no proof the asset was actually fixed.

The pains that decide whether software is worth paying for are **proof**, **latency** (how long they sit in the dark), **trust**, and **portable history** if the manager or contractor changes.

---

## 3. Customers and operating model

### 3.1 Roles (in scope)

| Role | Job in the first product |
|---|---|
| Tenant | Report a fault, provide access, see status, confirm the problem is gone |
| Property manager | Triage, prioritise, assign contractor, coordinate access, keep the file clean |
| Contractor | Accept or decline, attend, record evidence, submit completion and invoice |
| Owner | See open faults and spend; approve above a threshold; retain an audit trail |

### 3.2 Chosen operating model (assumption)

**Property manager triages and dispatches. Owner is notified and only approves above a spend threshold.**

Rationale: all four roles stay essential; the owner is not turned into a full-time dispatcher; the manager can move emergency work; money remains visible and gated.

Not in the first wedge: tenant-to-contractor marketplace (unmanaged matching) as the default path.

### 3.3 Who we are *not* targeting first

- Large enterprise portfolios with existing CAFM / Yardi / MRI stacks (different buyer, longer sales cycle).
- Pure accounting or tenant-portal clones with no work-order depth.
- Commercial facilities management (different SLAs, procurement, and compliance).

---

## 4. Proposed solution (first wedge)

A **fault** is a shared object with a state machine, not a chat thread.

**Intended states:** Reported → Triaged → Quoted / awaiting approval (if over threshold) → Scheduled → In progress → Blocked (no access / waiting parts / waiting owner) → Completed with evidence → Invoiced → Closed.

Each state must answer, without another phone call:

- What is broken, where, and how urgent is it?
- Who owns the next action?
- Can the contractor get in?
- Who authorised spend, up to what amount?
- What evidence exists that the work was done?

**Out of first-wedge scope (later wiki pages):** full tenancy CRM, rent collection, owner distributions, inspections-only workflows, body-corporate / HOA governance, IoT sensors.

---

## 5. Value proposition

**For the property manager:** one queue instead of WhatsApp; a defensible file if an owner, tenant, or insurer argues.

**For the owner:** control of spend and proof the asset was fixed, without taking every call.

**For the tenant:** “it’s logged, someone is coming” instead of silence.

**For the contractor:** a real job pack (unit, photos, access, authoriser) and a clearer path to payment.

**Commercial offer (direction, not pricing):** charge the **property manager / owner side** (per unit per month, or per managed portfolio). Tenants and contractors should not pay to participate or the network will not form. Contractors may later pay for faster payment or lead flow — that is not required to prove the first wedge.

---

## 6. Why now / why this

- Messaging apps made coordination *feel* solved while destroying the audit trail.
- Owners are less willing to pay management fees they cannot inspect.
- Contractors’ failed-visit costs are high; they will use a tool that protects their time if jobs are real.
- Generic helpdesks do not model property-specific objects: unit, lease responsibility, access, landlord-vs-tenant duty, approval thresholds.

---

## 7. Business case

### 7.1 Opportunity (qualitative)

Every tenanted unit generates maintenance events. Value is created when an event is **faster to close**, **cheaper in wasted visits**, and **cheaper in disputes**. We do not need a TAM spreadsheet to see the unit economics: a single failed plumber visit or one deposit tribunal already dwarfs typical SaaS-per-unit pricing.

*Assumption to validate in discovery:* target geography, typical units per manager, and whether the buyer is the independent letting agent or the owner of a small self-managed book who also hires a manager.

### 7.2 Benefits we will claim only when measurable

| Stakeholder | Outcome to measure |
|---|---|
| Manager | Time from report to first contractor assignment; % jobs with complete evidence on close |
| Owner | % of spend pre-authorised vs surprise invoices; days they wait for status |
| Tenant | Time to first status update; time to completion for emergency vs routine |
| Contractor | % first-visit success (access + enough info); days to invoice acceptance |

If we cannot move those numbers, the product is a form, not a business.

### 7.3 Cost of not building (for the customer)

Continuing on chat: unbilled manager hours, contractor no-shows, owner distrust and churn, legal/deposit exposure, and no portfolio history when staff or agents change.

### 7.4 Investment thesis (for us)

Build the smallest product that makes **one fault** trustworthy across four roles. Use that as the habit loop. Expand to inspections, then leases, then money movement only when this loop is in daily use.

---

## 8. MVP success criteria

The first release is successful when a real property manager can run a live leaking-geyser (or equivalent) job **end to end** with:

1. Tenant report with photos and unit identity.
2. Manager triage (priority, responsibility, contractor).
3. Contractor acceptance, access slot, and on-site completion with photos.
4. Owner visibility; approval captured if spend exceeds the threshold.
5. Job closed with a unit-level history that the next job can reuse.

**Not success:** a beautiful empty portal, or a ticket list that still requires WhatsApp to finish the job.

---

## 9. Risks and open decisions

| Risk / gap | Why it matters |
|---|---|
| Geography and tenancy law unset | Repair duties, notice rules, and tribunal language differ (e.g. South Africa vs UK). |
| Two-sided (actually four-sided) adoption | Tenants and contractors will not live in the app unless the manager insists and the job is better there than on WhatsApp. |
| Access remains unsolved | If keys and attendance stay in a chat, the core pain is unchanged. |
| Scope creep into a full PMS | Fault management is one subsystem; leases, rent, and accounting must not land in v1. |
| Spend-threshold policy | Emergency override vs waiting for the owner will make or break trust. |
| Who pays | If we charge tenants or contractors first, supply/demand may not form. |

---

## 10. What this wiki will grow into

| Page | Purpose |
|---|---|
| **Home** (this page) | Business case and north star |
| [[Roadmap]] | Releases through v1, including the marketing website and signups |
| Fault lifecycle | States, SLAs, responsibilities |
| Roles and permissions | Who can see, spend, dispatch, close |
| MVP scope | In / out / later |
| Glossary | Unit, fault, work order, threshold, evidence |

---

## Document control

- **Created:** 15 August 2026
- **Based on:** product discovery — owner pain, four roles, fault management as first wedge
- **Operating model:** manager-led dispatch; owner approval above threshold (assumption, to confirm)
