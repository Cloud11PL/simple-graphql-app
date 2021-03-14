import { PlanetPreview } from 'Common/types';

const getSuggestedPlanets = (planets: PlanetPreview[], partialName: string) => {
  return planets.filter((planet) => planet.name.toLocaleLowerCase().includes(partialName.toLocaleLowerCase()));
};

export default getSuggestedPlanets;
