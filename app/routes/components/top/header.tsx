import { Button } from "~/components/ui/button"

const Header = () => {
  return (
    <header className="flex items-center h-[80px] w-full bg-red-white">
      <div className="container flex justify-between items-center">
        <div className="flex gap-4 h-[60px]">
          <img src="https://placeholder.pics/svg/60" />
          <h1 className="flex h-full items-center text-4xl font-bold">KOM-4i</h1>
        </div>
        <Button className="bg-[#F6501C] px-4 py-2 border-2 border-[#F6501C] rounded-lg cursor-pointer hover:bg-white hover:text-[#F6501C]">ログイン</Button>


      </div>
    </header>
  )
}

export default Header