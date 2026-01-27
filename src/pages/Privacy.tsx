import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const policyPoints = [
    {
      title: isBengali ? "১. ভূমিকা" : "1. Introduction",
      desc: isBengali 
      ? 'WUB DOX আপনার গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি আমাদের ওয়েবসাইট এবং পরিষেবা ব্যবহারের সময় আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষার পদ্ধতি ব্যাখ্যা করে।' 
      : 'WUB DOX is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website and use our services.'
    },
    {
      title: isBengali ? "২. সংগৃহীত তথ্য" : "2. Information We Collect",
      desc: isBengali 
        ? "আমরা আপনার নাম, স্টুডেন্ট আইডি, ব্যাচ, রোল, সেমিস্টার, কোর্সের বিবরণ এবং শিক্ষকের নাম সংগ্রহ করি যা কভার পেজ তৈরির জন্য প্রয়োজনীয়।" 
        : "We collect your name, student ID, batch, roll, semester, course details, and teacher's name specifically required to generate the cover page."
    },
    {
      title: isBengali ? "৩. তথ্যের ব্যবহার" : "3. How We Use Data",
      desc: isBengali 
        ? "আপনার প্রদান করা তথ্য শুধুমাত্র কভার পেজ তৈরির জন্য ব্যবহৃত হয় এবং এটি সরাসরি আপনার ব্রাউজারে প্রসেস করা হয়। আমরা আপনার থেকে কোনো তথ্য আমাদের কাছে সংগ্রহ করি না। আপনার প্রদান করা যেকোনো তথ্য শুধুমাত্র আপনার ব্রাউজারে সংরক্ষিত এবং প্রসেস হবে। এই তথ্যগুলো ফাঁস হওয়ার বা গ্লোবালি স্টোর হওয়ার কোনো সুযোগ নেই।" 
        : "The data you provide is used solely for generating the cover page and is processed directly in your browser. We do not collect any data from you. Any data you are going to provide will be store and process into your browser only. These data can't be leaked or stored globally."
    },
    {
      title: isBengali ? "৪. ডেটা স্টোরেজ" : "4. Data Storage",
      desc: isBengali 
        ? "আমরা আমাদের সার্ভারে আপনার কোনো ব্যক্তিগত একাডেমিক তথ্য স্থায়ীভাবে সংরক্ষণ করি না। আপনার তথ্যগুলো সাময়িকভাবে আপনার ব্রাউজারে সংরক্ষিত থাকবে যতক্ষণ না আপনি ব্রাউজারের ক্যাশ ক্লিয়ার করছেন বা রিসেট বাটন ব্যবহার করে ডেটা মুছে ফেলছেন।" 
        : "We do not permanently store your personal academic data on our servers. Your data will be stored in your browser temporarily unless you clear your browser cache or reset data by using reset button this will erase your temporary stored data and you can start from the scratch."
    },
    {
      title: isBengali ? "৫. লোকাল স্টোরেজ ব্যবহার" : "5. Use of Local Storage",
      desc: isBengali 
        ? "ইউজার এক্সপেরিয়েন্স উন্নত করতে আমরা ব্রাউজারের Local Storage ব্যবহার করি যাতে পরবর্তীতে আপনি দ্রুত তথ্য পূরণ করতে পারেন। এই পদ্ধতি ব্যবহারের ফলে আপনার সময় বাঁচবে এবং আপনার তথ্য যেকোনো অ্যাটাকার বা বাইরের পক্ষ থেকে সুরক্ষিত থাকবে।" 
        : "We use browser Local Storage to save your preferences for a faster experience next time. By using this method not only you can save your time but also your data will be safe from any attacker."
    },
    {
      title: isBengali ? "৬. কুকিজ (Cookies)" : "6. Cookies",
      desc: isBengali 
        ? "ওয়েবসাইটের পারফরম্যান্স এবং ভাষা (Language) সেটিংস মনে রাখার জন্য আমরা সামান্য কুকিজ ব্যবহার করতে পারি। এটি ডিফল্টভাবে সক্রিয় থাকে এবং এটি পরিবর্তন করা সম্ভব নয়।" 
        : "Small cookies may be used to remember your language settings and site performance. It is active by default you can't change it."
    },
    {
      title: isBengali ? "৭. তথ্যের নিরাপত্তা" : "7. Data Security",
      desc: isBengali 
        ? "আমরা তথ্যের সর্বোচ্চ নিরাপত্তা নিশ্চিত করি এবং কোনো থার্ড-পার্টি অ্যাপের কাছে আপনার ডেটা বিক্রি করি না।" 
        : "We ensure maximum data security and never sell your data to any third-party applications."
    },
    {
      title: isBengali ? "৮. ডেটা রিটেনশন" : "8. Data Retention",
      desc: isBengali 
        ? "আমরা আপনার তথ্য শুধুমাত্র কভার পেজ তৈরির প্রয়োজনেই ব্যবহার করি। আমরা সার্ভারে বা ইন্টারনেটে কোনো তথ্য সংরক্ষণ করি না। এই তথ্যগুলো শুধুমাত্র আপনার ব্রাউজারের localStorage-এ থেকে যাবে।" 
        : "We retain your information only as long as necessary for generating purpose. Yet, we do not retain data on our server or in the internet. These data will be retain into your localStorage of your browser."
    },
    {
      title: isBengali ? "৯. থার্ড-পার্টি লিঙ্ক" : "9. Third-party Links",
      desc: isBengali 
        ? "আমাদের ওয়েবসাইটে থাকা গিটহাব (GitHub) বা লিঙ্কডইন (LinkedIn) লিঙ্কগুলো শুধুমাত্র আমাদের সাথে যোগাযোগ এবং সোশ্যাল মিডিয়াতে ফলো করার জন্য ব্যবহৃত হয়। এই থার্ড-পার্টি সাইটগুলোর নিজস্ব প্রাইভেসি পলিসি রয়েছে।" 
        : "Third-party links to GitHub or LinkedIn are used solely for 'Contact Us' and 'Follow Us' purposes. These external sites have their own independent privacy policies."
    },
    {
      title: isBengali ? "১০. পিডিএফ জেনারেশন" : "10. PDF Generation",
      desc: isBengali 
        ? "পিডিএফ ফাইলটি সরাসরি ক্লায়েন্ট-সাইডে (আপনার ডিভাইসে) তৈরি হয়, তাই আপনার ডেটা আমাদের সার্ভারে আপলোড হয় না। সমস্ত প্রসেসিং আপনার ব্রাউজারের ভেতরেই সম্পন্ন হয় এবং আপনি যেকোনো সময় তা মুছে ফেলতে পারেন।" 
        : "PDF generation happens client-side, meaning your data isn't uploaded to our servers for processing. All of processing will be happened into your browser and can be erased from there anytime."
    },
    {
      title: isBengali ? "১১. ইউজার কন্ট্রোল" : "11. User Control",
      desc: isBengali 
        ? "আপনি যেকোনো সময় আপনার ব্রাউজারের ক্যাশ বা লোকাল স্টোরেজ ক্লিয়ার করে আপনার তথ্য মুছে ফেলতে পারেন। এছাড়াও, আগের ফরম ডেটা মুছতে আপনি রিসেট (Reset) বাটন ব্যবহার করতে পারেন।" 
        : "You can clear your browser cache or local storage anytime to remove your data. Also, you can use reset button to clear your previous form data."
    },
    {
      title: isBengali ? "১২. শিশুদের গোপনীয়তা" : "12. Children's Privacy",
      desc: isBengali 
        ? "এই ওয়েবসাইটটি শুধুমাত্র বিশ্ববিদ্যালয় শিক্ষার্থীদের সহায়তার জন্য তৈরি করা হয়েছে। তাই আমাদের পরিষেবা ১৬ বছরের কম বয়সীদের জন্য নয়। আমরা জেনেশুনে শিশুদের থেকে কোনো তথ্য সংগ্রহ করি না।" 
        : "This website is strictly intended to assist university students with their academic tasks. So, our services are not intended for children under 16. We do not knowingly collect any information from children."
    },
    {
      title: isBengali ? "১৩. পলিসি পরিবর্তন" : "13. Policy Changes",
      desc: isBengali 
        ? "ভবিষ্যতে কোনো পরিবর্তন হলে তা এই পেজেই আপডেট করে দেওয়া হবে।" 
        : "Any future changes to the policy will be updated right here on this page."
    },
    {
      title: isBengali ? "১৪. যোগাযোগ" : "14. Contact Us",
      desc: isBengali 
        ? "প্রাইভেসি নিয়ে কোনো প্রশ্ন থাকলে আমাদের কন্টাক্ট পেজের মাধ্যমে যোগাযোগ করুন।" 
        : "If you have questions about privacy, contact us via our contact page."
    }
  ];

  return (
    <div className={`container mx-auto px-4 py-24 max-w-4xl ${isBengali ? 'font-bengali' : 'font-body'}`}>
      
      {/* SEO & Search Engine Visibility */}
      <div className="sr-only">
        <h1>WUB DOX Privacy Policy - {isBengali ? "গোপনীয়তা নীতি" : "Your Data Security"}</h1>
        <p>
          {isBengali 
            ? "WUB DOX আপনার একাডেমিক ডেটা সার্ভারে সংরক্ষণ করে না। আপনার নাম, আইডি এবং কোর্সের তথ্য শুধুমাত্র আপনার ব্রাউজারে লোকাল স্টোরেজে প্রসেস করা হয়।" 
            : "WUB DOX does not store your academic data on any server. All processing including PDF generation happens client-side in your browser."}
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

      <div className="text-4xl md:text-5xl font-bold mb-8 border-b pb-4">
        {isBengali ? "গোপনীয়তা নীতি (Privacy Policy)" : "Privacy Policy"}
      </div>
      
      <p className="text-slate-600 mb-10 text-lg italic">
        {isBengali ? 'সর্বশেষ আপডেট' : 'Last updated'}: {new Date().toLocaleDateString(isBengali ? 'bn-BD' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="space-y-8">
        {policyPoints.map((point, index) => (
          <div key={index} className="group transition-all duration-300">
            <h3 className="text-xl font-bold text-[#d69e2e] mb-3 group-hover:translate-x-1 transition-transform">
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