import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blogs() {
  const { i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const blogPosts = [
    {
      id: 1,
      title: isBengali
        ? "ওয়েব অ্যাপ্লিকেশন দরকার? চলুন একসাথে বানাই"
        : "Need a Web Application? Let’s Build It Together",
      excerpt: isBengali
        ? "আইডিয়া আছে কিন্তু কোথা থেকে শুরু করবেন বুঝতে পারছেন না? এই ব্লগে জানুন কীভাবে আপনার ওয়েব অ্যাপ বাস্তবে রূপ দিতে পারেন।"
        : "Have an idea but not sure where to start? Learn how to turn your web app idea into reality.",
      author: "Admin",
      date: "Jan 26, 2026",
      category: isBengali ? "ডেভেলপমেন্ট" : "Development",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: isBengali ? "কিভাবে প্রফেশনাল কভার পেজ তৈরি করবেন?" : "How to Create a Professional Cover Page?",
      excerpt: isBengali 
        ? "অ্যাসাইনমেন্টের প্রথম ইম্প্রেশন তৈরি হয় কভার পেজ দিয়ে। জানুন সঠিক নিয়মগুলো।" 
        : "The first impression of an assignment starts with the cover page. Learn the right rules.",
      author: "Admin",
      date: "Jan 18, 2026",
      category: isBengali ? "টিপস" : "Tips",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: isBengali ? "ল্যাব রিপোর্টে ভালো মার্কস পাওয়ার উপায়" : "How to get high marks in Lab Reports",
      excerpt: isBengali 
        ? "সঠিক ফরম্যাটিং এবং কভার পেজ ব্যবহারের মাধ্যমে আপনার ল্যাব রিপোর্টকে আকর্ষণীয় করুন।" 
        : "Make your lab reports attractive through proper formatting and cover pages.",
      author: "Admin",
      date: "Jan 17, 2026",
      category: isBengali ? "একাডেমিক" : "Academic",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: isBengali ? "অনলাইন টুল ব্যবহারের সুবিধা" : "Benefits of using online tools",
      excerpt: isBengali 
        ? "ম্যানুয়ালি কভার পেজ বানানোর চেয়ে অনলাইন টুল কেন বেশি কার্যকর তা জানুন।" 
        : "Learn why online tools are more effective than manual cover page creation.",
      author: "Admin",
      date: "Jan 16, 2026",
      category: isBengali ? "টেক" : "Tech",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: isBengali ? "WUB DOX-এর পেছনের গল্প" : "The Beginning of WUB DOX",
      excerpt: isBengali 
        ? "একটি ল্যাব এক্সাম, এক কাপ চা আর একটি আইডিয়া—কিভাবে শুরু হলো WUB DOX?" 
        : "One lab exam, a cup of tea, and a vision—how WUB DOX came to life.",
      author: "Admin",
      date: "Jan 01, 2026",
      category: isBengali ? "গল্প" : "Story",
      image: "https://images.unsplash.com/photo-1632594737623-bea601083890?q=80&w=870&auto=format&fit=crop"
    }
  ];

  return (
    <div className={`container mx-auto px-4 py-24 max-w-6xl ${isBengali ? 'font-bengali' : 'font-body'}`}>
      
      {/* SEO Hidden Section */}
      <div className="sr-only">
        <h1>WUB DOX Blog - {isBengali ? "একাডেমিক টিপস এবং আপডেট" : "Academic Tips & Updates"}</h1>
        <p>
          {isBengali 
            ? "শিক্ষার্থীদের জন্য অ্যাসাইনমেন্ট কভার পেজ তৈরি, ল্যাব রিপোর্ট ফরম্যাটিং এবং একাডেমিক রাইটিং নিয়ে গুরুত্বপূর্ণ ব্লগ ও টিপস।" 
            : "Read the latest blogs on assignment cover page creation, lab report formatting, and academic writing tips for university students."}
        </p>
        <nav>
          {blogPosts.map(post => (
            <a key={post.id} href={`/blogs/${post.id}`}>{post.title}</a>
          ))}
                  <a href="/">Home</a>
                  <a href="/templates">All Cover Page Templates</a>
                  <a href="/editor/assignment">Assignment Cover Page Generator</a>
                  <a href="/editor/labReport">University Lab Report Cover Page</a>
                  <a href="/editor/forum">Academic Forum Presentation Cover Page</a>
                  <a href="/editor/homework">Simple Homework Cover Page</a>
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

      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
        >
          {isBengali ? "আমাদের ব্লগ" : "Our Blogs"}
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          {isBengali 
            ? "শিক্ষার্থী এবং একাডেমিক রাইটিং নিয়ে বিভিন্ন টিপস এবং আপডেট পড়তে আমাদের সাথেই থাকুন।" 
            : "Stay with us to read various tips and updates about students and academic writing."}
        </motion.p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link to={`/blogs/${post.id}`} className="block h-full">
              <div className="bg-card border border-border rounded-2xl overflow-hidden h-full hover:shadow-xl hover:border-[#d69e2e]/40 transition-all duration-300 flex flex-col">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-[#d69e2e] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[11px] text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} /> {post.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#d69e2e] transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-[#d69e2e] mt-auto">
                    {isBengali ? "আরও পড়ুন" : "Read More"}
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-10 rounded-3xl bg-[#d69e2e]/5 border border-[#d69e2e]/20 text-center"
      >
        <h2 className="text-2xl font-bold mb-2">
          {isBengali ? "আরও আসছে..." : "More Coming Soon..."}
        </h2>
        <p className="text-muted-foreground">
          {isBengali 
            ? "আমরা নিয়মিত নতুন কন্টেন্ট যোগ করার কাজ করছি। চোখ রাখুন!" 
            : "We are regularly working on adding new content. Stay tuned!"}
        </p>
      </motion.div>
    </div>
  );
}