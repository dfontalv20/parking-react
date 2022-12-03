import { useEffect, useState } from "react"
import { getAll } from "../services/Movement.service"

const useMovements = () => {
  const [movements, setMovements] = useState([])

  const refresh = async () => {
    setMovements(await getAll())
  }

  useEffect(() => { refresh() }, [])

  return { movements, refresh }
}

export default useMovements