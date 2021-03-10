import * as React from 'react';
import { isNil } from 'ramda';

import { usePlanetsByMovieId } from 'Common/hooks';
import { Table, TableWrapper } from './components';

type Props = {
  filmId: string;
};

const FilmTable: React.ElementType = ({ filmId }: Props) => {
  const { loading, data: planets } = usePlanetsByMovieId({ filmId });

  return (
    <TableWrapper>
      {!isNil(planets) && <Table planets={planets} />}
    </TableWrapper>
  );
};

export default FilmTable;
