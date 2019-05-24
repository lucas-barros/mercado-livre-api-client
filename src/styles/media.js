import { css } from 'styled-components';

const breakpoints = ['320px', '425px', '768px', '1024px'];
const labels = ['xs', 'sm', 'md', 'lg'];

export default labels.reduce((acc, label, i) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[i]}) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
