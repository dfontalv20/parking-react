import { LocalParking } from "@mui/icons-material";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import Bonzi from "../../../assets/BonziBuddy.webp";
import React from "react";

const VerticalMenu = (props) => {
  const { value, onChange, options } = props;

  return (
    <Box
      width="100%"
      height="100%"
      display={'flex'}
      flexGrow={1}
      flexDirection="column"
      textAlign="center"
    >
      <Box marginY={5}>
        <LocalParking style={{ fontSize: "64px" }} color="primary" />
        <Typography variant="h2" fontSize={20} fontWeight={700}>
          Gestion de parqueo
        </Typography>
      </Box>
      <Tabs
        style={{ width: "100%" }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={onChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {options.map((option, key) => (
          <Tab
            key={key}
            label={option.label}
            icon={option.icon ?? <></>}
            iconPosition="start"
          />
        ))}
      </Tabs>
      <Box marginTop={'auto'}>
        <img src={Bonzi} alt="Bonzi Buddy" width={'40%'}/>
      </Box>
    </Box>
  );
};

export default VerticalMenu;
