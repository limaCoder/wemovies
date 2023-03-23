import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --gray: #999999;
    --text-title: #333333;
    --text-price: #2F2E41;
    --background: #2F2E41 ;
  }

  *, 
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }  

  html {
		font-size: 62.5%; /* 10px - definindo que todas as fontes terão esse mesmo tamanho
			para tornar mais fácil o cálculo de px para rem. se por exemplo a font precisa ter
			o tamanho de 28px, basta colocar 2.8rem no tamanho da fonte
		*/
    scroll-behavior:smooth;

    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media(max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, 
  html {  
    overflow-x:hidden; 
  }

  button {
    cursor: pointer;
  }

  svg, img {
    display: block;
    width: 100%;
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
