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
import { useEffect, useState } from "react";
import Loading from "../base/loading";

export const loader = async () => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/trend`)
  const trendData = await res.json()
  return json(trendData);
};

const Trend = () => {

  const [trendsYonkoma, setTrendsYonkoma] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getTrendData = async () => {
    setIsLoading(true)
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/trend`)
    const trendData = await res.json()
    console.log(trendData)
    setTrendsYonkoma(trendData.val)
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
    <div className="container py-[50px]">
      {/*  heading */}
      <div className="w-max">
        <p>・人気の作品</p>
        <div className="w-full h-[4px] bg-[#f64912]"></div>
        <h2 className="text-4xl font-bold">TREND</h2>
      </div>


      {/* カルーセル */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="mb-12"
      >
        <CarouselContent>

          {trendsYonkoma.map((trend: any, i:number) => (
            <CarouselItem key={i} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Link className="p-1" to={`/yonkoma/${trend.postId}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Avatar className="w-[34px] h-[34px]">
                    <AvatarImage src={trend.author.userPhotoURL} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="mb-1 ml-1">{trend.author.userName}</p>
                </div>
                {/* 漫画ページ */}
                <div className="w-auto h-max border-black border-[2px] border-b-0 py-4 bg-gradient-to-b from-slate-50 via-transparent to-transparent" style={{ borderImage: "linear-gradient(to bottom, black, transparent) 1" }}>
                  <div className="w-max mx-auto">
                    <p className="text-center mb-2 relative z-10 border-black border-[1px] bg-white">
                      {trend.title}
                    </p>
                    <div className="mx-auto w-max relative z-10">
                      <img src={trend.content[0].imageUrl} className="mb-2 w-[200px] h-[130px] object-cover border-[1px] border-black bg-white" />
                      <div className="mb-4 relative">
                        <img src={trend.content[1].imageUrl} className="mb-2 w-[200px] h-[130px] object-cover border-[1px] border-black bg-white" />
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
                  <p className="h-[24px] flex items-center">{trend.likes}</p>
                </div> 

              </Link>
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

  )
}

export default Trend