import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, BookOpen, FlaskConical, PenTool, FileSearchIcon } from 'lucide-react';
import Header from '@/components/Header';
import TemplateCard from '@/components/TemplateCard';

const Templates = () => {
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
    // {
    //   title: 'Index',
    //   titleKey: 'index',
    //   description: isBengali ? 'কয়েক মিনিটের মধ্যে যেকোনো ইনডেক্স তৈরি করুন।' : 'Create any index in minutes.',
    //   icon: FileSearchIcon,
    //   color: 'bg-secondary',
    //   type: 'homework',
    // },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className={`text-3xl md:text-4xl font-display font-bold text-foreground mb-4 ${isBengali ? 'font-bengali' : ''}`}>
              {t('selectTemplate')}
            </h1>
            <p className={`text-muted-foreground ${isBengali ? 'font-bengali' : ''}`}>
              {isBengali ? 'আপনার প্রয়োজন অনুযায়ী একটি টেমপ্লেট নির্বাচন করুন' : 'Choose a template that fits your needs'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto hide-scrollbar">
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
      </main>
    </div>
  );
};

export default Templates;
