import React, { useEffect, useState } from 'react'
import { getAll, vacate } from '../../services/Slot.service'
import SlotOccupyModal from '../UI/molecules/modals/SlotOccupyModal'
import SlotVacateModal from '../UI/molecules/modals/SlotVacateModal'
import SlotPanel from '../UI/organisms/Panels/SlotPanel'

const SlotPage = () => {

    const [openSlotVacateModal, setOpenSlotVacateModal] = useState(false)
    const [openSlotOccupyModal, setOpenSlotOccupyModal] = useState(false)
    const [selectedSlot, setSelectedSlot] = useState(null)
    const [slots, setSlots] = useState([])
    
    useEffect(() => {
      loadSlots()
    }, [])
    
    const loadSlots = async () => {
        setSlots(await getAll())
    }

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot)
        if (slot.current) {
            return setOpenSlotVacateModal(true)
        }
        return setOpenSlotOccupyModal(true)
    }

    const vacateSlot = async (id) => {
        try {
            setOpenSlotVacateModal(false)
            await vacate(id)
            loadSlots()
        } catch (error) {
            console.error(error);
            alert(error.response.data.error)
        }
    }

    return (
        <>
            <SlotPanel slots={slots} onSlotSelected={handleSlotSelection} />
            <SlotVacateModal
                open={openSlotVacateModal}
                onCancel={() => setOpenSlotVacateModal(false)}
                onClose={() => setOpenSlotVacateModal(false)}
                onConfirm={() => vacateSlot(selectedSlot.id)} />
            <SlotOccupyModal
                open={openSlotOccupyModal}
                onCancel={() => setOpenSlotOccupyModal(false)}
                onClose={() => setOpenSlotOccupyModal(false)}
                onConfirm={() => alert('Ingresar vehiculo')}
            />
        </>

    )
}

export default SlotPage