import { useEffect, useState } from "react"
import { getAll } from "../services/Client.service"

const useClients = () => {
  const [clients, setClients] = useState([])

  const refresh = async () => {
    setClients(await getAll())
  }

  useEffect(() => { refresh() }, [])

  return { clients, refresh }
}

export default useClients