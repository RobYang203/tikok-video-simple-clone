import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const rootStyle = {
  pt: 122,
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
