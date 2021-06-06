import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import GlobalStyle from "styledHelpers/GlobalStyle";
import Routes from "components/Routes";
import { Layout } from "components/common";
import "toastr/build/toastr.css";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
