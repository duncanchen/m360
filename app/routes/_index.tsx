import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className=" h-screen bg-background text-foreground p-12">
      <div className="container mx-auto space-y-4">
        <div className="mt-40">
          <span className="purple-gradient text-[5rem]">mT</span>
          <span className="blue-gradient text-[5rem] font-extrabold">360</span>
          <span className="primary-gradient px-4 text-[5rem] italic font-serif">
            {" MOCK "}
          </span>
        </div>
        <div className="text-2xl text-foreground60">
          This application simulates how the MT360 application will enable users
          to sign in and interact with Auth360.
        </div>
        <div className="text-2xl text-foreground/60">
          By clicking the {"/AUTH"} button below, you will be assigned a random
          user ID to simulate an existing MT360 user and automatically sign in.
          In practice, this involves visiting the
          <b className="mx-2 text-foreground/80">mortgagetrade.net/auth</b>
          site and then being redirected back to the corresponding MT360
          application.
        </div>

        <div>
          <Button variant="default">{"/Auth"}</Button>
        </div>
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
