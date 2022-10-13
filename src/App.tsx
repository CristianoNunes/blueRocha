// import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/theme";
import GlobalStyle from "./styles/global";
import { AppRoutes } from "./Routes";

import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
