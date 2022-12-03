import React, { useState } from "react";
import useClients from "../../hooks/useClients";
import { create, remove, update } from "../../services/Client.service";
import BaseModal from "../UI/atoms/modal/BaseModal";
import ClientCreationForm from "../UI/molecules/forms/ClientCreationForm";
import ClientPanel from "../UI/organisms/Panels/ClientPanel";

const ClientPage = () => {
  const [openCreationModal, setOpenCreationModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const { clients, refresh } = useClients();

  const storeClient = async (client) => {
    try {
      selectedClient === null
        ? await create(client)
        : await update(selectedClient.id, client);
      refresh();
      setOpenCreationModal(false);
    } catch (error) {
      alert(error.response?.data?.error ?? "Error al guardar datos");
    }
  };

  const handleClientDelete = async (client) => {
    try {
      const res = confirm("¿Esta seguro que quiere eliminar este cliente?");
      if (res) {
        await remove(client.id);
        refresh();
      }
    } catch (error) {
      alert(error.response?.data?.error ?? "Error al eliminar cliente");
    }
  };

  return (
    <>
      <ClientPanel
        clients={clients}
        onClientEdit={(client) => {
          setSelectedClient(client);
          setOpenCreationModal(true);
        }}
        onClientCreate={storeClient}
        onClientDelete={handleClientDelete}
      />
      <BaseModal
        open={openCreationModal}
        onClose={() => {
          setSelectedClient(null);
          setOpenCreationModal(false);
        }}
      >
        <ClientCreationForm
          client={selectedClient}
          onConfirm={storeClient}
          onCancel={() => {
            setSelectedClient(null);
            setOpenCreationModal(false);
          }}
        />
      </BaseModal>
    </>
  );
};

export default ClientPage;
