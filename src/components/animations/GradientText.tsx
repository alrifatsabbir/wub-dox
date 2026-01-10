import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

const GradientText = ({
  children,
  className = "",
  colors = ["#fbbf24", "#f59e0b", "#d97706", "#fbbf24"],
  animationSpeed = 3,
}: GradientTextProps) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
  };

  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      style={gradientStyle}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: animationSpeed,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;
