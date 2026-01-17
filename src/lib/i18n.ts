import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      templates: "Templates",
      editor: "Editor",
      blogs: "Blogs",
      
      // Hero
      heroTitle: "WUB Cover Page Generator",
      heroSubtitle: "Create professional cover pages for your assignments, lab reports, and more",
      getStarted: "Get Started",
      
      // Templates
      assignment: "Assignment",
      forum: "Forum",
      labReport: "Lab Report",
      homework: "Homework",
      selectTemplate: "Select a Template",
      chooseStyle: "Choose Style",
      index: "Index",
      
      // Form Labels
      universityName: "University Name",
      departmentName: "Department Name",
      facultyName: "Faculty Name",
      courseName: "Course Name",
      courseCode: "Course Code",
      courseTitle: "Course Title",
      assignmentTitle: "Assignment Title",
      assignmentNo: "Assignment No",
      experimentNo: "Experiment No",
      experimentName: "Experiment Name",
      topicName: "Topic Name",
      
      // Student Info
      submittedBy: "Submitted By",
      submittedTo: "Submitted To",
      studentName: "Student Name",
      studentId: "Student ID",
      section: "Section",
      semester: "Semester",
      session: "Session",
      batch: "Batch",
      group: "Group",
      roll: "Roll",
      forumNo: "Forum No",
      
      // Teacher Info
      teacherName: "Teacher Name",
      teacherDesignation: "Designation",
      
      // Dates
      submissionDate: "Submission Date",
      experimentDate: "Experiment Date",
      
      // Actions
      preview: "Preview",
      download: "Download",
      print: "Print",
      save: "Save",
      reset: "Reset",
      back: "Back",
      
      // Footer
      madeWith: "Made with ❤️ for WUB students",
      
      // Faculties
      facultyOfEngineering: "Faculty of Engineering",
      facultyOfScience: "Faculty of Science",
      facultyOfArts: "Faculty of Arts",
      facultyOfBusiness: "Faculty of Business Administration",
      facultyOfLaw: "Faculty of Law",
      facultyOfHealth: "Faculty of Health Sciences",
      
      // Departments
      cse: "Computer Science and Engineering",
      eee: "Electrical and Electronic Engineering",
      pharmacy: "Pharmacy",
      textile: "Textile Engineering",
      civil: "Civil Engineering",
      law: "Law",
      bba: "Bachelor of Business Administration",
      bhtm: "Bachelor of Hospitality and Tourism Management",
      journalism: "Journalism and Media Studies",
      english: "English",
      bed: "Bachelor of Education",
      mechatronics: "Mechatronics Engineering",
      mechanical: "Mechanical Engineering",
      automobile: "Automobile Engineering",
      apparel: "Apparel Manufacturing Engineering",
      publicHealth: "Public Health",
      fashion: "Fashion Design and Apparel Technology",
      architecture: "Architecture",
      biomedical: "Biomedical Engineering and Public Health",
      
      // Designations
      lecturer: "Lecturer",
      seniorLecturer: "Senior Lecturer",
      assistantProfessor: "Assistant Professor",
      associateProfessor: "Associate Professor",
      professor: "Professor",
      
      // Template styles
      style1: "Classic",
      style2: "Modern",
      style3: "Pattern-1",
      style4: "Pattern-2",
    },
      // Contact details
      Contact: "Contact",
  },
  bn: {
    translation: {
      // Navigation
      home: "হোম",
      templates: "টেমপ্লেট",
      editor: "এডিটর",
      blogs: "ব্লগ",
      
      // Hero
      heroTitle: "WUB কভার পেজ জেনারেটর",
      heroSubtitle: "আপনার অ্যাসাইনমেন্ট, ল্যাব রিপোর্ট এবং আরও অনেক কিছুর জন্য পেশাদার কভার পেজ তৈরি করুন",
      getStarted: "শুরু করুন",
      
      // Templates
      assignment: "অ্যাসাইনমেন্ট",
      forum: "ফোরাম",
      labReport: "ল্যাব রিপোর্ট",
      homework: "হোমওয়ার্ক",
      selectTemplate: "একটি টেমপ্লেট নির্বাচন করুন",
      chooseStyle: "স্টাইল নির্বাচন করুন",
      index: "ইনডেক্স ",
      
      // Form Labels
      universityName: "বিশ্ববিদ্যালয়ের নাম",
      departmentName: "বিভাগের নাম",
      facultyName: "অনুষদের নাম",
      courseName: "কোর্সের নাম",
      courseCode: "কোর্স কোড",
      courseTitle: "কোর্স শিরোনাম",
      assignmentTitle: "অ্যাসাইনমেন্ট শিরোনাম",
      assignmentNo: "অ্যাসাইনমেন্ট নম্বর",
      experimentNo: "এক্সপেরিমেন্ট নম্বর",
      experimentName: "এক্সপেরিমেন্টের নাম",
      topicName: "বিষয়ের নাম",
      
      // Student Info
      submittedBy: "জমা দিয়েছেন",
      submittedTo: "জমা দেওয়া হয়েছে",
      studentName: "শিক্ষার্থীর নাম",
      studentId: "শিক্ষার্থী আইডি",
      section: "সেকশন",
      semester: "সেমিস্টার",
      session: "সেশন",
      batch: "ব্যাচ",
      group: "গ্রুপ",
      roll:"রোল",
      forumNo: "ফোরাম নং",
      
      // Teacher Info
      teacherName: "শিক্ষকের নাম",
      teacherDesignation: "পদবী",
      
      // Dates
      submissionDate: "জমা দেওয়ার তারিখ",
      experimentDate: "এক্সপেরিমেন্টের তারিখ",
      
      // Actions
      preview: "প্রিভিউ",
      download: "ডাউনলোড",
      print: "প্রিন্ট",
      save: "সংরক্ষণ",
      reset: "রিসেট",
      back: "পেছনে",
      
      // Footer
      madeWith: "WUB শিক্ষার্থীদের জন্য ❤️ দিয়ে তৈরি",
      
      // Faculties
      facultyOfEngineering: "প্রকৌশল অনুষদ",
      facultyOfScience: "বিজ্ঞান অনুষদ",
      facultyOfArts: "কলা অনুষদ",
      facultyOfBusiness: "ব্যবসায় প্রশাসন অনুষদ",
      facultyOfLaw: "আইন অনুষদ",
      facultyOfHealth: "স্বাস্থ্য বিজ্ঞান অনুষদ",
      
      // Departments
      cse: "কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং",
      eee: "ইলেকট্রিক্যাল এন্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং",
      pharmacy: "ফার্মেসি",
      textile: "টেক্সটাইল ইঞ্জিনিয়ারিং",
      civil: "সিভিল ইঞ্জিনিয়ারিং",
      law: "আইন",
      bba: "ব্যাচেলর অব বিজনেস অ্যাডমিনিস্ট্রেশন",
      bhtm: "ব্যাচেলর অব হসপিটালিটি এন্ড ট্যুরিজম ম্যানেজমেন্ট",
      journalism: "জার্নালিজম এন্ড মিডিয়া স্টাডিজ",
      english: "ইংরেজি",
      bed: "ব্যাচেলর অব এডুকেশন",
      mechatronics: "মেকাট্রনিক্স ইঞ্জিনিয়ারিং",
      mechanical: "মেকানিক্যাল ইঞ্জিনিয়ারিং",
      automobile: "অটোমোবাইল ইঞ্জিনিয়ারিং",
      apparel: "অ্যাপারেল ম্যানুফ্যাকচারিং ইঞ্জিনিয়ারিং",
      publicHealth: "পাবলিক হেলথ",
      fashion: "ফ্যাশন ডিজাইন এন্ড অ্যাপারেল টেকনোলজি",
      architecture: "আর্কিটেকচার",
      biomedical: "বায়োমেডিক্যাল ইঞ্জিনিয়ারিং এন্ড পাবলিক হেলথ",
      
      // Designations
      lecturer: "প্রভাষক",
      seniorLecturer: "সিনিয়র প্রভাষক",
      assistantProfessor: "সহকারী অধ্যাপক",
      associateProfessor: "সহযোগী অধ্যাপক",
      professor: "অধ্যাপক",
      
      // Template styles
      style1: "ক্লাসিক",
      style2: "মডার্ন",
      style3: "প্যাটার্ন-১",
      style4: "প্যাটার্ন-২",

      // Contact Page
      Contact: "যোগাযোগ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
