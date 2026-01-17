import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Home, Github, Linkedin, HelpCircle, Phone, Menu, X, FilePen} from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Button } from './ui/button';
// এখানে functions গুলো ইমপোর্ট করা হয়েছে
import { useTour, getHomeTourSteps, getEditorTourSteps } from '@/hooks/useTour';
import logo from '/wub-dox.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isBengali = i18n.language === 'bn';
  
  const isEditorPage = location.pathname.startsWith('/editor');

  // পরিবর্তন: সরাসরি ভ্যারিয়েবলের বদলে ফাংশন কল করা হয়েছে
  const tourSteps = isEditorPage ? getEditorTourSteps() : getHomeTourSteps();
  const { startTour } = useTour({ steps: tourSteps });

  const navItems = [
    { path: '/', label: t('home'), icon: Home, id: 'home-link' },
    { path: '/templates', label: t('templates'), icon: FileText, id: 'templates-link' },
    { path: '/contact', label: t('Contact'), icon: Phone, id: 'contact-link' },
    { path: '/blogs', label: t('blogs'), icon: FilePen, id: 'blogs-link'}
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" id="logo">
            <div className="w-20 sm:w-24 h-12 flex items-center justify-center">
              <img src={logo} alt="wub-dox" className="object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  id={item.id}
                  className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${
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

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Social Links - Desktop Only */}
            <div id="social-links" className="hidden lg:flex items-center gap-0.5">
              <a href="https://github.com/alrifatsabbir" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors"><Github className="w-4 h-4" /></a>
              <a href="https://linkedin.com/in/alrifatsabbir" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>

            {/* Help Button - ট্যুর স্টার্ট করার বাটন */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={startTour} 
              className="text-muted-foreground hover:text-foreground p-2 h-9 w-9" 
              title={isBengali ? 'সাহায্য ট্যুর' : 'Help Tour'}
            >
              <HelpCircle className="w-4 h-4" />
            </Button>

            <div id="language-toggle">
              <LanguageToggle />
            </div>

            {/* Mobile Menu Trigger */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 h-9 w-9"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay & Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[51] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-background border-l border-border z-[52] md:hidden p-6 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-lg">Menu</span>
                  <Button variant="ghost" size="sm" onClick={toggleMenu}><X className="w-5 h-5" /></Button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={toggleMenu}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          isActive ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'hover:bg-muted text-muted-foreground'
                        } ${isBengali ? 'font-bengali' : ''}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-auto pt-6 border-t border-border flex justify-center gap-4">
                    <a href="https://github.com/alrifatsabbir" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full text-muted-foreground"><Github className="w-5 h-5" /></a>
                    <a href="https://linkedin.com/in/alrifatsabbir" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full text-muted-foreground"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;