# MEERO Landing Page: Build Specification

A build-ready spec for a single-page marketing site. This is the source of truth. Build against it.

One setup task lives outside the code and does not block the build: adding intake questions on the Calendly event. It is noted in Section 10.

---

## 1. What this is and why it exists

A one-page site whose single job is to convert a visitor into a booked call via Calendly.

- **Audience:** owner-operators of businesses doing roughly $250K to $1M/year, where the owner is personally the bottleneck. They do the same recurring work every week because there is no one else to hand it to. They are not looking for software. They want the work off their plate. **Assume they know nothing about this field.** No trade language survives into copy.
- **The one action:** book the free call. No secondary CTAs compete with it.
- **What this is not:** not a feature tour, not a pricing page. It sells a conversation, and the conversation is worth having on its own.

---

## 2. Positioning

**What is actually being sold is judgment, not a build.** A build is replicable; anyone can sell one. What is not replicable is knowing which repeating work in this specific business is capping the owner's time and revenue, and being honest when the answer is "you do not need me to build anything." The call has value on its own, and it is what protects the prospect from spending money on a generic tool that was never shaped around their goals, their pain, or the way they actually work.

Three supporting differentiators, in order of weight:

1. **Made from scratch for one business.** Shaped around this owner's exact repeating work and the tools they already use. Not a template, not something they configure.
2. **Done for them.** They do not build it, learn it, or maintain it. It is handed over working.
3. **Watched every day.** When a step fails it retries, and when something goes quiet Marwan knows before the client does.

"Made from scratch" carries the most weight and must be proven, not asserted: the call is about the visitor's own week, and the proof section shows real rigor.

**Emphasis rule (important for tone):** the differentiators above all reduce the visitor's time and effort, which is the hard-to-copy part of the offer. Spend at least as much copy energy on "you do nothing and touch nothing" as on "imagine the freedom."

**Hard constraint:** the word "AI" appears nowhere in visible copy, alt text, meta tags, page title, or FAQ. See Section 8. Beyond that single banned word, the whole vocabulary of this field is off the page: no "agent", "custom system", "custom build", "workflow", "deploy", "infrastructure", "integration", "automation", or "platform". The thing being built is described as **a virtual assistant built from scratch for your business**, which is not a person and not an app the owner has to learn.

---

## 3. Persuasion structure

The page stacks six legitimate persuasion levers so they reinforce each other. Each is true, which is what lets them stack without feeling like a scam.

1. **Reciprocity** — the free call is a real gift of value. Carried by the offer and every CTA.
2. **Authority through specificity** — not "reliable," but "watched every day, a failed step tries again, and if it goes quiet I know before you do." Carried by the proof section.
3. **Contrast** — the before/after "your week" visual makes value felt. Carried by the small side graphic in the shift section.
4. **Social proof** — one true client quote. Carried by the proof section.
5. **Honest scarcity** — each one is made from scratch by hand, so only a few clients at a time. True, therefore legitimate. Carried by the scarcity + CTA section.
6. **Commitment** — the call is a small, easy first yes. Carried by the single low-friction CTA repeated at three scroll depths.

No fake urgency: no countdown timers, no "only N spots left," no exit-intent popups. The only scarcity is the honest statement in the scarcity section.

The call is the lead magnet: a complete solution to a narrow problem ("I don't know what is actually capping my time and my revenue"), given free, that reveals the larger need.

---

## 4. Page sections, in order, with final copy

Tone for all copy: warm, direct, human, plain verbs, sentence case, no filler, no hype, no jargon. Write from the owner's side of the screen: name things by what they control, never by how the thing is built. First person singular throughout, because one person does this work. No em dashes anywhere. The primary CTA repeats at three depths (hero, mid-page, bottom) so a visitor can act at any scroll position, plus a compact button in the sticky header, which is navigation rather than a fourth CTA block and therefore carries no micro-line.

**The page is seven sections, deliberately about half its original length.** Length is a cost: every section a reader scrolls past without deciding is a section that should not exist. The final strings live in `src/content/site.ts`; what follows is the intent of each section, not a second copy of it.

### Sticky header

MEERO wordmark on the left, compact CTA on the right, translucent paper with a blur behind it. The wordmark lives here rather than in the hero.

### Hero

No graphic. Text-only, left-aligned, owning the first viewport.

- **Eyebrow:** A virtual assistant built for your business alone
- **Headline:** The work that runs your week can run *without you.* ("without you" takes the display italic.)
- **Subhead:** What is being found, what gets built when it makes sense, that it is neither a person nor an app to learn, and that they keep the tools they already use and run it from one screen on their phone.
- **CTA button:** Find your real bottleneck
- **Micro-line (near the button):** One call, leave with clear steps.

### The shift

Purpose: name the ceiling. The owner already tried doing it all and then tried hiring, and is still the bottleneck with capped revenue. Then, immediately, what the one conversation gives them, and that they get something out of it whether or not they hire.

This copy is Marwan's own words and is final; do not paraphrase it. Graphic: the small before/after "your week" card (Section 6, Graphic A) sits beside this copy as a side piece, not as its own section.

### How it works

