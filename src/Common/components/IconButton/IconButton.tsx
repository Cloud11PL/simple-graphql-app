import * as React from 'react';

import { StyledButton as Button } from './components';

type Props = {
  handleClick?: () => void;
};

const IconButton: React.FC<Props> = ({ handleClick, children }) => {
  return <Button onClick={handleClick}>{children}</Button>;
};

export default IconButton;
