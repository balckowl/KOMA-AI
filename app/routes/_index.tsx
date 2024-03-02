// clerk
import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { redirect, type MetaFunction } from "@remix-run/node";
// framer-motion
import { motion } from 'framer-motion'
// zustand
import { useKomaStore } from "~/zustand/komaStore";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// ログインしていない場合、sign-inページにリダイレクトする
export const loader = async(args: any) => {
  const {userId} = await getAuth(args)
  if(!userId) {
    return redirect("/sign-in")
  }
  return null
}

export default function Index() {


  return (
    <div>
      <p className="text-red-500">Hello</p>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 200 }}
        className='w-[170px] h-[170px] rounded-full bg-sky-500'>
      </motion.div>
      <UserButton afterSignOutUrl="/sign-in"/>
    </div>
  );
}
