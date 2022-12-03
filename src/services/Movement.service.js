import axios from "axios"
import config from "../config"

export const getAll = async () => {
    const res = await axios.get(`${config.host}/movement`)
    return res.data
}

export const remove = async (id) => {
    await axios.delete(`${config.host}/movement/${id}`)
}