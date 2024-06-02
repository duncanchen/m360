import { Outlet, json, useLoaderData, useNavigate } from "@remix-run/react"
import { randomUser } from "~/lib/fake/name"
import { useUserStore } from "~/components/store";
import { useEffect } from "react";
import { Button } from "~/components/ui/button"

const readCookie = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
}

export default function Index() {
  const nav = useNavigate()
  useEffect(() => {
    const user = readCookie("mt360_user");
    if (user) {
      useUserStore.getState().setUser(JSON.parse(atob(user)));
    }
  }, [])
  return (
    <div className="dark bg-gray-800 h-screen text-foreground">
      <nav className="sticky top-0 bg-gray-900 p-2 ">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <div className="blue-gradient text-[2rem] font-mono font-bold italic">
            {"mT360 "}
          </div>
          <Button variant="outline" onClick={() => nav("/logout")}>
            logout
          </Button>
        </div>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
