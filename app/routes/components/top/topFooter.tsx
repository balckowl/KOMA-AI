import { Link } from "@remix-run/react"

const TopFooter = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row mb-12 pt-20 border-black border-t-[1px] justify-between">
        <div className="flex flex-col justify-center items-center w-[70%] sm:w-[20%] h-full mx-auto">
          <Link className="p-1" to="/">
            <img src="images/logo/komai_logo.png" alt="logo" className="w-[160px] mb-4" />
            <p className="text-center w-full">KOM-4i</p>
          </Link>
        </div>
        <div className="flex w-[70%] flex-wrap gap-4 md:flex-row justify-around mx-auto mt-2">
          {/* ゆうた */}
          <div>
            <img src="images/top/author/dari.png" alt="logo" className="w-[80px] rounded-[50%] mb-2 mx-auto" />
            <div className="mx-auto w-max">
              <p className="mb-1">ダリ</p>
              <p className="text-sm">-バックエンドエンジニア</p>
              <p className="text-sm">-ITパスポート勉強中</p>
            </div>
          </div>
          {/* くしら */}
          <div>
            <img src="images/top/author/kusirattyo.jpg" alt="logo" className="w-[80px] rounded-[50%] mb-2 mx-auto" />
            <div className="mx-auto w-max">
              <p className="mb-1">子ぱいろっと</p>
              <p className="text-sm">-フロントエンドエンジニア</p>
              <p className="text-sm">-緑コーダー止まり</p>
            </div>
          </div>
          {/* ぽてきち */}
          <div>
            <img src="images/top/author/potekichi.png" alt="logo" className="w-[80px] rounded-[50%] mb-2 mx-auto" />
            <div className="mx-auto w-max">
              <p className="mb-1">tudumi</p>
              <p className="text-sm">-バックエンドエンジニア</p>
              <p className="text-sm">-最近高熱出した</p>
            </div>
          </div>
          {/* そら */}
          <div>
            <img src="images/top/author/sora.png" alt="logo" className="w-[80px] rounded-[50%] mb-2 mx-auto" />
            <div  className="mx-auto w-max">
              <p className="mb-1">Sora</p>
              <p className="text-sm">-1日1食Webデザイナー</p>
              <p className="text-sm">-動画クリエイター</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <small> ©2024 created by 4コマ漫画クリエーターズ</small>
      </div>

    </div>
  )
}

export default TopFooter