Numbered three-step sequence (numbering is appropriate here because it is a real sequence). Step 1 does not restate the promise already made in the shift section.

**1. I find what is really holding you back.** One free call, going through how the business actually runs week to week, and clear steps they can act on either way.

**2. I build it from scratch for your business.** Shaped around the way they already work and the tools they already use. They set nothing up, learn nothing, move nothing. Handed over working.

**3. It works on its own, and you stay in charge.** Runs on a set schedule; they can see, stop, or change it from one screen; when the business changes, Marwan changes it.

### Proof

There is no separate "what we've built" section. Capability evidence belongs here, subordinate to the result it produced, so the page never reads as a product tour.

Order: Marwan's own verified result (6 to 10 booked calls a month and a 10K close in the first month), the supporting reply-rate line (roughly 6x the national average), then three short lines naming the work it already handles for him every week (contacting the right people personally and stopping the moment someone answers; invoices that send themselves and never bill twice; a morning pass over the inbox), then the client quote, then authority through specificity, then the illustrative sample outputs (Section 6, Graphic B), then the mid-page CTA.

**Client quote (verbatim, do not edit):**
> "I used to lose hours every week researching opportunities for my work. Now that time is basically zero, and every week I get a clear list of the highest-leverage moves to make, including ones I never would have found on my own."
> — T. Chavez

### Control

Purpose: kill the fear of being handed something they cannot operate. Approve, pause, or change from one screen; nothing to install and nothing to learn; if you can send a text you can run this; when they want it different, Marwan handles it.

### Scarcity + primary CTA

Honest scarcity (each one made from scratch by hand, so few clients at a time), then the invitation to start with one call, then the booking embed (`id="book"`, which the header and hero CTAs scroll to).

### FAQ

Four questions, not six. Short, plain, confident answers: what work can come off my plate, do I need to be good with technology (this absorbs the old "do I have to switch tools" question), what does it cost, what if it stops working. "How do we start" is cut as redundant with the CTA.

### Footer

Minimal. MEERO wordmark, the primary CTA one last time, any necessary legal. No secondary links that pull attention off the single action.

---

## 5. Visual design direction: quiet editorial, cool paper

The feeling is calm reclaimed time and quiet competence: premium, trustworthy, human, deliberately not techy. Like the calm after you have handed something off, not a tech-startup dashboard.

The reference for the current look is `getenergy.com`: an off-white page, one soft blue accent, a tight display serif with a single italic word per headline, and real but restrained elevation on cards. Its measurements were read from its own stylesheet rather than estimated.

**Avoid these (they read as generic or off-brief):**
- Generic SaaS tropes: gradient blobs, purple, floating 3D shapes, glowing nodes.
- Literal tech imagery: circuit boards, matrix rain, robots. We sell the calm, not the machine.

**Tokens (single source of truth: the `@theme` block in `src/app/globals.css`):**
- Ink (primary text / structure / CTA fill): `#18181B`
- Paper (background): `#FCFCFC`
- Accent (CTA underline and focus glow only, nowhere else): `#82B1F0`
- Muted body text: `#71717A`
- Card background: `#FFFFFF`, hairline border `#E5E5E5`
- Display face: **Instrument Serif**, weight 400, tight negative tracking. Body face: **DM Sans**.
- Restraint is the point: lots of whitespace, thin rules, accent only on the button and focus ring.

**Type treatment:** headlines run tight. Display tracking about `-0.04em` with leading near `1.0` for the hero and `1.06` for section headings; section headings around `clamp(2.25rem, 5vw, 3.25rem)`. Body copy stays at `1.125rem` with relaxed leading, which is a deliberate departure from the reference: this page is read, not skimmed.

**Surfaces:** cards are `rounded-2xl` with a close 1px shadow plus a deep, wide, blue-gray ambient shadow. `:focus-visible` uses a soft accent glow ring rather than a hard outline. Hairline dividers between sections stay; they carry the editorial rhythm.

**Hero execution:**
- **Type scale is the single biggest "editorial vs generic" lever.** Headline at about `clamp(2.75rem, 5vw + 1rem, 4.5rem)`, constrained to ~15ch so it breaks into two or three confident lines. Do not undersize it.
- **Left-align the hero, do not center it.** Centered blocks read as default SaaS.
- **Vertical rhythm:** generous top padding so the headline owns the first viewport. Eyebrow above the headline, small, uppercase, letter-spaced, muted. Subhead below at ~18px, max ~48ch. CTA below that.
- **Color discipline:** accent only as the CTA underline and focus ring. Everything else ink on paper with hairline dividers.

**Quality floor (non-negotiable):** responsive to 360px, visible keyboard focus, `prefers-reduced-motion` respected, WCAG AA contrast, alt text on every visual.

---

## 6. Graphics

Two visuals, both built fresh and privacy-safe (they never expose real client data). There is no animated pipeline; it was cut along with the section it anchored, because a page this short cannot afford a decorative first impression.

### Graphic A: before/after "your week" (side card in the shift section)

A small, playful card, not a full-width section. It sits beside the shift copy on large screens and stacks under it on small ones.

