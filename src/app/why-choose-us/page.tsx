@tailwind base;
@tailwind components;
@tailwind utilities;

/* =========================================
   ALL STAR PEST SOLUTIONS GLOBAL STYLES
   Modern Power Brand System
========================================= */

/* ---------- BRAND COLORS ---------- */
:root {
  --as-yellow: #ffd100;
  --as-red: #c1121f;
  --as-black: #000000;
  --as-dark: #111111;
  --as-light-gray: #f5f5f5;
}

/* ---------- BASE ---------- */
html,
body {
  height: 100%;
}

body {
  background: #ffffff;
  color: #111111;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* =========================================
   WORDMARK SYSTEM
   Usage:
   <span class="as-wordmark as-wordmark--header">
     <span class="as-wordmark__primary">ALL STAR</span>
     <span class="as-wordmark__secondary">PEST SOLUTIONS</span>
   </span>
========================================= */

.as-wordmark {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
}

/* ALL STAR (yellow fill, black outline, thin red outer accent) */
.as-wordmark__primary {
  font-family: "Bebas Neue", "Oswald", "Impact", "Arial Black", sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  color: var(--as-yellow);

  /* Black outline */
  -webkit-text-stroke: 3px var(--as-black);

  /* Thin red outer accent (subtle) */
  text-shadow:
    1px 0 0 var(--as-red),
    -1px 0 0 var(--as-red),
    0 1px 0 var(--as-red),
    0 -1px 0 var(--as-red);
}

/* PEST SOLUTIONS (red fill, thin black outline) */
.as-wordmark__secondary {
  margin-top: 2px;
  font-family: "Bebas Neue", "Oswald", "Impact", "Arial Black", sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: var(--as-red);

  /* Thin black outline */
  -webkit-text-stroke: 1.5px var(--as-black);
}

/* Size variants */
.as-wordmark--header .as-wordmark__primary {
  font-size: 34px;
}
.as-wordmark--header .as-wordmark__secondary {
  font-size: 16px;
}

.as-wordmark--hero .as-wordmark__primary {
  font-size: clamp(52px, 6vw, 86px);
}
.as-wordmark--hero .as-wordmark__secondary {
  font-size: clamp(20px, 2vw, 30px);
}

.as-wordmark--small .as-wordmark__primary {
  font-size: 28px;
}
.as-wordmark--small .as-wordmark__secondary {
  font-size: 14px;
  letter-spacing: 3px;
}

/* =========================================
   OPTIONAL: BUTTON UTILITY CLASSES
========================================= */

.as-btn-primary {
  background: var(--as-red);
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  transition: background-color 0.2s ease;
  display: inline-block;
  text-decoration: none;
}
.as-btn-primary:hover {
  background: #a60f19;
}

.as-btn-secondary {
  background: var(--as-yellow);
  color: #000000;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  transition: filter 0.2s ease;
  display: inline-block;
  text-decoration: none;
}
.as-btn-secondary:hover {
  filter: brightness(0.95);
}