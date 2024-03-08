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
import { useEffect, useState } from "react";
import Loading from "./components/base/loading";
import { useAuth } from "@clerk/remix";
import { Link, useNavigate } from "@remix-run/react";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "KOM-4i" },
//     { name: "description", content: "4コマ漫画をAIで作れるサイト" },
//     { property: "og:url", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/works` },
//     { property: "og:title", content: "自分の作品 | KOM-4i" },
//     { property: "og:image", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/images/ogp/ogp.png` },
//     { property: "og:site_name", content: "自分の作品一覧" },
//   ]
// };

// export const loader = async (args:LoaderFunctionArgs) => {
//   const { userId } = await getAuth(args);
//   // const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${userId}`)
//   const res = await fetch(`http://localhost:3000/api/post`)
//   const worksData = await res.json()
//   return json( worksData );
// };

const Works = () => {

  const [myYonkoma, setMyYonkoma] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { userId } = useAuth()
  const navigate = useNavigate()

  const getTrendData = async () => {
    setIsLoading(true)
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/works/${userId}`)
    const newData = await res.json()
    console.log(newData)
    setMyYonkoma(newData.val)
    setIsLoading(false)
  }

  // console.log(hoge)
  useEffect(() => {
    getTrendData()
  }, [userId])

  if (isLoading) {
    return <Loading />
  }

  const deleteYonkoma = async (id: string) => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/post/${id}`, {
      method: "DELETE"
    })

    navigate(0)
  }

  return (
    <div>
      <Header />
      <div className="container pt-[70px] pb-[120px]">
        {/*  heading */}
        <div className="w-max mb-12">
          <p className="text">・自分の作品</p>
          <div className="w-full h-[4px] bg-[#7fb800]"></div>
          <h2 className="text-4xl font-bold">MY WORKS</h2>
        </div>

        <div className="flex gap-8 flex-wrap w-10/12 mx-auto justify-center">
          {myYonkoma.map((trend: any, i: number) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + 0.2 * i,
                duration: 0.6,
                ease: "easeOut"
              }}
              key={i}
            >
              {/* <p className="mb-1 ml-1">{trend.author.userName}</p> */}
              {/* 漫画ページ */}
              <Link className="p-1" to={`/yonkoma/${trend.postId}`}>
                <div className="w-auto h-max border-black border-[2px] p-4 bg-slate-50">
                  <div className="w-max mx-auto">
                    <p className="text-center mb-2 relative z-10 border-black border-[1px] bg-white">
                      {trend.title}
                    </p>

                    {[0, 1, 2, 3].map((j, _) => (
                      <div key={j} className="bg-white">
                        <div className="mx-auto w-max relative z-10">
                          <img src={trend.content[j].imageUrl} className="mb-2 w-[200px] h-[130px] object-cover border-[1px] border-black bg-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </Link>
              <div className="flex justify-between">
                {/* いいね数 */}
                <div className="flex gap-4 p-2 items-center">
                  <div className="text-[24px] text-red-500">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <p className="h-[24px] flex items-center">{trend.likes}</p>
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
                      <p className="text-sm">削除した作品は復元できません</p>
                      <img src="/images/works/delete.webp" className="w-[50%] mx-auto py-10" />
                      <DialogDescription className="flex justify-around">
                        <Button
                          onClick={() => deleteYonkoma(trend.postId)}
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