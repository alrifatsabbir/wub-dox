import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, Home, Github, Linkedin, HelpCircle, Phone } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Button } from './ui/button';
import { useTour, homeTourSteps, editorTourSteps } from '@/hooks/useTour';
import logo from '/wub-dox.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isBengali = i18n.language === 'bn';
  
  const isEditorPage = location.pathname.startsWith('/editor');
  const tourSteps = isEditorPage ? editorTourSteps : homeTourSteps;
  const { startTour } = useTour({ steps: tourSteps });

  const navItems = [
    { path: '/', label: t('home'), icon: Home, id: 'home-link' },
    { path: '/templates', label: t('templates'), icon: FileText, id: 'templates-link' },
    { path: '/contact', label:t('Contact'), icon: Phone, id: 'contact-link'},
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" id="logo">
          <div className="w-24 h-16 rounded-lg flex items-center justify-center">
            <img src={logo} alt="wub-dox" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                id={item.id}
                className={`relative flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                } ${isBengali ? 'font-bengali' : ''}`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          {/* Social Links */}
          <div id="social-links" className="hidden sm:flex items-center gap-0.5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Help / Tour Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={startTour}
            className="text-muted-foreground hover:text-foreground p-1.5 h-auto"
            title={isBengali ? 'সাহায্য ট্যুর' : 'Help Tour'}
          >
            <HelpCircle className="w-4 h-4" />
          </Button>

          <div id="language-toggle">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