- **Top ("Your week now"):** densely packed repeating task chips labeled in plain words ("Outreach," "Follow-ups," "Invoicing," "Inbox," "Admin"), visually crowded.
- **Bottom ("Your week with MEERO"):** the same chips greyed and struck through as handled, and the freed hours relabeled with what the owner wants there ("Vision," "Growth," "Family," "Off") as solid ink chips.
- Contrast immediate and visceral: crowded above, open below.
- Accessible: each half carries a text alternative.

### Graphic B: illustrative sample outputs (proof section only)

Realistic mocks of the output produced, written from scratch as examples: a message written for one person, and an invoice that sent itself. Two, not three; the old prospect-brief mock was cut because its labels were insider shorthand.

- Each mock captioned "Illustrative example" so it never claims to be a real client's output. This is what makes it honest and privacy-safe.
- Content plausible and specific but entirely invented. No real names, no real client data.

---

## 7. Technical build

**Stack:**
- Framework: **Next.js, static.** Chosen over Astro because Marwan will not touch the code, so generation and deploy reliability outweigh Astro's marginally lighter payload (negligible on one well-built page). Next is Vercel-native and the most reliably generated framework.
- Styling: Tailwind CSS.
- Hosting: **Vercel.** Do not host on the Hetzner agent box; a marketing page needs edge speed and should not share infrastructure with production agent pipelines.
- Booking: **Calendly inline embed** (preferred over popup so the action is always visible).
  - URL (store in the single content file): `https://calendly.com/marwan-treehousemusic/bottleneck-analysis-call`
  - The event carries 2 to 3 custom intake questions so the prospect's answers arrive with the booking (this is a Calendly-side config, see Section 10). A standalone contact form is rejected: it adds the exact delay and effort the page exists to remove.
- Analytics: Plausible or Umami (privacy-friendly, no cookie banner needed). Fire events on CTA click and on booking completion.

**Single source of truth for content:** all copy, the Calendly URL, and all design tokens live in exactly one place each (a content file, e.g. `src/content/site.ts`, and the Tailwind config + tokens file). No copy string and no hex value duplicated across components.

**Structure:** single route (`/`), componentized by section (SiteHeader, Hero, Shift, HowItWorks, Proof, Control, Scarcity, FAQ, Footer). The CTA is one shared component reused at all three depths, pointing at the single Calendly URL from the content file.

**Domain:** `getmeero.com`, set as the production domain on the Vercel project, with the retired `getseknd.com` and `himeeroo.com` left in place as redirects.

---

## 8. Constraints (hard rules)

- The word "AI" appears nowhere in visible copy, alt text, meta description, page title, or FAQ.
- No fabricated metrics and no invented testimonials beyond what is in this spec.
- No fake urgency: no countdown timers, no "only N spots left," no exit-intent popups.
- The social example is described by outcome only; its mechanism is never described.
- Every claim on the page must be one Marwan can defend on a sales call.
- No em dashes anywhere.
- Describe everything from the owner's side of the screen.

---

## 9. Failure modes to handle

- **Calendly embed fails to load.** Show a visible fallback link to the booking URL, never a dead button or blank space. The CTA must always lead somewhere.
- **Analytics blocked or fails.** Page works fully regardless; analytics is never in the critical path.
- **Slow first paint.** Target Lighthouse performance >= 90. Web fonts must not block first contentful paint.
- **Mobile layout breakage.** Must render correctly at 360px. Test the week card beside the shift copy and the sticky header specifically.
- **Reduced motion.** `prefers-reduced-motion` is respected. Nothing on the page animates on a loop, so this covers transitions only.
- **JS disabled.** Core content and the CTA still render and function (the Calendly link works as a plain link).
- **CTA lost on scroll.** The primary CTA appears at three depths; verify each is reachable and functional.
- **Placeholder text shipped.** All copy in this spec is final. Keep a pre-launch grep for `[[` and fail the build on any match, as a safety net.

---

## 10. Setup tasks outside the code (do not block the build)

- **Calendly intake questions.** Add 2 to 3 questions on the booking event. Suggested: (1) What's your business and what does it do? (2) What recurring work eats the most of your week? (3) Roughly what's your annual revenue (optional, helps pre-qualify).
- **Calendly event branding.** The event page still carries the old name and the `bottleneck-audit` slug. Rename it to match MEERO. Changing the slug changes the URL, so update `site.calendly.url` in the same pass.

---

## 11. Definition of done

1. Lighthouse >= 90 on performance, accessibility, best-practices, and SEO.
2. A real test booking lands in the connected calendar.
3. CTA-click and booking-completion fire as analytics events.
4. Renders correctly on iOS Safari and Android Chrome at 360px, with the week card and the sticky header verified specifically.
5. `prefers-reduced-motion` disables the remaining transitions cleanly.
6. No console errors.
7. All copy, the Calendly URL, and design tokens live in a single place each; no duplication.
8. No `[[` placeholder text remains in the source (verified by the pre-launch grep).
9. The word "AI" does not appear anywhere in the rendered page or its metadata.
10. Every CTA leads to a working booking action, including the fallback if the embed fails.
