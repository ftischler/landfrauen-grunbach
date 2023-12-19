import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IntlProvider } from "react-intl";

const theme = createTheme({
  palette: {
    primary: "#86bc25",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider locale="de" defaultLocale="de">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
