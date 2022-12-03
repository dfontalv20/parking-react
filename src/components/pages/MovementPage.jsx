import React from "react";
import useMovements from "../../hooks/useMovements";
import { remove } from "../../services/Movement.service";
import MovementPanel from "../UI/organisms/Panels/MovementPanel";

const MovementPage = () => {
  const { movements, refresh } = useMovements();

  const handleMovementDelete = async (movement) => {
    try {
      const res = confirm("¿Esta seguro que quiere eliminar este movimiento?");
      if (res) await remove(movement.id);
      refresh()
    } catch (error) {
      console.error(
        error.response?.data?.error ?? "Error al eliminar movimiento"
      );
    }
  };

  return (
    <>
      <MovementPanel
        movements={movements}
        onMovementDelete={handleMovementDelete}
      />
    </>
  );
};

export default MovementPage;
