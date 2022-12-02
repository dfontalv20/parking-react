import { Box, Modal, Paper } from '@mui/material';
import React from 'react'
import { themeOptions } from '../../../../styles/theme';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '1px solid #000',
    boxShadow: 24,
    padding: 10,
};

const BaseModal = ({ children, open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Paper style={style}>
                {children}
            </Paper>
        </Modal>
    )
}

export default BaseModal