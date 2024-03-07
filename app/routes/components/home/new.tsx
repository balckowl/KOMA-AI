import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link, json } from "@remix-run/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";
import Loading from "../base/loading";

export const loader = async () => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/new`)
  const newData = await res.json()
  return json(newData);
};

const New = () => {

  const [newsYonkoma, setTrendsYonkoma] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getTrendData = async () => {
    setIsLoading(true)
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/trend`)
    const newData = await res.json()
    console.log(newData)
    setTrendsYonkoma(newData.val)
    setIsLoading(false)
  }

  // console.log(hoge)
  useEffect(() => {
    getTrendData()
  }, [])

  // if (isLoading) {
  //   return <Loading />
  // }

  return (
    <div className="container pb-[130px]">
      {/*  heading */}
      <div className="w-max">
        <p className="text">・新着作品</p>
        <div className="w-full h-[4px] bg-[#ffbe20]"></div>
        <h2 className="text-4xl font-bold">NEW</h2>
      </div>

      {/* カルーセル */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2654,
          }),
        ]}
      >
        <CarouselContent>

          {newsYonkoma.map((new_manga: any, i: number) => (
            <CarouselItem key={i} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Link className="p-1" to={`/yonkoma/${new_manga.postId}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Avatar className="w-[34px] h-[34px]">
                    <AvatarImage src={new_manga.author.userPhotoURL} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="mb-1 ml-1">{new_manga.author.userName}</p>
                </div>
                {/* 漫画ページ */}
                <div className="w-auto h-max border-black border-[1px] border-b-0 py-4" style={{ borderImage: "linear-gradient(to bottom, black, transparent) 1" }}>
                  <div className="w-max mx-auto">
                    <p className="text-center mb-2 relative z-10 border-black border-[1px]">
                      {new_manga.title}
                    </p>
                    <div className="mx-auto w-max relative z-10">
                      <img src={new_manga.content[0].imageUrl} className="mb-2 w-[200px] h-[130px] object-cover" />
                      <div key={i} className="mb-4 relative">
                        <img src={new_manga.content[1].imageUrl} className="mb-2 w-[200px] h-[130px] object-cover" />
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
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* <div className="flex w-full justify-center mt- mb-20">
        <Link to="/news">
          <Button className="bg-[#e2aa1d] px-4 py-2 border-2 border-[#e2aa1d] rounded-lg cursor-pointer hover:bg-white hover:text-[#e2aa1d]">もっと見る</Button>
        </Link>
      </div> */}
    </div>

  )
}

export default New