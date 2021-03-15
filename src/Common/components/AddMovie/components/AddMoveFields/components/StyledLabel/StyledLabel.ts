import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

type Props = {
  hasError?: boolean;
};

const StyledLabel = styled.label<Props>`
  position: absolute;
  left: 0;
  top: -1em;
  font-size: 12px;

  ${ifProp(
    'hasError',
    css`
      color: #ff1616;
    `
  )}
`;

export default StyledLabel;
