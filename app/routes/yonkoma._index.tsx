import { Link } from "@remix-run/react"
import Header from "./components/base/header"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { MetaFunction, json } from "@remix-run/node";
import Loading from "./components/base/loading";
import { useEffect, useState } from "react";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "KOM-4i" },
//     { name: "description", content: "4コマ漫画をAIで作れるサイト" },
//     { property: "og:url", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/yonkoma`},
//     { property: "og:title", content: "全ての作品 | KOM-4i"},
//     { property: "og:image", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/images/ogp/ogp.png`},
//     { property: "og:site_name", content: "全ての作品"},
//   ]
// };

// export const loader = async () => {
//   // const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/post`)
//   const res = await fetch(`http://localhost:3000/api/post`)
//   const allYonkomaData = await res.json()
//   return json( allYonkomaData );
// };

const Yonkoma = () => {
  const [newsYonkoma, setNewsYonkoma] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getTrendData = async () => {
    setIsLoading(true)
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/trend`)
    const trendData = await res.json()
    console.log(trendData)
    setNewsYonkoma(trendData.val)
    setIsLoading(false)
  }

  // console.log(hoge)
  useEffect(() => {
    getTrendData()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <Header />
      <div className="container pt-[70px] pb-[120px]">
        {/* heading */}
        <div className="w-max mb-12">
          <p className="text">・一覧</p>
          <div className="w-full h-[4px] bg-[#ffb400]"></div>
          <h2 className="text-4xl font-bold">全ての4コマ漫画</h2>
        </div>

        <div className="flex gap-8 flex-wrap w-10/12 mx-auto justify-center">
        {newsYonkoma.map((new_manga:any, i:number) => (
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
              <Link className="p-1 pt-0" to={`/yonkoma/${new_manga.postId}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Avatar className="w-[34px] h-[34px]">
                    <AvatarImage src={new_manga.author.userPhotoURL} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="mb-1 ml-1">{new_manga.author.userName}</p>
                </div>
                {/* 漫画ページ */}
                <div className="w-auto h-max border-black border-[1px] border-b-0 p-4 bg-gradient-to-b from-slate-50 via-transparent to-transparent" style={{ borderImage: "linear-gradient(to bottom, black, transparent) 1" }}>
                  <div className="w-max mx-auto">
                    <p className="text-center mb-2 relative z-10 border-black border-[1px]">
                      {new_manga.title}
                    </p>
                    <div className="mx-auto w-max relative z-10">
                      <img src={new_manga.content[0].imageUrl} className="mb-2 w-[200px] h-[130px] object-cover border-[1px] border-black bg-white" />
                      <div key={i} className="mb-4 relative">
                        <img src={new_manga.content[1].imageUrl} className="mb-2 w-[200px] h-[130px] object-cover  border-[1px] border-black bg-white" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* いいね数 */}
                <div className="flex gap-4 p-2 items-center">
                  <div className="text-[24px] text-red-500">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <p className="h-[24px] flex items-center">{new_manga.likes}</p>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </div>


    </div>
  )
}

export default Yonkoma