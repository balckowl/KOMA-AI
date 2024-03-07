import { Link } from "@remix-run/react"
import { motion } from "framer-motion"


const CreateBtn = () => {
  return (
    <motion.div className="fixed right-10 bottom-10" whileHover={{ scale: 1.2 }}>

      <Link className="p-1" to="/create">
        <div className="mx-auto w-[50px] h-[50px] rounded-[50%] bg-blue-400 cursor-pointer hover:opacity-90 transition-all shadow-lg">
          <p className="flex justify-center items-center text-4xl text-white">+</p>
        </div>
      </Link>
    </motion.div>

  )
}

export default CreateBtn