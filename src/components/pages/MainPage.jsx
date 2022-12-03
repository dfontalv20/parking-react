import { DirectionsCarFilled, Person, Settings } from '@mui/icons-material'
import React, { useState } from 'react'
import Dashboard from '../templates/Dashboard'
import ClientPage from './ClientPage'
import SlotPage from './SlotPage'

const MainPage = () => {

    const [selectedOption, setSelectedOption] = useState(0)

    const menuOptions = [
        { label: "PLAZAS", icon: <DirectionsCarFilled />, page: <SlotPage /> },
        { label: "CLIENTES", icon: <Person />, page: <ClientPage /> },
        { label: "MOVIMIENTOS", icon: <Settings />, page: <div>movs</div> },
    ]

    return (
        <Dashboard
            menu={{
                options: menuOptions,
                selected: selectedOption,
                onMenuChange: (e, value) => setSelectedOption(value)
            }}
        >
            {menuOptions[selectedOption].page}
        </Dashboard>
    )
}

export default MainPage