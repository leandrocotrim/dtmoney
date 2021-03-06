import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #ffffff;
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    // font-size default 16px

    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400px;
  }

  h1, h2, h3, h4, h5, h6, strong, b {
    font-weight: 600px;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
 `
