import styled from 'styled-components';

export const Container = styled.section`
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
  a {
    color: #969cb3;
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
            .edit {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              padding: 8px 16px;
              margin-top: 8px;
              background: #12a454;
              border-radius: 5px;

              &::after {
                content: 'Editar';
                color: #fff;
              }

              svg {
                color: #fff;
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 660px) and (max-width: 1279px) {
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
            .edit {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              padding: 8px 16px;
              margin-top: 8px;
              background: #12a454;
              border-radius: 5px;

              &::after {
                content: 'Editar';
                color: #fff;
              }

              svg {
                color: #fff;
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 1280px) {
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
