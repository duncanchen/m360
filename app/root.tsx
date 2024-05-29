import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "./tailwind.css?url";
import { LinksFunction } from "@remix-run/node";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
// Supports weights 400-900
import "@fontsource-variable/ruda";
// Supports weights 100-700
import "@fontsource-variable/montagu-slab/opsz.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
