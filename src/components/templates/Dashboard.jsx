import { DirectionsCarFilled, Person, Settings } from '@mui/icons-material'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import VerticalMenu from '../UI/molecules/VerticalMenu'

const Dashboard = props => {

    const { menu, children } = props

    return (
        <Grid container height={'95vh'}>
            <Grid item xs={3} md={2}>
                <VerticalMenu
                    options={menu.options}
                    value={menu.selected}
                    onChange={menu.onMenuChange}
                />
            </Grid>
            <Grid item xs>
                {children}
            </Grid>
        </Grid>

    )
}

export default Dashboard