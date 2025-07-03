// src/components/FadeWrapper.js
import { motion } from "framer-motion";

const FadeWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

export default FadeWrapper;
