import { Container } from "@mui/material";
import React from "react";
import MovementTable from "../../molecules/tables/MovementTable";

const MovementPanel = ({ movements, onMovementDelete }) => {
  return (
    <Container>
      <MovementTable
        movements={movements}
        onMovementDelete={onMovementDelete}
      />
    </Container>
  );
};

export default MovementPanel;
