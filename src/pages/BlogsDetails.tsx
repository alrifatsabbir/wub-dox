import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPostsData } from '@/data/blogData';

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const post = blogPostsData[id as keyof typeof blogPostsData];
  const content = isBengali ? post?.bn : post?.en;

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold">Blog not found!</h2>
        <button onClick={() => navigate('/blogs')} className="mt-4 text-[#d69e2e] underline">
          {isBengali ? 'ব্লগে ফিরে যান' : 'Back to Blogs'}
        </button>
      </div>
    );
  }

  return (
    <div className={`container mx-auto px-4 py-24 max-w-3xl ${isBengali ? 'font-bengali' : 'font-body'}`}>
      {/* Back Button */}
      <motion.button 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/blogs')}
        className="flex items-center gap-2 text-muted-foreground hover:text-[#d69e2e] mb-8 transition-colors font-medium"
      >
        <ArrowLeft size={18} /> {isBengali ? 'পিছনে যান' : 'Back to Blogs'}
      </motion.button>

      {/* Header Info */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
          {content.title}
        </h1>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-2"><User size={16} className="text-[#d69e2e]" /> {content.author}</span>
          <span className="flex items-center gap-2"><Calendar size={16} className="text-[#d69e2e]" /> {content.date}</span>
        </div>

        {/* Blog Main Image */}
        <div className="w-full h-[300 md:h-[400px] rounded-3xl overflow-hidden mb-12 shadow-xl border border-border">
            <img 
                src={content.mainImage} 
                alt={content.title} 
                className="w-full h-full object-cover"
            />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6 mb-16"
      >
        {content.content.map((item, idx) => {
          if (item.type === 'p') return (
            <p key={idx} className="text-muted-foreground leading-relaxed text-lg">
              {item.text}
            </p>
          );
          if (item.type === 'h3') return (
            <h3 key={idx} className="text-2xl font-bold text-foreground mt-10 mb-4 border-l-4 border-[#d69e2e] pl-4">
              {item.text}
            </h3>
          );
          if (item.type === 'list') return (
            <ul key={idx} className="list-none space-y-3 text-muted-foreground">
              {item.items?.map((li, liIdx) => (
                <li key={liIdx} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#d69e2e] flex-shrink-0" />
                  <span className="text-lg">{li}</span>
                </li>
              ))}
            </ul>
          );
          return null;
        })}
      </motion.div>

      {/* CTA Box */}
      <div className="bg-card border border-border rounded-3xl p-8 text-center shadow-sm">
        <h3 className="text-xl font-bold mb-2">
          {isBengali ? 'আপনার কি কোনো কভার পেজ প্রয়োজন?' : 'Need a Cover Page?'}
        </h3>
        <p className="text-muted-foreground mb-6">
          {isBengali ? 'WUB DOX ব্যবহার করে মুহূর্তেই প্রফেশনাল কভার পেজ তৈরি করুন।' : 'Create professional cover pages in seconds using WUB DOX.'}
        </p>
        <button 
          onClick={() => navigate('/templates')}
          className="bg-[#d69e2e] text-white px-10 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-[#d69e2e]/20"
        >
          {isBengali ? 'শুরু করুন' : 'Get Started'}
        </button>
      </div>
    </div>
  );
}