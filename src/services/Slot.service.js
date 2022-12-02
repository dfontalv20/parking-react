import axios from "axios"
import config from "../config"

export const getAll = async () => {
    const res = await axios.get(`${config.host}/slot`)
    return res.data
}

export const create = async (data) => {
    const res = await axios.post(`${config.host}/slot`, data)
    return res.data
}

export const update = async (id, data) => {
    const res = await axios.put(`${config.host}/slot/${id}`, data)
    return res.data
}

export const remove = async (id) => {
    const res = await axios.delete(`${config.host}/slot/${id}`)
    return res.data
}

export const occupy = async (id, data) => {
    const res = await axios.post(`${config.host}/slot/${id}/occupy`, data)
    return res.data
}

export const vacate = async (id) => {
    const res = await axios.post(`${config.host}/slot/${id}/vacate`)
    return res.data
}