import { Container, useTheme } from "@mui/material";
import Header from "../template/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="w-full h-auto flex flex-col mt-[40px]">
      <Header />
      {children}
    </Container>
  );
};
export default DashboardLayout;
