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
  batch: string;
  group: string;
  roll: string;
  forumNo: string;
  teacherName: string;
  teacherDesignation: string;
  teacherSub: string;
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
  section: "C",
  semester: "",
  batch: "69",
  group: "",
  roll:"",
  forumNo:"",
  teacherName: "",
  teacherDesignation: "professor",
  teacherSub:"",
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
  { key: 'facultyOfScience', en: 'Faculty of Science', bn: 'বিজ্ঞান অনুষদ' },
  { key: 'facultyOfArts', en: 'Faculty of Arts & Humanities', bn: 'কলা ও মানবিক অনুষদ' },
  { key: 'facultyOfBusiness', en: 'Faculty of Business Administration', bn: 'ব্যবসায় প্রশাসন অনুষদ' },
];

// Departments mapped by faculty
export const departmentsByFaculty: Record<string, { key: string; en: string; bn: string }[]> = {
  facultyOfEngineering: [
    { key: 'cse', en: 'Department of Computer Science and Engineering', bn: 'কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগ' },
    { key: 'eee', en: 'Department of Electrical and Electronic Engineering', bn: 'ইলেকট্রিক্যাল এন্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং বিভাগ' },
    { key: 'textile', en: 'Department of Textile Engineering', bn: 'টেক্সটাইল ইঞ্জিনিয়ারিং বিভাগ' },
    { key: 'civil', en: 'Department of Civil Engineering', bn: 'সিভিল ইঞ্জিনিয়ারিং বিভাগ' },
    { key: 'mechatronics', en: 'Department of Mechatronics Engineering', bn: 'মেকাট্রনিক্স ইঞ্জিনিয়ারিং বিভাগ' },
    { key: 'architecture', en: 'Department of Architecture', bn: 'আর্কিটেকচার বিভাগ' },
    { key: 'biomedical', en: 'Department of Biomedical Science and Engineering', bn: 'বায়োমেডিকাল বিজ্ঞান ও প্রকৌশল বিভাগ' },
  ],
  facultyOfScience: [
    { key: 'pharmacy', en: 'Department of Pharmacy', bn: 'ফার্মেসি বিভাগ' },
    { key: 'basicScience', en: 'Basic Science Division', bn: 'মৌলিক বিজ্ঞান বিভাগ' },
  ],
  facultyOfArts: [
    { key: 'english', en: 'Department of English', bn: 'ইংরেজি বিভাগ' },
    { key: 'bed', en: 'Department of Bachelor of Education', bn: 'ব্যাচেলর অব এডুকেশন বিভাগ' },
    { key: 'journalism', en: 'Department of Journalism and Media Studies', bn: 'জার্নালিজম এন্ড মিডিয়া স্টাডিজ বিভাগ' },
    { key: 'law', en: 'Department of Law', bn: 'আইন বিভাগ' },
  ],
  facultyOfBusiness: [
    { key: 'bba', en: 'Department of Business Administration', bn: 'ব্যবসায় প্রশাসন বিভাগ' },
    { key: 'bhtm', en: 'Department of Tourism and Hospitality Management', bn: 'পর্যটন ও আতিথেয়তা ব্যবস্থাপনা বিভাগ' },
  ],
};

// Get all departments flat
export const departments = Object.values(departmentsByFaculty).flat();

