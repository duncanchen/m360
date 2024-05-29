import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="dark bg-gray-800 h-screen text-foreground">
      <nav className="sticky top-0 bg-gray-900 p-2">
        <div className="blue-gradient text-[2rem] font-mono font-bold italic">
          mT360
        </div>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
