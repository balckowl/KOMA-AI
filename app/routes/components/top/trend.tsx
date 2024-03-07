import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link, json, useLoaderData } from "@remix-run/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { useEffect, useState } from "react";
import Loading from "../base/loading";

const Trend = () => {
  
  const [trendsYonkoma, setTrendsYonkoma] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getTrendData = async() => {
    setIsLoading(true)
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/trend`)
    const trendData = await res.json()
    console.log(trendData)
    setTrendsYonkoma(trendData)
    setIsLoading(false)
  }

  // console.log(hoge)
  useEffect(()=>{
    getTrendData()
  },[])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="container">
      {/*  heading */}
      <div className="w-max mt-20 mb-12">
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
        className="mb-[100px]"
      >
        <CarouselContent>

        {trendsYonkoma.map((trend:any, i:number) => (
            <CarouselItem key={i} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Link className="p-1" to="/">
              <div className="flex items-center gap-2 mb-2">
                  {/* <Avatar className="w-[34px] h-[34px]">
                    <AvatarImage src={trendsYonkoma[i].authorIcon} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar> */}
                  <p className="mb-1 ml-1">{trend.authorId}</p>
                </div>
                {/* 漫画ページ */}
                <div className="w-auto h-max border-black border-[1px] border-b-0 py-4" style={{ borderImage: "linear-gradient(to bottom, black, transparent) 1" }}>
                  <div className="w-max mx-auto">
                    <p className="text-center mb-2 relative z-10 border-black border-[1px]">
                      {trend.title}
                    </p>
                    <div className="mx-auto w-max relative z-10">
                      {/* <p>{trend.contents[0].text}</p> */}
                      {/* <img src={trend.contents[0].imageUrl} className="mb-2" /> */}
                      {/* <div key={i} className="mb-4 relative">
                        <img src={trend.contents[0].imageUrl} className="mb-2 w-full h-auto" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                      </div> */}
                    </div>
                  </div>
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