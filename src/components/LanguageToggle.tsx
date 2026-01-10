import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-card hover:shadow-soft transition-all"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        className={`text-sm font-medium transition-colors ${
          i18n.language === 'en' ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        EN
      </motion.span>
      <div className="relative w-10 h-5 bg-muted rounded-full">
        <motion.div
          className="absolute top-0.5 w-4 h-4 bg-primary rounded-full"
          animate={{ left: i18n.language === 'en' ? '2px' : '22px' }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </div>
      <motion.span
        className={`text-sm font-bengali font-medium transition-colors ${
          i18n.language === 'bn' ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        বাং
      </motion.span>
    </motion.button>
  );
};

export default LanguageToggle;
