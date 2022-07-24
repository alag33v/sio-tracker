import styled from 'styled-components';

export const StyledApp = styled.div`
  .title {
    font-size: 50px;
    text-align: center;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;

    @media (max-width: 650px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .left {
    width: 50%;

    @media (max-width: 650px) {
      width: 100%;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .right {
    text-align: center;
    width: 50%;
    margin: 0;
    padding-top: 35px;

    @media (max-width: 650px) {
      width: 100%;
    }

    h2 {
      font-size: 30px;
      margin: 0 0 50px;
    }

    .total-time {
      font-size: 30px;
      .time {
        border: 2px solid #3faf6c;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 0 10px;
      }
    }
  }
`;
