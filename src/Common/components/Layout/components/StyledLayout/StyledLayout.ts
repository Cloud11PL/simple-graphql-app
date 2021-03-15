import styled from 'styled-components';
import { theme } from 'styled-tools';

const StyledLayout = styled.div`
  width: calc(100% - 4em);
  margin: 2em;

  @media ${theme('devices.laptop')} {
    width: 70%;
    margin-top: 2em;
  }

  min-height: 50vh;
  padding: 2em;
  background-color: #e0e6ee;
  border-radius: 8px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export default StyledLayout;
