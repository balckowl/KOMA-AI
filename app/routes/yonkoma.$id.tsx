import { useState } from "react"
import { useParams } from "@remix-run/react"
import Header from "./components/base/header";
import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { json } from "@remix-run/node";


export const loader = async ({params}:{params:{id:string}}) => {
  const {id} = params;
  const res = await fetch(`http://localhost:3000/api/post/${id}`)
  const yonkomaData = await res.json()
  return json( yonkomaData );
};

const YonkomaId = () => {
  const [author] = useState<string>("kusira");
  const [authorIcon] = useState<string>("https://placeholder.pics/svg/300");
  const [title] = useState<string>("ちぴちぴ");
  const [likes, setLikes] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);

  const [yonkoma, setYonkoma] = useState([
    { panel: "おはよう", image: "/images/create/no-image.png" },
    { panel: "こんにちは", image: "/images/create/no-image.png" },
    { panel: "こんばんは", image: "/images/create/no-image.png" },
    { panel: "さよなら", image: "/images/create/no-image.png" },
  ]);

  const { id } = useParams()
  console.log(id)
  const clickLike = () => {
    setLikes((prev) => prev + (isLike ? -1 : 1));
    setIsLike(!isLike);
  }

  return (
    <div className="relative h-[100vh]">
      <Header />
      <div className="container">
        <div className="mt-20 mb-10 w-max mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="w-[42px] h-[42px]">
              <AvatarImage src={authorIcon} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="mb-1 ml-1 text-xl">{author}</p>
          </div>
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
            className="flex gap-4 cursor-pointer items-center"
            onClick={() => clickLike()}
          >
            <div className="text-[32px]">
              {isLike ?
                <FontAwesomeIcon icon={solidHeart} className="text-red-500" />
                :
                <FontAwesomeIcon icon={regularHeart}/>
              }
            </div>
            <p className="h-[32px] flex items-center select-none text-xl">{likes}</p>
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