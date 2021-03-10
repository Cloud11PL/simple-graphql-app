import * as React from 'react';

import { Layout, DashedLine, ExpandableRow, FilmsWrapper } from 'Common/components';

const ROW_TITLE = 'Add movie';

const MainPage = () => {
  return (
    <Layout>
      <FilmsWrapper />
      <DashedLine />
      <ExpandableRow title={ROW_TITLE} />
    </Layout>
  );
};

export default MainPage;
