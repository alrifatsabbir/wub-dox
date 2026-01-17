import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-20 h-20">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-4 border-primary/20 rounded-full"
            style={{ borderTopColor: "transparent" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner Ring */}
          <motion.div
            className="absolute inset-2 border-4 border-[#d69e2e] rounded-full"
            style={{ borderBottomColor: "transparent" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Center Logo/Icon placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
          </div>
        </div>
        
        {/* Text Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm font-medium tracking-widest text-muted-foreground uppercase"
        >
          Loading WUB DOX...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;