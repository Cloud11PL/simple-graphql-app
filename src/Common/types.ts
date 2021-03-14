export interface Film {
  title: string;
  id: string;
}

export type PlanetPreview = {
  name: string;
  id: string;
};

export type Planet = {
  name: string;
  diameter: number;
  orbitalPeriod: number;
  population: number;
  rotationPeriod: number;
  surfaceWater: number;
  climates: string[];
};
