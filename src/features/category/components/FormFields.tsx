import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import { Link } from "react-router";
import { Category } from "../../../types/Category";

type FormProps = {
  category?: Category;
  isDisabled?: boolean;
  isLoading?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function FormFields({
  category,
  isDisabled = false,
  isLoading = true,
  handleChange,
  handleToggle,
  handleSubmit,
}: FormProps) {
  return (
    <Box p={2}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                required
                name="name"
                label="name"
                value={category.name}
                disabled={isDisabled}
                onChange={handleChange}
              ></TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                required
                name="description"
                label="description"
                value={category.description ?? ""}
                disabled={isDisabled}
                onChange={handleChange}
              ></TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    name="is_active"
                    color="secondary"
                    onChange={handleToggle}
                    checked={category.is_active || false}
                    inputProps={{ "aria-label": "controlled" }}
                    data-testid="is_active"
                    disabled={isDisabled}
                  />
                }
                label="Active"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" gap={2}>
              <Button variant="contained" component={Link} to="/categories">
                Back
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={isDisabled}
              >
                {"Save"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
