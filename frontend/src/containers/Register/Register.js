import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Checkbox,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import "./Register.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#07111d",
    },
  },
});

function Register() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    const newErrors = {
      username: "",
      password: "",
    };

    if (!user.username.trim()) {
      newErrors.username = "Name is required.";
    }

    if (!user.password || user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);

    return !newErrors.username && !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    console.log(user);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="registerContainer">
        <CssBaseline />
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `
      radial-gradient(
        circle at center,
        #102a43 0%,
        #07111d 70%
      )
    `,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              p: 4,
              width: "100%",
              maxWidth: 420,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#05111c",
              color: "white",
              borderRadius: 6,
            }}
          >
            <Typography variant="h4" textAlign="center">
              Sign up
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <FormLabel sx={{ color: "white" }}>Username</FormLabel>
                <TextField
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  placeholder="Your name"
                  sx={{
                    input: { color: "white" },
                    label: { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                      "&:hover fieldset": { borderColor: "#90caf9" },
                      "&.Mui-focused fieldset": { borderColor: "#90caf9" },
                    },
                  }}
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <FormLabel sx={{ color: "white" }}>Password</FormLabel>
                <TextField
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  placeholder="••••••"
                  sx={{
                    input: { color: "white" },
                    label: { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                      "&:hover fieldset": { borderColor: "#90caf9" },
                      "&.Mui-focused fieldset": { borderColor: "#90caf9" },
                    },
                  }}
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
              >
                Sign up
              </Button>
            </Box>

            <Divider
              sx={{
                my: 2,
                color: "white",
                "&::before, &::after": {
                  borderColor: "white",
                },
              }}
            >
              or
            </Divider>

            <Button fullWidth variant="outlined">
              Sign up with Google
            </Button>

            <Typography textAlign="center" sx={{ mt: 2 }}>
              Already have an account?{" "}
              <Link component={RouterLink} to="/login" underline="hover">
                Sign in
              </Link>
            </Typography>
          </Card>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Register;
