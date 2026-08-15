# Property Management Platform

Four-sided operations software for **owners**, **tenants**, **property managers**, and **contractors**. The first product is **fault management**: one work order that carries status, access, spend authority, and evidence until the job is closed.

The full business case lives in [`docs/wiki/Home.md`](docs/wiki/Home.md) and on the [GitHub wiki](https://github.com/MvuyisiMcithwaCPUT/PropertyManagement/wiki).

---

## Business case

Residential maintenance is still run on WhatsApp, phone calls, and memory. When something breaks, four people must act together, but they do not share a file:

| Role | What they need | What hurts today |
| --- | --- | --- |
| **Tenant** | It is logged; someone is coming | Repeating themselves, silence, living with the fault |
| **Property manager** | One queue, a contractor who can get in, an audit trail | Chat chaos, access chasing, liability without proof |
| **Contractor** | Unit, photos, access, who pays | Failed visits, vague scope, slow payment |
| **Owner** | Spend control and proof the asset was fixed | Surprise invoices, no history, paid management they cannot inspect |

A fault is not a complaint form. It is a **work order**. Chat feels like coordination and destroys the audit trail. One failed plumber visit or one deposit dispute already costs more than typical per-unit software.

**Operating model (assumption):** the property manager triages and dispatches; the owner is notified and only approves above a spend threshold. Tenants and contractors should not pay to participate. We charge the owner / manager side.

**Investment thesis:** make **one fault** trustworthy for all four roles before building a full property-management suite (leases, rent, accounting).

**Success metrics we will only claim when measured:** time from report to assignment; first-visit success; share of spend that was authorised; jobs closed with evidence; time to the tenant’s first status update.

---

## MVP features (prove one fault end to end)

The MVP is done when a real manager can run a leaking geyser (or equivalent) **without WhatsApp to finish the job**.

1. **Properties and units** — a unit identity every fault hangs off.
2. **Four roles and a simple login** — owner, manager, tenant, contractor, with role-appropriate views.
3. **Tenant report** — description, photos, unit, urgency.
4. **Manager triage queue** — priority, landlord vs tenant vs body-corporate duty, assign contractor.
5. **Fault state machine** — Reported → Triaged → Awaiting approval (if over threshold) → Scheduled → In progress → Blocked → Completed with evidence → Invoiced → Closed.
6. **Owner visibility and spend gate** — notified on every job; must approve when estimated spend exceeds the threshold; emergency override is recorded.
7. **Contractor job pack** — accept/decline, access slot, on-site notes, completion photos.
8. **Access coordination** — proposed time, tenant confirmation or key instruction, failed-visit / blocked state.
9. **Unit history** — closed jobs remain searchable on the unit for the next failure.
10. **Notifications** — in-app plus email (or SMS later) on the next-action events only.

**Explicitly not MVP:** rent collection, owner statements, full lease CRM, contractor marketplace, inspections-only workflows, accounting exports, IoT.

---

## Roadmap to version 1

Version 1 is a **production fault product** used daily by one real portfolio, not a complete PMS.

| Release | Goal | Ships |
| --- | --- | --- |
| **MVP** | One live job, four roles, no chat to close | Items 1–10 above; one property / small book |
| **v0.2** | Access stops being the failure mode | Diary, no-show handling, key/access notes, duplicate-fault detection |
| **v0.3** | Money is on the ticket | Quotes, threshold rules, extra-work sign-off, invoice attached to the job |
| **v0.4** | The file survives an argument | Permissions, immutable event log, photo/evidence retention, basic owner report |
| **v1.0** | Daily driver for one manager | Reliability, mobile-usable tenant and contractor flows, onboarding, SLAs, support runbook |

**After v1 (not version 1):** incoming/outgoing inspections, lease documents on the unit, planned maintenance, rent and arrears, owner distributions, contractor payments, body-corporate workflows.

---

## Next steps

1. Confirm geography and tenancy-law baseline (repair duties, notice, tribunal language).
2. Confirm spend-threshold and emergency-override policy with an owner and a manager.
3. Specify the fault lifecycle (states, who acts, SLAs) as the next wiki page.
4. Specify roles and permissions.
5. Choose stack and sketch the domain model (Organisation → Property → Unit → Fault → JobEvent).
6. Implement MVP behind the success criteria above; do not start leases or rent until a real job has closed in the product.

---

## Documentation

| Location | Use |
| --- | --- |
| [README](README.md) (this file) | Business case, MVP, roadmap |
| [`docs/wiki/Home.md`](docs/wiki/Home.md) | Wiki home / full business case (markdown in git) |
| [GitHub wiki](https://github.com/MvuyisiMcithwaCPUT/PropertyManagement/wiki) | Same home page on GitHub |

---

## Licence

Not chosen yet.
