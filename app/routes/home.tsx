import Header from "./components/base/header"
import Trend from "./components/home/trend"
import New from "./components/home/new"
import Works from "./components/home/works"
const Home = () => {
  return (
    <div className="relative">
      <Header />
      <Trend />
      <New />
      <Works />

      {/* footer */}
      <div className="text-center">
        <small> ©2024 created by よんこまくりえいたーず</small>
      </div>
    </div>
  )
}

export default Home