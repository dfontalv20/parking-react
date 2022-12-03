import axios from "axios"

export const getMakes = async () => {
    const res = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
    return res.data.Results
}

export const getModelsByMake = async (makeId) => {
    const res = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${makeId}?format=json`)
    return res.data.Results
}