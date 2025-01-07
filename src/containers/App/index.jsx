import React from "react";
import { Outlet} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../../utils/scrollToTop";
import { lightTheme } from "../../styles/themeSettings";
import { GlobalStyles } from "../../styles/globalStyles";
import { AppContainer } from "./styles";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <ScrollToTop/>
        <AppContainer>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
