export interface BlogContent {
  type: 'p' | 'h3' | 'list' | 'h2' | 'a';
  text?: string;
  items?: string[];
  href?: string;
}

export interface BlogLanguageData {
  title: string;
  author: string;
  date: string;
  mainImage: string;
  content: BlogContent[];
}

export interface BlogPost {
  en: BlogLanguageData;
  bn: BlogLanguageData;
}

export const blogPostsData: Record<string, BlogPost> = {
  "1": {
    en: {
      title: "Need a Web Application? Let’s Build It Together",
      author: "Admin || AL RIFAT SABBIR",
      date: "Jan 26, 2026",
      mainImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
      content: [
        { type: "p", text: "In today’s digital world, having a well-built web application is no longer a luxury—it’s a necessity." },
        { type: "h3", text: "What I Can Help You With" },
        {
          type: "list",
          items: [
            "Full-stack web applications",
            "Custom dashboards and admin panels",
            "Blogging platforms and content-based websites",
            "Academic or personal project web apps",
            "UI-focused, clean, and responsive designs"
          ]
        },
        { type: "p", text: "I’m a CSE student and a web developer who focuses on building practical solutions." },
        { type: "h3", text: "Let’s Connect" },
        { type: "a", text: "Contact me to discuss your project", href: "/contact" }
      ]
    },
    bn: {
      title: "ওয়েব অ্যাপ্লিকেশন দরকার? চলুন একসাথে বানাই",
      author: "এডমিন || আল রিফাত সাব্বির",
      date: "২৬ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
      content: [
        { type: "p", text: "আজকের ডিজিটাল দুনিয়ায় একটি ভালো ওয়েব অ্যাপ্লিকেশন খুবই জরুরি।" },
        { type: "h3", text: "আমি যেসব বিষয়ে সাহায্য করতে পারি" },
        {
          type: "list",
          items: [
            "ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন",
            "কাস্টম ড্যাশবোর্ড",
            "ব্লগিং ওয়েবসাইট",
            "একাডেমিক প্রজেক্ট"
          ]
        },
        {type: "p", text: "আমি একজন CSE স্টুডেন্ট ও ওয়েব ডেভেলপার। আমার কাছে কোড লেখা শুধু কাজ না—প্রথমে সমস্যাটা বোঝা, তারপর সেটার বাস্তবসম্মত সমাধান তৈরি করাই আমার লক্ষ্য।"},
        {type: "h3", text: "কোনো আইডিয়া আছে?"},
        {type: "p", text: "আপনি যদি নতুন কোনো ওয়েব অ্যাপ বানাতে চান, আগের প্রজেক্ট উন্নত করতে চান, অথবা একদম শুরু থেকে কিছু করতে চান—নক দিতে পারেন নির্দ্বিধায়।"},
        {type: "a", text: "প্রজেক্ট নিয়ে কথা বলতে যোগাযোগ করুন", href: "/contact"}
      ]
    }
  },
  "2": {
    en: {
      title: "How to Create a Professional Cover Page?",
      author: "Admin || AL RIFAT SABBIR",
      date: "Jan 18, 2026",
      mainImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
      content: [
        { type: "p", text: "A professional cover page is the face of your assignment." },
        { type: "h3", text: "Key Elements to Include:" },
        { type: "list", items: ["Course Title & Code", "Student Name & ID", "Instructor Name", "Submission Date"] }
      ]
    },
    bn: {
      title: "কিভাবে প্রফেশনাল কভার পেজ তৈরি করবেন?",
      author: "এডমিন || আল রিফাত সাব্বির",
      date: "১৮ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
      content: [
        { type: "p", text: "একটি প্রফেশনাল কভার পেজ আপনার অ্যাসাইনমেন্টের প্রথম পরিচয়।" },
        { type: "list", items: ["কোর্স কোড", "নাম ও আইডি", "শিক্ষকের নাম", "জমার তারিখ"] }
      ]
    }
  },

  "3": {
    en: {
      title: "Tips for Lab Report Formatting",
      author: "Admin || AL RIFAT SABBIR",
      date: "Jan 17, 2026",
      mainImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
      content: [
        { type: "p", text: "Lab reports require clarity and proper formatting." },
        { type: "list", items: ["Abstract", "Methodology", "Data", "Conclusion"] }
      ]
    },
    bn: {
      title: "ল্যাব রিপোর্ট ফরম্যাটিং টিপস",
      author: "এডমিন || আল রিফাত সাব্বির",
      date: "১৭ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
      content: [
        { type: "p", text: "ল্যাব রিপোর্টে পরিষ্কার ফরম্যাট খুব গুরুত্বপূর্ণ।" },
        { type: "list", items: ["সারসংক্ষেপ", "পদ্ধতি", "ডাটা", "উপসংহার"] }
      ]
    }
  },

  "4": {
    en: {
      title: "Benefits of Using Online Tools",
      author: "Admin || AL RIFAT SABBIR",
      date: "Jan 16, 2026",
      mainImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
      content: [
        { type: "p", text: "Online tools save time and reduce errors." },
        { type: "list", items: ["Fast", "Accurate", "Accessible"] }
      ]
    },
    bn: {
      title: "অনলাইন টুল ব্যবহারের সুবিধা",
      author: "এডমিন || আল রিফাত সাব্বির",
      date: "১৬ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
      content: [
        { type: "p", text: "অনলাইন টুল সময় বাঁচায়।" },
        { type: "list", items: ["দ্রুত", "নির্ভুল", "সহজ"] }
      ]
    }
  },

  "5": {
    en: {
      title: "The Beginning of WUB DOX",
      author: "Admin || AL RIFAT SABBIR",
      date: "Jan 1, 2026",
      mainImage: "https://images.unsplash.com/photo-1632594737623-bea601083890?q=80&w=870",
      content: [
        { type: "p", text: "WUB DOX was born from a real student problem." }
      ]
    },
    bn: {
      title: "WUB DOX-এর শুরু",
      author: "এডমিন || আল রিফাত সাব্বির",
      date: "১ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1632594737623-bea601083890?q=80&w=870",
      content: [
        { type: "p", text: "WUB DOX তৈরি হয়েছে ছাত্রদের বাস্তব সমস্যা থেকে।" }
      ]
    }
  }
};
