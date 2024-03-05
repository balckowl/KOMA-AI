import { Button } from "~/components/ui/button"
import { motion } from "framer-motion"
import { Link } from "@remix-run/react"
import { useUser } from "@clerk/remix";


const How = () => {
  const { isLoaded } = useUser();

  return (
    <div className="container flex sm:justify-around  mb-12">
    
    <div className="hidden sm:block">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <img src="/images/top/how-img.png" className="w-[50vw] min-w-[400px] max-w-[600px]" />
      </motion.div>
    </div>

      <div className="px-4 mt-6">
        {/*  heading */}
        <div className="w-max mb-12">
          <p className="text">使い方</p>
          <div className="w-full h-[4px] bg-[#ffbe20]"></div>
          <h2 className="text-4xl font-bold">HOW TO USE</h2>
        </div>

        <div>
          <div className="leading-[40px] mb-12">
            <p>1. 使いたい画像を4枚アップロードする</p>
            <p>2. 「生成」ボタンをクリックする</p>
            <p>3. KOM-4iが画像にあった4コマ漫画を作ってくれます</p>
            <p>4. 完成した4コマ漫画を世界中に公開しよう</p>
          </div>
          <div className="flex">
            <Link to={isLoaded ? "/home" : "/sign-in" }>
              <Button className="bg-[#e2aa1d] px-4 py-2 border-2 border-[#e2aa1d] rounded-lg cursor-pointer hover:bg-white hover:text-[#e2aa1d]">はじめる</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default How