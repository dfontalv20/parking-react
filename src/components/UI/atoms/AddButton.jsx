import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const AddButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      size="large"
      variant="contained"
      style={{
        position: "absolute",
        top: "95%",
        right: "0%",
        transform: "translate(-100%, -100%)",
      }}
    >
      <Add />
    </Button>
  );
};

export default AddButton;
