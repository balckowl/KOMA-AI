import { useUser } from "@clerk/remix";
import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"

const Hero = () => {
  const { isLoaded } = useUser();
  return (
    <div>
      <div className="relative w-full h-[calc(100vh-70px)] mb-12">
        <div className="absolute bg-black w-full h-full opacity-40 z-10"></div>
        <div className="absolute w-full h-full z-10">
          <div className="flex w-[60vw] max-w-[800px] mx-auto mt-[120px] flex-col">
            <h2 className="text-white font-bold text-[30px] mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-max px-4 py-2">あなただけの4コマ漫画を、AIと共に。</h2>
            <p className="text-white mb-8">独自の4コマ漫画を創り出す冒険に、あなたも参加しませんか？起承転結、それぞれの瞬間を選び、AIの力を借りて物語を紡ぎ出します。ここでは、選んだ画像が言葉に変わり、一つの物語が生まれます。画像を選ぶことから始まる創作の旅で、あなただけのオリジナル漫画を作りましょう。</p>
            <div className="w-full flex">
              <Link to={isLoaded ? "/home" : "/sign-in" }>
                <Button className="bg-transparent border-2 w-max hover:bg-transparent hover:opacity-80">はじめる</Button>
              </Link>
            </div>
          </div>
        </div>
        <img src="/images/top/hero.png" alt="hero" className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default Hero