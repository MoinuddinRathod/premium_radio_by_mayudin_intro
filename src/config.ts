/** Live product URL — Global Radio by Mayudin */
export const APP_URL = "https://radio-by-mayudin.vercel.app/";

/** Shared props for every outbound link to the live app */
export const APP_LINK = {
  href: APP_URL,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

/** Real product numbers, taken from the live app */
export const STATS = {
  stations: 470,
  countries: 60,
  genres: 40,
  rating: 4.9,
};
