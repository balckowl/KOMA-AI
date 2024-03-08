import { useEffect, useState } from "react"
import { useParams } from "@remix-run/react"
import Header from "./components/base/header";
import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faRotateLeft, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { json } from "@remix-run/node";
import { motion } from 'framer-motion'
import Loading from "./components/base/loading";

export const loader = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/post/${id}`)
  const yonkomaData = await res.json()
  return json(yonkomaData);
};

const YonkomaId = () => {

  const [likes, setLikes] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [yonkoma, setYonkoma] = useState<any>([])

  const { id } = useParams()
  console.log(id)

  // いいねを押したときの処理
  const clickLike = () => {
    setLikes((prev) => prev + (isLike ? -1 : 1));
    setIsLike(!isLike);
  }

  const getYonkomaData = async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/post/${id}`)
    const yonkomaData = await res.json()
    setYonkoma(yonkomaData.val)
    setLikes(yonkomaData.val.likes)
    console.log(yonkomaData.val)
    setIsLoading(false)
  }

  // console.log(hoge)
  useEffect(() => {
    getYonkomaData()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="relative min-h-[100vh] h-max">
      <Header />
      <div className="container">
        <div className="mt-10 mb-10 max-w-[800px] mx-auto">
          <div className="flex justify-between max-w-[800px]">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-[42px] h-[42px]">
                <AvatarImage src={yonkoma.author.userPhotoURL} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="mb-1 ml-1 text-xl">{yonkoma.author.userName}</p>
            </div>
            <div>
              <Link to="/yonkoma">
                <Button
                  className="bg-[#F6511D] px-4 border-2 border-[#F6511D] rounded-lg cursor-pointer hover:bg-white hover:text-[#F6511D]"
                ><FontAwesomeIcon icon={faRotateLeft} className="mr-2"/>一覧に戻る</Button>
              </Link>
            </div>
          </div>
          <div className="border-black border-[2px] w-full p-6 md:p-12 h-[400px] md:h-[500px]  overflow-y-scroll mb-4 bg-slate-50">

            <p className="border-black border-[1px] p-3 md:p-6 mb-5 text-center text-2xl lg:text-3xl font-bold bg-white">{yonkoma.title}</p>
            {yonkoma.content.map((koma: any, index: number) => (
              <div>
                <div className="p-3 border-black border-[1px] mb-5 bg-white" key={index}>
                  <div className="mb-3 gap-3">
                    <div className="flex flex-wrap">
                      {koma.text.split("").map((word: any, jndex: number) => (
                        <motion.div
                          viewport={{ once: true }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: (index==0 ? 0.5 : 0) + jndex * 0.005 }}
                          key={jndex}
                          className="text-xl lg:text-2xl"
                        >{word}</motion.div>
                      ))}
                    </div>
                  </div>
                  <img 
                    src={koma.imageUrl}
                    className="aspect-[16/9] w-[100%] object-cover"
                  />
                </div>
              </div>
            ))}
            
          </div>

          {/* いいねボタン */}
          <div
            className="flex gap-4 cursor-pointer items-center"
            onClick={() => clickLike()}
          >
            <div className="text-[32px]">
              {isLike ?
                <FontAwesomeIcon icon={solidHeart} className="text-red-500" />
                :
                <FontAwesomeIcon icon={regularHeart} />
              }
            </div>
            <p className="h-[32px] flex items-center select-none text-xl">{likes}</p>
          </div>
        </div>
      </div>


      {/* footer */}
      <div className="absolute bottom-0 w-full text-center">
        <small> ©2024 created by 4コマ漫画クリエーターズ</small>
      </div>
    </div>
  )
}

export default YonkomaId