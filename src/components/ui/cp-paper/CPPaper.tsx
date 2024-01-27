import { Paper } from "@mui/material";

const CPPaper = ({ children }: { children: React.ReactNode }) => {
  return <Paper className="cp-paper">{children}</Paper>;
};
export default CPPaper;
