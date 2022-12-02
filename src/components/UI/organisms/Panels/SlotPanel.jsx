import { Container, Grid } from '@mui/material'
import React from 'react'
import SlotCard from '../SlotCard'

const SlotPanel = ({ slots }) => {
    return (
        <Container>
            <Grid container spacing={3}>
                {slots.map(slot => <Grid item xs={6} md={4} lg={3} display='flex'><SlotCard slot={slot} /></Grid>)}
            </Grid>
        </Container>
    )
}

export default SlotPanel