import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  padding: 10px 15px;
  color: #333;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all .1s ease-in-out;

  &:active {
    transform: scale(1.5);
  }

  &:focus {
    outline: none;
  }
`;

export { StyledButton };
