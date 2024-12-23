import { Box } from "@mui/material";
import { Routes, Route } from "react-router";
import { ThemeProvider } from "@emotion/react";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { appTheme } from "./config/theme";
import "./App.css";
import CategoryList from "./features/category/CategoryList";
import CategoryEdit from "./features/category/CategoryEdit";
import CategoryCreate from "./features/category/CategoryCreate";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          component="main"
          sx={{ height: "100vh", backgroundColor: "black" }}
        >
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<CategoryList />} />
              <Route path="/categories" element={<CategoryList />} />
              <Route path="/categories/create" element={<CategoryCreate />} />
              <Route path="/categories/edit/:id" element={<CategoryEdit />} />

              <Route path="*" element={<Box>Page not found</Box>}></Route>
            </Routes>
          </Layout>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
