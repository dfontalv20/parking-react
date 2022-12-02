import axios from "axios"
import config from "../config"

export const getAll = async () => {
    const res = await axios.get(`${config.host}/client`)
    return res.data
}