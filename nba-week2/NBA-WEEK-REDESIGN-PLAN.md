# Nigeria Blockchain & AI Week 2026 — Complete Redesign Plan

> **Project:** Full website redesign for NBA Week 2026  
> **Stack:** React + Tailwind CSS + Framer Motion  
> **Goal:** World-class conference site that rivals Web Summit, Token2049, and Consensus-level events  
> **Event Date:** October 2026 | Lagos, Nigeria

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Afrocentric Design Identity](#2-afrocentric-design-identity) ✦ NEW
3. [Color System & Typography](#3-color-system--typography)
4. [Page Structure & Sections](#4-page-structure--sections)
5. [Hero Section (Showpiece)](#5-hero-section-showpiece)
6. [Navigation](#6-navigation)
7. [About Section](#7-about-section)
8. [Event Stats (Animated Counters)](#8-event-stats-animated-counters)
9. [Speakers Section](#9-speakers-section)
10. [Agenda / Schedule](#10-agenda--schedule)
11. [Why Attend](#11-why-attend)
12. [Social Proof & Testimonials](#12-social-proof--testimonials) ✦ NEW
13. [Sponsors & Partners](#13-sponsors--partners)
14. [Tickets / Registration](#14-tickets--registration)
15. [Venue & Location](#15-venue--location)
16. [FAQ Section](#16-faq-section)
17. [Footer](#17-footer)
18. [Animations & Micro-Interactions](#18-animations--micro-interactions)
19. [Accessibility](#19-accessibility) ✦ NEW
20. [SEO & Social Sharing](#20-seo--social-sharing) ✦ NEW
21. [Mobile Strategy](#21-mobile-strategy)
22. [Multilingual Strategy](#22-multilingual-strategy) ✦ NEW
23. [Technical Architecture](#23-technical-architecture)

---

## 1. Design Philosophy

### Principles
- **Dark-first luxury feel** — Deep dark backgrounds with vibrant accent gradients (think Token2049 / ETHGlobal aesthetic)
- **Proudly African** — This is not a generic global tech conference. The design must visually communicate Lagos, Nigeria, and the continent. This is the competitive advantage.
- **Generous whitespace** — Let content breathe, no cramped sections
- **One H1 per page** — Clean semantic HTML, no repeated headings
- **Motion with purpose** — Every animation serves UX, nothing gratuitous
- **Accessible by default** — WCAG AA compliant, keyboard-navigable, screen-reader friendly
- **Mobile-first** — Designed for phones first, scales up beautifully
- **Speed obsessed** — Target < 2s LCP, lazy load everything below fold

### Mood / References
| Reference Site | What to Borrow |
|---|---|
| [Token2049](https://token2049.com) | Dark premium feel, speaker grid, ticket tiers |
| [Web Summit](https://websummit.com) | Bold typography, clean sections, agenda layout |
| [ETHGlobal](https://ethglobal.com) | Gradient accents, developer-friendly energy |
| [Consensus](https://consensus2024.coindesk.com) | Stats section, sponsor tiers, venue showcase |
| African design references | Adinkra symbolism, warm earth accents, Lagos photography |

---

## 2. Afrocentric Design Identity

This is the single biggest differentiator. Token2049 is Singapore. Web Summit is Lisbon. **NBA Week is Lagos.** The design must own that.

### Cultural Design Elements

**Adinkra-Inspired Patterns**
- Subtle geometric Adinkra symbols used as section dividers and card background textures
- Key symbols: "Nsoromma" (stars/guardianship → trust), "Funtunfunefu" (unity/collaboration), "Ananse Ntontan" (wisdom/creativity → innovation)
- Applied at ~3-5% opacity as background textures on glass cards and section breaks
- SVG patterns, not images — infinitely scalable, zero performance cost

**Typography Accent**
- Section labels ("ABOUT", "SPEAKERS", etc.) optionally rendered in a display font with African geometric influence
- Candidate: use Space Grotesk but pair section label decorators (──) with Adinkra-inspired line motifs instead of plain dashes

**Photography Direction**
- All hero/about imagery must feature **real Lagos scenes and Nigerian tech community**
- Mandate: diverse skin tones, Lagos skyline, Landmark Centre exterior, past NBA Week crowd shots
- No generic stock photos of people in suits at unnamed conference centers
- Photo treatment: slight warm color grade (not cold/blue) to feel distinctly Lagos

**Warm Tertiary Accent**
- Deep Terracotta `#C45B28` or Saffron Gold `#D4A026` as a tertiary warm accent
- Used sparingly: section label highlights, hover states on select elements, badge backgrounds
- Grounds the purple/cyan palette and prevents it from feeling cold/generic

**Visual Metaphor**
- The 3D globe hero (Section 5) centers on Nigeria — this is the hero's African anchor
- Stats section background: subtle outline map of Africa with connection nodes, not a generic grid pattern

---

## 3. Color System & Typography

### Color Palette

```
Primary Background:    #0A0A0F (near-black with blue undertone)
Secondary Background:  #12121A (card surfaces, sections)
Accent Gradient:       #6C5CE7 → #00D2FF (purple-to-cyan, blockchain feel)
Secondary Accent:      #00F5A0 → #00D9F5 (green-to-teal for CTAs)
Tertiary Warm:         #C45B28 (deep terracotta) or #D4A026 (saffron gold)
Text Primary:          #FFFFFF
Text Secondary:        #A1A1B5 (muted descriptions — WCAG AA compliant on #0A0A0F)
Text Accent:           #00D2FF (links, highlights)
Border/Divider:        #1E1E2E
Success:               #00F5A0
Warning:               #FFD93D
Card Glass:            rgba(255, 255, 255, 0.05) with backdrop-blur
```

> **Accessibility note:** Previous `#8A8A9B` fails WCAG AA contrast on dark backgrounds (ratio ~4.0:1). Updated to `#A1A1B5` which passes AA at 4.7:1. All accent colors on dark backgrounds must maintain ≥ 4.5:1 contrast ratio.

### Typography

```
Headings:     "Space Grotesk" (geometric, techy, premium)
Body:         "Inter" (clean, highly readable)
Accent/Mono:  "JetBrains Mono" (countdown timer, stats)

H1: 64px / 72px (desktop) → 36px / 42px (mobile) — Bold
H2: 48px / 56px (desktop) → 28px / 34px (mobile) — Bold
H3: 24px / 32px (desktop) → 20px / 26px (mobile) — Semibold
Body: 16px / 26px — Regular
Small: 14px / 22px — Regular
```

---

## 4. Page Structure & Sections

```
┌─────────────────────────────────────────────┐
│  STICKY NAVBAR (transparent → solid on scroll)│
├─────────────────────────────────────────────┤
│  HERO SECTION (full viewport, 3D globe)      │
├─────────────────────────────────────────────┤
│  ANNOUNCEMENT BAR (scrolling ticker)         │
├─────────────────────────────────────────────┤
│  ABOUT NBA WEEK                              │
├─────────────────────────────────────────────┤
│  ANIMATED STATS COUNTERS                     │
├─────────────────────────────────────────────┤
│  SOCIAL PROOF (testimonials + press)     ◆ NEW│
├─────────────────────────────────────────────┤
│  KEYNOTE SPEAKERS (featured 4-6)             │
├─────────────────────────────────────────────┤
│  FULL SPEAKER GRID (expandable)              │
├─────────────────────────────────────────────┤
│  AGENDA / SCHEDULE (tabbed by day/track)     │
├─────────────────────────────────────────────┤
│  WHY ATTEND (icon cards with hover effects)  │
├─────────────────────────────────────────────┤
│  TICKET TIERS / REGISTRATION                 │
├─────────────────────────────────────────────┤
│  SPONSORS & PARTNERS (tiered)                │
├─────────────────────────────────────────────┤
│  VENUE & LOCATION (map + photos)             │
├─────────────────────────────────────────────┤
│  PAST HIGHLIGHTS (video + photo gallery)     │
├─────────────────────────────────────────────┤
│  FAQ (accordion)                             │
├─────────────────────────────────────────────┤
│  NEWSLETTER SIGNUP                           │
├─────────────────────────────────────────────┤
│  FOOTER                                      │
└─────────────────────────────────────────────┘
```

---

## 5. Hero Section (Showpiece)

This is the **most critical section** — it sets the entire tone.

### Layout

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [3D Globe — Nigeria centered, connection arcs to world] │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │                                                    │  │
│  │     ◆ OCTOBER 2026 • LAGOS, NIGERIA               │  │
│  │                                                    │  │
│  │     NIGERIA                                        │  │
│  │     BLOCKCHAIN                                     │  │
│  │     & AI WEEK ██ 2026                              │  │
│  │          (gradient text, staggered animation)      │  │
│  │                                                    │  │
│  │     Africa's Premier Blockchain &                  │  │
│  │     AI Innovation Summit                           │  │
│  │                                                    │  │
│  │  ┌──────────────┐  ┌──────────────────────────┐   │  │
│  │  │ REGISTER NOW │  │ WATCH 2025 HIGHLIGHTS ▶  │   │  │
│  │  │ (gradient bg) │  │ (glass outline button)   │   │  │
│  │  └──────────────┘  └──────────────────────────┘   │  │
│  │                                                    │  │
│  │  ┌─────────┬─────────┬─────────┬─────────┐       │  │
│  │  │  DAYS   │  HRS    │  MINS   │  SECS   │       │  │
│  │  │   182   │   14    │   32    │   08    │       │  │
│  │  │ (mono)  │ (mono)  │ (mono)  │ (mono)  │       │  │
│  │  └─────────┴─────────┴─────────┴─────────┘       │  │
│  │                                                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ▼ scroll indicator (animated bounce)                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Hero Background: 3D Globe with Connection Lines (Primary Choice)

The globe is the **only background option that visually communicates** "this is a pan-African event connecting the continent to the world." A screenshot of this hero, shared on Twitter/LinkedIn by attendees, does more marketing than any other asset on the site.

**Implementation:**
- Slowly rotating wireframe globe rendered with `react-globe.gl` (Three.js under the hood)
- Globe is centered on **Nigeria/West Africa** at initial rotation angle
- Glowing arc lines connecting Lagos → Dubai, Singapore, London, New York, Nairobi, São Paulo (representing 20+ countries)
- Small glowing dots pulse on continents representing attendee origins
- Nigeria/Lagos dot is **largest and brightest** — the visual anchor
- Globe tinted with accent gradient colors (purple wireframe, cyan arcs, terracotta Nigeria marker)
- Subtle Adinkra pattern overlay at very low opacity on the globe surface

**Performance Strategy:**
- Globe is **lazy-loaded** — hero text, CTAs, and countdown render immediately with a static dark gradient placeholder
- Globe fades in after critical content paints (1-2s delay)
- On mobile: replace with a **static stylized Africa map SVG** with animated connection lines (CSS only) — no Three.js on mobile
- Canvas is reduced to 60% resolution on low-end devices via `devicePixelRatio` capping

**Fallback Options (if globe proves too heavy in testing):**
- Option B — Animated mesh gradient blobs (purple/cyan/terracotta, CSS `@keyframes` + `filter: blur()`)
- Option C — Particle network with Africa continent shape formed by particles

### Hero Animations (Framer Motion)

```
1. Background fades in (0.5s)
2. Date badge slides down (0.3s delay, spring)
3. Title lines stagger in from left (0.1s between each line)
4. "& AI WEEK" has gradient text reveal animation
5. Subtitle fades up (0.6s delay)
6. Buttons scale in with spring (0.8s delay)
7. Countdown timer counts from 0 to actual values (1.2s delay)
8. Scroll indicator fades in last (2s delay)
```

---

## 6. Navigation

### Desktop Navbar

```
┌────────────────────────────────────────────────────────────────┐
│  [LOGO]    About  Speakers  Agenda  Sponsors  Venue  FAQ      │
│                                              [REGISTER NOW ▸] │
└────────────────────────────────────────────────────────────────┘
```

### Behavior
- **Transparent** at top of page (text white, blends with hero)
- **Solid dark** (`#0A0A0F` + backdrop-blur) on scroll past hero
- **Transition:** smooth 0.3s background color change
- **Active section** highlighted with accent underline (scroll-spy)
- **Logo:** Clean wordmark "NBA WEEK" or stylized icon + text
- Fixed/sticky at top — always accessible

### Mobile Navbar

```
┌──────────────────────────────┐
│  [LOGO]           [☰ MENU]  │
└──────────────────────────────┘
```

- Hamburger opens **full-screen overlay** (not a sidebar)
- Dark background with large, centered nav links
- Staggered fade-in animation on open
- Close button (X) top-right
- "Register Now" button prominent at bottom of overlay

---

## 7. About Section

### Layout

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ── ABOUT NBA WEEK                                       │
│                                                          │
│  ┌─────────────────────┐  ┌───────────────────────────┐ │
│  │                     │  │                           │ │
│  │   Photo/Video from  │  │  Nigeria Blockchain &     │ │
│  │   past event with   │  │  AI Week is Nigeria's     │ │
│  │   subtle parallax   │  │  premier annual summit    │ │
│  │   or video autoplay │  │  at the intersection of   │ │
│  │   (muted)           │  │  blockchain, AI, and      │ │
│  │                     │  │  crypto innovation.       │ │
│  │                     │  │                           │ │
│  │                     │  │  Now in its 6th edition,  │ │
│  │                     │  │  organized by             │ │
│  │                     │  │  CoinNewsExtra...         │ │
│  │                     │  │                           │ │
│  │                     │  │  [Learn More →]           │ │
│  └─────────────────────┘  └───────────────────────────┘ │
│                                                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │🏢 Hosted │ │📅 6th    │ │🌍 20+    │ │🤝 Powered│   │
│  │ during   │ │ Edition  │ │Countries │ │ by FAN   │   │
│  │ NFW 2026 │ │          │ │          │ │          │   │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Animation
- Image slides in from left, text from right (on scroll into view)
- Mini stat cards stagger up from bottom
- Uses `Intersection Observer` trigger at 20% visibility

---

## 8. Event Stats (Animated Counters)

### Layout — Full-width dark gradient band

```
┌──────────────────────────────────────────────────────────┐
│ ┌─gradient bg with subtle grid pattern────────────────┐  │
│ │                                                     │  │
│ │  10,000+        50+          20+          3         │  │
│ │  Attendees    Speakers    Countries      Days       │  │
│ │                                                     │  │
│ └─────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

### Animation
- Numbers count up from 0 when section enters viewport
- Use `JetBrains Mono` for the numbers (monospace = clean counters)
- Subtle glow effect on each number using `text-shadow` with accent color
- Trigger once — don't re-animate on scroll back

---

## 9. Speakers Section

### Layout — Two tiers

**Tier 1: Keynote Speakers (Featured, large cards)**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ── SPEAKERS                                                 │
│  Meet the Visionaries Shaping Africa's Tech Future           │
│                                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│  │              │ │              │ │              │        │
│  │  [PHOTO]     │ │  [PHOTO]     │ │  [PHOTO]     │        │
│  │  gradient    │ │  gradient    │ │  gradient    │        │
│  │  overlay at  │ │  overlay at  │ │  overlay at  │        │
│  │  bottom      │ │  bottom      │ │  bottom      │        │
│  │              │ │              │ │              │        │
│  │  Name        │ │  Name        │ │  Name        │        │
│  │  Title, Co.  │ │  Title, Co.  │ │  Title, Co.  │        │
│  │  🔗 LinkedIn │ │  🔗 Twitter  │ │  🔗 LinkedIn │        │
│  └──────────────┘ └──────────────┘ └──────────────┘        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Tier 2: All Speakers (Smaller grid)**

```
  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐
  │ 📷 │ │ 📷 │ │ 📷 │ │ 📷 │ │ 📷 │ │ 📷 │
  │Name│ │Name│ │Name│ │Name│ │Name│ │Name│
  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘
  
  [BECOME A SPEAKER →]
```

### Hover Effect
- Card lifts slightly (`translateY(-8px)`)
- Border glows with accent gradient
- Photo scales up slightly (1.05) with `overflow: hidden` on container
- Social icons fade in at bottom

---

## 10. Agenda / Schedule

### Layout — Tabbed multi-day view

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ── AGENDA                                               │
│                                                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                   │
│  │ DAY 1 ◆ │ │  DAY 2  │ │  DAY 3  │  (tab buttons)   │
│  └─────────┘ └─────────┘ └─────────┘                   │
│                                                          │
│  Track Filter: [All] [Blockchain] [AI] [DeFi] [Policy]  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ 09:00  ┌──────────────────────────────────────┐   │  │
│  │   AM   │ Opening Keynote                      │   │  │
│  │        │ Speaker Name • Main Stage            │   │  │
│  │        │ [Blockchain] [AI]                    │   │  │
│  │        └──────────────────────────────────────┘   │  │
│  │                                                    │  │
│  │ 10:00  ┌───────────────┐ ┌───────────────────┐   │  │
│  │   AM   │ Panel: DeFi   │ │ Workshop: Build   │   │  │
│  │        │ in Africa     │ │ with AI Agents    │   │  │
│  │        │ Room A        │ │ Room B            │   │  │
│  │        │ [DeFi]        │ │ [AI]              │   │  │
│  │        └───────────────┘ └───────────────────┘   │  │
│  │                                                    │  │
│  │ 12:00  ┌──────────────────────────────────────┐   │  │
│  │   PM   │ 🍽️ Lunch & Networking Break          │   │  │
│  │        └──────────────────────────────────────┘   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Behavior
- Tab switching with crossfade animation
- Track filter pills — click to filter sessions by topic
- Each session card is clickable → expands to show full description
- Timeline line on the left with dot markers at each time slot

---

## 11. Why Attend

### Layout — Bento grid of benefit cards

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ── WHY ATTEND NBA WEEK 2026?                            │
│                                                          │
│  ┌───────────────────────┐ ┌───────────────────────┐    │
│  │  🔗                    │ │  🧠                    │    │
│  │  Network with 10,000+ │ │  30+ Expert-Led        │    │
│  │  Blockchain & AI      │ │  Sessions on AI,       │    │
│  │  Professionals        │ │  DeFi, Web3 & Policy   │    │
│  │                       │ │                        │    │
│  │  Connect directly     │ │  Cutting-edge insights │    │
│  │  with founders, VCs,  │ │  from builders who     │    │
│  │  regulators & devs    │ │  are shipping product  │    │
│  └───────────────────────┘ └───────────────────────┘    │
│                                                          │
│  ┌──────────┐ ┌──────────┐ ┌────────────────────────┐  │
│  │  🚀      │ │  💰      │ │  📺                     │  │
│  │  Startup │ │  Meet    │ │  Get featured across   │  │
│  │  Pitch   │ │  200+    │ │  Africa's top crypto   │  │
│  │  Stage   │ │  Active  │ │  & tech media outlets  │  │
│  │          │ │Investors │ │                        │  │
│  └──────────┘ └──────────┘ └────────────────────────┘  │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │  🏛️ Policy & Regulation Roundtables              │   │
│  │  Direct dialogue with CBN, SEC, NITDA officials  │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Card Design
- Glass-morphism cards (`bg: rgba(255,255,255,0.03)`, `backdrop-blur: 12px`, `border: 1px solid rgba(255,255,255,0.06)`)
- Icon at top with gradient background circle
- Bento grid layout (varying card sizes for visual interest)
- Cards stagger in on scroll

---

## 12. Social Proof & Testimonials

A 6th-edition conference has **five years of proof**. This is gold the current site doesn't mine.

### Layout

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ── WHAT ATTENDEES SAY                                   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │                                                    │  │
│  │  "NBA Week completely changed how I think about    │  │
│  │   blockchain adoption in Nigeria. The connections  │  │
│  │   I made there led directly to our seed round."    │  │
│  │                                                    │  │
│  │   — Ada Okonkwo, Founder @ ChainPay               │  │
│  │     [photo] ★★★★★                                  │  │
│  │                                                    │  │
│  │  ← PREV  [dots]  NEXT →                            │  │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ── AS SEEN IN                                           │
│                                                          │
│  ┌────┐ ┌────────┐ ┌────────┐ ┌──────┐ ┌────────┐     │
│  │Tech│ │Techpoint│ │CoinDesk│ │Punch │ │Guardian│     │
│  │Cabal│ │ Africa │ │        │ │  NG  │ │   NG   │     │
│  └────┘ └────────┘ └────────┘ └──────┘ └────────┘     │
│  (infinite scroll marquee — grayscale → color on hover) │
│                                                          │
│  ── HIGHLIGHTS FROM NBA WEEK 2025                        │
│                                                          │
│  "10,000 attendees gathered in Lagos for Africa's..."    │
│   — TechCabal                                            │
│  "The most important crypto policy conversation..."      │
│   — CoinDesk                                             │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Content Sources
- **3-5 attendee testimonials** with real names, photos, titles (collect via post-event surveys)
- **Press logos** from outlets that covered previous editions (TechCabal, Techpoint Africa, CoinDesk, BusinessDay, Nairametrics, The Punch)
- **Pull quotes** from articles about past editions — linked to source
- **Video testimonial clips** (15-30s) if available — autoplay muted in carousel

### Design Details
- Testimonial carousel with auto-rotation (pause on hover)
- Press logos in infinite-scroll marquee (CSS `@keyframes` — no JS)
- Pull quotes in styled blockquote cards with gradient left border
- Section sits between Stats and Speakers — social proof before asking visitors to browse content

---

## 13. Sponsors & Partners

### Layout — Tiered display

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ── PARTNERS & SPONSORS                                  │
│                                                          │
│  PLATINUM                                                │
│  ┌──────────┐ ┌──────────┐                              │
│  │  LOGO    │ │  LOGO    │  (large, 2-3 per row)       │
│  └──────────┘ └──────────┘                              │
│                                                          │
│  GOLD                                                    │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                   │
│  │ LOGO │ │ LOGO │ │ LOGO │ │ LOGO │  (medium, 4/row) │
│  └──────┘ └──────┘ └──────┘ └──────┘                   │
│                                                          │
│  MEDIA PARTNERS                                          │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐            │
│  │logo│ │logo│ │logo│ │logo│ │logo│ │logo│ (small)    │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘            │
│                                                          │
│  ┌──────────────────────────────────────┐               │
│  │  BECOME A SPONSOR →                  │               │
│  │  Download Partnership Deck (PDF)     │               │
│  └──────────────────────────────────────┘               │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Treatment
- Logos displayed in grayscale → full color on hover
- Logos auto-scroll in infinite carousel for media partners row
- "Download Partnership Deck" is a direct PDF download (no external link)

---

## 14. Tickets / Registration

### Layout — Pricing cards

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ── SECURE YOUR SPOT                                     │
│  Early Bird pricing ends August 31, 2026                 │
│                                                          │
│  ┌──────────────┐ ┌──────────────────┐ ┌──────────────┐│
│  │              │ │  ◆ MOST POPULAR  │ │              ││
│  │  GENERAL     │ │                  │ │  VIP         ││
│  │              │ │  PROFESSIONAL    │ │              ││
│  │  Free        │ │                  │ │  ₦150,000    ││
│  │              │ │  ₦50,000         │ │              ││
│  │  ✓ Main      │ │                  │ │  ✓ All Pro   ││
│  │    stage     │ │  ✓ All sessions  │ │    benefits  ││
│  │  ✓ Expo      │ │  ✓ Workshops     │ │  ✓ VIP      ││
│  │    floor     │ │  ✓ Networking    │ │    lounge    ││
│  │  ✓ Basic     │ │    events        │ │  ✓ Speaker  ││
│  │    swag      │ │  ✓ Lunch & swag  │ │    dinner   ││
│  │              │ │  ✓ Recordings    │ │  ✓ 1-on-1   ││
│  │              │ │                  │ │    meetings  ││
│  │ [Register]   │ │ [Get Ticket →]   │ │ [Get VIP →] ││
│  └──────────────┘ └──────────────────┘ └──────────────┘│
│                                                          │
│  💳 Accepts Naira, USD, USDT, BTC, ETH                  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Design Details
- Middle card (Professional) is taller/elevated with gradient border = "most popular"
- Pricing in both ₦ and $ equivalent
- Countdown to early bird deadline
- Crypto payment options prominently shown (relevant to audience)

### Registration Flow — Multi-Step Modal

A simple modal-only approach breaks down with crypto payments. The registration form opens as a **full-height slide-over panel** (not a tiny modal) with a clear multi-step flow:

```
STEP 1: Select Tier                    STEP 2: Your Details
┌────────────────────────────┐        ┌────────────────────────────┐
│                            │        │                            │
│  ◉ General (Free)          │        │  Full Name  [__________]   │
│  ○ Professional (₦50,000)  │        │  Email      [__________]   │
│  ○ VIP (₦150,000)          │        │  Company    [__________]   │
│                            │        │  Role       [▾ dropdown ]  │
│  [Select tier summary      │        │  Country    [▾ dropdown ]  │
│   with benefits visible]   │        │  Phone      [__________]   │
│                            │        │                            │
│           [Continue →]     │        │           [Continue →]     │
│                            │        │  ← Back                    │
└────────────────────────────┘        └────────────────────────────┘

STEP 3: Payment Method                 STEP 4: Confirmation
┌────────────────────────────┐        ┌────────────────────────────┐
│                            │        │                            │
│  ○ Card (Paystack)         │        │  ✅ Registration Complete!  │
│  ○ Bank Transfer            │        │                            │
│  ○ USDT (ERC-20 / TRC-20) │        │  Ticket: Professional      │
│  ○ BTC                     │        │  Name: John Doe            │
│  ○ ETH                     │        │  Email: john@example.com   │
│                            │        │  Ref: #NBA26-00472         │
│  [If crypto selected:]     │        │                            │
│  Send exactly 32.50 USDT   │        │  📧 Confirmation email sent│
│  to: 0x1a2b...3c4d         │        │  📱 Add to Calendar        │
│  ┌──────────┐              │        │  🎫 Download Ticket (PDF)  │
│  │ QR CODE  │  ← Copy addr │        │                            │
│  └──────────┘              │        │  Share: [Twitter] [LinkedIn]│
│                            │        │                            │
│  ⏳ Waiting for payment...  │        │  [Go to Agenda →]          │
│  (auto-confirms on-chain)  │        │                            │
│  Expires in: 29:42         │        │                            │
│                            │        │                            │
│  ← Back    [I've Paid →]   │        │                            │
└────────────────────────────┘        └────────────────────────────┘
```

### Payment UX Details
- **Fiat (Paystack):** Redirect to Paystack checkout → return to Step 4 on success
- **Crypto:** Generate unique wallet address per transaction, show QR + copy button, 30-min expiry countdown, auto-detect on-chain confirmation via webhook polling (every 10s), manual "I've Paid" fallback that triggers manual review
- **Failed transaction:** Clear error state → "Payment not detected. Try again or switch to card payment." No dead ends.
- **Form validation:** React Hook Form + Zod — inline errors, not after submission
- **Progress indicator:** Step dots (1–2–3–4) at top of panel with completed checkmarks

---

## 15. Venue & Location

### Layout

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ── VENUE                                                │
│                                                          │
│  ┌──────────────────────────┐ ┌──────────────────────┐  │
│  │                          │ │                      │  │
│  │  Interactive map          │ │  Landmark Event      │  │
│  │  (embedded, dark theme)  │ │  Centre               │  │
│  │                          │ │                      │  │
│  │                          │ │  Plot 2 & 3, Water   │  │
│  │                          │ │  Corporation Drive,  │  │
│  │                          │ │  Victoria Island,    │  │
│  │                          │ │  Lagos, Nigeria      │  │
│  │                          │ │                      │  │
│  │                          │ │  [Get Directions →]  │  │
│  └──────────────────────────┘ │                      │  │
│                                │  Nearby Hotels ▼     │  │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ │  (expandable list)   │  │
│  │foto│ │foto│ │foto│ │foto│ └──────────────────────┘  │
│  │    │ │    │ │    │ │    │  (venue photo gallery)    │
│  └────┘ └────┘ └────┘ └────┘                           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Map
- Google Maps embed with **dark theme** (matches site)
- Custom map pin with NBA Week logo

---

## 16. FAQ Section

### Layout — Animated accordion

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ── FREQUENTLY ASKED QUESTIONS                           │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ ▸ What is Nigeria Blockchain & AI Week?            │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ ▾ Who should attend NBA Week?                      │  │
│  │                                                    │  │
│  │   NBA Week is open to blockchain professionals,    │  │
│  │   AI researchers, crypto traders, developers,      │  │
│  │   investors, regulators, students, and anyone      │  │
│  │   interested in emerging technologies in Africa.   │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ ▸ Is there a virtual attendance option?            │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ ▸ What are the ticket prices?                      │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ ▸ Can I pay with cryptocurrency?                   │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ ▸ How do I become a sponsor or partner?            │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Still have questions? [Contact Us →]                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Behavior
- Smooth height animation on expand/collapse (Framer Motion `AnimatePresence`)
- Only one item open at a time (accordion pattern)
- Chevron rotates smoothly on toggle

---

## 17. Footer

### Layout

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ┌────────────────┐ ┌──────────┐ ┌─────────┐ ┌──────┐ │
│  │ [NBA WEEK LOGO]│ │ Quick    │ │ Connect │ │News- │ │
│  │                │ │ Links    │ │         │ │letter│ │
│  │ Organized by   │ │          │ │ Twitter │ │      │ │
│  │ CoinNewsExtra  │ │ About    │ │LinkedIn │ │[email│ │
│  │                │ │ Speakers │ │Instagram│ │ input│ │
│  │ In partnership │ │ Agenda   │ │Facebook │ │  +   │ │
│  │ with Fintech   │ │ Sponsors │ │Telegram │ │subsc-│ │
│  │ Assoc. of      │ │ Register │ │         │ │ribe] │ │
│  │ Nigeria        │ │ Contact  │ │         │ │      │ │
│  └────────────────┘ └──────────┘ └─────────┘ └──────┘ │
│                                                          │
│  ─────────────────────────────────────────────────────── │
│  © 2026 Nigeria Blockchain & AI Week. All rights reserved│
│  Privacy Policy  •  Terms  •  Code of Conduct            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 18. Animations & Micro-Interactions

### Global Animation System (Framer Motion)

| Element | Animation | Trigger |
|---|---|---|
| Section headings | Fade up + slide from left | Scroll into view |
| Cards | Stagger fade up (0.1s delay each) | Scroll into view |
| Stats numbers | Count up from 0 | Scroll into view (once) |
| Speaker photos | Scale in with spring | Scroll into view |
| Buttons | Scale 1.05 + glow on hover | Hover |
| Nav links | Underline slides in from left | Hover |
| Countdown timer | Flip animation on digit change | Every second |
| Page transitions | Crossfade (if multi-page) | Route change |
| Scroll progress | Thin gradient line at top of page | Scroll |
| Cursor | Custom gradient dot cursor (desktop) | Mouse move |

### Scroll Progress Bar
- Thin (3px) gradient bar at very top of viewport
- Shows reading/scroll progress across full page
- Uses accent gradient colors

### Parallax
- Hero background moves at 0.5x scroll speed
- About section image has subtle parallax (-20px on scroll)

---

## 21. Mobile Strategy

### Key Differences on Mobile
- Hero: Single column, smaller title, countdown wraps to 2x2 grid
- Speakers: Horizontal scrollable cards (swipeable)
- Agenda: Full-width stacked cards (no side-by-side tracks)
- Ticket cards: Stacked vertically, swipeable carousel
- Stats: 2x2 grid instead of 4 columns
- Map: Full-width, stacked above venue details
- Navigation: Full-screen overlay menu

### Performance on Mobile
- Replace 3D globe with **static stylized Africa SVG** with CSS-animated connection lines — no Three.js on mobile
- Reduce animation complexity (shorter durations, fewer stagger items)
- Lazy load all images with blur placeholder
- Use `<picture>` with WebP + fallback
- Critical CSS inlined for above-the-fold

---

## 22. Multilingual Strategy

Given the pan-African audience (20+ countries, significant Francophone West Africa), multilingual support is a meaningful signal even if not a launch requirement.

### Phase 1 (Launch)
- English only — but architecture supports i18n from day one
- All user-facing strings extracted to `src/data/i18n/en.ts` (not hardcoded in components)
- Date/currency formatting via `Intl` API (respects locale)

### Phase 2 (Post-Launch)
- Add **French toggle** (🇬🇧/🇫🇷 switch in navbar)
- Only translate: navigation, CTAs, section headers, ticket info, FAQ
- Speaker bios / agenda descriptions remain in original language of speaker
- Library: `react-i18next` (lightweight, well-supported)
- URL structure: `?lang=fr` query param (not separate routes — keeps SEO simple for single-page site)

### Architecture Impact
- All text in components must reference translation keys, not raw strings
- This is a **Day 1 architecture decision** even though French ships later
- Store: `src/data/i18n/en.ts`, `src/data/i18n/fr.ts`

---

## 23. Technical Architecture

### Stack

```
Framework:        React 18 + Vite
Styling:          Tailwind CSS v4
Animations:       Framer Motion
Icons:            Lucide React
Font Loading:     @fontsource/space-grotesk + @fontsource/inter
State:            React Context (minimal state needs)
Forms:            React Hook Form + Zod validation
i18n:             react-i18next (architecture from Day 1, French in Phase 2)
Deployment:       Vercel
Analytics:        Plausible (privacy-first)
SEO:              react-helmet-async (meta tags, JSON-LD)
Maps:             Google Maps Embed (dark theme)
3D Globe:         react-globe.gl (hero, lazy-loaded)
Smooth Scroll:    Lenis
Payments:         Paystack (fiat) + custom crypto flow
```

### Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollProgress.tsx
│   ├── hero/
│   │   ├── Hero.tsx
│   │   ├── Countdown.tsx
│   │   ├── GlobeBackground.tsx       (3D globe — desktop)
│   │   └── AfricaMapSVG.tsx          (static SVG — mobile fallback)
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Stats.tsx
│   │   ├── SocialProof.tsx           ◆ NEW
│   │   ├── Speakers.tsx
│   │   ├── Agenda.tsx
│   │   ├── WhyAttend.tsx
│   │   ├── Tickets.tsx
│   │   ├── Sponsors.tsx
│   │   ├── Venue.tsx
│   │   ├── Highlights.tsx
│   │   ├── FAQ.tsx
│   │   └── Newsletter.tsx
│   ├── registration/                  ◆ NEW (multi-step flow)
│   │   ├── RegistrationPanel.tsx
│   │   ├── StepSelectTier.tsx
│   │   ├── StepDetails.tsx
│   │   ├── StepPayment.tsx
│   │   ├── StepConfirmation.tsx
│   │   └── CryptoPaymentFlow.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeader.tsx
│       ├── GlassCard.tsx
│       ├── AnimatedCounter.tsx
│       ├── AdinkraPattern.tsx         ◆ NEW (SVG pattern component)
│       └── ScrollReveal.tsx
├── data/
│   ├── i18n/                          ◆ NEW
│   │   ├── en.ts
│   │   └── fr.ts                      (Phase 2)
│   ├── speakers.ts
│   ├── agenda.ts
│   ├── sponsors.ts
│   ├── testimonials.ts               ◆ NEW
│   ├── press.ts                       ◆ NEW
│   ├── faq.ts
│   └── tickets.ts
├── hooks/
│   ├── useCountdown.ts
│   ├── useScrollSpy.ts
│   ├── useInView.ts
│   └── useMediaQuery.ts              ◆ NEW (globe vs SVG switch)
├── seo/                               ◆ NEW
│   ├── MetaTags.tsx
│   ├── EventJsonLd.tsx
│   └── og-card.png                    (1200×630 pre-rendered)
├── styles/
│   ├── globals.css
│   └── adinkra-patterns.css          ◆ NEW
├── App.tsx
└── main.tsx
```

### Performance Targets

| Metric | Target |
|---|---|
| LCP | < 2.0s |
| FID | < 100ms |
| CLS | < 0.1 |
| Lighthouse Score | 95+ |
| Bundle Size | < 200KB gzipped |
| Time to Interactive | < 3s on 3G |

---

## Summary: What Makes This Better Than The Current Site

| Current Site | Redesigned Site |
|---|---|
| WordPress with plugin bloat | React + Vite (fast, lean) |
| Generic template — could be any conference | **Proudly African** — Adinkra patterns, Lagos photography, warm earth accents |
| Multiple H1 tags | Clean semantic HTML, one H1 |
| No agenda/schedule | Full tabbed multi-day agenda with track filters |
| Speaker images only | Full speaker cards with bios, titles & socials |
| External Netlify forms | Built-in multi-step registration with crypto payment flow |
| No pricing transparency | Clear ticket tiers with pricing in ₦ and $ |
| No animations | Purposeful Framer Motion animations (respects `prefers-reduced-motion`) |
| No countdown | Live countdown timer with flip animation |
| Static hero | **3D globe centered on Nigeria** — most shareable screenshot on the site |
| No FAQ | Animated accessible accordion FAQ |
| No scroll progress | Gradient scroll progress bar |
| Mobile unclear | Mobile-first responsive design |
| Stale date (2025) | Updated for October 2026 |
| No social proof | Attendee testimonials + press logos + pull quotes |
| No SEO strategy | JSON-LD Event schema + OG cards + meta strategy |
| No accessibility consideration | WCAG AA compliant — contrast, keyboard nav, screen readers, reduced motion |
| English only, no i18n prep | i18n architecture from Day 1, French toggle in Phase 2 |
| No search discoverability | Structured data → Google rich event cards in search results |

---

**Next Steps:** Review this updated plan. Once approved, I'll scaffold the full React project and build section by section, starting with the hero + globe and the design system (colors, typography, Adinkra patterns).
