import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, BookOpen, FlaskConical, PenTool, ArrowRight, Sparkles } from 'lucide-react';
import TemplateCard from '@/components/TemplateCard';
import BlurText from '@/components/animations/BlurText';
import GradientText from '@/components/animations/GradientText';
import ShinyButton from '@/components/animations/ShinyButton';
import LightRays from '@/components/LightRays';
import { useState, useEffect } from 'react';

const Index = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isBengali = i18n.language === 'bn';
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const templates = [
    {
      title: 'Assignment',
      titleKey: 'assignment',
      description: isBengali ? 'অ্যাসাইনমেন্ট জমা দেওয়ার জন্য পেশাদার কভার পেজ' : 'Professional cover page for assignment submissions',
      icon: FileText,
      color: 'bg-primary',
      type: 'assignment',
    },
    {
      title: 'Forum',
      titleKey: 'forum',
      description: isBengali ? 'ফোরাম আলোচনা এবং প্রেজেন্টেশনের জন্য' : 'For forum discussions and presentations',
      icon: BookOpen,
      color: 'bg-accent',
      type: 'forum',
    },
    {
      title: 'Lab Report',
      titleKey: 'labReport',
      description: isBengali ? 'ল্যাব এক্সপেরিমেন্ট রিপোর্টের জন্য' : 'For lab experiment reports',
      icon: FlaskConical,
      color: 'bg-navy-light',
      type: 'labReport',
    },
    {
      title: 'Homework',
      titleKey: 'homework',
      description: isBengali ? 'সাধারণ হোমওয়ার্ক জমা দেওয়ার জন্য' : 'For homework submissions',
      icon: PenTool,
      color: 'bg-secondary',
      type: 'homework',
    },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden hide-scrollbar">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #030816 40%, #0a192f 100%)",
        }}
      />

    {isDesktop && (
        <div className="absolute inset-0 z-[1] opacity-90 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffd" 
            raysSpeed={3.2}
            lightSpread={0.8}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.5}
            className="w-full h-full"
          />
        </div>
      )}

      <div className="relative z-10">
        <section className="pt-32 pb-20 px-4 min-h-screen">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <div className="sr-only">
                <h1>WUB DOX - {isBengali ? "প্রফেশনাল কভার পেজ জেনারেটর" : "Professional Cover Page Generator"}</h1>
                <p>
                  {isBengali 
                    ? "WUB DOX ব্যবহার করে অ্যাসাইনমেন্ট, ল্যাব রিপোর্ট এবং ফোরামের জন্য দ্রুত কভার পেজ তৈরি করুন। এটি একটি সম্পূর্ণ ফ্রি অনলাইন টুল যা শিক্ষার্থীদের কাজের সুবিধার্থে তৈরি করা হয়েছে।" 
                    : "WUB DOX is a powerful online tool to generate professional cover pages for assignments, lab reports, forums, and homework. Free to use with no registration required."}
                </p>
                <nav className="sr-only">
                  {/* WUB DOX Internal Links */}
                  <a href="/">Home</a>
                  <a href="/templates">All Cover Page Templates</a>
                  <a href="/editor/assignment">Assignment Cover Page Generator</a>
                  <a href="/editor/labReport">University Lab Report Cover Page</a>
                  <a href="/editor/forum">Academic Forum Presentation Cover Page</a>
                  <a href="/editor/homework">Simple Homework Cover Page</a>
                  <a href="/blogs">Blogs about WUB DOX</a>
                  <a href="/contact">Contact Developer</a>
                  <a href="/privacy">Privacy Policy</a>
                  <a href="/terms">Terms of Service</a>   
                  {/* Project & Developer Social Links */}
                  <a href="https://github.com/alrifatsabbir/wub-dox" rel="external noopener noreferrer">View Source on GitHub</a>
                  <a href="https://github.com/alrifatsabbir" rel="external noopener noreferrer">Developer GitHub Profile</a>
                  <a href="https://linkedin.com/in/alrifatsabbir" rel="external noopener noreferrer">LinkedIn Profile</a>
                  <a href="https://facebook.com/alrifatsabbir1" rel="external noopener noreferrer">Facebook Page</a>
                  <a href="https://twitter.com/alrifatsabbir" rel="external noopener noreferrer">Twitter / X Profile</a>
                  <a href="https://instagram.com/alrifatsabbir" rel="external noopener noreferrer">Instagram Profile</a>
                  <a href="https://behance.net/alrifatsabbir" rel="external noopener noreferrer">Behance Portfolio</a>
                  <a href="https://stackoverflow.com/users/24326530/alrifatsabbir" rel="external noopener noreferrer">Stack Overflow Profile</a>
                  <a href="https://dribbble.com/alrifatsabbir" rel="external noopener noreferrer">Dribbble Design Portfolio</a>
                  <a href="https://youtube.com/@alrifatsabbir" rel="external noopener noreferrer">YouTube Channel</a>
                  <a href="https://medium.com/@alrifatsabbir" rel="external noopener noreferrer">Medium Blog</a>
                  <a href="https://dev.to/alrifatsabbir" rel="external noopener noreferrer">DEV Community Profile</a>
                  <a href="https://codepen.io/alrifatsabbir" rel="external noopener noreferrer">CodePen Profile</a>
                  <a href="https://wa.me/+8801688525596" rel="external noopener noreferrer">Whatsapp</a>
                </nav>
                <p className='sr-only'>
                    {/* Garbage Search Optimization - GaSO*/}
                    <p>wubdox</p>
                    <p>wubbox</p>
                    <p>wubdocx</p>
                    <p>wubdocs</p>
                    <p>wub docx</p>
                    <p>wub docs</p>
                    <p>wub doc</p>
                    <p>wubdoc</p>
                    <p>WUB</p>
                    <p>WUBDOX</p>
                    <p>WUBDOCS</p>
                    <p>WUBDOCX</p>
                    <p>WUBBOX</p>
                    <p>WUB DOCS</p>
                    <p>WUB DOCX</p>
                    <p>WUB BOX</p>
                    <p>WUB DOC</p>
                    <p>WORLD UNIVERSITY OF BANGLADESH DOX</p>
                    <p>World University of Bangladesh Dox</p>
                </p>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-primary-foreground text-sm font-medium backdrop-blur-md border border-white/10 mx-auto"
              >
                <Sparkles className="w-4 h-4 text-[#ffd]" />
                <span className={isBengali ? 'text-[#ffd] font-bengali' : 'text-[#ffd]'}>
                  {isBengali ? 'বিনামূল্যে ব্যবহার করুন' : 'Free to use - No signup required'}
                </span>
              </motion.div>

              <div className={`text-5xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight w-full flex flex-col items-center ${isBengali ? 'font-bengali' : ''}`}>
                <div className="w-full flex justify-center">
                  <GradientText colors={["#fbbf24", "#f59e0b", "#d97706", "#fbbf24"]} className="text-center">
                    WUB DOX
                  </GradientText>
                </div>
                <div className="w-full mt-2 sm:mt-0 flex justify-center">
                  <BlurText 
                    text={isBengali ? "প্রফেশনাল কভার পেজ জেনারেটর" : "Professional Cover Page Generator"} 
                    delay={150} 
                    className="justify-center text-center"
                  />
                </div>
              </div>

              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                {t('heroSubtitle')}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center"
              >
                <ShinyButton
                  onClick={() => navigate('/templates')}
                  className={`text-lg px-8 py-4 ${isBengali ? 'font-bengali' : ''}`}
                >
                  <span id="get-started-btn" className="flex items-center gap-2">
                    {t('getStarted')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </ShinyButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 min-h-screen bg-black/20 backdrop-blur-md border-t border-white/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className={`text-3xl md:text-4xl font-display font-bold text-white mb-4 ${isBengali ? 'font-bengali' : ''}`}>
                {t('selectTemplate')}
              </h2>
              <p className="text-slate-400 text-lg">
                {isBengali ? 'আপনার প্রয়োজন অনুযায়ী একটি টেমপ্লেট নির্বাচন করুন' : 'Choose a template that fits your needs'}
              </p>
            </motion.div>

            <div id="template-cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template, index) => (
                <TemplateCard
                  key={template.type}
                  {...template}
                  onClick={() => navigate(`/editor/${template.type}`)}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;