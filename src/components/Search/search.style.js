import styled from 'styled-components';
import { media, variables } from 'styles';

const StyledSearch = styled.div`
  text-align: center;
  input {
    width: 80%;
    box-sizing: border-box;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.5s ease-out;
    transition: width 0.5s ease-out;

    ${media.md`width: 50%;`}

    &:focus {
      width: 100%;
      ${media.md`width: 80%;`}
    }
  }
`;

export { StyledSearch };
