import type { FC, ReactNode } from "react";
import { Header } from "../components";
import { Box } from "@mui/material";
interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />

      <Box
        sx={{
            backgroundColor : "#4A4A4A",
          padding: "70px 1rem 1rem 1rem",
        }}
      >
        {children}
      </Box>

      {/*Footer*/}
    </div>
  );
};
