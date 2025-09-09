export const ALLOWED_ZIPS = new Set<string>([
  // --- South KC core (MO) ---
  "64113","64114","64131","64132","64133","64134","64137","64138","64139",
  "64145","64146","64147","64149","64030",

  // --- Johnson County core (KS) ---
  "66203","66204","66205","66206","66207","66208","66209","66210","66211","66212",
  "66213","66214","66215","66219","66223","66224",

  // === KS additions ===
  "66061","66062","66063","66051", // Olathe
  "66030",                        // Gardner
  "66085","66013",               // Stilwell, Bucyrus
  "66083",                       // Spring Hill
  "66053",                       // Louisburg
  "66040",                       // La Cygne
  "66071",                       // Paola
  "66064",                       // Osawatomie

  // === MO additions ===
  "64012",                       // Belton
  "64063","64064","64081","64082","64086", // Lee's Summit
  "64080",                       // Pleasant Hill
  "64083",                       // Raymore
  "64078",                       // Peculiar
  "64701","64746","64725","64742","64720","64734","64747" // Harrisonville, Freeman, Archie, Drexel, Adrian, Cleveland, Garden City
]);

export function isZipAllowed(zip: string) {
  const z = (zip || "").replace(/\D/g, "").slice(0, 5);
  return ALLOWED_ZIPS.has(z);
}
