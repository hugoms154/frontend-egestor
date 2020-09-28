import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    margin-top: 64px;
    font-weight: 500;
    font-size: 18px;
    line-height: 54px;
    color: #969cb2;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: -150px;

  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 22px 32px;
  border-radius: 5px;

  & + div {
    margin-top: 16px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 16px;
      margin-right: 16px;
      color: #969cb2;
    }
    svg {
      flex-shrink: 0;
    }
  }
  strong {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
    color: #363f5f;
  }

  @media (min-width: 750px) {
    & + div {
      margin-top: 0;
    }
  }
`;

export const TableContainer = styled.section`
  .blocked,
  .active,
  .inactive {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    font-weight: 700;
    margin-right: 8px;
  }

  .blocked {
    background: #e83f5b;
  }

  .active {
    background: #12a454;
  }

  .inactive {
    background: #1b5299;
  }
  @media (max-width: 659px) {
    table {
      margin-top: 32px;
      padding-top: 32px;
      border-top: 1px solid #c5c5c5;
      width: 100%;

      thead {
        display: none;
      }

      tbody {
        display: flex;
        flex-direction: column;

        tr {
          padding: 22px 32px;
          background-color: #fff;
          border-radius: 5px;

          & + tr {
            margin-top: 14px;
          }

          td {
            display: block;
            color: rgba(54, 63, 95, 0.8);
            font-size: 16px;

            &:first-child {
              color: #363f5f;
              margin-bottom: 8px;
            }

            > span {
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 660px) and (max-width: 1119px) {
    table {
      margin-top: 32px;
      padding-top: 32px;
      border-top: 1px solid #c5c5c5;
      width: 100%;

      thead {
        display: none;
      }

      tbody {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;

        tr {
          padding: 22px 32px;
          background-color: #fff;
          border-radius: 5px;

          td {
            display: block;
            color: rgba(54, 63, 95, 0.8);
            font-size: 16px;

            &:first-child {
              color: #363f5f;
              margin-bottom: 8px;
            }

            > span {
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1120px) {
    margin-top: 62px;

    table {
      width: 100%;
      border-spacing: 0 8px;

      thead {
        th {
          color: #969cb3;
          font-weight: normal;
          padding: 20px 32px;
          text-align: left;
          font-size: 16px;
          line-height: 24px;
        }
      }

      tbody {
        tr {
          td {
            padding: 20px 32px;
            border: 0;
            font-size: 16px;
            font-weight: normal;
            background: #fff;
            color: #969cb3;

            > span {
              display: flex;
              align-items: center;
            }
          }

          td:first-child {
            border-radius: 8px 0 0 8px;
          }

          td:last-child {
            border-radius: 0 8px 8px 0;
          }
        }
      }
    }
  }
`;
