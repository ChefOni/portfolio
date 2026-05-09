import { motion } from 'framer-motion'

const InfiniteScroller = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        whileHover={{ animationPlayState: "paused" }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear"
          }
        }}
      >
        <span className="text-6xl md:text-[10rem] font-bold text-white/10 mx-4 md:mx-8">tomiwa oni</span>
        <span className="text-6xl md:text-[10rem] font-bold text-white/10 mx-4 md:mx-8">tomiwa oni</span>
        <span className="text-6xl md:text-[10rem] font-bold text-white/10 mx-4 md:mx-8">tomiwa oni</span>
        <span className="text-6xl md:text-[10rem] font-bold text-white/10 mx-4 md:mx-8">tomiwa oni</span>
        <span className="text-6xl md:text-[10rem] font-bold text-white/10 mx-4 md:mx-8">tomiwa oni</span>
        <span className="text-6xl md:text-[10rem] font-bold text-white/10 mx-4 md:mx-8">tomiwa oni</span>
        <span className="text-6xl md:text-[10rem] font-bold text-white/10 mx-4 md:mx-8">tomiwa oni</span>
        <span className="text-6xl md:text-[10rem] font-bold text-white/10 mx-4 md:mx-8">tomiwa oni</span>
        <span className="text-6xl md:text-[10rem] font-bold text-white/10 mx-4 md:mx-8">tomiwa oni</span>
      </motion.div>
    </div>
  )
}

export default InfiniteScroller
