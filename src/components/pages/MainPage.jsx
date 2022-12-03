import { DirectionsCarFilled, Person, SyncAlt } from "@mui/icons-material";
import React, { useState } from "react";
import Dashboard from "../templates/Dashboard";
import ClientPage from "./ClientPage";
import MovementPage from "./MovementPage";
import SlotPage from "./SlotPage";

const MainPage = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const menuOptions = [
    {
      label: "PLAZAS",
      icon: <DirectionsCarFilled />,
      page: <SlotPage />,
      description: `Gestiona las plazas de parqueo disponibles.
      Haz click en una plaza para realizar un movimiento o liberarla si ya esta ocupada.`,
    },
    {
      label: "CLIENTES",
      icon: <Person />,
      page: <ClientPage />,
      description: `Gestiona los clientes para poder reservar plazas de parqueo.`,
    },
    {
      label: "MOVIMIENTOS",
      icon: <SyncAlt />,
      page: <MovementPage />,
      description: `Visualiza y elimina los movimientos (entrada y salida de vehiculos) realizados.`,
    },
  ];

  return (
    <Dashboard
      menu={{
        options: menuOptions,
        selected: selectedOption,
        onMenuChange: (e, value) => setSelectedOption(value),
      }}
    >
      {menuOptions[selectedOption].page}
    </Dashboard>
  );
};

export default MainPage;
