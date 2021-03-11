import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5em 0;
  width: 70%;
  border: none;
  border-bottom: 1px solid #999999;
  border-radius: 0;
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom: 2px solid #999999;
  }
`;

export default StyledInput;