export type Lang = "en" | "az";

export type CampusPoint = {
  id: string;
  names: Record<Lang, string>;
  count: number;
  /** Horizontal position on the map (0–100%, left → right) */
  x: string;
  /** Vertical position on the map (0–100%, top → bottom) */
  y: string;
};

export const CAMPUS_POINTS: CampusPoint[] = [
  {
    id: "A-building",
    names: { en: "A Building", az: "A Binası" },
    count: 9,
    x: "22%",
    y: "36%",
  },
  {
    id: "B-building",
    names: { en: "B Building", az: "B Binası" },
    count: 11,
    x: "43.4%",
    y: "36%",
  },
  {
    id: "C-building",
    names: { en: "C Building", az: "C Binası" },
    count: 3,
    x: "33.6%",
    y: "37.8%",
  },
  {
    id: "D-building",
    names: { en: "D Building", az: "D Binası" },
    count: 3,
    x: "56.4%",
    y: "19.7%",
  },
  {
    id: "E-building",
    names: { en: "E Building", az: "E Binası" },
    count: 1,
    x: "75%",
    y: "15.5%",
  },
  {
    id: "G-building",
    names: { en: "G Building", az: "G Binası" },
    count: 0,
    x: "51%",
    y: "66.3%",
  },
  {
    id: "L-building",
    names: { en: "L Building", az: "L Binası" },
    count: 2,
    x: "23.7%",
    y: "41.5%",
  },
  {
    id: "F-building",
    names: { en: "F Building", az: "F Binası" },
    count: 0,
    x: "63.8%",
    y: "65.7%",
  },
];

export const TOTAL_BATTERIES = CAMPUS_POINTS.reduce((sum, point) => sum + point.count, 0);
export const TOTAL_COLLECTION_POINTS = CAMPUS_POINTS.length;

export const STATS_VALUES = {
  batteriesCollected: TOTAL_BATTERIES,
  collectionPoints: TOTAL_COLLECTION_POINTS,
  strategicPartners: 2,
  campusBuildingsCovered: TOTAL_COLLECTION_POINTS,
} as const;
