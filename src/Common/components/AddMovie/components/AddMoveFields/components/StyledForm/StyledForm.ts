import styled from 'styled-components';
import { theme } from 'styled-tools';

const StyledFrom = styled.form`
  width: 100%;
  background-color: white;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media ${theme('devices.tablet')} {
    padding: 2em 8em;
  }
`;

export default StyledFrom;
