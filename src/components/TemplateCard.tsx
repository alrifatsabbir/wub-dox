import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LucideIcon } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  titleKey: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
  delay?: number;
}

const TemplateCard = ({ title, titleKey, description, icon: Icon, color, onClick, delay = 0 }: TemplateCardProps) => {
  const { t, i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden h-full min-h-[180px] flex flex-col">
        {/* Background gradient on hover */}
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${color}`}
        />
        
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className={`text-xl font-display font-semibold text-foreground mb-2 ${isBengali ? 'font-bengali' : ''}`}>
            {t(titleKey)}
          </h3>
          <p className={`text-sm text-muted-foreground ${isBengali ? 'font-bengali' : ''}`}>
            {description}
          </p>
        </div>
        
        {/* Arrow indicator */}
        <motion.div 
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
