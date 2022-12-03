import { Container } from "@mui/material";
import React from "react";
import AddButton from "../../atoms/AddButton";
import ClientTable from "../../molecules/tables/ClientTable";

const ClientPanel = ({ clients, onClientEdit, onClientDelete, onClientCreate }) => {
  return (
    <Container>
      <ClientTable
        clients={clients}
        onClientEdit={onClientEdit}
        onClientDelete={onClientDelete}
      />
      <AddButton onClick={onClientCreate}/>
    </Container>
  );
};

export default ClientPanel;
