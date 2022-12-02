import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';

const VerticalMenu = props => {

    const { value, onChange, options } = props

    return (
        <Box
            sx={{ flexGrow: 1, display: 'flex', height: '100%', width: '100%' }}
        >
            <Tabs
                style={{width: '100%'}}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={onChange}
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {options.map(option => <Tab label={option.label} icon={option.icon ?? <></>} iconPosition="start"/>)}
            </Tabs>
        </Box>

    );
}

export default VerticalMenu