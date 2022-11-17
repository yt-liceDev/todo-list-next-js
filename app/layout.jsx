import NavLink from "../components/NavLink";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TodoList</title>
      </head>
      <body className="bg-gray-900">
        <nav className="p-4 border-b-[1px] border-b-gray-600">
          <ul className="text-slate-100 text-lg space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/todo-list">TodoLists</NavLink>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
