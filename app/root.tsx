import { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";
import stylesheet from "./tailwind.css?url";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader: LoaderFunction = args => {
  return rootAuthLoader(args, ({ request }) => {
    const { sessionId, userId, getToken } = request.auth;
    // fetch data
    return { yourData: 'here' };
  });
};

export const ErrorBoundary = ClerkErrorBoundary();

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
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


function App() {
  return <Outlet />;
}

export default ClerkApp(App);
