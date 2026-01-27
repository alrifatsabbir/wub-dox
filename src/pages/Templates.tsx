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
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="sr-only">
        <h1>WUB DOX Templates - {isBengali ? "সবগুলো কভার পেজ টেমপ্লেট" : "All Cover Page Templates"}</h1>
        <p>
          {isBengali 
            ? "আপনার অ্যাসাইনমেন্ট, ল্যাব রিপোর্ট এবং প্রেজেন্টেশনের জন্য সেরা প্রফেশনাল টেমপ্লেট বেছে নিন। WUB DOX আপনাকে দিচ্ছে একদম ফ্রি কভার পেজ জেনারেটর সুবিধা।" 
            : "Explore our collection of professional cover page templates for university assignments, laboratory reports, and academic forums. Fast, free, and easy to use."}
        </p>
                <nav className="sr-only">
                  {/* WUB DOX Internal Links */}
                  <a href="/">Home</a>
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

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className={`text-3xl md:text-4xl font-display font-bold text-foreground mb-4 ${isBengali ? 'font-bengali' : ''}`}>
              {t('selectTemplate')}
            </div>
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