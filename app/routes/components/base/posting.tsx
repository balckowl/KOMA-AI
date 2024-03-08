import { motion } from "framer-motion";

const Posting = () => {
  return (
    <div className="flex flex-col w-max mx-auto justify-center" aria-label="読み込み中">

      <video width="200" height="100" autoPlay loop muted>
        <source src="/videos/posting.mp4" type="video/mp4" />
      </video>
      <div className="flex w-max mx-auto">
        <p className="ml-2">Posting</p>
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

export default Posting