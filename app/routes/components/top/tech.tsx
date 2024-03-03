const Tech = () => {
  return (
    <div className="container mb-60">
      {/*  heading */}
      <div className="w-max mb-12">
        <p className="text-sm">・技術</p>
        <div className="w-full h-[4px] bg-[#80b701]"></div>
        <h2 className="text-3xl font-bold">TECH</h2>
      </div>

      <div className="flex justify-between relative">
        <div>
          <ul>
            <li>
              <p className="mb-2 lg:text-[18px]">・フロントエンド</p>
              <div className="flex gap-4 mb-8 items-center">

              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・バックエンド</p>
              <div className="flex gap-4 mb-8 items-center">

              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・インフラ</p>
              <div className="flex gap-4 mb-8">

              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・その他ツール</p>
              <div className="flex gap-4 mb-8">

              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Tech