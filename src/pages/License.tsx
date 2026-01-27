import { useTranslation } from 'react-i18next';

export default function License() {
  const { i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const licenseSections = [
    {
      title: isBengali ? "১. মালিকানা ও মেধা সম্পত্তি" : "1. Ownership & Intellectual Property",
      desc: isBengali 
        ? "WUB DOX-এর ডিজাইন, সোর্স কোড, লোগো এবং ইউজার ইন্টারফেস সম্পূর্ণভাবে এর মূল ডেভেলপারের সম্পত্তি। অনুমতি ছাড়া এর কোনো অংশ ব্যবহার করা আইনত দণ্ডনীয়।" 
        : "The design, source code, logo, and user interface of WUB DOX are the exclusive property of the developer. Use of any part without permission is strictly prohibited."
    },
    {
      title: isBengali ? "২. ক্লোন এবং ডিপ্লয়মেন্ট নিষেধাজ্ঞা" : "2. Clone & Deployment Restriction",
      desc: isBengali 
        ? "এই প্রজেক্টটি ওপেন সোর্স হলেও, এর সোর্স কোড ক্লোন করে অন্য কোথাও পাবলিকলি ডিপ্লয়মেন্ট করা বা নিজের নামে প্রকাশ করা সম্পূর্ণ নিষিদ্ধ।" 
        : "Although this project is open source, cloning and publicly deploying this project or publishing it under your own name is strictly prohibited."
    },
    {
      title: isBengali ? "৩. বাণিজ্যিক ব্যবহারে নিষেধাজ্ঞা" : "3. Non-Commercial Use Only",
      desc: isBengali 
        ? "এই সফটওয়্যারটি শুধুমাত্র ব্যক্তিগত এবং শিক্ষামূলক কাজের জন্য। বাণিজ্যিক উদ্দেশ্যে (টাকা আয়ের জন্য) এই অ্যাপ বা এর কোনো সার্ভিস ব্যবহার করা যাবে না।" 
        : "This software is for personal and educational use only. Commercial use (for-profit) of this app or its services is strictly forbidden."
    },
    {
      title: isBengali ? "৪. সোর্স কোড ব্যবহারের শর্ত" : "4. Source Code Terms",
      desc: isBengali 
        ? "আপনি শুধুমাত্র শেখার উদ্দেশ্যে কোড দেখতে পারেন, কিন্তু ডেভেলপারের লিখিত অনুমতি ছাড়া কোড পরিবর্তন করে নতুন কোনো সার্ভিস হিসেবে লঞ্চ করা যাবে না।" 
        : "You may view the source code for learning purposes, but you cannot modify and launch it as a new service without written permission from the developer."
    },
    {
      title: isBengali ? "৫. ক্রেডিট ও এট্রিবিউশন" : "5. Credit & Attribution",
      desc: isBengali 
        ? "যেকোনো বিশেষ প্রয়োজনে কোড ব্যবহার করলে মূল ডেভেলপারের ক্রেডিট এবং WUB DOX-এর লিঙ্ক বজায় রাখা বাধ্যতামূলক।" 
        : "If code is used for any specific purpose, maintaining original developer credit and the WUB DOX link is mandatory."
    },
    {
      title: isBengali ? "৬. মডিফিকেশন পলিসি" : "6. Modification Policy",
      desc: isBengali 
        ? "সোর্স কোডে কোনো পরিবর্তন আনলে তা শুধুমাত্র লোকাল এনভায়রনমেন্টে পরীক্ষার জন্য সীমাবদ্ধ থাকতে হবে।" 
        : "Any modifications to the source code must be limited to testing in a local environment only."
    },
    {
      title: isBengali ? "৭. পাইরেসি ও কপিরাইট" : "7. Piracy & Copyright",
      desc: isBengali 
        ? "ডিজাইন বা কোড চুরি করে নতুন কোনো ডোমেইনে হোস্ট করা পাইরেসি হিসেবে গণ্য হবে এবং এর বিরুদ্ধে আইনগত ব্যবস্থা নেওয়া হতে পারে।" 
        : "Stealing the design or code and hosting it on a new domain will be considered piracy, and legal action may be taken."
    },
    {
      title: isBengali ? "৮. ডিস্ট্রিবিউশন লিমিটেশন" : "8. Distribution Limitation",
      desc: isBengali 
        ? "এই সফটওয়্যারের কোনো অংশ থার্ড-পার্টি প্ল্যাটফর্মে ডিস্ট্রিবিউট করা বা শেয়ার করা যাবে না।" 
        : "No part of this software may be distributed or shared on third-party platforms."
    },
    {
      title: isBengali ? "৯. কোনো ওয়ারেন্টি নেই" : "9. No Warranty",
      desc: isBengali 
        ? "সফটওয়্যারটি 'যেমন আছে' সেভাবে প্রদান করা হয়েছে। এটি ব্যবহারের ফলে কোনো প্রকার সমস্যার জন্য ডেভেলপার দায়ী থাকবে না।" 
        : "The software is provided 'as is'. The developer shall not be held liable for any issues arising from its use."
    },
    {
      title: isBengali ? "১০. লাইসেন্স ভঙ্গ" : "10. License Violation",
      desc: isBengali 
        ? "উপরোক্ত যেকোনো শর্ত ভঙ্গ করলে ডেভেলপারের পক্ষ থেকে আইনি নোটিশ বা প্রয়োজনীয় ব্যবস্থা নেওয়া হতে পারে।" 
        : "Any violation of the above terms may result in legal notices or necessary actions from the developer."
    }
  ];

  return (
    <div className={`container mx-auto px-4 py-24 max-w-4xl ${isBengali ? 'font-bengali' : 'font-body'}`}>
      
      {/* SEO & Developer Identification */}
      <div className="sr-only">
        <h1>WUB DOX License & Intellectual Property</h1>
        <p>Official license terms for WUB DOX. All rights reserved by Al Rifat Sabbir. Unauthorized cloning or commercial use is prohibited.</p>
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

      <h1 className="text-4xl md:text-5xl font-bold mb-8 border-b pb-4">
        {isBengali ? "লাইসেন্স ও ব্যবহারের অনুমতি" : "License & Permissions"}
      </h1>
      
      <div className="bg-red-500/10 border-l-4 border-red-500 p-6 mb-10 rounded-r-xl">
        <p className="text-lg font-semibold text-red-600 dark:text-red-400">
          {isBengali 
            ? "সতর্কতা: অনুমতি ছাড়া ডিজাইন বা সোর্স কোড ব্যবহার এবং ক্লোন ডিপ্লয়মেন্ট সম্পূর্ণ নিষিদ্ধ।" 
            : "Warning: Unauthorized use of design/code and clone deployment is strictly prohibited."}
        </p>
      </div>

      <div className="grid gap-8">
        {licenseSections.map((section, index) => (
          <div key={index} className="border-b border-border pb-6 last:border-0">
            <h3 className="text-xl font-bold text-[#d69e2e] mb-2">{section.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {section.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}