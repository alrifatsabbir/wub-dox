import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ShinyButton = ({ children, className, onClick }: ShinyButtonProps) => {
  return (
    <motion.button
      className={cn(
        "relative overflow-hidden rounded-xl px-8 py-4 font-semibold",
        "bg-gradient-to-r from-primary via-primary to-accent",
        "text-primary-foreground shadow-lg",
        "hover:shadow-xl transition-shadow",
        className
      )}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 2,
          ease: 'linear',
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default ShinyButton;
