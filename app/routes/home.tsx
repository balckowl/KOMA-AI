import Header from "./components/base/header"
import Trend from "./components/home/trend"
import New from "./components/home/new"
import CreateBtn from "./components/home/createBtn"

const Home = () => {
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