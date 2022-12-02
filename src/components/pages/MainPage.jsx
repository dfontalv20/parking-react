import { DirectionsCarFilled, Person, Settings } from '@mui/icons-material'
import React, { useState } from 'react'
import Dashboard from '../templates/Dashboard'
import SlotPanel from '../UI/organisms/Panels/SlotPanel'

const MainPage = () => {

    const [selectedOption, setSelectedOption] = useState(0)

    const menuOptions = [
        { label: "PLAZAS", icon: <DirectionsCarFilled /> },
        { label: "CLIENTES", icon: <Person /> },
        { label: "PARAMETROS", icon: <Settings /> },
    ]

    const slots = [
        {
            id: 1,
            number: 1,
            current: {
                car: 'Honda Civic',
                personName: 'Diego Andrés'
            }
        },
        {
            id: 1,
            number: 2,
            current: {
                color: '#0080FF',
                car: 'Ford Focus',
                personName: 'Carlos'
            }
        },
        {
            id: 1,
            number: 3,
            current: {
                color: 'grey',
                car: 'Kia Cerato',
                personName: 'Jean'
            }
        },
        {
            id: 1,
            number: 1,
            current: {
                car: 'Honda Civic',
                personName: 'Diego Andrés'
            }
        },
        {
            id: 1,
            number: 1,
            current: {
                car: 'Honda Civic',
                personName: 'Diego Andrés'
            }
        },
        {
            id: 1,
            number: 6,
            current: null
        },
    ]

    return (
        <Dashboard
            menu={{
                options: menuOptions,
                selected: selectedOption,
                onMenuChange: (e, value) => setSelectedOption(value)
            }}
            slots={slots}
        >
            <SlotPanel slots={slots}/>
        </Dashboard>
    )
}

export default MainPage