import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

function FormSelect({
  label,
  name,
  value,
  onChange,
  error,
  required,
  options,
}) {
  return (
    <Grid item>
      <FormControl fullWidth error={Boolean(error)}>
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
        <Select
          required={required}
          labelId={`${name}-label`}
          fullWidth
          label={label}
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.title}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </Grid>
  );
}

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

export default FormSelect;
