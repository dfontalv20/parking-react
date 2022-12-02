import { DirectionsCarFilled, Person, Settings } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Dashboard from '../templates/Dashboard'
import SlotOccupyModal from '../UI/molecules/modals/SlotOccupyModal'
import SlotVacateModal from '../UI/molecules/modals/SlotVacateModal'
import SlotPanel from '../UI/organisms/Panels/SlotPanel'
import SlotPage from './SlotPage'

const MainPage = () => {

    const [selectedOption, setSelectedOption] = useState(0)

    const menuOptions = [
        { label: "PLAZAS", icon: <DirectionsCarFilled /> },
        { label: "CLIENTES", icon: <Person /> },
        { label: "PARAMETROS", icon: <Settings /> },
    ]

    return (
        <Dashboard
            menu={{
                options: menuOptions,
                selected: selectedOption,
                onMenuChange: (e, value) => setSelectedOption(value)
            }}
        >
            <SlotPage />
        </Dashboard>
    )
}

export default MainPage