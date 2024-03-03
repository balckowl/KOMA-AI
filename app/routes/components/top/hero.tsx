import { Button } from "~/components/ui/button"


const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-[70vh] mb-12">
        <div className="absolute bg-black w-full h-full opacity-40 z-10"></div>
        <div className="absolute w-full h-full z-10">
          <div className="flex w-[60vw] mx-auto mt-[120px] flex-col">
            <h2 className="text-white font-bold text-2xl mb-4">たいとるたいとるたいとる</h2>
            <p className="text-white mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A aliquid similique, neque velit minima corrupti! Eius consequuntur cumque voluptatibus dignissimos cupiditate sapiente repellendus quis esse sint, facere excepturi officiis dicta.</p>
            <div className="w-full flex justify-end">
              <Button className="bg-transparent border-2 w-max hover:bg-transparent hover:opacity-80">はじめる</Button>
            </div>
          </div>
        </div>
        <img src="/images/top/hero.png" alt="hero" className="object-cover w-full h-full"/>
      </div>
    </div>
  )
}

export default Hero