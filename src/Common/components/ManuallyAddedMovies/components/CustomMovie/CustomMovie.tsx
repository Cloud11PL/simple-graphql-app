import * as React from 'react';
import { useQuery } from '@apollo/client';
import { pathOr } from 'ramda';

import { ExpandableRow, TableContainer } from 'Common/components';
import { PlanetPreview } from 'Common/types';
import { fetchAllPlanetsWithDetails } from 'Common/services/queries';
import { TableWrapper } from 'Common/components/FilmRow/components/FilmTable/components/';

const CustomMovie = ({
  title,
  planets,
}: {
  title: string;
  planets: PlanetPreview[];
}) => {
  const { loading, data } = useQuery(fetchAllPlanetsWithDetails);
  const requiredIds = planets.map((planet) => planet.id);

  const requiredPlanets = pathOr(
    [],
    ['allPlanets', 'planets']
  )(data).filter((planet: any) => requiredIds.includes(planet.id));

  return (
    <ExpandableRow title={title} key={title}>
      <TableContainer>
        <TableWrapper planets={requiredPlanets} />
      </TableContainer>
    </ExpandableRow>
  );
};

export default CustomMovie;
