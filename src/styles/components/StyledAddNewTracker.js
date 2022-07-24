import styled from 'styled-components';

export const StyledAddNewTracker = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 40px;

  .input__wrapper {
    width: 600px;
    max-width: 100%;
    position: relative;
    input {
      border: 1px solid #000;
      border-radius: 30px;
      width: 600px;
      max-width: 100%;
      height: 40px;
      padding: 10px 50px 10px 15px;
      outline: none;
    }

    button {
      background-color: transparent;
      padding: 0;
      border: none;
      outline: none;
      cursor: pointer;
    }

    .add {
      font-size: 40px;
      fill: #3faf6c;
      top: 0;
      right: 0;
      position: absolute;
      transition: 0.3s;
      &:hover {
        fill: #3abf70;
      }
    }
  }
`;
