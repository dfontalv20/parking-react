import React, { useEffect, useState } from "react";
import {
  create,
  getAll,
  occupy,
  vacate,
  remove,
  update,
} from "../../services/Slot.service";
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
      const slotData = {
        number: data.number,
        clientId: data.client?.id ?? null,
      };
      selectedSlot ? await update(selectedSlot.id, slotData) : await create(slotData);
      loadSlots();
      setOpenSlotCreationModal(false);
    } catch (error) {
      alert(error.response?.data?.error ?? 'Error al guardar plaza');
    }
  };

  const handleSlotDeletion = async (data) => {
    try {
      const res = confirm("¿Esta seguro que quiere eliminar esta plaza?");
      if (!res) return;
      await remove(data.id);
      loadSlots();
    } catch (error) {
      alert(error.response?.data?.error ?? 'Error al eliminar plaza');
    }
  };

  return (
    <>
      <SlotPanel
        slots={slots}
        onSlotSelected={handleSlotSelection}
        onSlotDelete={handleSlotDeletion}
        onSlotEdit={(data) => {
          setSelectedSlot(data);
          setOpenSlotCreationModal(true);
        }}
      />
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
        onClose={() => {
          setOpenSlotCreationModal(false);
          setSelectedSlot(null);
        }}
      >
        <SlotCreationForm
          onConfirm={handleSlotCreation}
          slot={selectedSlot}
          onCancel={() => {
            setOpenSlotCreationModal(false);
            setSelectedSlot(null);
          }}
        />
      </BaseModal>
      <AddButton onClick={() => setOpenSlotCreationModal(true)} />
    </>
  );
};

export default SlotPage;
