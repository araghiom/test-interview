"use client";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { createContext, useContext, useMemo, useState } from "react";
import { ColorModeContext } from "@/context/ThemeProvider";
import LightButton from "@/assets/icons/LightButton";
import DarkButton from "@/assets/icons/DarkButton";

function ThemeChanger() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  // const onClick = (e: any) => {
  //   e.preventDefault;
  //   setChecked((prev) => !prev);
  //   colorMode.toggleColorMode();
  // };

  return (
    <>
      <IconButton
        sx={{
          transform:
            theme.palette.mode === "dark" ? "rotate(180deg)" : "rotate(0deg)",
          transformOrigin: "50% 50%",
          transition: "transform 0.5s ease-in-out",
        }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <DarkButton /> : <LightButton />}
      </IconButton>
      {/* <label htmlFor="toggle-dark-mode" style={{ overflow: "hidden" }}>
        <input
          id="toggle-dark-mode"
          className="input-checkbox"
          type="checkBox"
          style={{ display: "none", position: "absolute" }}
          onClick={(e) => onClick(e)}
        />
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "translateY(0%) rotate(180deg)",
            transformOrigin: "50% 50%",
          }}
        >
          <circle r="17.5px" fill="#ffa82e" cx="200.5" cy="220.5px" />
          <circle r="17.5px" fill="#ffa82e" cx="150px" cy="251.5" />
          <circle r="17.5px" fill="#ffa82e" cx="150px" cy="169.5px" />
          <circle r="17.5px" fill="#ffa82e" cx="200.5" cy="160px" />
          <circle r="17.5px" fill="#ffa82e" cx="230px" cy="169.5" />
          <circle r="17.5px" fill="#ffa82e" cx="240px" cy="251.5" />
          <circle r="90px" cx="200" cy="200" />
          <circle r="90px" cx="250" cy="150" opacity={1} />
        </svg>
      </label> */}
    </>
  );
}

export default ThemeChanger;
