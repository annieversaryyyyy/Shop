import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CssBaseline,
  Divider,
  FormControl,
  FormLabel,
  Link,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  clearLoginErrors,
  clearLoginSuccess,
  loginUserRequest,
} from "../../../../entities/user/model/usersActions";
import FormElement from "../../../../shared/ui/Form/FormElement/FormElement";
import GoogleAuth from "../../google-login/GoogleAuth";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
    },
  },
});

function LoginForm() {
  const dispatch = useDispatch();
  const loginSuccess = useSelector((state) => state.users.loginSuccess);
  const loginError = useSelector((state) => state.users.loginError);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearLoginErrors());
  }, [dispatch]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (loginSuccess) {
      toast.success("Login successful");
      dispatch(clearLoginSuccess());
      navigate("/");
    }
  }, [loginSuccess, dispatch, navigate]);

  useEffect(() => {
    if (loginError) {
      if (loginError.email || loginError.password) {
        setErrors((prev) => ({
          ...prev,
          ...loginError,
        }));
      } else if (loginError.error) {
        setErrors({
          email: loginError.error,
          password: "",
        });
      }
    }
  }, [loginError]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginUserRequest({ ...user, email: user.email.trim().toLowerCase() }),
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="loginContainer">
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
        #6e0c0c 0%,
        #000000 70%
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
              backgroundColor: "#000000",
              color: "white",
              borderRadius: 6,
            }}
          >
            <Typography variant="h4" textAlign="center">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <FormLabel sx={{ color: "white" }}>Email</FormLabel>
                <FormElement
                  required={true}
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  placeholder="Your email"
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <FormLabel sx={{ color: "white" }}>Password</FormLabel>

                <FormElement
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  placeholder="••••••"
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#300000",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#490101",
                  },
                }}
              >
                Sign in
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
            <GoogleAuth />
            <Typography textAlign="center" sx={{ mt: 2 }}>
              <Link
                component={RouterLink}
                to="/register"
                underline="hover"
                sx={{ color: "white" }}
              >
                Sign up
              </Link>
            </Typography>
          </Card>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default LoginForm;
