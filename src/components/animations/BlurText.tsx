import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BlurTextProps {
  text: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  delay?: number;
  stepDuration?: number;
  className?: string;
}

const BlurText = ({
  text,
  animateBy = 'words',
  direction = 'top',
  delay = 100,
  stepDuration = 0.35,
  className = "",
}: BlurTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const items = animateBy === 'words' ? text.split(' ') : text.split('');
  const yOffset = direction === 'top' ? -20 : 20;
  
  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{ 
            opacity: 0, 
            y: yOffset,
            filter: 'blur(10px)'
          }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)'
          } : {}}
          transition={{
            duration: stepDuration,
            delay: index * (delay / 1000),
            ease: 'easeOut'
          }}
          className="inline-block"
        >
          {item}
          {animateBy === 'words' && index < items.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
