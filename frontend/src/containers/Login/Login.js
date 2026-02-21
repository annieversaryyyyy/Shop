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
import FormElement from "../../components/UI/Form/FormElement/FormElement";
import { clearLoginSuccess, loginUser } from "../../store/actions/usersActions";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#07111d",
    },
  },
});

function Login() {
  const dispatch = useDispatch();
  const loginSuccess = useSelector((state) => state.users.loginSuccess);
  const loginError = useSelector((state) => state.users.loginError);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
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
      if (loginError.username || loginError.password) {
        setErrors((prev) => ({
          ...prev,
          ...loginError,
        }));
      } else if (loginError.error) {
        setErrors({
          username: loginError.error,
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
    dispatch(loginUser({ ...user }));
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
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <FormLabel sx={{ color: "white" }}>Username</FormLabel>
                <FormElement
                  required={true}
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  error={Boolean(errors.username)}
                  helperText={errors.username}
                  placeholder="Your username"
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
                sx={{ mt: 2 }}
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

            <Typography textAlign="center" sx={{ mt: 2 }}>
              <Link component={RouterLink} to="/register" underline="hover">
                Sign up
              </Link>
            </Typography>
          </Card>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Login;
