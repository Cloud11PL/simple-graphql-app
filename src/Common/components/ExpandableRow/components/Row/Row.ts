import styled from 'styled-components';
import { ifProp } from 'styled-tools';

type Props = {
  isExpanded?: boolean;
};

const Row = styled.div<Props>`
  background-color: white;
  box-shadow: ${ifProp(
    'isExpanded',
    '0px 4px 12px rgba(224, 230, 238, 0.5)',
    '0px 2px 1px rgba(196, 196, 196, 0.2)'
  )};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: ${ifProp('isExpanded', '4px 4px 0 0', '4px')};
  padding: 1em;
  margin: 0.5em 0 0 0;
  z-index: 1;
  box-sizing: border-box;
`;

export default Row;
