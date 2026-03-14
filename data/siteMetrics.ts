export type Lang = "en" | "az";

export type CampusPoint = {
  id: string;
  names: Record<Lang, string>;
  count: number;
  x: string;
  y: string;
};

export const CAMPUS_POINTS: CampusPoint[] = [
  {
    id: "a-building",
    names: { en: "A Building", az: "A Binası" },
    count: 0,
    x: "20%",
    y: "23%",
  },
  {
    id: "b-building",
    names: { en: "B Building", az: "B Binası" },
    count: 0,
    x: "73%",
    y: "37%",
  },
  {
    id: "c-building",
    names: { en: "C Building", az: "C Binası" },
    count: 0,
    x: "42%",
    y: "48%",
  },
  {
    id: "d-building",
    names: { en: "D Building", az: "D Binası" },
    count: 0,
    x: "53%",
    y: "15%",
  },
  {
    id: "l-building",
    names: { en: "L Building", az: "L Binası" },
    count: 0,
    x: "18%",
    y: "63%",
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
