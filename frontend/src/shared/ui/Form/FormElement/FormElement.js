import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

function FormElement({
  name,
  value,
  onChange,
  error,
  type,
  required,
  placeholder,
  helperText,
}) {
  return (
    <TextField
      sx={{
        input: { color: "white" },
        label: { color: "white" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "white" },
          "&:hover fieldset": { borderColor: "#f8dadc" },
          "&.Mui-focused fieldset": { borderColor: "#f8dadc" },
        },
        "& input:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px #300000 inset",
          WebkitTextFillColor: "white",
          transition: "background-color 5000s ease-in-out 0s",
        },
      }}
      type={type}
      required={required}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoComplete={name}
      placeholder={placeholder}
    />
  );
}

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default FormElement;
