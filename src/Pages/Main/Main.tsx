import * as React from 'react';

import {
  Layout,
  DashedLine,
  ExpandableRow,
  FilmsWrapper,
  AddMovie,
  ManuallyAddedMovies,
  PageContainer,
} from 'Common/components';

const ROW_TITLE = 'Add movie';

const MainPage = () => {
  return (
    <PageContainer>
      <Layout>
        <FilmsWrapper />
        <ManuallyAddedMovies />
        <DashedLine />
        <ExpandableRow title={ROW_TITLE} renderExpanded>
          <AddMovie />
        </ExpandableRow>
      </Layout>
    </PageContainer>
  );
};

export default MainPage;
