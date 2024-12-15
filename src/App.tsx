import { Box, Typography } from "@mui/material";
import { Routes, Route } from "react-router";
import { ThemeProvider } from "@emotion/react";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { appTheme } from "./config/theme";
import "./App.css";
import CategoryList from "./features/category/CategoryList";
import CategoryEdit from "./features/category/CategoryEdit";
import CategoryCreate from "./features/category/CategoryCreate";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component="main" sx={{ height: "100vh", backgroundColor: "white" }}>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/categories/edit/:id" element={<CategoryEdit />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