// Designations
export const designations = [
  { key: 'professor', en: 'Professor', bn: 'অধ্যাপক' },
  { key: 'honoraryProfessor', en: 'Honorary Professor', bn: 'সম্মানসূচক অধ্যাপক' },
  { key: 'visitingProfessor', en: 'Visiting Professor', bn: 'পরিদর্শনকারী অধ্যাপক' },
  { key: 'distinguishedVisitingProfessor', en: 'Distinguished Visiting Professor', bn: 'বিশিষ্ট পরিদর্শনকারী অধ্যাপক' },
  { key: 'associateProfessor', en: 'Associate Professor', bn: 'সহযোগী অধ্যাপক' },
  { key: 'seniorAssociateProfessor', en: 'Sr. Associate Professor', bn: 'সিনিয়র সহযোগী অধ্যাপক' },
  { key: 'visitingAssociateProfessor', en: 'Visiting Associate Professor', bn: 'পরিদর্শনকারী সহযোগী অধ্যাপক' },
  { key: 'seniorAssistantProfessor', en: 'Sr. Asst. Professor', bn: 'সিনিয়র সহকারী অধ্যাপক' },
  { key: 'assistantProfessor', en: 'Assistant Professor', bn: 'সহকারী অধ্যাপক' },
  { key: 'visitingAssistantProfessor', en: 'Visiting Assistant Professor', bn: 'পরিদর্শনকারী সহকারী অধ্যাপক' },
  { key: 'advisor', en:'Advisor', bn:'উপদেষ্টা'},
  { key: 'seniorLecturer', en: 'Senior Lecturer', bn: 'সিনিয়র প্রভাষক' },
  { key: 'lecturer', en: 'Lecturer', bn: 'প্রভাষক' },
  { key: 'adjunctFaculty', en: 'Adjunct Faculty', bn:'সহযোগী অনুষদ'},
  { key: 'teachingAssistant', en:'Teaching Assistant', bn:'শিক্ষক সহকারী'},
  { key: 'graduateAssistant', en:'Graduate Assistant', bn:'স্নাতক সহকারী'},
  { key: 'lecturerInMath', en: 'Lecturer in Mathematics', bn: 'গণিতের প্রভাষক'},
  { key: 'asstProfessorInMath', en: 'Assistant Professor in Mathematics', bn: 'গণিতের সহকারী অধ্যাপক'},
  { key: 'seniorLecturerInMath', en: 'Senior Lecturer in Mathematics', bn: 'গণিতের সিনিয়র প্রভাষক'},
  { key: 'lecturerInPhysics', en: 'Lecturer in Physics', bn: 'পদার্থবিজ্ঞানে প্রভাষক'},
  { key: 'lecturerInChemistry', en: 'Lecturer in Chemistry', bn: 'রসায়নের প্রভাষক'},
  { key: 'lecturerInStatistics', en: 'Lecturer in Statistics', bn: 'পরিসংখ্যান বিভাগের প্রভাষক'},
  { key: 'lecturerInHistory', en: 'Lecturer in History', bn: 'ইতিহাস বিভাগের প্রভাষক'},
  { key: 'lecturerInBengali', en: 'Lecturer in Bengali Language and Literature', bn: 'বাংলা ভাষা ও সাহিত্যের প্রভাষক'},
  { key: 'lecturerInSocial', en: 'Lecturer in Social Sciences', bn: 'সমাজ বিজ্ঞানের প্রভাষক'},
];

