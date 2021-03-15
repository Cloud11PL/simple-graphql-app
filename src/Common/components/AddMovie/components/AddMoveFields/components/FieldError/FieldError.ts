import styled from 'styled-components';

const FieldError = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  left: 0;
  padding: 0.5em;
  color: #ff1616;
  border: 1px solid #ff1616;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(196, 196, 196, 0.5);
  background-color: white;
  user-select: none;
  width: 70%;
`;

export default FieldError;
