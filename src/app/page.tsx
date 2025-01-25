//import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import SignIn from "@/app/auth/signin/page"
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Next-Vision",
  description: "Next-Vision",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <SignIn />
      </DefaultLayout>
    </>
  );
}
