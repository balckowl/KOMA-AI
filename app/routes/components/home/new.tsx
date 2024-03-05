import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "@remix-run/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button";

const New = () => {
  const newsYonkoma = Array(10).fill(
    {
      title: "たいとる",
      author: "kusira",
      authorIcon: "https://placeholder.pics/svg/200x112",
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
      >
        <CarouselContent>

          {newsYonkoma.map((new_manga, i) => (
            <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/4">
              <Link className="p-1" to="/">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar className="w-[34px] h-[34px]">
                    <AvatarImage src={newsYonkoma[i].authorIcon} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="mb-1 ml-1">{newsYonkoma[i].author}</p>
                </div>
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
                <div className="flex gap-4 p-2 items-center">
                  <div className="text-[24px] text-red-500">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <p className="h-[24px] flex items-center">{newsYonkoma[i].likes}</p>
                </div>
              </Link>
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex w-full justify-center mt- mb-20">
        <Link to="/news">
          <Button className="bg-[#e2aa1d] px-4 py-2 border-2 border-[#e2aa1d] rounded-lg cursor-pointer hover:bg-white hover:text-[#e2aa1d]">もっと見る</Button>
        </Link>
      </div>
    </div>

  )
}

export default New