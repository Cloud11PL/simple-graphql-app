import styled, { css } from 'styled-components';
import { ifProp, theme } from 'styled-tools';

type Props = {
  hasError?: boolean;
};

const SubmitButton = styled.button<Props>`
  padding: 1em 3em;
  background: #1ba1be;
  border-radius: 4px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 1em;

  @media ${theme('devices.tablet')} {
    align-self: flex-end;
  }

  ${ifProp('hasError', css`
    background: #E0E6EE;
    pointer-events: none;
  `)}
`;

export default SubmitButton;
