import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";
import "./FileInput.css";

const FileInput = ({ onChange, name, label, error }) => {
  const inputRef = useRef();
  const [filename, setFilename] = useState("");

  const onFileChange = (e) => {
    if (e.target.files[0]) {
      setFilename(e.target.files[0].name);
    } else {
      setFilename("");
    }
    onChange(e);
  };

  const activateInput = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        name={name}
        onChange={onFileChange}
        ref={inputRef}
        className="myInput"
      />

      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid item xs>
          <TextField
            label={label}
            value={filename}
            fullWidth
            required
            error={error}
            onClick={activateInput}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={activateInput}>
            Browse
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FileInput;
