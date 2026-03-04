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
import GoogleAuth from "../../google-login/GoogleAuth";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
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
    email: "",
    password: "",
    displayName: "",
  });

  const [errors, setErrors] = useState({
    email: "",
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
      email: "",
      password: "",
    };

    if (!user.email.trim()) {
      newErrors.email = "Email is required.";
    }

    if (!user.password || user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    dispatch(clearRegisterErrors());
    dispatch(
      registerUser({
        ...user,
        email: user.email.trim().toLowerCase(),
      }),
    );
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
              Sign up
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

              <FormControl fullWidth margin="normal">
                <FormElement
                  required={true}
                  name="displayName"
                  value={user.displayName}
                  onChange={handleChange}
                  error={Boolean(errors.displayName)}
                  helperText={errors.displayName}
                  placeholder="Your displayName"
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

            <GoogleAuth />

            <Typography textAlign="center" sx={{ mt: 2 }}>
              Already have an account?{" "}
              <Link
                component={RouterLink}
                to="/login"
                underline="hover"
                sx={{ color: "white" }}
              >
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
