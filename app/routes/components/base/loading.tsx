import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col w-max mx-auto justify-center" aria-label="読み込み中">
      <div className="flex justify-center mt-20 mb-4" aria-label="読み込み中">
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="flex">
        <p className="ml-2">loading</p>
        <motion.div
          animate={{ y: [0, -2, 0, 0] }}
          transition={{ duration: 2.1, times: [0, 0.1, 0.2, 1], ease: "easeInOut", repeat: Infinity }}
        >.</motion.div>
        <motion.div
          animate={{ y: [0, -2, 0, 0] }}
          transition={{ duration: 2.1, delay: 0.7, times: [0, 0.1, 0.2, 1], ease: "easeInOut", repeat: Infinity }}
        >.</motion.div>
        <motion.div
          animate={{ y: [0, -2, 0, 0] }}
          transition={{ duration: 2.1, delay: 1.4, times: [0, 0.1, 0.2, 1], ease: "easeInOut", repeat: Infinity }}
        >.</motion.div>


      </div>
    </div>
  )
}

export default Loading