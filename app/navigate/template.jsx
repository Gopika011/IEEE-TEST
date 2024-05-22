
'use client'
import { motion } from "framer-motion"

export default function Template({ children }) {
    return (
    <motion.div layout
    initial={{y:-200}}
    animate={{y:0}}
    transition={{ease: 'easeIn', duration: 0.1}}
    >
        {children}
    </motion.div>)
  }
  