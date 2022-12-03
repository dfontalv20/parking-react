import { Container } from "@mui/material";
import React from "react";
import ClientTable from "../../molecules/tables/ClientTable";

const ClientPanel = ({ clients, onClientEdit, onClientDelete }) => {
  return (
    <Container>
      <ClientTable
        clients={clients}
        onClientEdit={onClientEdit}
        onClientDelete={onClientDelete}
      />
    </Container>
  );
};

export default ClientPanel;
