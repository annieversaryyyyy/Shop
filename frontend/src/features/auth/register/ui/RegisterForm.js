import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  clearRegisterErrors,
  clearRegisterSuccess,
  registerUser,
} from "../../../../entities/user/model/usersActions";
import FormElement from "../../../../shared/ui/Form/FormElement/FormElement";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#07111d",
    },
  },
});

function RegisterForm() {
  const dispatch = useDispatch();
  const registerSuccess = useSelector((state) => state.users.registerSuccess);
  const registerError = useSelector((state) => state.users.registerError);
  const navigate = useNavigate();
  useEffect(() => {
    if (registerSuccess) {
      toast.success("Registration successful");
      dispatch(clearRegisterSuccess());
      navigate("/");
    }
  }, [registerSuccess, dispatch, navigate]);

  useEffect(() => {
    if (registerError) {
      setErrors((prev) => ({
        ...prev,
        ...registerError,
      }));
    }
  }, [registerError]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

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

    return !newErrors.username && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    dispatch(clearRegisterErrors());
    dispatch(registerUser({ ...user }));
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

            <Button fullWidth variant="outlined" type="submit">
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

export default RegisterForm;
