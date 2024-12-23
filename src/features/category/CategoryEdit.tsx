import { Box, Paper } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetCategoryQuery } from "../../api/apiSlice";
import { Category } from "../../types/Category";
import { FormFields } from "./components/FormFields";

export default function CategoryEdit() {
  const id = useParams().id || "";
  const navigate = useNavigate();
  // const [isDisabled, setIsDisabled] = useState(false);
  const { data: category } = useGetCategoryQuery(id);

  const [categoryState, setCategoryState] = useState<Category>();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    enqueueSnackbar("Category updated successfully", { variant: "success" });
    navigate("/categories");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCategoryState({ ...categoryState, [name]: checked });
  };
  useEffect(() => {
    setCategoryState(category);
  }, [category]);
  return (
    <Box>
      <Paper>
        {categoryState && (
          <FormFields
            category={categoryState}
            handleChange={handleChange}
            handleToggle={handleToggle}
            handleSubmit={handleSubmit}
          />
        )}
      </Paper>
    </Box>
  );
}
