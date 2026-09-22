// One style for every live-data pill on the site (hero battles badge, the
// store rating chips): a soft green tint that deepens on hover and deeper
// still while pressed, so a click is unmistakable. Zernio's badge does the
// same with a warm tint — the visible step between states is the point.
export const livePillClass =
  "group inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20 active:bg-primary/30";
