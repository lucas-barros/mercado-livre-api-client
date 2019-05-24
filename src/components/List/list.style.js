import styled from 'styled-components';

const StyledList = styled.div`
  .pagination {
    text-align: center;
    display: ${({ count = 0 }) => (count ? 'block' : 'none')};

    button {
      background-color: #fff;
      box-shadow: none;
      color: #0366d6;
      border: 1px solid rgba(27, 31, 35, 0.2);
      padding: 10px 20px;
      font-size: 20px;

      cursor: pointer;
      &:first-of-type {
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
      }
      &:last-of-type {
        border-bottom-right-radius: 3px;
        border-right-width: 1px;
        border-top-right-radius: 3px;
      }
      &:disabled {
        cursor: initial;
        color: rgba(27, 31, 35, 0.2);
      }
    }
  }
`;

export { StyledList };
