import * as React from 'react';

import { usePlanetsByMovieId } from 'Common/hooks';
import { LoadingBox, TableContainer } from 'Common/components';
import { TableWrapper } from './components';

type Props = {
  filmId: string;
};

const FilmTable: React.ElementType = ({ filmId }: Props) => {
  const { data: planets, loading } = usePlanetsByMovieId({ filmId });

  return (
    <TableContainer>
      {!loading ? <TableWrapper planets={planets} /> : <LoadingBox />}
    </TableContainer>
  );
};

export default FilmTable;
