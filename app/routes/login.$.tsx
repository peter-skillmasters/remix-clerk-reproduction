import { SignIn } from "@clerk/remix";
import { Link } from "@remix-run/react";

export default function LoginPage() {
  return (
    <div className="v-stack gap-40">
      <Link to="/not-found">Simulate Error</Link>
      <SignIn />
    </div>
  );
}
