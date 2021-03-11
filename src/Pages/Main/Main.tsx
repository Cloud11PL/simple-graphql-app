import * as React from 'react';

import {
  Layout,
  DashedLine,
  ExpandableRow,
  FilmsWrapper,
  AddMovie,
} from 'Common/components';

const ROW_TITLE = 'Add movie';

const MainPage = () => {
  return (
    <Layout>
      <FilmsWrapper />
      <DashedLine />
      <ExpandableRow title={ROW_TITLE} renderExpanded>
        <AddMovie />
      </ExpandableRow>
    </Layout>
  );
};

export default MainPage;
