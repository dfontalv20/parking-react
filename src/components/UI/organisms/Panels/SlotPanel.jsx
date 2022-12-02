import { Container, Grid } from "@mui/material";
import React from "react";
import SlotCard from "../../molecules/SlotCard";

const SlotPanel = ({ slots, onSlotSelected, onSlotEdit, onSlotDelete }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {slots.map((slot, key) => (
          <Grid item xs={6} md={4} lg={3} key={key} display="flex">
            <SlotCard
              slot={slot}
              onClick={() => onSlotSelected(slot)}
              onEdit={onSlotEdit}
              onDelete={onSlotDelete}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SlotPanel;
