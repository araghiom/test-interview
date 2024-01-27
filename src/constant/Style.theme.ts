import { PaletteMode } from "@mui/material";
import { amber, brown, deepOrange, grey, orange } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: [
      "IranYekanRegular",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            default: "#fff",
            paper: {
              primary: { main: "#f4f6f8" },
              secondary: { main: "#f4f6f8" },
            },
          },
        }
      : {
          primary: {
            main: "#FFA82E",
          },
          divider: deepOrange[700],
          background: {
            default: "#161B25",
            paper: {
              primary: "#fff",
              secondary: "#3e4751",
            },
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
  components: {
    // MuiButtonBase: {
    //   defaultProps: {
    //     // The props to change the default for.
    //     disableRipple: true, // No more ripple, on the whole application 💣!
    //   },
  },
});
