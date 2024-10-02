import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #005f69;
    --secondary-color:#f26f33;
    --black: #000;
    --white: #fff;
    --darker-color:#1c093c;
    --gray-color:#dbdbdb;
    --gray-darker:#647380;
    --gradient-primary:linear-gradient(270deg, #084147FF, #005f69);
    --bg-skeleton: #656871;
  }
`;
