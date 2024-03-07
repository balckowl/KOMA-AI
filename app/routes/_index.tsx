// clerk
import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { redirect, type MetaFunction } from "@remix-run/node";
// framer-motion
import { motion } from 'framer-motion'
// zustand
import { useKomaStore } from "./zustand/komaStore"
// components
import Header from "./components/base/header";
import Hero from "./components/top/hero";
import Trend from "./components/top/trend";
import How from "./components/top/how";
import News from "./components/top/news";
import Tech from "./components/top/tech";
import TopFooter from "./components/top/topFooter";

export const meta: MetaFunction = () => {
  return [
    { title: "KOM-4i" },
    { name: "description", content: "4コマ漫画をAIで作れるサイト" },
    { property: "og:url", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}`},
    { property: "og:title", content: "トップ | KOM-4i"},
    { property: "og:image", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/images/top/tech/bun.svg`},
    { property: "og:site_name", content: "トップページ"},
  ]
};

// ログインしていない場合、sign-inページにリダイレクトする
// export const loader = async(args: any) => {
//   const {userId} = await getAuth(args)
//   if(!userId) {
//     return redirect("/sign-in")
//   }
//   return null
// }

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <Trend />
      <How />
      <News />
      <Tech />
      <TopFooter/>
    </div>
  );
}
