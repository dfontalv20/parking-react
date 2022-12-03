import React from 'react'
import useClients from '../../hooks/useClients'
import ClientPanel from '../UI/organisms/Panels/ClientPanel'

const ClientPage = () => {
  
    const clients = useClients()

    return (
    <ClientPanel clients={clients}/>
  )
}

export default ClientPage