import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BaseModal from '../../atoms/modal/BaseModal'

const SlotVacateModal = ({ open, onClose, onConfirm, onCancel }) => {

    return (
        <BaseModal open={open} onClose={onClose}>
            <Typography align='center' variant='h4' style={{marginBlockEnd: 20}}>¿Esta seguro que quiere liberar esta plaza?</Typography>
            <Box display='flex' justifyContent='space-evenly'>
                <Button onClick={onConfirm}>Confirmar</Button>
                <Button onClick={onCancel}>Cancelar</Button>
            </Box>
        </BaseModal>
    )
}

export default SlotVacateModal