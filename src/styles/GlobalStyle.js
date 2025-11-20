// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  ${reset}

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.standard};
    transition: 0.25s ease;
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
    font-optical-sizing: auto;
  }
  a {
  color: inherit;
}

   /* TEXT COLOR */
  .text-acc  { color: ${({ theme }) => theme.accent}; }
  .text-bg   { color: ${({ theme }) => theme.background}; }
  .text-stan { color: ${({ theme }) => theme.standard}; }
  .text-sB   { color: ${({ theme }) => theme.subBlack}; }
  .text-sW   { color: ${({ theme }) => theme.subWhite}; }
  .text-w    { color: ${({ theme }) => theme.white}; }
  .text-b    { color: ${({ theme }) => theme.black}; }

  /* BACKGROUND COLOR */
  .bg-acc  { background-color: ${({ theme }) => theme.accent}; }
  .bg-bg   { background-color: ${({ theme }) => theme.background}; }
  .bg-stan { background-color: ${({ theme }) => theme.standard}; }
  .bg-sB   { background-color: ${({ theme }) => theme.subBlack}; }
  .bg-sW   { background-color: ${({ theme }) => theme.subWhite}; }
  .bg-w    { background-color: ${({ theme }) => theme.white}; }
  .bg-b    { background-color: ${({ theme }) => theme.black}; }

  /* =============================
     ✨ SHADOW UTILITY CLASSES
     ============================= */

  /* BOX SHADOW */
  .shadow-sB { 
    box-shadow: 0 4px 12px ${({ theme }) => theme.subBlack}33; 
    /* 33 = 20% 투명도 */
  }
  .shadow-sW { 
    box-shadow: 0 4px 12px ${({ theme }) => theme.subWhite}55; 
    /* 55 = 33% 투명도 */
  }

  /* TEXT SHADOW */
  .tshadow-sB { 
    text-shadow: 0 2px 6px ${({ theme }) => theme.subBlack}55; 
  }

  .tshadow-sW { 
    text-shadow: 0 2px 6px ${({ theme }) => theme.subWhite}55;
  }
  /* HOVER SHADOW — subBlack 기반 */
.hover-shadow-sB:hover {
  transition: 0.2s ease;
    box-shadow: 0 4px 12px ${({ theme }) => theme.subBlack}33;
    cursor: pointer;
}

/* HOVER SHADOW — subWhite 기반 */
.hover-shadow-sW:hover {
  transition: 0.2s ease;
    box-shadow: 0 4px 12px ${({ theme }) => theme.subWhite}33;
    cursor: pointer;
}
`;

export default GlobalStyle;
