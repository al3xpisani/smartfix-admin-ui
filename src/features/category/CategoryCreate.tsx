import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { Category } from "../../types/Category";
import { createCategory } from "./categorySlice";
import { FormFields } from "./components/FormFields";

export default function CategoryCreate() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [category, setCategory] = useState<Category>({
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createCategory(category));
    enqueueSnackbar("Category created successfully", { variant: "success" });
    navigate("/categories");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCategory({ ...category, [name]: checked });
  };
  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4" color="white">
              Create Category
            </Typography>
          </Box>
        </Box>
        <FormFields
          category={category}
          handleChange={handleChange}
          handleToggle={handleToggle}
          handleSubmit={handleSubmit}
        />
      </Paper>
    </Box>
  );
}
