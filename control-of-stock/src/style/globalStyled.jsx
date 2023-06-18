import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyled = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: 'Noto Sans', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html{
    background-color: var(--yellow);
}

:root{
    --black:  #000000;
    --red:    #E30614;
    --yellow: #D2AA42;

    --gray-1: #2E2E2E;
    --gray-0: #212529;
    --gray-2: #495057;
    --gray-3: #868E96;
    --gray-4: #ADB5BD;
    --gray-5: #CED4DA;
    --gray-6: #DEE2E6;
    --gray-9: #F8F9FA;
    --gray-10:#FDFDFD;
    --gray-50: #EDEAFD;

    /* Títulos */
    --title-weight-bold: bold;
    --title-1-font-size: 30px;
    --title-2-font-size: 22px;
    --title-3-font-size: 16px;
    --title-4-font-size: 12px;

    /* Cabeçalhos */
    --headline-font-weight: normal;
    --headline-font-size: 16px;

    /* Corpo */
    --body-font-weight: normal;
    --body-font-size: large;
 }
`;
