import styled from 'styled-components';

export const StyledTracker = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  list-style: none;
  width: 600px;
  max-width: 100%;
  padding: 10px 20px;
  border-top: 1px solid #ccc;
  height: 75px;

  @media (max-width: 450px) {
    padding: 5px 10px;
  }

  @media (max-width: 350px) {
    font-size: 14px;
  }

  &:last-child {
    border-bottom: 1px solid #ccc;
  }

  .wrapper__time {
    display: flex;
    align-items: center;
  }

  .edit,
  .stop,
  .resume,
  .delete {
    font-size: 25px;
    margin-left: 10px;
    cursor: pointer;
  }

  .resume {
    fill: #3faf6c;

    &:hover {
      fill: #3abf70;
    }
  }

  .delete {
    fill: rgb(210, 105, 122);

    &:hover {
      opacity: 0.8;
    }
  }

  .cancel {
    flex-shrink: 0;
    font-size: 22px;
    color: rgb(210, 105, 122);
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .active {
    color: #3faf6c;
  }

  .input__wrapper {
    display: flex;
    align-items: center;

    input {
      text-align: center;
      width: 50px;
      margin-right: 5px;
      border: 1px solid #3faf6c;
      border-radius: 5px;
      background: transparent;

      @media (max-width: 550px) {
        width: 40px;
      }
    }

    span {
      font-size: 16px;
      font-weight: 400;
      margin-right: 15px;

      @media (max-width: 550px) {
        font-size: 14px;
        margin-right: 10px;
      }
    }

    button {
      font-size: 0;
      border: none;
      background: transparent;
    }
  }
`;
