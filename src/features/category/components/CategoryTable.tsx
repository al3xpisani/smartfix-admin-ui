import {
  DataGrid,
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { Meta, Results } from "../../../types/Category";
import { IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router";

type Props = {
  data: Results | undefined;
  paginationData: Meta | undefined;
  perPage: number;
  isFetching: boolean;
  rowsPerPage?: number[];
  handleOnChange: (page: number) => void;
  handleFilterChange: (filterModel: GridFilterModel) => void;
  handleOnPageSizeChange: (perPage: number) => void;
  handleDelete: (id: string) => void;
};

export function CategoryTable({
  data,
  paginationData,
  perPage,
  isFetching,
  rowsPerPage,
  handleOnChange,
  handleFilterChange,
  handleOnPageSizeChange,
  handleDelete,
}: Props) {
  const slotPropsToolbar = {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  };
  const paginationGrid = {
    pagination: {
      paginationModel: {
        pageSize: perPage,
      },
    },
  };
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "name",
      headerName: "First name",
      flex: 1,
      renderCell: renderNameCell,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "isActive",
      headerName: "Active",
      flex: 1,
      type: "boolean",
      renderCell: formatIsActiveCell,
    },
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "id",
      headerName: "Actions",
      flex: 1,
      renderCell: deleteItemCell,
    },
  ];
  function renderNameCell(params: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/categories/edit/${params.id}`}
      >
        <Typography color="primary">{params.value}</Typography>
      </Link>
    );
  }
  function deleteItemCell(rowData: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        onClick={() => handleDelete(rowData.value)}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    );
  }

  function formatIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Active" : "Inactive"}
      </Typography>
    );
  }
  const rows: GridRowsProp =
    data && Array.isArray(data)
      ? data.map((category) => ({
          id: category.id,
          name: category.name,
          description: category.description,
          is_active: category.is_active,
          created_at: new Date(category.created_at).toLocaleDateString("pt-BR"),
        }))
      : [];
  const rowCount = (paginationData && paginationData?.total) || 0;
  return (
    <DataGrid
      checkboxSelection={false}
      columns={columns}
      rows={rows}
      filterMode={"server"}
      paginationMode={"server"}
      loading={isFetching}
      rowCount={rowCount}
      disableColumnFilter={true}
      disableColumnSelector={true}
      disableDensitySelector={true}
      disableRowSelectionOnClick
      initialState={paginationGrid}
      pageSizeOptions={rowsPerPage}
      pagination={true}
      localeText={{
        noRowsLabel: isFetching ? "Loading..." : "No categories found",
      }}
      slotProps={slotPropsToolbar}
      slots={{ toolbar: GridToolbar }}
    />
  );
}
