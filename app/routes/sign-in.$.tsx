import { SignIn } from "@clerk/remix";
import Header from "./components/base/header";

export default function SignInPage() {
  return (
    <div>
      <Header signIn={true}/>
      <div className="container">
        <div className="w-max mx-auto mt-20">
          <SignIn afterSignInUrl="/home"/>
        </div>
      </div>
    </div>
  );
}