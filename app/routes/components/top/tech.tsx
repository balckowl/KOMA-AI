const Tech = () => {
  return (
    <div className="container mb-60">
      {/*  heading */}
      <div className="w-max mb-12">
        <p className="text">・技術</p>
        <div className="w-full h-[4px] bg-[#80b701]"></div>
        <h2 className="text-4xl font-bold">TECH</h2>
      </div>

      <div className="flex justify-between relative">
        <div>
          <ul>
            <li>
              <p className="mb-2 lg:text-[18px]">・フロントエンド</p>
              <div className="flex gap-4 flex-wrap items-center mb-8">
                <img src="/images/top/tech/bun.svg" alt="bun" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/remix-icon.svg" alt="remix" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/vitejs.svg" alt="vite" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/tailwindcss-icon.svg" alt="tailwind" className="w-[90px] h-[80px] object-fit" />
                <img src="/images/top/tech/typescript-icon.svg" alt="typescript" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/framer-motion-icon.png" alt="framer-motion" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/shadcn-icon.png" alt="shadcn" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/clerk-icon.png" alt="clerk" className="w-[90px] h-[90px] object-fit" />
                <img src="/images/top/tech/zustand-icon.png" alt="zustand" className="w-[100px] h-[60px] object-fit ml-[-20px]" />
              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・バックエンド</p>
              <div className="flex gap-4 flex-wrap items-center mb-8">
                <img src="/images/top/tech/bun.svg" alt="bun" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/hono.svg" alt="hono" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/typescript-icon.svg" alt="typescript" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/langchain.png" alt="langchain" className="w-[90px] h-[60px] object-fit" />
                <img src="/images/top/tech/google-gemini.svg" alt="gemini" className="w-[140px] h-[60px] object-fit" />
                <img src="/images/top/tech/firebase.svg" alt="firebase" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/prisma.svg" alt="prisuma" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/supabase-icon.svg" alt="supabase" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/postgresql.svg" alt="postgresql" className="w-[60px] h-[60px] object-fit" />
              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・インフラ</p>
              <div className="flex gap-4 flex-wrap mb-8">
                <img src="/images/top/tech/vercel-icon.svg" alt="fly" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/fly-icon.svg" alt="render" className="w-[60px] h-[60px] object-fit" />

              </div>
            </li>
            <li>
              <p className="mb-2 lg:text-[18px]">・その他ツール</p>
              <div className="flex gap-4 flex-wrap mb-18">
                <img src="/images/top/tech/affinity-designer.png" alt="affinity-designer" className="w-[70px] h-[70px] object-fit" />
                <img src="/images/top/tech/clip-stadio-paint.png" alt="clip-studio-paint" className="w-[70px] h-[70px] object-fit" />
                <img src="/images/top/tech/git-icon.svg" alt="git" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/github-icon.svg" alt="github" className="w-[60px] h-[60px] object-fit" />
                <img src="/images/top/tech/postman-icon.svg" alt="postman" className="w-[60px] h-[60px] object-fit" />

              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Tech