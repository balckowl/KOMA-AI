import { Link } from "@remix-run/react"


const Works = () => {
  return (
    <div className="fixed right-10 bottom-10">
      {/* make your works */}
      <Link className="p-1" to="/create">
        <div className="mx-auto w-[50px] h-[50px] rounded-[50%] bg-slate-400 cursor-pointer hover:opacity-90 transition-all shadow-lg">
          <p className="flex justify-center items-center text-4xl text-white">+</p>
        </div>
      </Link>
    </div>

  )
}

export default Works