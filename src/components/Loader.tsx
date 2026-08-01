import { motion } from "framer-motion";

type LoaderProps = {
  isVisible?: boolean;
};

function Loader({ isVisible = true }: LoaderProps) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        My Portfolio
      </motion.h1>
    </motion.div>
  );
}

export default Loader;