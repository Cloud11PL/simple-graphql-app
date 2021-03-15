import * as React from 'react';
import { equals } from 'ramda';
import { isMobile } from 'react-device-detect';

import { Planet } from 'Common/types';
import { MobileTableRow, MobileTableWrapper } from './components';
import Table from '../Table/Table';

const getPropertyName = (key: string) => {
  switch (key) {
    case 'name':
      return 'Planet name';
    case 'climates':
      return 'Climate';
    case 'rotationPeriod':
      return 'Rotation Period';
    case 'orbitalPeriod':
      return 'Orbital Period';
    case 'surfaceWater':
      return 'Surface Water';
    case 'population':
      return 'Population';
    case 'diameter':
      return 'Diameter';
    default:
      return 'Unknown';
  }
};

const MobileTable = ({ planets }: Props) => {
  const filteredPlanet = planets.map(({ __typename, id, ...rest }: Planet) => {
    return { ...rest };
  });

  return (
    <>
      {filteredPlanet.map((planet) => {
        return (
          <MobileTableWrapper>
            <MobileTableRow>
              {Object.entries(planet).map(([key, value]) => {
                return (
                  <>
                    <div>{getPropertyName(key)}</div>
                    <div
                      style={equals('name', key) ? { color: '#00687F' } : {}}
                    >
                      {value || 'unknown'}
                    </div>
                  </>
                );
              })}
            </MobileTableRow>
          </MobileTableWrapper>
        );
      })}
    </>
  );
};

type Props = {
  planets: Planet[];
};

const TableWrapper = ({ planets }: Props) =>
  isMobile ? <MobileTable planets={planets} /> : <Table planets={planets} />;

export default TableWrapper;
