import * as React from 'react';

import { StyledLayout, StyledLogo as Logo } from './components';

const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <Logo /> 
      {children}
    </StyledLayout>
  );
};

export default Layout;
