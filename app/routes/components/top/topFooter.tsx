
const TopFooter = () => {
  return (
    <div className="container">
      <div className="flex mb-12 border-black border-t-[1px] pt-10 justify-around">
        <div className="w-[20%] flex flex-col items-center pt-10">
          <img src="https://placeholder.pics/svg/100" alt="logo" className="w-full"/>
          <p className="text-center w-full">KOM-4i</p>
        </div>
        <div className="flex w-[70%] justify-around pt-10">
          {/* ゆうた */}
          <div>
            <img src="https://placeholder.pics/svg/100" alt="logo" className="mb-2"/>
            <div className="text-sm">
              <p className="mb-1">ダリ</p>
              <p>-バックエンドエンジニア</p>
              <p>-ITパスポート勉強中</p>
            </div>
          </div>
          {/* くしら */}
          <div>
            <img src="https://placeholder.pics/svg/100" alt="logo" className="mb-2"/>
            <div className="text-sm">
              <p className="mb-1">子ぱいろっと</p>
              <p>-フロントエンドエンジニア</p>
              <p>-緑コーダー止まり</p>
            </div>
          </div>
          {/* ぽてきち */}
          <div>
            <img src="https://placeholder.pics/svg/100" alt="logo" className="mb-2"/>
            <div className="text-sm">
              <p className="mb-1">つづみ</p>
              <p>-バックエンドエンジニア</p>
              <p>-最近高熱出した</p>
            </div>
          </div>
          {/* そら */}
          <div>
            <img src="https://placeholder.pics/svg/100" alt="logo" className="mb-2"/>
            <div className="text-sm">
              <p className="mb-1">Sora</p>
              <p>-Webデザイナー</p>
              <p>-1日1食</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <small> ©2024 created by よんこまくりえいたーず</small>
      </div>

    </div>
  )
}

export default TopFooter