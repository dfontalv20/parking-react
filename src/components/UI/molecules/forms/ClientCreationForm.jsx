import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ClientCreationForm = ({ onConfirm, onCancel, client }) => {
  const [form, setForm] = useState(
    client ?? {
      number: "",
      phone: "",
      email: "",
    }
  );

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
          <Typography variant="h4">Formulario cliente</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Nombre"
            required
            fullWidth
            type="text"
            value={form.name}
            onChange={(e) => handleChange(e.target.value, "name")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Telefono"
            required
            fullWidth
            type="number"
            value={form.phone}
            onChange={(e) => handleChange(e.target.valueAsNumber, "phone")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Correo"
            required
            fullWidth
            type="email"
            value={form.email}
            onChange={(e) => handleChange(e.target.value, "email")}
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

export default ClientCreationForm;
