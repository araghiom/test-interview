import DashboardLayout from "@/components/Layout/DashbordLayout";
import AddSocialForm from "@/components/social/AddSocialForm";
import AddSocial from "@/components/social/AddSocialForm";
import CPThemeProvider from "@/context/ThemeProvider";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen ">
      <DashboardLayout>
        <Link href={"/profile/settings "}>settings </Link>
      </DashboardLayout>
    </main>
  );
}
