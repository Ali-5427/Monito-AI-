# Complete Animation Prompt for Monito AI Website

This document contains the comprehensive animation specifications for the Monito AI website. Use this as a reference guide for implementing animations and interactions across all sections.

---

## **SECTION 1: HERO SECTION**

### **1.1 Background**
- **Gradient:** Radial gradient from primary/10% at center, fading to transparent
- **Overlay:** Subtle noise texture overlay

### **1.2 Content**
- **Heading:** 4xl (mobile) → 6xl (desktop), bold, centered
- **Gradient Text:** "Monito" has gradient from primary → white → secondary
- **Description:** Centered, gray-400, max-width 768px
- **Primary CTA Button:**
  - Primary color, large, centered
  - Hover effect: Scale, overlay
  - Animation: Subtle `animate-bounce` or `animate-pulse` on initial load
- **Secondary CTA Button:**
  - Transparent background, white border
  - Hover effect: Background fills with primary color

---

## **SECTION 2: STATS TICKER SECTION**

### **2.1 Stats Ticker**
- **Type:** Infinite, auto-scrolling ticker
- **Speed:** Moderate (e.g., 30s per full cycle)
- **Pause on Hover:** Yes
- **Direction:** Left-to-right
- **Cloned Elements:** To ensure seamless infinite loop
- **Stat Item:**
  - Background: White/5%
  - Border: 1px white/10%
  - Padding: 16px
  - Border Radius: 8px
  - Content:
    - Number: Large, bold, white
    - Label: Small, gray-400

---

## **SECTION 3: HOW IT WORKS SECTION**

### **3.1 Section Header**
- **Heading:** 4xl (mobile) → 6xl (desktop), bold
- **Gradient Text:** "Works" has gradient from primary → white → secondary
- **Description:** Centered, gray-400, max-width 768px

### **3.2 Steps (Left Column - Sticky)**
- **Sticky Behavior:** Left column remains fixed as user scrolls through steps on the right.
- **Active Step Indicator:**
  - Background: Primary color, rounded-full
  - Text: Black, bold
  - Animation: Smooth transition on active state change

### **3.3 Step Content (Right Column)**
- **Each Step:**
  - Trigger: AnimatedReveal on scroll
  - Animation: Fade-in + slide-up (same as hero)
  - Content:
    - Title: 3xl, bold
    - Description: Gray-400
    - Image/Visual: Rounded-lg, full width, with subtle shadow

---

## **SECTION 4: FEATURES (BENTO GRID) SECTION**

### **4.1 Section Header**
- **Heading:** 4xl (mobile) → 6xl (desktop), bold
- **Gradient Text:** "Features" has gradient from secondary → primary
- **Description:** Centered, gray-400, max-width 768px

### **4.2 Feature Cards (Bento Grid)**

**Each Feature Card:**
- **Trigger:** AnimatedReveal on scroll (staggered)
- **Animation:** Fade-in + slide-up (same as hero)
- **Layout:** Flex column
- **Border:** 1px white/10%
- **Background:** White/5%
- **Padding:** 32px
- **Border Radius:** 16px
- **Hover Effect:**
  - Scale: 1.02 (2% larger)
  - Subtle glow effect (radial gradient from primary/5%)
  - Transition: 300ms ease-out
- **Card Content:**
  - Icon: Large, primary color, top-left
  - Title: 2xl, bold, white
  - Description: Small, gray-400 text, leading-relaxed
  - Image/Visual: If present, rounded-lg, full width, with subtle shadow

---

## **SECTION 5: USE CASES SECTION**

### **5.1 Section Header**
- **Heading:** 4xl (mobile) → 6xl (desktop), bold
- **Gradient Text:** "Unleash" has gradient from primary → white → secondary
- **Description:** Centered, gray-400, max-width 768px

### **5.2 Use Case Cards**

**Each Use Case Card:**
- **Trigger:** AnimatedReveal on scroll (staggered)
- **Animation:** Fade-in + slide-up (same as hero)
- **Layout:** Flex column
- **Icon:** Large, primary color, centered
- **Title:** 2xl, bold, white, centered
- **Description:** Gray-400, centered, max-width 300px
- **Hover Effect:**
  - Scale: 1.02 (2% larger)
  - Background: Subtle radial gradient from primary/5% at center
  - Transition: 300ms ease-out

---

## **SECTION 6: TESTIMONIALS SECTION**

### **6.1 Section Header**
- **Heading:** 4xl (mobile) → 6xl (desktop), bold
- **Gradient Text:** "Trust" has gradient from secondary → primary
- **Description:** Centered, gray-400, max-width 768px

### **6.2 Testimonial Carousel**
- **Type:** Infinite, auto-scrolling carousel
- **Speed:** Slow (e.g., 60s per full cycle)
- **Pause on Hover:** Yes
- **Direction:** Left-to-right
- **Cloned Elements:** To ensure seamless infinite loop
- **Testimonial Card:**
  - Background: White/5%
  - Border: 1px white/10%
  - Padding: 32px
  - Border Radius: 16px
  - Content:
    - Quote Icon: Large, primary color, top-left
    - Quote Text: Italic, large font, white
    - Author Info: Flex row, user photo (rounded-full), name (bold), title (gray-500)

---

## **SECTION 7: PRICING SECTION**

### **7.1 Section Header**
- **Heading:** 4xl (mobile) → 6xl (desktop), bold
- **Gradient Text:** "Plans" has gradient from primary → white → secondary
- **Description:** Centered, gray-400, max-width 768px

