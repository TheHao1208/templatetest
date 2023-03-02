import Sidebar from "./components/Sidebar";

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor='rgb(231, 235, 240)' color={"text.primary"}>
        <Sidebar setMode={setMode} mode={mode}/>
        
          
        
      </Box>
    </ThemeProvider>
  );
}

export default App;
