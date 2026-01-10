import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, Facebook, Mail, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const { i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const footerSections = [
    {
      title: isBengali ? 'প্রোডাক্ট এবং তথ্য' : 'Products & Info',
      links: [
        { name: isBengali ? 'টেমপ্লেটস' : 'Templates', path: '/templates' },
        { name: isBengali ? 'যোগাযোগ' : 'Contact', path: '/contact' },
      ]
    },
    {
      title: isBengali ? 'কমিউনিটি' : 'Community',
      links: [
        { name: 'LinkedIn', path: '#', icon: Linkedin, external: true },
        { name: 'GitHub', path: '#', icon: Github, external: true },
        { name: 'Facebook', path: '#', icon: Facebook, external: true },
        { name: 'Instagram', path: '#', icon: Instagram, external: true },
      ]
    },
    {
      title: isBengali ? 'আইনি তথ্য' : 'Legal',
      links: [
        { name: isBengali ? 'প্রাইভেসি পলিসি' : 'Privacy Policy', path: '#' },
        { name: isBengali ? 'শর্তাবলী' : 'Terms of Service', path: '#' },
        { name: isBengali ? 'লাইসেন্স' : 'Licenses', path: '#' },
      ]
    }
  ];

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#030816] pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column with Image Logo */}
          <div className="space-y-6 text-center md:text-left">
            <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <img 
                src="/wub-dox.svg" 
                alt="Logo" 
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">
              {isBengali 
                ? 'আপনার অ্যাসাইনমেন্ট এবং ল্যাব রিপোর্টের জন্য সেরা কভার পেজ জেনারেটর।' 
                : 'Your ultimate companion for creating professional assignment cover pages.'}
              <br /><br />
              Uttara, Dhaka,<br />Bangladesh
            </p>
            <div className="flex justify-center md:justify-start gap-5">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Mail, href: "mailto:support@wubcover.com" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className="text-slate-500 hover:text-[#fbbf24] transform hover:-translate-y-1 transition-all duration-300"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h3 className="text-white font-display font-bold text-lg tracking-wider relative inline-block group">
                  {section.title}
                  <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#fbbf24] transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="text-slate-400 hover:text-white text-sm transition-all duration-300 flex items-center gap-2 group w-fit"
                      >
                        {link.icon && <link.icon size={14} className="group-hover:text-[#fbbf24] transition-colors" />}
                        <span className="group-hover:translate-x-1 group-hover:text-white transition-transform duration-300">
                          {link.name}
                        </span>
                        {link.external && <ExternalLink size={10} className="opacity-30 group-hover:opacity-100 transition-opacity" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px]">
          <p className="text-slate-500 font-medium tracking-tight">
            © {new Date().getFullYear()} — {isBengali ? 'WUB DOX। সর্বস্বত্ব সংরক্ষিত।' : 'WUB DOX. All rights reserved.'}
          </p>
          
          <div className="flex items-center gap-1 text-slate-500 font-medium">
            <span>Developed by an</span>
            <span className="text-red-500/70 mx-1 font-bold italic">enthusiast</span>
            <a 
              href="https://github.com/alrifatsabbir" 
              target="_blank" 
              className="text-[#fbbf24] hover:text-[#f59e0b] font-bold transition-all ml-1 underline decoration-transparent hover:decoration-[#fbbf24]"
            >
               Al Rifat Sabbir
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;