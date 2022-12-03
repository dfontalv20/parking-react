import React, { useState } from "react";
import useClients from "../../hooks/useClients";
import { create } from "../../services/Client.service";
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

  return (
    <>
      <ClientPanel
        clients={clients}
        onClientCreate={() => setOpenCreationModal(true)}
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
