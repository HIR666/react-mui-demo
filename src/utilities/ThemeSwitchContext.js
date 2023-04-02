import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { pink } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeSwitchContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ThemeSwitch(props) {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#00c853",
          },
          secondary: {
            main: "#8e24aa",
          },
          error: {
            main: "#f44336",
          },

          MuiAppBar: {
            color: mode === "dark" ? "#0b151a" : "#1976D2",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeSwitchContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
}
