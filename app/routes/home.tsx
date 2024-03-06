import Header from "./components/base/header"
import Trend from "./components/home/trend"
import New from "./components/home/new"
import CreateBtn from "./components/home/createBtn"
import { useAuth, useUser } from "@clerk/remix"
import { json } from "react-router"
import { useEffect, useState } from "react"
import Loading from "./components/base/loading"

const Home = () => {

  const { userId } = useAuth()
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const userCheck = async () => {

    setIsLoading(true)

    // const res = await fetch("http://localhost:3000/api/user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     userId: userId,
    //     userName: user?.fullName,
    //     userPhoto: user?.imageUrl
    //   })
    // })

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return json({})
  }

  useEffect(() => {
    userCheck()
  }, [])

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