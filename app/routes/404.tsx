import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"

export const meta: MetaFunction = ({ params, location, data }) => {
  return [
    { title: "KOM-4i" },
    { name: "description", content: "4コマ漫画をAIで作れるサイト" },
    { property: "og:url", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/404`},
    { property: "og:title", content: "404 page not found | KOM-4i"},
    { property: "og:image", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/images/top/tech/bun.svg`},
    { property: "og:site_name", content: "404 page not found"},
  ]
};


const NotFound = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 translate-y-[100px]">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center">

          <Link to="/" className="mb-1">
            <div className="flex items-center gap-4 h-[60px]">
              <img src="images/logo/komai_logo.png" alt="logo" className="w-auto h-[50px] object-fill" />
              <h1 className="flex h-full items-center text-4xl font-bold">KOM-4i</h1>
            </div>
          </Link>


          <p className="mb-4 text-sm font-semibold uppercase text-[#f6511d] md:text-base">That’s a 404</p>
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">Page not found</h1>

          <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">お探しのページは存在しません</p>
          <Link to="/">
            <Button className="inline-block rounded-lg bg-gray-200 px-8 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
              ホームに戻る
            </Button >
          </Link>
        </div>
      </div>

      {/* footer */}
      <div className="absolute bottom-0 w-full text-center">
        <small> ©2024 created by よんこまくりえいたーず</small>
      </div>
    </div>
  )
}

export default NotFound
