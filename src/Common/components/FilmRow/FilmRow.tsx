import * as React from 'react';

import { ExpandableRow } from 'Common/components';

import { FilmTable } from './components';

type Props = {
  title: string;
  filmId: string;
};

const FilmRow: React.FC<Props> = ({ title, filmId }) => {
  return (
    <ExpandableRow title={title} key={filmId}>
      <FilmTable filmId={filmId} />
    </ExpandableRow>
  );
};

export default FilmRow;
