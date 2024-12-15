import { createSlice } from "@reduxjs/toolkit";

interface ICategory {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
type Category = ICategory[];

const category = {
  id: "cbdd550c-ad46-4e50-be8d-a8266aff4162",
  name: "PaleTurquoise",
  description: "Explicabo nemo voluptate aut nostrum impedit minus.",
  is_active: true,
  deleted_at: null,
  created_at: "2022-09-27T17:10:33+0000",
  updated_at: "2022-09-27T17:10:33+0000",
};

const categories: Category = [
  category,
  {
    id: "c9f5b9b9-9b9a-4b9a-8b9a-9b9a9b9a9b9a",
    name: "PapayaWhip",
    description: "Quia voluptatem voluptatem.",
    is_active: true,
    deleted_at: null,
    created_at: "2022-09-27T17:10:33+0000",
    updated_at: "2022-09-27T17:10:33+0000",
  },
  {
    id: "d9f5b9b9-9b9a-4b9a-8b9a-9b9a9b9a9b9a",
    name: "TungWhip",
    description: "tung voluptatem voluptatem.",
    is_active: true,
    deleted_at: null,
    created_at: "2022-03-27T17:10:33+0000",
    updated_at: "2022-03-27T17:10:33+0000",
  },
  {
    id: "x1f5b9b9-9b9a-4b9a-8b9a-9b9a9b9a9b9a",
    name: "Pinipini",
    description: "Pinipini luptatem.",
    is_active: true,
    deleted_at: null,
    created_at: "2022-06-27T17:10:33+0000",
    updated_at: "2022-06-27T17:10:33+0000",
  },
];
export const initialState = categories;

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  },
});

export const { createCategory, updateCategory, deleteCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
