import * as React from 'react';
import { useState } from 'react';

import { ArrowOpen, ArrowClose } from 'Common/Icons';
import { IconButton, RowTitle } from 'Common/components';
import { Row } from './components';

type Props = {
  title: string;
};

const ExpandableRow: React.FC<Props> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleClick = () => setIsExpanded((status) => !status);

  return (
    <>
      <Row isExpanded={isExpanded}>
        <RowTitle>{title}</RowTitle>
        <IconButton handleClick={handleClick}>
          {isExpanded ? <ArrowClose /> : <ArrowOpen />}
        </IconButton>
      </Row>
      {isExpanded && children}
    </>
  );
};

export default ExpandableRow;
