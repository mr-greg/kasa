import { createGlobalStyle } from 'styled-components';
import Montserrat from '../fonts/Montserrat-var.ttf';
import MontserratItalic from '../fonts/Montserrat-var-italic.ttf';

export const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: "Montserrat";
  src: url(${Montserrat}) format("opentype");
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat-italic";
  src: url(${MontserratItalic}) format("opentype");
  font-style: normal;
  font-display: swap;
}
`;
