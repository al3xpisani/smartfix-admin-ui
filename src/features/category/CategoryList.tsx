import { Box, Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useGetPaginationQuery,
} from "../../api/apiSlice";
import { CategoryTable } from "./components/CategoryTable";

export default function CategoryList() {
  // const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [rowsPerPage, setRowsPerPage] = useState([10, 20, 50, 100]);
  // const [search, setSearch] = useState("");
  const { data, isFetching } = useGetCategoriesQuery();
  const { data: meta } = useGetPaginationQuery();
  const [deleteCategory, deleteCategoryStatus] = useDeleteCategoryMutation();
  const { enqueueSnackbar } = useSnackbar();

  async function handleDeleteCategory(id: string) {
    await deleteCategory({ id });
  }
  // const handleFilterChange = (filterModel: GridFilterModel) => {};
  // const handleOnChange = (page: number) => {};
  // const handleOnPageSizeChange = (perPage: number) => {};

  useEffect(() => {
    if (deleteCategoryStatus.isSuccess) {
      setPerPage(10);
      setRowsPerPage([10, 20, 50, 100]);
      enqueueSnackbar("Category deleted successfully", { variant: "success" });
    }
  }, [deleteCategoryStatus, enqueueSnackbar]);
  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display={"flex"} justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{ marginBottom: "1rem" }}
        >
          New Category
        </Button>
      </Box>

      <Box flex={1} height={600}>
        <CategoryTable
          data={data}
          paginationData={meta}
          handleDelete={handleDeleteCategory}
          handleFilterChange={() => null}
          handleOnChange={() => null}
          handleOnPageSizeChange={() => null}
          isFetching={isFetching}
          perPage={perPage}
          rowsPerPage={rowsPerPage}
        />
      </Box>
    </Box>
  );
}
