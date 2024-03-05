import Header from "./components/base/header"

const Yonkoma = () => {
  return (
    <div>
      <Header />
      <div className="container mt-12">
        {/* heading */}
        <div className="w-max mb-12">
          <p className="text">・一覧</p>
          <div className="w-full h-[4px] bg-[#00a5ec]"></div>
          <h2 className="text-4xl font-bold">4コマ漫画</h2>
        </div>
      </div>


    </div>
  )
}

export default Yonkoma