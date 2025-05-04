
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8 w-32 h-32"
      >
        <img 
          src="/lovable-uploads/9136287d-1cf9-42d2-aef8-ac3971f955ad.png" 
          alt="Redline Logo" 
          className="w-full h-full object-contain"
        />
      </motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 4.5 }}
        className="h-1 bg-redline rounded-full"
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-blueline-dark font-medium"
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
