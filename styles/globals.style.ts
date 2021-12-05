import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: #fafafa;
    background-image: url("/auth-bg.png");
    background-repeat: no-repeat;
    background-position: center center;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #666666;
    min-width: 100vw;
    min-height: 100vh;
  }
  .w-100{
    width: 100%;
  }
  .p-absolute{
    position: absolute;
  }
  .p-relative{
    position: relative;
  }
`