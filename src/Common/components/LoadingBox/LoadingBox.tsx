import * as React from 'react';

import { Loading } from 'Assets/Icons';

import { LoadingWrapper } from './components';

const LoadingBox = () => {
  return (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  );
};

export default LoadingBox;
