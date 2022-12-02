import React, { useEffect, useState } from 'react'
import { getAll } from '../../services/Slot.service'
import SlotOccupyModal from '../UI/molecules/modals/SlotOccupyModal'
import SlotVacateModal from '../UI/molecules/modals/SlotVacateModal'
import SlotPanel from '../UI/organisms/Panels/SlotPanel'

const SlotPage = () => {

    const [openSlotVacateModal, setOpenSlotVacateModal] = useState(false)
    const [openSlotOccupyModal, setOpenSlotOccupyModal] = useState(false)
    const [slots, setSlots] = useState([])
    
    useEffect(() => {
      loadSlots()
    }, [])
    
    const loadSlots = async () => {
        setSlots(await getAll())
    }

    const handleSlotSelection = (slot) => {
        if (slot.current) {
            return setOpenSlotVacateModal(true)
        }
        return setOpenSlotOccupyModal(true)
    }

    return (
        <>
            <SlotPanel slots={slots} onSlotSelected={handleSlotSelection} />
            <SlotVacateModal
                open={openSlotVacateModal}
                onCancel={() => setOpenSlotVacateModal(false)}
                onClose={() => setOpenSlotVacateModal(false)}
                onConfirm={() => alert('Liberar')} />
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