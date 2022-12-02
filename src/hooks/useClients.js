import { useEffect, useState } from "react"
import { getAll } from "../services/Client.service"

const useClients = () => {
    const [clients, setClients] = useState([])
    
    useEffect(() => {
      (async () => setClients(await getAll()))()
    }, [])
    
    return clients
}

export default useClients