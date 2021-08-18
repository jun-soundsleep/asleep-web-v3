import "../../styles/globals.css";
import { Global, css } from "@emotion/react";

function App({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          img {
            max-width: 100%;
          }
          button,
          input {
            outline: 0;
            border: 0;
            background: none;
          }
          ol,
          ul {
            list-style: none;
          }
          html,
          body {
            width: 100%;
            height: 100%;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
