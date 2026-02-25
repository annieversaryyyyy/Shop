import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FileInput from "../UI/Form/FileInput/FileInput";
import FormElement from "../UI/Form/FormElement/FormElement";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

function ProductForm({ onSubmit, categories, error }) {
  const [state, setState] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const submitForHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      formData.append(key, state[key]);
    });
    onSubmit(formData);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const fileChangeHandler = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setState((prev) => ({ ...prev, [name]: file }));
  };

  const getFieldError = (fieldName) => {
    try {
      return error.errors[fieldName].message;
    } catch {
      return undefined;
    }
  };

  return (
    <form autoComplete="off" onSubmit={submitForHandler}>
      <Grid container justifyContent="center" mt={3} mb={3}>
        <Grid item xs={12} sm={12} md={10} lg={8}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              width: "100%",
              minWidth: "400px",
              mx: "auto",
            }}
          >
            <Typography variant="h5" mb={3} fontWeight={700} textAlign="center">
              Add new item
            </Typography>

            <Grid container direction="column" spacing={3}>
              <Grid item>
                <TextField
                  id="title"
                  name="title"
                  label="Title"
                  value={state.title}
                  onChange={inputChangeHandler}
                  error={!!getFieldError("title")}
                  helperText={getFieldError("title")}
                />
              </Grid>

              <Grid item>
                <FormControl fullWidth error={!!getFieldError("category")}>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    fullWidth
                    label="Category"
                    name="category"
                    value={state.category}
                    onChange={inputChangeHandler}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category._id} value={category._id}>
                        {category.title}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{getFieldError("category")}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item>
                <TextField
                  id="price"
                  name="price"
                  label="Price"
                  type="number"
                  value={state.price}
                  onChange={inputChangeHandler}
                  error={!!getFieldError("price")}
                  helperText={getFieldError("price")}
                />
              </Grid>

              <Grid item>
                <TextField
                  id="description"
                  multiline
                  rows={3}
                  name="description"
                  label="Description"
                  value={state.description}
                  onChange={inputChangeHandler}
                  error={!!getFieldError("description")}
                  helperText={getFieldError("description")}
                />
              </Grid>

              <Grid item>
                <FileInput
                  label="Image"
                  type="file"
                  name="image"
                  onChange={fileChangeHandler}
                />
              </Grid>

              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Create item
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}

export default ProductForm;
