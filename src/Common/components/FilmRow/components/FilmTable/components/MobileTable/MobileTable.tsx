import * as React from 'react';

import { Planet } from 'Common/types';

type Props = {
  planets: Planet[];
};

const MobileTable = ({ planets }: Props) => {
  return planets.map((planet) => {
    return <div>{planet.name}</div>;
  });
};

export default MobileTable;
