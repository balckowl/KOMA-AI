import { motion } from "framer-motion";

const Genarating = () => {
  return (
    <div className="mx-auto w-max my-12">
      <video width="200" height="100" autoPlay loop muted>
        <source src="/videos/generating.mp4" type="video/mp4" />
      </video>
      <div className="flex mt-4 w-max mx-auto">
        <p className="ml-2 text-lg">Generating</p>
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

export default Genarating