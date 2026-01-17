export interface BlogContent {
  type: 'p' | 'h3' | 'list' | 'h2';
  text?: string;
  items?: string[];
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
      title: "How to Create a Professional Cover Page?",
      author: "Admin",
      date: "Jan 17, 2026",
      mainImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
      content: [
        { type: "p", text: "A professional cover page is the face of your assignment. It's the first thing your instructor sees, so it needs to be clean, organized, and informative." },
        { type: "h3", text: "Key Elements to Include:" },
        { type: "list", items: ["Course Title & Code", "Student Full Name & ID", "Instructor's Name", "Submission Date"]},
        { type: "p", text: "Using WUB DOX, you can automate this entire process in seconds." }
      ]
    },
    bn: {
      title: "কিভাবে প্রফেশনাল কভার পেজ তৈরি করবেন?",
      author: "এডমিন",
      date: "১৭ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
      content: [
        { type: "p", text: "একটি প্রফেশনাল কভার পেজ আপনার অ্যাসাইনমেন্টের দর্পণ স্বরূপ। এটি পরিষ্কার এবং তথ্যবহুল হওয়া জরুরি।" },
        { type: "h3", text: "যেসব তথ্য অবশ্যই রাখবেন:" },
        { type: "list", items: ["কোর্সের শিরোনাম এবং কোড", "শিক্ষার্থীর নাম এবং আইডি", "শিক্ষকের নাম", "জমার তারিখ"]},
        { type: "p", text: "WUB DOX ব্যবহার করে আপনি এই পুরো প্রক্রিয়াটি কয়েক সেকেন্ডেই সম্পন্ন করতে পারেন।" }
      ]
    }
  },
  "2": {
    en: {
      title: "Tips for Lab Report Formatting",
      author: "Admin",
      date: "Jan 17, 2026",
      mainImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
      content: [
        { type: "p", text: "Lab reports focus more on data and observations. A clear layout helps instructors grade your report efficiently." },
        { type: "h3", text: "Formatting Essentials:" },
        { type: "list", items: ["Clear Abstract", "Methodology", "Data Tables", "Conclusion"]},
        { type: "p", text: "WUB DOX has specific templates designed for lab reports!" }
      ]
    },
    bn: {
      title: "ল্যাব রিপোর্ট ফরম্যাটিং টিপস",
      author: "এডমিন",
      date: "১৭ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
      content: [
        { type: "p", text: "ল্যাব রিপোর্টে তথ্য এবং পর্যবেক্ষণের ওপর বেশি গুরুত্ব দেওয়া হয়। একটি সঠিক লেআউট আপনার গ্রেড বৃদ্ধিতে সাহায্য করে।" },
        { type: "h3", text: "প্রয়োজনীয় ফরম্যাটিং:" },
        { type: "list", items: ["পরিষ্কার সারসংক্ষেপ", "কাজের পদ্ধতি বর্ণনা", "ডাটা টেবিল", "উপসংহার"]},
        { type: "p", text: "WUB DOX-এ ল্যাব রিপোর্টের জন্য বিশেষ টেমপ্লেট রয়েছে।" }
      ]
    }
  },
  "3": {
    en: {
      title: "Benefits of Using Online Tools",
      author: "Admin",
      date: "Jan 17, 2026",
      mainImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
      content: [
        { type: "p", text: "Manually designing a cover page in MS Word can be time-consuming and prone to alignment errors." },
        { type: "h3", text: "Why Choose WUB DOX?" },
        { type: "list", items: ["Instant PDF Generation", "Zero Alignment Issues", "Standard University Formats", "Accessible from Mobile"]},
        { type: "p", text: "Embrace technology to focus more on your studies and less on formatting." }
      ]
    },
    bn: {
      title: "অনলাইন টুল ব্যবহারের সুবিধা",
      author: "এডমিন",
      date: "১৭ জানুয়ারি, ২০২৬",
      mainImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
      content: [
        { type: "p", text: "MS Word-এ ম্যানুয়ালি কভার পেজ ডিজাইন করা সময়সাপেক্ষ এবং অনেক সময় অ্যালাইনমেন্ট ঠিক থাকে না।" },
        { type: "h3", text: "কেন WUB DOX সেরা?" },
        { type: "list", items: ["ইনস্ট্যান্ট PDF তৈরি", "নিখুঁত অ্যালাইনমেন্ট", "বিশ্ববিদ্যালয়ের স্ট্যান্ডার্ড ফরম্যাট", "মোবাইল থেকেও ব্যবহারযোগ্য"]},
        { type: "p", text: "প্রযুক্তির সাহায্য নিন যাতে আপনি ফরম্যাটিং-এর বদলে পড়াশোনায় বেশি সময় দিতে পারেন।" }
      ]
    }
  }
};