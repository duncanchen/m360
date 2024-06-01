import { Outlet, json, useLoaderData } from "@remix-run/react";
import { randomUser } from "~/lib/fake/name"
import { useUserStore } from "~/components/store";
import { useEffect } from "react";

const readCookie = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
}

export default function Index() {
  useEffect(() => {
    const user = readCookie("mt360_user");
    if (user) {
      useUserStore.getState().setUser(JSON.parse(atob(user)));
    }
  }, [])
  return (
    <div className="dark bg-gray-800 h-screen text-foreground">
      <nav className="sticky top-0 bg-gray-900 p-2 ">
        <div className="container mx-auto">
          <div className="blue-gradient text-[2rem] font-mono font-bold italic">
            mT360
          </div>
        </div>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
