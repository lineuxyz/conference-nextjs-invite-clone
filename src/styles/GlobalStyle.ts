import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  body {
  background: var(--background);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  }
  :root {
    --size: 1;
    --background: #000;
    --salmon: #d25778;
    --red: #ec585c;
    --yellow: #e7d155;
    --blue: #56a8c6;
  }
`;