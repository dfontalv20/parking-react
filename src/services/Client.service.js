import axios from "axios"
import config from "../config"

export const getAll = async () => {
    const res = await axios.get(`${config.host}/client`)
    return res.data
}

export const create = async (data) => {
    const res = await axios.post(`${config.host}/client`, data)
    return res.data
}

export const update = async (id, data) => {
    const res = await axios.put(`${config.host}/client/${id}`, data)
    return res.data
}

export const remove = async (id) => {
    await axios.delete(`${config.host}/client/${id}`)
}