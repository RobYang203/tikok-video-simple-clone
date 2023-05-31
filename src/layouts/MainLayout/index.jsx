import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const rootStyle = {
  textAlign: "center",
};

const MainLayout = () => {
  return (
    <Box sx={rootStyle}>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
