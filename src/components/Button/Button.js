import React from 'react';
import { StyledButton } from './button.style';

const Button = ({text, onClickHandler}) => (
  <StyledButton onClick={onClickHandler}>
    {text}
  </StyledButton>
);

export default Button;