### **7.2 Toggle Switch (Monthly/Annually)**
- **Type:** Custom toggle switch
- **Animation:** Smooth slide for the active indicator
- **Background:** Dark gray
- **Active Indicator:** Primary color, rounded-full
- **Text:** White, bold, changes color to primary when active

### **7.3 Pricing Cards**

**Each Pricing Card:**
- **Trigger:** AnimatedReveal on scroll (staggered)
- **Animation:** Fade-in + slide-up (same as hero)
- **Layout:** Flex column
- **Border:** 1px white/10%
- **Background:** White/5%
- **Padding:** 32px
- **Border Radius:** 16px
- **"Most Popular" Badge:**
  - Position: Top-right corner
  - Background: Primary color
  - Text: Black, bold, uppercase
  - Animation: Subtle `animate-bounce` or `animate-pulse`
- **Hover Effect:**
  - Scale: 1.02 (2% larger)
  - Subtle glow effect (radial gradient from primary/5%)
  - Transition: 300ms ease-out
- **Content:**
  - Plan Name: 2xl, bold
  - Price: Large, bold, white, with currency and frequency
  - Features List: Checkmark icon (primary color), text (white)
  - CTA Button: Primary color, full width, hover effect (scale, overlay)

---

## **SECTION 8: FAQ SECTION**

### **8.1 Section Header**
- **Heading:** 4xl (mobile) → 6xl (desktop), bold
- **Gradient Text:** "Questions" has gradient from secondary → primary
- **Description:** Centered, gray-400, max-width 768px

### **8.2 Accordion Items**

**Each Accordion Item:**
- **Trigger:** Click on header
- **Animation:** Smooth slide-down/slide-up for content
- **Transition:** 300ms ease-in-out
- **Icon Rotation:** Chevron icon rotates 180 degrees when open
- **Header:** Bold, white, hover changes text color to primary
- **Content:** Gray-400, padding, hidden by default

---

## **SECTION 9: FINAL CALL TO ACTION (CTA) SECTION**

### **9.1 Section Background**
- **Gradient:** Radial gradient from primary/10% at center, fading to transparent
- **Overlay:** Subtle noise texture overlay

### **9.2 Content**
- **Heading:** 4xl (mobile) → 6xl (desktop), bold, centered
- **Gradient Text:** "Ready" has gradient from primary → white → secondary
- **Description:** Centered, gray-400, max-width 768px
- **CTA Button:**
  - Primary color, large, centered
  - Hover effect: Scale, overlay (same as hero primary CTA)
  - Animation: Subtle `animate-bounce` or `animate-pulse` on initial load

---

## **SECTION 10: HEADER & FOOTER**

### **10.1 Header (Navigation)**
- **Sticky Header:** Yes, fixed at top on scroll
- **Background:** Transparent by default, becomes white/5% with backdrop blur on scroll down
- **Transition:** 300ms ease-in-out for background change
- **Logo:** SVG, primary color
- **Nav Links:** White text, hover changes to primary color, underline on hover (slide-in from center)
- **Mobile Menu Button:** Hamburger icon, rotates into 'X' on open
- **Mobile Menu Overlay:**
  - Slide-in from right (translateX: 100% → 0)
  - Background: Dark gradient
  - Nav Links: Staggered fade-in + slide-up

### **10.2 Footer**
- **Background:** Dark gray
- **Border Top:** 1px white/5%
- **Content:**
  - Logo: SVG, primary color
  - Navigation Links: White text, hover changes to primary color
  - Social Media Icons: White, hover changes to primary color, subtle scale effect
  - Copyright Text: Small, gray-500

---

## **GENERAL ANIMATION GUIDELINES FOR AI TOOL**

### **Technology**
- Prioritize **Framer Motion** for complex animations and interactions
- Use **Tailwind CSS transitions/animations** for simpler effects (e.g., hover states, background changes)

### **Easing**
- Predominantly `ease-out` or `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for smooth, natural motion

### **Durations**
- **Short interactions (hovers):** 200-300ms
- **Reveals (fade/slide):** 800-1200ms
- **Background/color changes:** 300-500ms

### **Triggers**
- `whileInView` (Framer Motion) or Intersection Observer for scroll-triggered reveals
- `whileHover` (Framer Motion) or CSS `:hover` for interactive elements
- `onClick` for menu toggles and accordion items

### **Responsiveness**
- Ensure all animations are performant and visually appealing across all device sizes (mobile, tablet, desktop)
- Disable or simplify complex animations on smaller devices if performance is impacted

### **Accessibility**
- Ensure animations do not cause motion sickness or discomfort
- Provide an option to reduce motion if possible (e.g., `prefers-reduced-motion` media query)

---

## **Summary**

This prompt provides a comprehensive guide for implementing animations and interactions across the Monito AI website. It covers:

- **11 Major Sections** with detailed animation specifications
- **Color Scheme:** Primary (#64FFDA), Secondary (#F97316), with white/gray accents
- **Typography:** Space Grotesk for headings, Roboto for paragraphs
- **Animation Techniques:** Framer Motion for complex animations, Tailwind CSS for simple effects
- **Responsive Design:** Mobile-first approach with scaling for tablet and desktop
- **Accessibility:** Motion reduction support and WCAG compliance

Use this document as a reference when implementing animations to ensure consistency and quality across the entire website.
