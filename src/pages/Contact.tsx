import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const contactDetails = [
    {
      icon: Mail,
      label: isBengali ? 'ইমেইল' : 'Email',
      value: 'alrifatsabbir@gmail.com',
      link: 'mailto:alrifatsabbir@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: MessageSquare,
      label: isBengali ? 'হোয়াটসঅ্যাপ' : 'WhatsApp',
      value: '+880 1688-525596',
      link: 'https://wa.me/8801688525596',
      color: 'text-green-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/alrifatsabbir',
      link: 'https://github.com/alrifatsabbir',
      color: 'text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/alrifatsabbir',
      link: 'https://linkedin.com/in/alrifatsabbir',
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="sr-only">
        <h1>Contact WUB DOX Developer - {isBengali ? "যোগাযোগ করুন" : "Get in Touch"}</h1>
        <p>
          {isBengali 
            ? "WUB DOX এর ডেভেলপার আল রিফাত সাব্বির এর সাথে যোগাযোগ করুন। যেকোনো প্রশ্ন, কাস্টমাইজেশন বা সাপোর্টের জন্য ইমেইল বা সোশ্যাল মিডিয়া ব্যবহার করুন।" 
            : "Contact Al Rifat Sabbir, the developer of WUB DOX. Reach out for support, inquiries, or feedback regarding cover page generation and university documentation."}
        </p>
        <address>
          Al Rifat Sabbir<br />
          World University of Bangladesh, Uttara, Dhaka<br />
          Email: alrifatsabbir@gmail.com<br />
          WhatsApp: +8801688525596
        </address>
                <nav className="sr-only">
                  {/* WUB DOX Internal Links */}
                  <a href="/">Home</a>
                  <a href="/templates">All Cover Page Templates</a>
                  <a href="/editor/assignment">Assignment Cover Page Generator</a>
                  <a href="/editor/labReport">University Lab Report Cover Page</a>
                  <a href="/editor/forum">Academic Forum Presentation Cover Page</a>
                  <a href="/editor/homework">Simple Homework Cover Page</a>
                  <a href="/blogs">Blogs about WUB DOX</a>
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

      <main className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className={`text-4xl md:text-5xl font-display font-bold text-foreground mb-4 ${isBengali ? 'font-bengali' : ''}`}>
              {isBengali ? 'যোগাযোগ করুন' : 'Contact Us'}
            </div>
            <p className={`text-lg text-muted-foreground max-w-lg mx-auto ${isBengali ? 'font-bengali' : ''}`}>
              {isBengali 
                ? 'আপনার কোনো প্রশ্ন বা পরামর্শ থাকলে নিচের যেকোনো মাধ্যমে সরাসরি যোগাযোগ করতে পারেন।' 
                : 'If you have any questions or suggestions, feel free to reach out directly through any of these channels.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {contactDetails.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className={`text-xs font-medium text-muted-foreground uppercase tracking-wider ${isBengali ? 'font-bengali' : ''}`}>
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground break-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-3xl border border-border bg-card p-2 overflow-hidden shadow-sm flex flex-col"
          >
            <div className="p-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className={`font-medium text-sm ${isBengali ? 'font-bengali' : ''}`}>
                {isBengali ? 'ওয়ার্ল্ড ইউনিভার্সিটি অফ বাংলাদেশ, উত্তরা, ঢাকা' : 'World University of Bangladesh, Uttara, Dhaka'}
              </span>
            </div>
            
            <div className="h-[350px] w-full rounded-2xl overflow-hidden">
              <iframe 
                title={isBengali ? "গুগল ম্যাপে ডাব্লিউইউবি এর অবস্থান" : "WUB location on Google Maps"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.0866905605358!2d90.3712592!3d23.851055199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b779be3745%3A0xe201c48b96e1868a!2sWorld%20University%20of%20Bangladesh%20(WUB)!5e0!3m2!1sen!2sbd!4v1768056619758!5m2!1sen!2sbd"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;