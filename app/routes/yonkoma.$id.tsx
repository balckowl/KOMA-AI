import { useState } from "react"
import Header from "./components/base/header";
import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
const YonkomaId = () => {
  const [author] = useState<string>("kusira");
  const [title] = useState<string>("ちぴちぴ");
  const [likes, setLikes] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);
  const [yonkoma, setYonkoma] = useState([
    { panel: "おはよう", image: "/images/create/no-image.png" },
    { panel: "こんにちは", image: "/images/create/no-image.png" },
    { panel: "こんばんは", image: "/images/create/no-image.png" },
    { panel: "さよなら", image: "/images/create/no-image.png" },
  ]);

  const clickLike = () => {
    console.log(isLike)
    setLikes((prev) => prev + (isLike ? -1 : 1));
    setIsLike(!isLike);
  }

  return (
    <div className="relative h-[100vh]">
      <Header />
      <div className="container">
        <div className="mt-20 mb-10 w-max mx-auto">
          <p className="mb-1 ml-1">{author}</p>
          <div className="border-black border-[2px] w-max p-[50px] h-[500px] overflow-y-scroll mb-4">

            <p className="border-black border-[2px] p-5 mb-5 text-center text-xl font-bold">{title}</p>
            {yonkoma.map((koma: any, index: number) => (
              <div>
                <div className="p-3 border-black border-[2px] mb-5" key={index}>
                  <div className="flex justify-between items-center mb-3 gap-3">
                    <p>{koma.panel}</p>
                  </div>
                  <img src={koma.image} alt="" className="w-[500px] h-[300px] object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* いいねボタン */}
          <div
            className="flex gap-4 ml-[40px] cursor-pointer"
            onClick={() => clickLike()}
          >
            <div className={`w-[30px] h-[30px] border-2 ${isLike && "bg-pink-500"}`}></div>
            <p className="h-[30px] flex items-center select-none">{likes}</p>
          </div>
        </div>
        <div className="w-max mx-auto">
          <Link to="/yonkoma">
            <Button 
              className="bg-[#F6511D] px-4 py-2 border-2 border-[#F6511D] rounded-lg cursor-pointer hover:bg-white hover:text-[#F6511D]"
            >一覧に戻る</Button>
          </Link>
        </div>
      </div>


      {/* footer */}
      <div className="absolute bottom-0 w-full text-center">
        <small> ©2024 created by よんこまくりえいたーず</small>
      </div>
    </div>
  )
}

export default YonkomaId