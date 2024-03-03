import { Button } from "~/components/ui/button"


const How = () => {
  return (
    <div className="relative h-[80vw] max-h-[1600px]">
      <div className="absolute left-0 w-[40vw] top-[-60px] max-w-[800px]">
        <img src="https://placeholder.pics/svg/300x600" alt="demo" className="w-full object-cover"/>
      </div>

      <div className="container">
        <div className="ml-[40vw] mt-[100px]">
          {/*  heading */}
          <div className="w-max mb-12">
            <p className="text-sm">使い方</p>
            <div className="w-full h-[4px] bg-[#ffbe20]"></div>
            <h2 className="text-3xl font-bold">HOW TO USE</h2>
          </div>
          <div>
            <ul className="text-xl leading-[40px]">
              <li>1. 使いたい画像を4枚アップロードする</li>
              <li>2. 「生成」ボタンをクリックする</li>
              <li>3. KOM-4iが画像にあった4コマ漫画を作ってくれます</li>
              <li>4. 完成した4コマ漫画を世界中に公 開しよう</li>
            </ul>
            <Button className="bg-[#e2aa1d] px-4 py-2 border-2 border-[#e2aa1d] rounded-lg cursor-pointer hover:bg-white hover:text-[#e2aa1d ]">ログイン</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How