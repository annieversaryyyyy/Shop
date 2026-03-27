import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(255, 255, 255, 0.9)",
  border: "none",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export const CreateCategoryModal = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
    handleClose();
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
        },
      }}
    >
      <Box sx={style}>
        <Typography variant="h6">Create category</Typography>

        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mt: 2 }}
        />

        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mt: 2 }}
        />

        <Button onClick={handleSubmit} sx={{ mt: 2 }} disabled={!title.trim()}>
          Create
        </Button>
      </Box>
    </Modal>
  );
};
