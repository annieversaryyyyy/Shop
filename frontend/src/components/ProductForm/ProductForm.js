import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function ProductForm({ onSubmit }) {
  const [state, setState] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const submitForHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach(key => {
        formData.append(key, state[key])
    })
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

  return (
    <form autoComplete="off" onSubmit={submitForHandler}>
      <Grid container justifyContent="center">
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
            <Typography variant="h5" fontWeight={700} textAlign="center" mb={3}>
              Add new item
            </Typography>

            <Grid container direction="column" spacing={3}>
              <Grid item>
                <TextField
                  fullWidth
                  id="title"
                  variant="outlined"
                  name="title"
                  label="Title"
                  value={state.title}
                  onChange={inputChangeHandler}
                />
              </Grid>

              <Grid item>
                <TextField
                  fullWidth
                  id="price"
                  name="price"
                  label="Price"
                  type="number"
                  value={state.price}
                  onChange={inputChangeHandler}
                />
              </Grid>

              <Grid item>
                <TextField
                  fullWidth
                  id="description"
                  multiline
                  rows={3}
                  variant="outlined"
                  name="description"
                  label="Description"
                  value={state.description}
                  onChange={inputChangeHandler}
                />
              </Grid>

              <Grid item>
                <TextField
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
