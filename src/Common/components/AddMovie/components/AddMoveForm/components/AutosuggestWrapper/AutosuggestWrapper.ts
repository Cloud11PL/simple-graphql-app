import styled from 'styled-components';

const AutosuggestWrapper = styled.div`
  & .react-autosuggest__container {
    input {
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
    }
  }

  & .react-autosuggest__suggestions-list {
    width: 70%;
    list-style-type: none;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(196, 196, 196, 0.5);
    padding: 0;
    max-height: 20vh;
    overflow: scroll;

    li {
      cursor: pointer;
      padding: 1em;

      &:hover {
        background-color: gray;
      }
    }
  }
`;

export default AutosuggestWrapper;
