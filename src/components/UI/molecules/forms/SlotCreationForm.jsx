import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useClients from "../../../../hooks/useClients";

const SlotCreationForm = ({ onConfirm, onCancel, slot }) => {
  const [form, setForm] = useState(
    {
      number: slot?.number ?? '',
      client: slot?.client ?? null,
    }
  );

  const { clients } = useClients();

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
          <Typography variant="h4">Formulario plaza</Typography>
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
            onChange={(e, value) => handleChange(value, "client")}
            renderInput={(params) => (
              <TextField
                label="Cliente para reservar"
                fullWidth
                {...params}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-evenly">
          <Button type="submit">Guardar</Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SlotCreationForm;
