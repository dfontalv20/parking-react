import React, { useState } from "react";
import useClients from "../../hooks/useClients";
import { create, remove } from "../../services/Client.service";
import BaseModal from "../UI/atoms/modal/BaseModal";
import ClientCreationForm from "../UI/molecules/forms/ClientCreationForm";
import ClientPanel from "../UI/organisms/Panels/ClientPanel";

const ClientPage = () => {
  const [openCreationModal, setOpenCreationModal] = useState(false);
  const { clients, refresh } = useClients();

  const storeClient = async (client) => {
    try {
      await create(client);
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
        onClientCreate={storeClient}
        onClientDelete={handleClientDelete}
      />
      <BaseModal
        open={openCreationModal}
        onClose={() => setOpenCreationModal(false)}
      >
        <ClientCreationForm
          onConfirm={storeClient}
          onCancel={() => setOpenCreationModal(false)}
        />
      </BaseModal>
    </>
  );
};

export default ClientPage;
