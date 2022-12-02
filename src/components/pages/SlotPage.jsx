import React, { useEffect, useState } from "react";
import { create, getAll, occupy, vacate } from "../../services/Slot.service";
import AddButton from "../UI/atoms/AddButton";
import BaseModal from "../UI/atoms/modal/BaseModal";
import SlotCreationForm from "../UI/molecules/forms/SlotCreationForm";
import SlotOccupyModal from "../UI/molecules/modals/SlotOccupyModal";
import SlotVacateModal from "../UI/molecules/modals/SlotVacateModal";
import SlotPanel from "../UI/organisms/Panels/SlotPanel";

const SlotPage = () => {
  const [openSlotVacateModal, setOpenSlotVacateModal] = useState(false);
  const [openSlotOccupyModal, setOpenSlotOccupyModal] = useState(false);
  const [openSlotCreationModal, setOpenSlotCreationModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    loadSlots();
  }, []);

  const loadSlots = async () => {
    setSlots(await getAll());
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
    if (slot.current) {
      return setOpenSlotVacateModal(true);
    }
    return setOpenSlotOccupyModal(true);
  };

  const vacateSlot = async (id) => {
    try {
      setOpenSlotVacateModal(false);
      await vacate(id);
      loadSlots();
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  const occupySlot = async (id, data) => {
    try {
      setOpenSlotOccupyModal(false);
      await occupy(id, data);
      loadSlots();
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  const handleSlotCreation = async (data) => {
    try {
        await create({
            number: data.number,
            clientId: data.client?.id ?? null
        })
        loadSlots()
        setOpenSlotCreationModal(false)
    } catch (error) {
        alert(error.response.data.error)
    }
  };

  return (
    <>
      <SlotPanel slots={slots} onSlotSelected={handleSlotSelection} />
      <SlotVacateModal
        open={openSlotVacateModal}
        onCancel={() => setOpenSlotVacateModal(false)}
        onClose={() => setOpenSlotVacateModal(false)}
        onConfirm={() => vacateSlot(selectedSlot.id)}
      />
      <SlotOccupyModal
        open={openSlotOccupyModal}
        slot={selectedSlot}
        onCancel={() => setOpenSlotOccupyModal(false)}
        onClose={() => setOpenSlotOccupyModal(false)}
        onConfirm={(data) =>
          occupySlot(selectedSlot.id, {
            car: `${data.carBrand} ${data.carModel}`,
            personName: data.personName,
            phone: data.phone,
            plate: data.plate,
            color: data.color,
          })
        }
      />
      <BaseModal
        open={openSlotCreationModal}
        onClose={() => setOpenSlotCreationModal(false)}
      >
        <SlotCreationForm
          onConfirm={handleSlotCreation}
          onCancel={() => setOpenSlotCreationModal(false)}
        />
      </BaseModal>
      <AddButton onClick={() => setOpenSlotCreationModal(true)} />
    </>
  );
};

export default SlotPage;