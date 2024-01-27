import { Paper, Typography } from "@mui/material";
import DashboardLayout from "@/components/Layout/DashbordLayout";
import { db } from "@/db";
import ListSocial from "@/components/social/ListSocial";
import AddSocial from "@/components/social/AddSocial";

const page = async () => {
  const listOfSocial = await db?.socialDetail?.findMany();

  return (
    <DashboardLayout>
      <Paper className="rounded-[25px] p-[16px]">
        <Typography
          color={"text primary"}
          className="m-[.35rem] text-[.65rem]  "
        >
          Socials
        </Typography>
        <AddSocial />
        <ListSocial list={listOfSocial} />
      </Paper>
    </DashboardLayout>
  );
};
export default page;
