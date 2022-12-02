import { AddBox, DirectionsCar, RemoveCircle } from '@mui/icons-material'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'

const SlotCard = props => {

    const { slot, onClick } = props

    const cardIconStyles = {
        marginInline: 'auto',
        marginBlockEnd: 20,
        color: slot.current?.color,
        fontSize: 64
    }

    return (
        <Card style={{ width: '100%', height: '100%' }}>
            <CardActionArea onClick={onClick}>
                <CardHeader subheader={slot.number} style={{ paddingBlockEnd: 0 }} />
                <CardContent >
                    <Box display='flex'>
                        {slot.current ? <DirectionsCar style={{...cardIconStyles, color: slot.current?.color }} /> : <AddBox style={cardIconStyles}/>}
                    </Box>
                    <Box style={{ textAlign: 'center' }}>
                        <Typography variant='h5'>{slot.current?.car ?? 'Libre'}</Typography>
                        <Typography variant='subtitle2' marginBottom={1}>{slot.current?.plate ?? ''}</Typography>
                        <Typography variant='subtitle1'>{slot.current?.personName ?? ''}</Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SlotCard