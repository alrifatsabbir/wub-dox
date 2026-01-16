import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, BookOpen, FlaskConical, PenTool, ArrowRight, Sparkles } from 'lucide-react';
import TemplateCard from '@/components/TemplateCard';
import BlurText from '@/components/animations/BlurText';
import GradientText from '@/components/animations/GradientText';
import ShinyButton from '@/components/animations/ShinyButton';
import LightRays from '@/components/LightRays';

const Index = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isBengali = i18n.language === 'bn';

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
      description: isBengali ? 'সাধারণ হোমওয়ার্ক জমা দেওয়ার জন্য' : 'For general homework submissions',
      icon: PenTool,
      color: 'bg-secondary',
      type: 'homework',
    },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden hide-scrollbar">
      {/* Dynamic Background Layer (Navy/Gold Void) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #030816 40%, #0a192f 100%)",
        }}
      />

      {/* LightRays Overlay */}
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
      {/* Content Section */}
      <div className="relative z-10">
        <section className="pt-32 pb-20 px-4 min-h-screen">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-primary-foreground text-sm font-medium backdrop-blur-md border border-white/10"
              >
                <Sparkles className="w-4 h-4 text-[#ffd]" />
                <span className={isBengali ? 'text-[#ffd] font-bengali' : 'text-[#ffd]'}>
                  {isBengali ? 'বিনামূল্যে ব্যবহার করুন' : 'Free to use - No signup required'}
                </span>
              </motion.div>

              <h1 className={`text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight ${isBengali ? 'font-bengali' : ''}`}>
                <span className="block">
                  <GradientText colors={["#fbbf24", "#f59e0b", "#d97706", "#fbbf24"]}>
                    WUB DOX
                  </GradientText>
                  <span className="sm:ml-4">
                    <BlurText text={isBengali ? "কভার পেজ জেনারেটর" : "Cover Page Generator"} delay={150} />
                  </span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                {t('heroSubtitle')}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
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

        {/* Templates Section */}
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