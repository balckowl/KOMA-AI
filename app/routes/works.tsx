import Header from "./components/base/header"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";

export const meta: MetaFunction = () => {
  return [
    { title: "KOM-4i" },
    { name: "description", content: "4コマ漫画をAIで作れるサイト" },
    { property: "og:url", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/works`},
    { property: "og:title", content: "自分の作品 | KOM-4i"},
    { property: "og:image", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/images/top/tech/bun.svg`},
    { property: "og:site_name", content: "自分の作品一覧"},
  ]
};

export const loader = async (args:LoaderFunctionArgs) => {
  const { userId } = await getAuth(args);
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${userId}`)
  const worksData = await res.json()
  return json( worksData );
};

const Works = () => {
  const myYonkoma = Array(10).fill(
    {
      title: "たいとる",
      author: "kusira",
      likes: 0,
      panels: [
        "https://placeholder.pics/svg/200x112",
        "https://placeholder.pics/svg/200x112",
        "https://placeholder.pics/svg/200x112",
        "https://placeholder.pics/svg/200x112"
      ]
    }
  );

  const deleteYonkoma = () => {
    console.log("deleted")
  }
  return (
    <div>
      <Header />
      <div className="container">
        {/*  heading */}
        <div className="w-max my-12">
          <p className="text">・自分の作品</p>
          <div className="w-full h-[4px] bg-[#7fb800]"></div>
          <h2 className="text-4xl font-bold">MY WORKS</h2>
        </div>
        
        <div className="flex gap-8 flex-wrap w-10/12 mx-auto justify-center xl:justify-start">
          {myYonkoma.map((trend, i) => (
            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + 0.2*i,
                duration: 0.6,
                ease: "easeOut"
              }}
              key={i}
            >
              <p className="mb-1 ml-1">{myYonkoma[i].author}</p>
              {/* 漫画ページ */}
              <div className="w-auto h-max border-black border-[1px] p-4">
                <div className="w-max mx-auto">
                  <p className="text-center mb-2 relative z-10 border-black border-[1px]">
                    {myYonkoma[i].title}
                  </p>

                  {[0, 1, 2, 3].map((j, _) => (
                    <div key={j}>
                      <div className="mx-auto w-max relative z-10">
                        <img src={myYonkoma[i].panels[j]} className="mb-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-2">
                {/* いいね数 */}
                <div className="flex gap-4 p-2 items-center">
                  <div className="text-[24px] text-red-500">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <p className="h-[24px] flex items-center">{myYonkoma[i].likes}</p>
                </div>

                {/* 削除ボタン */}
                <Dialog>
                  <DialogTrigger>
                    <div className="text-xl cursor-pointer hover:opacity-80 transition-all"
                    >🗑</div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>本当に削除しますか</DialogTitle>
                      <p className="text-sm pt-2">削除した作品は復元できません</p>
                      <img src="/images/works/hengao.png" className="w-[50%] mx-auto" />
                      <DialogDescription className="flex justify-around pt-10">
                        <Button
                          onClick={() => deleteYonkoma()}
                          className="bg-[#00b82e] hover:bg-[#29882e]"
                        >はい</Button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Works