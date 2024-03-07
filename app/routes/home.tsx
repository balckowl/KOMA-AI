import Header from "./components/base/header"
import Trend from "./components/home/trend"
import New from "./components/home/new"
import CreateBtn from "./components/home/createBtn"
import { useAuth, useUser } from "@clerk/remix"
import { json } from "react-router"
import { useEffect, useState } from "react"
import Loading from "./components/base/loading"
import { MetaFunction } from "@remix-run/node"

// export const meta: MetaFunction = () => {
//   return [
//     { title: "KOM-4i" },
//     { name: "description", content: "4コマ漫画をAIで作れるサイト" },
//     { property: "og:url", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/home`},
//     { property: "og:title", content: "ホーム | KOM-4i"},
//     { property: "og:image", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/images/ogp/ogp.png`},
//     { property: "og:site_name", content: "ホーム"},
//   ]
// };

const Home = () => {

  const { userId } = useAuth()
  const { user, isLoaded } = useUser()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const userCheck = async () => {

    setIsLoading(true)

    const res = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        userName: user?.fullName,
        userPhoto: user?.imageUrl
      })
    })

    const data = await res.json()
    setIsLoading(false)
  }

  useEffect(() => {
    if(userId) {
      userCheck()
    }
  }, [userId])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="relative">
      <Header />
      <Trend />
      <New />
      <CreateBtn />

      {/* footer */}
      <div className="text-center">
        <small> ©2024 created by よんこまくりえいたーず</small>
      </div>
    </div>
  )
}

export default Home