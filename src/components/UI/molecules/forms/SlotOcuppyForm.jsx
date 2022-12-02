import { Autocomplete, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useCarsData from '../../../../hooks/useCarsData'

const SlotOcuppyForm = props => {

    const { slot, onCancel, onConfirm } = props
    const [form, setForm] = useState({
        personName: slot?.client?.name ?? '',
        phone: slot?.client?.phone ?? '',
        carBrand: null,
        carModel: null,
        plate: '',
        color: ''
    })
    const { makes, models } = useCarsData(form.carBrand)

    const handleChange = (value, prop) => {
        if (prop === 'carBrand') {
            setForm(prev => ({ ...prev, carModel: null }))
        }
        setForm(prev => ({ ...prev, [prop]: value }))
    }


    const handleSubmit = e => {
        e.preventDefault()
        e.stopPropagation()
        onConfirm(form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} textAlign='center' paddingBottom={1}>
                    <Typography variant='h4'>Ingresar vehiculo</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Nombre'
                        value={slot?.client?.name ?? form.personName}
                        onChange={e => handleChange(e.target.value, 'personName')}
                        fullWidth
                        aria-readonly={slot?.client?.name}
                        required />
                </Grid>
                <Grid item xs={6}>
                    <TextField label='Telefono'
                        value={slot?.client?.phone ?? form.phone}
                        onChange={e => handleChange(e.target.value, 'phone')}
                        type={'number'}
                        aria-readonly={slot?.client?.phone}
                        fullWidth
                        inputProps={{ max: 9999999999 }}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField label='Placa'
                        value={form.plate}
                        fullWidth
                        onChange={e => handleChange(e.target.value, 'plate')}
                        required />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label='Color'
                        value={form.color}
                        onChange={e => handleChange(e.target.value, 'color')}
                        type={'color'}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        options={makes}
                        getOptionLabel={option => option?.MakeName}
                        isOptionEqualToValue={(option, value) => option.MakeName === value?.MakeModel}
                        value={makes.find(make => make.MakeName === form.carBrand) ?? null}
                        onChange={(e, value) => handleChange(value?.MakeName, 'carBrand')}
                        renderInput={params => <TextField {...params} label='Marca' required fullWidth />}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        options={models}
                        getOptionLabel={option => option?.Model_Name}
                        isOptionEqualToValue={(option, value) => option.Model_Name === value?.Model_Name}
                        value={models.find(model => model.Model_Name === form.carModel) ?? null}
                        onChange={(e, value) => handleChange(value?.Model_Name, 'carModel')}
                        renderInput={params => <TextField {...params} label='Modelo' required fullWidth />}
                    />
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='space-evenly'>
                    <Button type='submit'>Confirmar</Button>
                    <Button onClick={onCancel}>Cancelar</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SlotOcuppyForm