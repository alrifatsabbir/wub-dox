export interface CoverPageData {
  universityName: string;
  facultyName: string;
  departmentName: string;
  courseName: string;
  courseCode: string;
  courseTitle: string;
  assignmentTitle: string;
  assignmentNo: string;
  experimentNo: string;
  experimentName: string;
  topicName: string;
  studentName: string;
  studentId: string;
  section: string;
  semester: string;
  session: string;
  batch: string;
  group: string;
  teacherName: string;
  teacherDesignation: string;
  submissionDate: string;
  experimentDate: string;
}

export const defaultCoverPageData: CoverPageData = {
  universityName: "World University of Bangladesh",
  facultyName: "facultyOfEngineering",
  departmentName: "cse",
  courseName: "",
  courseCode: "",
  courseTitle: "",
  assignmentTitle: "",
  assignmentNo: "1",
  experimentNo: "1",
  experimentName: "",
  topicName: "",
  studentName: "",
  studentId: "",
  section: "A",
  semester: "1st",
  session: "2023-24",
  batch: "",
  group: "A",
  teacherName: "",
  teacherDesignation: "lecturer",
  submissionDate: new Date().toISOString().split('T')[0],
  experimentDate: new Date().toISOString().split('T')[0],
};

const STORAGE_KEY = 'coverPageData';

export const saveToLocalStorage = (data: CoverPageData): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadFromLocalStorage = (): CoverPageData => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return { ...defaultCoverPageData, ...JSON.parse(stored) };
  }
  return defaultCoverPageData;
};

export const clearLocalStorage = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

// Faculty definitions
export const faculties = [
  { key: 'facultyOfEngineering', en: 'Faculty of Engineering', bn: 'প্রকৌশল অনুষদ' },
  { key: 'facultyOfScience', en: 'Faculty of Science & Health', bn: 'বিজ্ঞান ও স্বাস্থ্য অনুষদ' },
  { key: 'facultyOfArts', en: 'Faculty of Arts & Humanities', bn: 'কলা ও মানবিক অনুষদ' },
  { key: 'facultyOfBusiness', en: 'Faculty of Business & Social Science', bn: 'ব্যবসায় ও সামাজিক বিজ্ঞান অনুষদ' },
  { key: 'facultyOfLaw', en: 'Faculty of Law', bn: 'আইন অনুষদ' },
];

// Departments mapped by faculty
export const departmentsByFaculty: Record<string, { key: string; en: string; bn: string }[]> = {
  facultyOfEngineering: [
    { key: 'cse', en: 'Computer Science and Engineering', bn: 'কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং' },
    { key: 'eee', en: 'Electrical and Electronic Engineering', bn: 'ইলেকট্রিক্যাল এন্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং' },
    { key: 'textile', en: 'Textile Engineering', bn: 'টেক্সটাইল ইঞ্জিনিয়ারিং' },
    { key: 'civil', en: 'Civil Engineering', bn: 'সিভিল ইঞ্জিনিয়ারিং' },
    { key: 'mechatronics', en: 'Mechatronics Engineering', bn: 'মেকাট্রনিক্স ইঞ্জিনিয়ারিং' },
    { key: 'mechanical', en: 'Mechanical Engineering', bn: 'মেকানিক্যাল ইঞ্জিনিয়ারিং' },
    { key: 'automobile', en: 'Automobile Engineering', bn: 'অটোমোবাইল ইঞ্জিনিয়ারিং' },
    { key: 'apparel', en: 'Apparel Manufacturing Engineering', bn: 'অ্যাপারেল ম্যানুফ্যাকচারিং ইঞ্জিনিয়ারিং' },
    { key: 'architecture', en: 'Architecture', bn: 'আর্কিটেকচার' },
    { key: 'biomedical', en: 'Biomedical Engineering and Public Health', bn: 'বায়োমেডিক্যাল ইঞ্জিনিয়ারিং এন্ড পাবলিক হেলথ' },
  ],
  facultyOfScience: [
    { key: 'pharmacy', en: 'Pharmacy', bn: 'ফার্মেসি' },
    { key: 'publicHealth', en: 'Public Health', bn: 'পাবলিক হেলথ' },
  ],
  facultyOfArts: [
    { key: 'english', en: 'English', bn: 'ইংরেজি' },
    { key: 'bed', en: 'Bachelor of Education', bn: 'ব্যাচেলর অব এডুকেশন' },
    { key: 'journalism', en: 'Journalism and Media Studies', bn: 'জার্নালিজম এন্ড মিডিয়া স্টাডিজ' },
    { key: 'fashion', en: 'Fashion Design and Apparel Technology', bn: 'ফ্যাশন ডিজাইন এন্ড অ্যাপারেল টেকনোলজি' },
  ],
  facultyOfBusiness: [
    { key: 'bba', en: 'Bachelor of Business Administration', bn: 'ব্যাচেলর অব বিজনেস অ্যাডমিনিস্ট্রেশন' },
    { key: 'bhtm', en: 'Bachelor of Hospitality and Tourism Management', bn: 'ব্যাচেলর অব হসপিটালিটি এন্ড ট্যুরিজম ম্যানেজমেন্ট' },
  ],
  facultyOfLaw: [
    { key: 'law', en: 'Law', bn: 'আইন' },
  ],
};

// Get all departments flat
export const departments = Object.values(departmentsByFaculty).flat();

