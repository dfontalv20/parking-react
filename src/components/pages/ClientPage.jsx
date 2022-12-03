import React, { useState } from "react";
import useClients from "../../hooks/useClients";
import BaseModal from "../UI/atoms/modal/BaseModal";
import ClientCreationForm from "../UI/molecules/forms/ClientCreationForm";
import ClientPanel from "../UI/organisms/Panels/ClientPanel";

const ClientPage = () => {
  const [openCreationModal, setOpenCreationModal] = useState(false);
  const clients = useClients();

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
        <ClientCreationForm onCancel={() => setOpenCreationModal(false)} />
      </BaseModal>
    </>
  );
};

export default ClientPage;
