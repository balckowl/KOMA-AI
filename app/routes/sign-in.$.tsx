import { SignIn } from "@clerk/remix";
import Header from "./components/base/header";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "KOM-4i" },
    { name: "description", content: "4コマ漫画をAIで作れるサイト" },
    { property: "og:url", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/sign-in`},
    { property: "og:title", content: "サインイン | KOM-4i"},
    { property: "og:image", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/images/top/tech/bun.svg`},
    { property: "og:site_name", content: "サインイン"},
  ]
};

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