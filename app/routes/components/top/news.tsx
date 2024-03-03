
const News = () => {

  const newsDataList = [
    {createdAt: "2020.1.1", content: "ちぴちぴちゃぱちゃぱ"},
    {createdAt: "2020.1.1", content: "トウキョウシャンディrundev"},
    {createdAt: "2020.1.1", content: "karakuri-web"},
  ]

  return (
    <div className="container">
      {/*  heading */}
      <div className="w-max mb-12">
        <p className="text-sm">・新着情報</p>
        <div className="w-full h-[4px] bg-[#00a5ec]"></div>
        <h2 className="text-3xl font-bold">NEWS</h2>
      </div>

      <div className="flex w-10/12 mx-auto flex-col mb-20 lg:mb-32">

        {newsDataList.map((newsData: any, index: number) => (
          <div className="border-black border-b-[1px] w-full flex justify-between pb-2 mb-10 lg:pb-4 lg:mb-16" key={index}>
            <p className="w-3/12 lg:text-[18px]">{newsData.createdAt}</p>
            <p className="w-9/12 max-w-[350px] lg:text-[18px]">{newsData.content}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default News