// Designations
export const designations = [
  { key: 'lecturer', en: 'Lecturer', bn: 'প্রভাষক' },
  { key: 'seniorLecturer', en: 'Senior Lecturer', bn: 'সিনিয়র প্রভাষক' },
  { key: 'assistantProfessor', en: 'Assistant Professor', bn: 'সহকারী অধ্যাপক' },
  { key: 'associateProfessor', en: 'Associate Professor', bn: 'সহযোগী অধ্যাপক' },
  { key: 'professor', en: 'Professor', bn: 'অধ্যাপক' },
];

// Teachers by department
export const teachersByDepartment: Record<string, { name: string; designation: string }[]> = {
  cse: [
    { name: 'Dr. Mohammad Rahman', designation: 'professor' },
    { name: 'Fatema Akter', designation: 'assistantProfessor' },
    { name: 'Md. Kamal Hossain', designation: 'lecturer' },
    { name: 'Nusrat Jahan', designation: 'seniorLecturer' },
    { name: 'Abdullah Al Mamun', designation: 'lecturer' },
  ],
  eee: [
    { name: 'Dr. Abdul Karim', designation: 'professor' },
    { name: 'Sharmin Sultana', designation: 'associateProfessor' },
    { name: 'Md. Rafiqul Islam', designation: 'lecturer' },
    { name: 'Tahmina Begum', designation: 'assistantProfessor' },
  ],
  pharmacy: [
    { name: 'Dr. Hasina Begum', designation: 'professor' },
    { name: 'Md. Shafiqul Islam', designation: 'seniorLecturer' },
    { name: 'Rabeya Khatun', designation: 'lecturer' },
  ],
  textile: [
    { name: 'Dr. Nurul Amin', designation: 'professor' },
    { name: 'Md. Jahangir Alam', designation: 'assistantProfessor' },
    { name: 'Salma Akter', designation: 'lecturer' },
  ],
  civil: [
    { name: 'Dr. Mizanur Rahman', designation: 'professor' },
    { name: 'Md. Sohel Rana', designation: 'seniorLecturer' },
    { name: 'Jasmine Akter', designation: 'lecturer' },
  ],
  law: [
    { name: 'Advocate Md. Rafiq Ahmed', designation: 'professor' },
    { name: 'Barrister Sharmin Akter', designation: 'associateProfessor' },
    { name: 'Advocate Kamrul Hasan', designation: 'lecturer' },
  ],
  bba: [
    { name: 'Dr. Faruque Ahmed', designation: 'professor' },
    { name: 'Md. Nasir Uddin', designation: 'assistantProfessor' },
    { name: 'Sabrina Islam', designation: 'lecturer' },
  ],
  bhtm: [
    { name: 'Dr. Shamima Nasrin', designation: 'associateProfessor' },
    { name: 'Md. Zahid Hasan', designation: 'lecturer' },
  ],
  journalism: [
    { name: 'Dr. Shamsul Alam', designation: 'professor' },
    { name: 'Rifat Ara', designation: 'seniorLecturer' },
    { name: 'Md. Imran Hossain', designation: 'lecturer' },
  ],
  english: [
    { name: 'Dr. Rubina Akter', designation: 'professor' },
    { name: 'Md. Tanvir Ahmed', designation: 'assistantProfessor' },
    { name: 'Farzana Yasmin', designation: 'lecturer' },
  ],
  bed: [
    { name: 'Dr. Shahidul Islam', designation: 'professor' },
    { name: 'Meherunnesa', designation: 'seniorLecturer' },
  ],
  mechatronics: [
    { name: 'Dr. Asif Rahman', designation: 'associateProfessor' },
    { name: 'Md. Robiul Islam', designation: 'lecturer' },
    { name: 'Sharmin Nahar', designation: 'assistantProfessor' },
  ],
  mechanical: [
    { name: 'Dr. Kazi Shafiqul', designation: 'professor' },
    { name: 'Md. Ashraf Ali', designation: 'seniorLecturer' },
  ],
  automobile: [
    { name: 'Md. Kamruzzaman', designation: 'assistantProfessor' },
    { name: 'Sohana Akter', designation: 'lecturer' },
  ],
  apparel: [
    { name: 'Dr. Sultana Razia', designation: 'associateProfessor' },
    { name: 'Md. Habibur Rahman', designation: 'lecturer' },
  ],
  publicHealth: [
    { name: 'Dr. Nazmul Huda', designation: 'professor' },
    { name: 'Farhana Akter', designation: 'assistantProfessor' },
  ],
  fashion: [
    { name: 'Taslima Akter', designation: 'seniorLecturer' },
    { name: 'Md. Rakib Hasan', designation: 'lecturer' },
  ],
  architecture: [
    { name: 'Ar. Mohammad Ali', designation: 'associateProfessor' },
    { name: 'Ar. Nasreen Sultana', designation: 'lecturer' },
  ],
  biomedical: [
    { name: 'Dr. Rezaul Karim', designation: 'professor' },
    { name: 'Shahnaz Parvin', designation: 'assistantProfessor' },
  ],
};

export const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
export const sections = ['A', 'B', 'C', 'D'];
export const groups = ['A', 'B', 'C', 'D', '1', '2', '3', '4'];

// Helper to get department for a faculty
export const getDepartmentsForFaculty = (facultyKey: string) => {
  return departmentsByFaculty[facultyKey] || [];
};

// Helper to get teachers for a department
export const getTeachersForDepartment = (departmentKey: string) => {
  return teachersByDepartment[departmentKey] || [];
};
