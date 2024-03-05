import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "@remix-run/react";

const New = () => {
  const newsYonkoma = Array(10).fill(
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
    <div className="container">
      {/*  heading */}
      <div className="w-max mb-12">
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
        className="mb-20"
      >
        <CarouselContent>

          {newsYonkoma.map((new_manga, i) => (
            <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/4">
              <Link className="p-1" to="/">
                <p className="mb-1 ml-1">{newsYonkoma[i].author}</p>
                {/* 漫画ページ */}
                <div className="w-auto h-max border-black border-[1px] border-b-0 py-4" style={{ borderImage: "linear-gradient(to bottom, black, transparent) 1" }}>
                  <div className="w-max mx-auto">
                    <p className="text-center mb-2 relative z-10 border-black border-[1px]">
                      {newsYonkoma[i].title}
                    </p>
                    <div className="mx-auto w-max relative z-10">
                      <img src={newsYonkoma[i].panels[0]} className="mb-2" />
                      <div key={i} className="mb-4 relative">
                        <img src={new_manga.panels[0]} className="mb-2 w-full h-auto" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* いいね数 */}
                <div className="flex gap-4 ml-[40px]">
                  <div className="w-[30px] h-[30px] border-2"></div>
                  <p className="h-[30px] flex items-center">{newsYonkoma[i].likes}</p>
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

export default New