// Teachers by department
export const teachersByDepartment: Record<string, { name: string; designation: string }[]> = {
  cse: [
    { name: 'Professor Mir Mohammad Azad, PhD', designation: 'professor' },
    { name: 'Kazi H. Robin', designation: 'associateProfessor' },
    { name: 'Ahsan Ullah', designation: 'assistantProfessor' },
    { name: 'Shamsun Nahar', designation: 'assistantProfessor' },
    { name: 'Dr. Jannatul Naeem', designation: 'assistantProfessor' },
    { name: 'Dr. Md Amran Hossen', designation: 'assistantProfessor'},
    { name: 'Md. Nazmus Sakib', designation: 'assistantProfessor'},
    { name: 'Afzal Hossain', designation: 'assistantProfessor'},
    { name: 'Kh. Mustafizur Rahman', designation: 'seniorLecturer'},
    { name: 'Mst. Nishita Aktar', designation: 'lecturer'},
    { name: 'Mohammad Anwar Hossain', designation: 'lecturer'},
    { name: 'Noshin Un Noor', designation: 'lecturer'},
    { name: 'Md. Mahedi Hassan', designation: 'lecturer'},
    { name: 'Shihab Uddin Sikder', designation: 'lecturer'},
    { name: 'Fariha Zaman Nishat', designation: 'lecturer'},
    { name: 'Md Tanzim Hossain', designation: 'lecturer'},
    { name: 'Sadia Afrin', designation: 'lecturer'},
    { name: 'Amir Khabbab Ahammed', designation: 'lecturer'},
    { name: 'Asadullah Bin Rahman', designation: 'lecturer'},
    { name: 'Tanzin Ahammad', designation: 'lecturer'},
    { name: 'Sumaiya Rahman', designation: 'lecturer'},
    { name: 'Syeda Jannatul Naim', designation: 'lecturer'},
    { name: 'Sifat Moonjerin', designation: 'lecturer'},
    { name: 'Md. Raihanul Haque', designation: 'lecturer'},
    { name: 'Musfique-us-Salehin Arnob', designation: 'graduateAssistant'},
  ],
  eee: [
    { name: 'Professor Dr. Mohammad Quamruzzaman', designation: 'professor' },
    { name: 'Md Golam Sorwar Hossain', designation: 'professor' },
    { name: 'Shamsuzzoha', designation: 'associateProfessor' },
    { name: 'Dr. Md. Riyad Tanshen', designation: 'associateProfessor' },
    { name: 'Dr. Md. Mohsin', designation: 'seniorAssistantProfessor' },
    { name: 'Md. Nayeem Hasan Mallick', designation: 'assistantProfessor' },
    { name: 'Md. Istianatur Rahman', designation: 'seniorLecturer' },
    { name: 'Farhana Latif', designation: 'seniorLecturer' },
    { name: 'Debprosad Das', designation: 'lecturer' },
    { name: 'Md. Sharif Uddin Shajib', designation: 'lecturer' },
    { name: 'Md. Abdu Rabbir Rasul', designation: 'lecturer' },
  ],
  textile: [
    { name: 'Md. Mostafizur Rahman', designation: 'associateProfessor' },
    { name: 'Dr. Ruhul Amin Khan', designation: 'advisor' },
    { name: 'Md. Shamsuzzaman', designation: 'assistantProfessor' },
    { name: 'Mohammad Bellal Hoque', designation: 'seniorLecturer' },
    { name: 'Dip Das', designation: 'lecturer' },
    { name: 'Tahsina Sahrin', designation: 'lecturer' },
    { name: 'Badhon Baria', designation: 'lecturer' },
    { name: 'Md. Riazur Rahman', designation: 'lecturer' },
    { name: 'Md. Ariful Hossain Faisal', designation: 'lecturer' },
  ],
  civil: [
    { name: 'Sagor Kumar Podder', designation: 'assistantProfessor' },
    { name: 'Prof. A F M Abdur Rauf', designation: 'professor' },
    { name: 'Dr. Engr. RABINDRA RANJAN SAHA', designation: 'associateProfessor' },
    { name: 'Dr.Leevesh Kumar', designation: 'associateProfessor' },
    { name: 'Dr. Susankar Chandra Acharjee', designation: 'visitingAssociateProfessor' },
    { name: 'Dr. Partha Saha', designation: 'seniorAssistantProfessor' },
    { name: 'Taimur Rahman', designation: 'assistantProfessor' },
    { name: 'Md. Hasibul Hasan', designation: 'assistantProfessor' },
    { name: 'Afroza Ayub', designation: 'seniorLecturer' },
    { name: 'Md. Kamruzzaman', designation: 'lecturer' },
    { name: 'Rokhshana Parvin', designation: 'lecturer' },
    { name: 'Md. Tanvir Ahmed', designation: 'lecturer' },
    { name: 'Hamidur Rahaman', designation: 'lecturer' },
    { name: 'Md. Asaduzzaman Rasel', designation: 'lecturer' },
    { name: 'Md. Farhad Momin', designation: 'lecturer' },
    { name: 'Afra Anam Provasha', designation: 'lecturer' },
    { name: 'Abdul Mukit', designation: 'lecturer' },
    { name: 'Md. Abtahi Rabby', designation: 'lecturer' },
    { name: 'Abdur Razzak Zubaer', designation: 'lecturer' },
    { name: 'Hasan Ul Kabir Joy', designation: 'lecturer' },
    { name: 'Md. Nur Al Nashib', designation: 'lecturer' },
    { name: 'Md. Samiul Karim Khan', designation: 'lecturer' },
    { name: 'Md. Mamun Mia', designation: 'lecturer' },
    { name: 'Imtiaz Ahmad Saba', designation: 'lecturer' },
  ],
  mechatronics: [
    { name: 'Farhan Mahbub', designation: 'associateProfessor' },
    { name: 'Prof. Dr. S.M. Fazlul Karim', designation: 'professor' },
    { name: 'Prof. Dr. Md. Mizanur Rahman', designation: 'professor' },
    { name: 'Prof. Dr. Md. Shawkut Ali Khan', designation: 'professor' },
    { name: 'A K M Zainul Abedin', designation: 'seniorAssociateProfessor' },
    { name: 'Rumana Tasnim', designation: 'assistantProfessor' },
    { name: 'Rezwan Us Saleheen', designation: 'assistantProfessor' },
    { name: 'Enamul Hoq', designation: 'assistantProfessor' },
    { name: 'Mustafizur Rahman', designation: 'assistantProfessor' },
    { name: 'Md. Sohel Rana', designation: 'assistantProfessor' },
    { name: 'Masud Rana', designation: 'assistantProfessor' },
    { name: 'Nahiyan Al-Azad', designation: 'assistantProfessor' },
    { name: 'Tarazul Mulk Syed Anzam Hossain', designation: 'seniorLecturer' },
    { name: 'Ahmed Farhan', designation: 'seniorLecturer' },
    { name: 'Md. Sadatuzzaman Saagoto', designation: 'lecturer' },
    { name: 'Protik Barua', designation: 'lecturer' },
    { name: 'Md Shariful Islam', designation: 'lecturer' },
    { name: 'Subrata Saha', designation: 'lecturer' },
    { name: 'Yusuf Ali', designation: 'lecturer' },
    { name: 'Md. Helal Hossain', designation: 'lecturer' },
    { name: 'Meghdeepa Choudhury', designation: 'lecturer' },
    { name: 'Zayeed Bin Mamun', designation: 'lecturer' },
    { name: 'Khairun Nasrin Rimi', designation: 'lecturer' },
    { name: 'Avishek Chowdhury', designation: 'lecturer' },
    { name: 'Ahmad Abdullah Mujahid', designation: 'lecturer' },
    { name: 'Taher Hasan Nakib', designation: 'lecturer' },
    { name: 'Mahbuba Laila', designation: 'lecturer' },
    { name: 'Md Hasibur Rahman', designation: 'teachingAssistant' },
    { name: 'A.Z.M.Mehedi Hasan', designation: 'graduateAssistant' },
  ],
  architecture: [
    { name: 'Zenat Islam', designation: 'associateProfessor' },
    { name: 'Shafinaz Sameen', designation: 'assistantProfessor' },
    { name: 'Urmi Sarkar', designation: 'seniorLecturer' },
    { name: 'Md. Shamsul Arefin', designation: 'lecturer' },
    { name: 'Robaet Noor Niloy ', designation: 'lecturer' },
    { name: 'Labanya Prova Biswas', designation: 'lecturer' },
    { name: 'Mahmudul Hasan Bhuiyan', designation: 'lecturer' },
  ],
  biomedical: [
    { name: 'Dr. Swapan Kumar Sarkar ', designation: 'associateProfessor' },
    { name: 'Dr. S.M. Mahmudul Hasan', designation: 'assistantProfessor' },
    { name: 'Dr. Fathema Tuz Zohra', designation: 'lecturer' },
    { name: 'Dr. Shah Ahsanul Imran ', designation: 'associateProfessor' },
    { name: 'Dr. Tanzina Afrose', designation: 'associateProfessor' },
    { name: 'Istiaque Hasan ', designation: 'lecturer' },
    { name: 'Dr. Mostafa Mahtab Toaha', designation: 'lecturer' },
  
  ],
  bba: [
    { name: 'Prof. Dr. Selim Ahmed', designation: 'professor' },
    { name: 'Issa Ahammad', designation: 'associateProfessor' },
    { name: 'DR. ANTONIO HYDER', designation: 'honoraryProfessor' },
    { name: 'DR. MUHAMMAD MOHIUDDIN', designation: 'visitingProfessor' },
    { name: 'Dr J.S. Keshminder', designation: 'visitingProfessor' },
    { name: 'Dr Mahfuzur Rahman', designation: 'visitingProfessor' },
    { name: 'Dr. Dieu Hack-Polay', designation: 'visitingProfessor' },
    { name: 'Prof. Dr. Mohammad Faisal Ahammad', designation: 'distinguishedVisitingProfessor' },
    { name: 'Md Moniruzzaman', designation: 'assistantProfessor' },
    { name: 'Abdullah Mohammad Sharif', designation: 'assistantProfessor' },
    { name: 'Priyanka Das Dona', designation: 'assistantProfessor' },
    { name: 'Helaluddin Ahmed', designation: 'assistantProfessor' },
    { name: 'Md Iftekharul Islam Bhuiya', designation: 'assistantProfessor' },
    { name: 'Md. Azim', designation: 'assistantProfessor' },
    { name: 'Dr. Kamal Hossain', designation: 'assistantProfessor' },
    { name: 'Arindam Datta', designation: 'assistantProfessor' },
    { name: 'Dr. Tajneen Affnaan Saleh', designation: 'lecturer' },
    { name: 'Nasrin Shamima', designation: 'seniorLecturer' },
    { name: 'Dr. Md. Mohidul Islam', designation: 'seniorLecturer' },
    { name: 'Dr. Sharif Hosen', designation: 'seniorLecturer' },
    { name: 'Ahmed Al Asheq', designation: 'lecturer' },
    { name: 'Md. Amith', designation: 'lecturer' },
    { name: 'Sakila Sultana', designation: 'lecturer' },
  ],
  bhtm: [
    { name: 'Mohammad Nasimul Azim', designation: 'professor' },
    { name: 'Md. Abdul Latif Mahmud', designation: 'assistantProfessor' },
    { name: 'Pulak Sarker', designation: 'lecturer' },
    { name: 'Sara Murtaza', designation: 'lecturer' },
    { name: 'Md. Morsalin', designation: 'lecturer' },
    { name: 'Dilshad Ara Raka', designation: 'adjunctFaculty' },
  ],
  english: [
    { name: 'Professor Dr. Mohammad Arshad Ali', designation: 'professor' },
    { name: 'Md. Nasim Fardose Sajib', designation: 'assistantProfessor' },
    { name: 'Md. Nurullah Patwary', designation: 'assistantProfessor' },
    { name: 'Md. Saiful Alam', designation: 'assistantProfessor' },
    { name: 'Humayra Akhter', designation: 'seniorLecturer' },
    { name: 'Sumona Sharmin', designation: 'seniorLecturer' },
    { name: 'Mahbuba Sarker Shama', designation: 'seniorLecturer' },
    { name: 'Abdus Salam', designation: 'seniorLecturer' },
    { name: 'Israt Jahan', designation: 'lecturer' },
    { name: 'Sarah Tabassum', designation: 'lecturer' },
    { name: 'MD. ATIK ULLAH', designation: 'lecturer' },
    { name: 'Sadia Afroj Tithi', designation: 'lecturer' },
    { name: 'Mahfuza Rahat Oishy', designation: 'lecturer' },
    { name: 'Naziba Saiyara', designation: 'lecturer' },
    { name: 'Anindya Sarker', designation: 'lecturer' },
    { name: 'Imrose Afrine', designation: 'lecturer' },
    { name: 'Sadia Tul Farzana', designation: 'lecturer' },
    { name: 'Tamanna Hossain', designation: 'lecturer' },
    { name: 'Sanjida Akter', designation: 'lecturer' },
    { name: 'Rezuana Tabassum', designation: 'lecturer' },
  ],
  bed: [
    { name: 'Prof. Dr. M. Zahangir Kabir', designation: 'professor' },
    { name: 'Dr. Tariquil Islam', designation: 'seniorLecturer' },
    { name: 'Sushmita Chakraborty Mishu', designation:'lecturer'},
    { name: 'Israt Jahan', designation:'lecturer'},
    { name: 'Mir Hasib Mahmud', designation:'lecturer'},
  ],
  journalism: [
    { name: 'Prof. Dr. M. Zahangir Kabir', designation: 'professor' },
    { name: 'Dr. Tariquil Islam', designation: 'seniorLecturer' },
    { name: 'Sushmita Chakraborty Mishu', designation:'lecturer'},
    { name: 'Israt Jahan', designation:'lecturer'},
    { name: 'Mir Hasib Mahmud', designation:'lecturer'},
  ],
  law: [
    { name: 'Professor Dr. Md. Abdul Jalil', designation: 'professor' },
    { name: 'Dr. Mohiuddin Md. Al-Amin', designation: 'assistantProfessor' },
    { name: 'Dr. Md. Tuhin Mia', designation: 'assistantProfessor' },
    { name: 'Md. Mahmudul Hasan Raziv', designation: 'assistantProfessor' },
    { name: 'Tanim Hasan Jim ', designation: 'lecturer' },
    { name: 'Ruel Lincoln Baro', designation: 'lecturer' },
    { name: 'Rizowan Ahmed', designation: 'lecturer' },
    { name: 'Md. Fahmedul Islam Dewan', designation: 'lecturer' },
    { name: 'Kazi Fariha Jannat', designation: 'lecturer' },
    { name: 'Sumayya Rahman', designation: 'lecturer' },
  ],
  pharmacy: [
    { name: 'Dr. Md. Harun Or Rashid', designation: 'professor' },
    { name: 'Mohammad Shawkat Ali', designation: 'advisor' },
    { name: 'Prof. Dr. Firoj Ahmed', designation: 'professor' },
    { name: 'Zubair Khalid Labu', designation: 'associateProfessor' },
    { name: 'Khurshid Jahan', designation: 'assistantProfessor' },
    { name: 'Farhina Rahman Laboni', designation: 'assistantProfessor' },
    { name: 'Dr. Samira Karim', designation: 'assistantProfessor' },
    { name: 'Sarder Arifuzzaman', designation: 'seniorLecturer' },
    { name: 'Rahima Akter', designation: 'lecturer' },
    { name: 'Md. Shakil', designation: 'lecturer' },
    { name: 'Md. Tarekur Rahman', designation: 'lecturer' },
    { name: 'Farjana Akter Rupon', designation: 'lecturer' },
    { name: 'Tahsin Ahmed', designation: 'lecturer' },
    { name: 'Anika Tabassum', designation: 'lecturer' },
    { name: 'Mohammad Samiul Hossain Sujan', designation: 'adjunctFaculty' },
  ],
  basicScience:[
    { name: 'Saddam Hossain', designation: 'lecturerInMath'},
    { name: 'Suman Kar', designation: 'asstProfessorInMath'},
    { name: 'Imran Hassan', designation: 'seniorLecturerInMath'},
    { name: 'Dr. Md. Abdul Alim', designation: 'seniorLecturer'},
    { name: 'Liza Bosak', designation: 'lecturerInStatistics'},
    { name: 'Chinmoy Kumar Mallick', designation: 'lecturerInBengali'},
    { name: 'Mohammad Rashik Zaman', designation: 'lecturerInPhysics'},
    { name: 'Tamanna Sharmin Mazumder', designation: 'lecturer'},
    { name: 'Md. Toriqul Islam', designation: 'lecturerInMath'},
    { name: 'Ommee Makhjana Bithee', designation: 'lecturerInPhysics'},
    { name: 'Mohaiminul Islam', designation: 'lecturerInChemistry'},
    { name: 'Jannatul Afrin Nimme', designation: 'lecturerInHistory'},
    { name: 'Farjana Yeasmin', designation: 'lecturerInPhysics'},
    { name: 'Ibrahim Khalil', designation: 'lecturerInChemistry'},
    { name: 'Mithun Khan', designation: 'lecturerInPhysics'},
    { name: 'Fahim Faisal', designation: 'lecturerInPhysics'},
    { name: 'Anwar Ahmad Siddiquee', designation: 'lecturerInMath'},
    { name: 'Sadia Sultana', designation: 'lecturerInBengali'},
    { name: 'Ritu Aktary', designation: 'lecturerInMath'},
    { name: 'Nusrat Jahan', designation: 'lecturerInMath'},
    { name: 'Mahmuda Rahman Deeba', designation: 'lecturerInStatistics'},
    { name: 'Md. Khalil Islam', designation: 'lecturerInMath'},
    { name: 'Shamima Akther', designation: 'lecturerInBengali'},
  ]
};

export const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th','9th', '10th', '11th', '12th'];
export const sections = ['A', 'B', 'C', 'D','E','F','G','H','I','J'];
export const groups = ['A', 'B', 'C', 'D', '1', '2', '3', '4'];

// Helper to get department for a faculty
export const getDepartmentsForFaculty = (facultyKey: string) => {
  return departmentsByFaculty[facultyKey] || [];
};

// Helper to get teachers for a department
export const getTeachersForDepartment = (departmentKey: string) => {
  return teachersByDepartment[departmentKey] || [];
};
