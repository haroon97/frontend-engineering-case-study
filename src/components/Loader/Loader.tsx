import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const Loader: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress color="primary" size={50} />
    </Box>
  );
};
