import { ClerkApp } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { LoaderFunctionArgs } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./root.css";

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
        <div className="container">
          <div className="v-stack">
            <div className="h-stack">
              <h1>Clerk Styling Issue in Remix</h1>
              <Link to="/">Return Home</Link>
            </div>
            <div className="panel">{children}</div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function loader(args: LoaderFunctionArgs) {
  return rootAuthLoader(args);
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App);

export function ErrorBoundary() {
  return (
    <div className="v-stack">
      <h2>Remix’s Root Error Boundary</h2>
      <Link to="/login">Go back to Login Page</Link>
    </div>
  );
}
