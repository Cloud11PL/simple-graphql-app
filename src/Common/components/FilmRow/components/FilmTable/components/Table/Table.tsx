import * as React from 'react';
import { useMemo } from 'react';
import { useTable, useSortBy, Column } from 'react-table';

import type { Planet } from 'Common/types';

import { StyledTable, THead, Th, Td } from './components';

type Props = {
  planets: Planet[];
};

const Table: React.FC<Props> = ({ planets }) => {
  const columns: Column<Planet>[] = useMemo(
    () => [
      {
        Header: 'Planet Name',
        accessor: 'name',
        id: 'name',
      },
      {
        Header: 'Rotation period',
        accessor: 'rotationPeriod',
        id: 'rotationPeriod',
      },
      {
        Header: 'Orbital period',
        accessor: 'orbitalPeriod',
        id: 'orbitalPeriod',
      },
      {
        Header: 'Diameter period',
        accessor: 'diameter',
        id: 'diameter',
      },
      {
        Header: 'Climate',
        accessor: 'climates',
        id: 'climates',
      },
      {
        Header: 'Surface water',
        accessor: 'surfaceWater',
        id: 'surfaceWater',
      },
      {
        Header: 'Population',
        accessor: 'population',
        id: 'population',
      },
    ],
    []
  );

  console.log(planets);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: planets,
    },
    useSortBy
  );

  const renderArrow = (column: any) =>
    column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : '';

  return (
    <StyledTable {...getTableProps()}>
      <THead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // react-table is lacking some types
              // @ts-ignore
              <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>{renderArrow(column)}</span>
              </Th>
            ))}
          </tr>
        ))}
      </THead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
