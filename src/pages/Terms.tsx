import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const termPoints = [
    {
      title: isBengali ? "১. শর্তাবলী গ্রহণ" : "1. Acceptance of Terms",
      desc: isBengali 
        ? "WUB DOX প্ল্যাটফর্মটি ব্যবহারের মাধ্যমে আপনি আমাদের সকল শর্তাবলী মেনে নিচ্ছেন বলে গণ্য হবে।" 
        : "By accessing and using WUB DOX, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service."
    },
    {
      title: isBengali ? "২. সেবার উদ্দেশ্য" : "2. Purpose of Service",
      desc: isBengali 
        ? "এই টুলটি শুধুমাত্র শিক্ষার্থীদের একাডেমিক কভার পেজ তৈরির কাজ সহজ করার জন্য তৈরি করা হয়েছে।" 
        : "This service is provided to assist students in generating academic cover pages efficiently."
    },
    {
      title: isBengali ? "৩. তথ্যের মালিকানা ও নির্ভুলতা" : "3. Accuracy & Ownership of Data",
      desc: isBengali 
        ? "কভার পেজে দেওয়া তথ্যের সত্যতা নিশ্চিত করার দায়িত্ব সম্পূর্ণ ইউজারের। ভুল তথ্যের জন্য WUB DOX দায়ী থাকবে না।" 
        : "Users are solely responsible for the accuracy of the data entered. WUB DOX is not liable for any misinformation on the generated documents."
    },
    {
      title: isBengali ? "৪. ক্লায়েন্ট-সাইড প্রসেসিং" : "4. Client-Side Processing",
      desc: isBengali 
        ? "আপনি সম্মত হচ্ছেন যে আপনার সকল ডেটা শুধুমাত্র আপনার ব্রাউজারেই প্রসেস করা হয় এবং আমাদের কোনো ডাটাবেজ নেই।" 
        : "You acknowledge that all data processing occurs locally in your browser. We do not store your academic data on any central database."
    },
    {
      title: isBengali ? "৫. লোকাল স্টোরেজ ও নিরাপত্তা" : "5. Local Storage & Security",
      desc: isBengali 
        ? "সুবিধার জন্য আপনার তথ্য ব্রাউজারের Local Storage-এ রাখা হয়। এটি সুরক্ষিত রাখার দায়িত্ব আপনার ডিভাইসের নিরাপত্তার ওপর নির্ভরশীল।" 
        : "Data is stored in your browser's Local Storage for convenience. The security of this data depends on the security of your personal device."
    },
    {
      title: isBengali ? "৬. নিষিদ্ধ ব্যবহার" : "6. Prohibited Use",
      desc: isBengali 
        ? "ভুল তথ্য দিয়ে কাউকে বিভ্রান্ত করা বা এই টুলের মাধ্যমে অবৈধ কোনো ডকুমেন্ট তৈরি করা সম্পূর্ণ নিষিদ্ধ।" 
        : "Misleading others with false information or using this tool for any fraudulent activities is strictly prohibited."
    },
    {
      title: isBengali ? "৭. বৌদ্ধিক সম্পত্তি (IP)" : "7. Intellectual Property",
      desc: isBengali 
        ? "WUB DOX-এর লোগো, ডিজাইন এবং সোর্স কোড মেধা সম্পত্তি হিসেবে সংরক্ষিত। এটি অনুমতি ছাড়া বাণিজ্যিক ব্যবহার নিষেধ।" 
        : "The logos, designs, and source code of WUB DOX are intellectual properties. Commercial use without permission is prohibited."
    },
    {
      title: isBengali ? "৮. পিডিএফ জেনারেশন" : "8. PDF Generation",
      desc: isBengali 
        ? "পিডিএফ ফাইলটি সরাসরি আপনার ব্রাউজারে তৈরি হয়। কোনো কারিগরি ত্রুটির কারণে ফাইল ডাউনলোড না হলে আমরা দায়বদ্ধ নই।" 
        : "PDFs are generated on the client-side. We are not responsible for download failures caused by browser compatibility or technical issues."
    },
    {
      title: isBengali ? "৯. থার্ড-পার্টি লিঙ্ক ও ফলোআপ" : "9. Third-party Links",
      desc: isBengali 
        ? "গিটহাব বা লিঙ্কডইন লিঙ্কগুলো শুধুমাত্র সোশ্যাল মিডিয়া ও কন্টাক্ট পারপাসে দেওয়া হয়েছে। তাদের সাইটের অ্যাক্টিভিটির দায় আমাদের নয়।" 
        : "Links to GitHub or LinkedIn are for contact purposes only. We are not responsible for the content or policies of these external sites."
    },
    {
      title: isBengali ? "১০. কোনো ওয়ারেন্টি নেই" : "10. No Warranty",
      desc: isBengali 
        ? "এই সেবাটি 'যেমন আছে' (As is) ভিত্তিতে প্রদান করা হয়। এটি সবসময় নিরবচ্ছিন্ন বা ত্রুটিমুক্ত থাকবে এমন কোনো নিশ্চয়তা আমরা দেই না।" 
        : "This service is provided 'as is' without any warranties. We do not guarantee that the tool will be error-free or uninterrupted."
    },
    {
      title: isBengali ? "১১. দায়বদ্ধতা সীমাবদ্ধতা" : "11. Limitation of Liability",
      desc: isBengali 
        ? "এই ওয়েবসাইট ব্যবহারের ফলে আপনার ডিভাইসের কোনো ক্ষতি বা তথ্যের কোনো প্রকার অসঙ্গতির জন্য WUB DOX কর্তৃপক্ষ দায়ী থাকবে না।" 
        : "WUB DOX shall not be held liable for any damages or data inconsistencies resulting from the use of this website."
    },
    {
      title: isBengali ? "১২. শর্তাবলী পরিবর্তন" : "12. Changes to Terms",
      desc: isBengali 
        ? "আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন বা পরিমার্জন করার অধিকার রাখি।" 
        : "We reserve the right to modify these terms at any time. Your continued use of the site signifies acceptance of the updated terms."
    },
    {
      title: isBengali ? "১৩. সার্ভিস রিসেট ও ডেটা রিমুভাল" : "13. Data Reset & Removal",
      desc: isBengali 
        ? "ইউজার চাইলে যেকোনো সময় 'Reset' বাটন ব্যবহার করে ব্রাউজার থেকে তার সকল সাময়িক তথ্য মুছে ফেলতে পারবেন।" 
        : "Users can erase all locally stored data anytime by using the 'Reset' button or clearing browser cache."
    },
    {
      title: isBengali ? "১৪. সার্ভিস বন্ধ করা" : "14. Termination of Service",
      desc: isBengali 
        ? "আমরা কোনো পূর্ব নোটিশ ছাড়াই এই টুল বা সেবার যেকোনো অংশ পরিবর্তন বা চিরস্থায়ীভাবে বন্ধ করার অধিকার রাখি।" 
        : "We reserve the right to modify or terminate any part of the service at any time without prior notice."
    },
    {
      title: isBengali ? "১৫. প্রযোজ্য আইন" : "15. Governing Law",
      desc: isBengali 
        ? "এই শর্তাবলী বাংলাদেশের ডিজিটাল আইন ও নিয়ম অনুযায়ী পরিচালিত হবে।" 
        : "These terms are governed by and construed in accordance with the relevant laws of Bangladesh."
    }
  ];

  return (
    <div className={`container mx-auto px-4 py-24 max-w-4xl ${isBengali ? 'font-bengali' : 'font-body'}`}>
      
      {/* SEO Section */}
      <div className="sr-only">
        <h1>WUB DOX Terms of Service - {isBengali ? "ব্যবহারের শর্তাবলী" : "Rules & Regulations"}</h1>
        <p>
          {isBengali 
            ? "WUB DOX ব্যবহারের নিয়ম এবং আইনি শর্তাবলী। আমাদের টুল ব্যবহারের আগে এই শর্তাবলী মনোযোগ দিয়ে পড়ুন।" 
            : "Read the legal terms and rules of using WUB DOX. By using our service, you agree to comply with our academic guidelines."}
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

      <div className="text-4xl md:text-5xl font-bold mb-8 border-b pb-4">
        {isBengali ? "ব্যবহারের শর্তাবলী (Terms of Service)" : "Terms of Service"}
      </div>
      
      <p className="text-slate-600 mb-10 text-lg">
        {isBengali ? 'সর্বশেষ আপডেট' : 'Last updated'}: {new Date().toLocaleDateString(isBengali ? 'bn-BD' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="space-y-8">
        {termPoints.map((point, index) => (
          <div key={index} className="group transition-all">
            <h3 className="text-xl font-bold text-[#d69e2e] mb-2 group-hover:translate-x-1 transition-transform">
              {point.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}