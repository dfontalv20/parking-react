import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BaseModal from '../../atoms/modal/BaseModal'
import SlotOcuppyForm from '../forms/SlotOcuppyForm'

const SlotOccupyModal = ({ open, onClose, onConfirm, onCancel, makes, models }) => {

    return (
        <BaseModal open={open} onClose={onClose}>
            <Box>
                <SlotOcuppyForm onConfirm={onConfirm} onCancel={onCancel} />
            </Box>
        </BaseModal>
    )
}

export default SlotOccupyModal