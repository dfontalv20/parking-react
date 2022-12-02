import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useClients from "../../../../hooks/useClients";

const SlotCreationForm = ({ onConfirm, onCancel }) => {
  const [form, setForm] = useState({
    number: '',
    client: null,
  });

  const clients = useClients()

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onConfirm(form);
  };

  const handleChange = (value, prop) => {
    setForm((prev) => ({ ...prev, [prop]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4">Nueva plaza</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Numero"
            required
            fullWidth
            type="number"
            value={form.number}
            onChange={(e) => handleChange(e.target.valueAsNumber, "number")}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            options={clients}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            value={form.client}
            renderInput={(params) => (
              <TextField
                label="Cliente para reservar"
                fullWidth
                {...params}
                onChange={(e) => handleChange(e, "clientId")}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-evenly">
          <Button type='submit'>Agregar</Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SlotCreationForm;
