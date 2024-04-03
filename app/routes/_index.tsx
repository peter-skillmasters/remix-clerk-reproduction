import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="v-stack">
      <h2>Steps to Reproduce</h2>
      <ol>
        <li>
          <Link to="/login">Go to Login Page</Link>
        </li>
        <li>Click “Simulate Error” Link on Login Page</li>
        <li>Click “Go back to Login Page” Link on Error Page</li>
        <li>Styling on Clerk &lt;SignIn /&gt; Component is now gone</li>
      </ol>
    </div>
  );
}
