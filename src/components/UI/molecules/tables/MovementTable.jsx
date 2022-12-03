import { Delete, DriveEta, Edit } from "@mui/icons-material";
import {
  Badge,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MovementTable = (props) => {
  const { movements, onMovementDelete } = props;

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Vehiculo</TableCell>
            <TableCell>Placa</TableCell>
            <TableCell>Fecha de entrada</TableCell>
            <TableCell>Fecha de salida</TableCell>
            <TableCell>Nombre de cliente</TableCell>
            <TableCell>Telefono de cliente</TableCell>
            <TableCell># Plaza</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movements.map((movement, key) => (
            <TableRow key={key}>
              <TableCell>
                <DriveEta
                  style={{ marginRight: 5 }}
                  fontSize="100%"
                  htmlColor={movement.color ?? "black"}
                />
                {movement.car}
              </TableCell>
              <TableCell>{movement.plate}</TableCell>
              <TableCell>
                {new Date(movement.entryDate).toLocaleString()}
              </TableCell>
              <TableCell>
                {movement.exitDate
                  ? new Date(movement.exitDate).toLocaleString()
                  : "-"}
              </TableCell>
              <TableCell>{movement.personName}</TableCell>
              <TableCell>{movement.phone}</TableCell>
              <TableCell>{movement.slot?.number ?? "-"}</TableCell>
              <TableCell>
                <IconButton onClick={() => onMovementDelete(movement)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovementTable;
