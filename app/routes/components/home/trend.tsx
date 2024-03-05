import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "@remix-run/react";

const Trend = () => {
  const trendsYonkoma = Array(10).fill(
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

  return (
    <div className="container mt-12">
      {/*  heading */}
      <div className="w-max mb-12">
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

          {trendsYonkoma.map((trend, i) => (
            <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/4">
              <Link className="p-1" to="/">
                <p className="mb-1 ml-1">{trendsYonkoma[i].author}</p>
                {/* 漫画ページ */}
                <div className="w-auto h-max border-black border-[1px] border-b-0 py-4" style={{ borderImage: "linear-gradient(to bottom, black, transparent) 1" }}>
                  <div className="w-max mx-auto">
                    <p className="text-center mb-2 relative z-10 border-black border-[1px]">
                      {trendsYonkoma[i].title}
                    </p>
                    <div className="mx-auto w-max relative z-10">
                      <img src={trendsYonkoma[i].panels[0]} className="mb-2" />
                      <div key={i} className="mb-4 relative">
                        <img src={trend.panels[0]} className="mb-2 w-full h-auto" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* いいね数 */}
                <div className="flex gap-4 ml-[40px]">
                  <div className="w-[30px] h-[30px] border-2"></div>
                  <p className="h-[30px] flex items-center">{trendsYonkoma[i].likes}</p>
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