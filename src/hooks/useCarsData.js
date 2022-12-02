import React, { useEffect, useState } from "react"
import { getMakes, getModelsByMake } from "../services/Car.service"

const useCarsData = (makeName) => {
    const [carsData, setCarsData] = useState({
        makes: [],
        models: [],
    })

    useEffect(() => {
        loadMakes()
    }, [])

    useEffect(() => {
        if (!makeName) return setCarsData(prev => ({ ...prev, models: [] }))
        loadModels()
    }, [makeName])

    const loadMakes = async () => {
        try {
            const makes = await getMakes()
            setCarsData(prev => ({ ...prev, makes }))
        } catch (error) {
            console.error(error);
        }
    }

    const loadModels = async () => {
        try {
            const models = await getModelsByMake(makeName)
            setCarsData(prev => ({ ...prev, models }))
        } catch (error) {
            console.error(error);
        }
    }

    return carsData
}

export default useCarsData