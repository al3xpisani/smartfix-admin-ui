import { Box, createTheme } from "@mui/material";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";

const defaultTheme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box component="main" sx={{ height: "100vh", backgroundColor: "white" }}>
        <Header />
        <Layout>
          <h1>olá mundo</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
