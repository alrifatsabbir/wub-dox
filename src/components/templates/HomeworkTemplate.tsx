import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CoverPageData, faculties, departments, designations } from '@/lib/storage';

interface TemplateProps {
  data: CoverPageData;
  style?: number;
}

const HomeworkTemplate = forwardRef<HTMLDivElement, TemplateProps>(({ data, style = 1 }, ref) => {
  const { i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const faculty = faculties.find((f) => f.key === data.facultyName);
  const department = departments.find((d) => d.key === data.departmentName);
  const designation = designations.find((d) => d.key === data.teacherDesignation);

  const facultyName = isBengali ? faculty?.bn : faculty?.en;
  const departmentName = isBengali ? department?.bn : department?.en;
  const designationName = isBengali ? designation?.bn : designation?.en || data.teacherDesignation;

  // --- STYLE 2 (Border & Gradient) ---
  if (style === 2) {
    return (
      <div ref={ref} className={`w-[210mm] min-h-[297mm] bg-white p-10 mx-auto shadow-elevated ${isBengali ? 'font-bengali' : 'font-body'}`} style={{ aspectRatio: '210/297' }}>
        <div className="h-full border-[3px] border-[#1a365d] p-8 flex flex-col relative">
          <div className="absolute top-4 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-[#d69e2e] to-transparent" />
          <div className="text-center space-y-3 mb-6 pt-4">
            <img src="/wub.png" alt="wub-logo" />
            <h2 className="text-xl text-[#718096]">{departmentName}</h2>
          </div>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="flex-1 h-px bg-[#d69e2e]" />
            <div className="w-4 h-4 border-2 border-[#d69e2e] rotate-45" />
            <div className="flex-1 h-px bg-[#d69e2e]" />
          </div>
          <div className="text-center my-6">
            <div className="inline-flex rounded-xl gap-4 px-12 py-4 bg-[#1a365d] text-white">
              <h2 className="text-2xl font-display font-bold tracking-wider">{isBengali ? 'হোমওয়ার্ক' : 'HOMEWORK'}</h2>
            </div>
          </div>
          <div className="my-6 text-center">
            <div className="flex flex-col text-start ml-16 space-y-2">
              <p className="text-lg font-semibold text-[#718096]">{isBengali ? 'কোর্স কোড' : 'Course Code'}: <span className="font-bold text-[#1a365d]">{data.courseCode}</span></p>
              <p className="text-lg font-semibold text-[#718096]">{isBengali ? 'কোর্স নাম' : 'Course Name'}: <span className="font-bold text-[#1a365d]">{data.courseTitle}</span></p>
              <p className="text-lg font-semibold text-[#718096]">{isBengali ? 'বিষয়' : 'Topic'}: <span className="font-bold text-[#1a365d]">{data.topicName}</span></p>
              <p className="text-lg text-[#718096]">{isBengali ? 'জমা দেওয়ার তারিখ' : 'Date of Submission'}: <span className="font-bold text-[#1a365d]">{data.submissionDate}</span></p>
            </div>
          </div>
          <div className="flex-1 flex items-center">
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="p-4 bg-[#f7fafc] border-l-4 border-[#1a365d]">
                <h3 className="text-xs font-bold text-[#1a365d] uppercase tracking-wider mb-3">{isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}</h3>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#2d3748]">{data.studentName}</p>
                  <p className="text-[#718096]">Roll: {data.roll}</p>
                  <p className="text-[#718096]">ID: {data.studentId}</p>
                  <p className="text-[#718096]">Batch: {data.batch}{data.section}</p>
                  <p className="text-[#718096]">Semester: {data.semester}</p>
                </div>
              </div>
              <div className="p-4 bg-[#f7fafc] border-l-4 border-[#d69e2e]">
                <h3 className="text-xs font-bold text-[#d69e2e] uppercase tracking-wider mb-3">{isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}</h3>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#2d3748]">{data.teacherName}</p>
                  <p className="text-[#718096]">{designationName},</p>
                  <p className="text-[#718096]">{departmentName}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-[#d69e2e] to-transparent" />
        </div>
      </div>
    );
  }

  // --- STYLE 3 (Modern Minimal) ---
  if (style === 3) {
    return (
      <div ref={ref} className={`w-[210mm] min-h-[297mm] bg-white p-8 mx-auto ${isBengali ? 'font-bengali' : 'font-body'}`} style={{ aspectRatio: '210/297' }}>
        <div className="h-full flex flex-col px-12 py-8">
          <div className="text-center space-y-4 mb-8">
            <div className="inline-flex flex-col items-center gap-4 px-6 py-2 border-b-2 border-[#d69e2e]">
              <img src="/wub_logo_j.png" alt="wub-logo" className="w-40"/>
              <h1 className="text-xl font-display font-bold text-[#1a365d] uppercase tracking-[0.2em]">{data.universityName}</h1>
            </div>
            <p className="text-lg text-[#718096]">{departmentName}</p>
          </div>
          <div className="text-center space-y-4 my-4">
            <h2 className="text-xl font-display font-semibold text-[#2d3748]">{isBengali ? 'হোমওয়ার্ক' : 'HOMEWORK'}</h2>
            <div className="inline-block px-8 py-3 border-2 border-[#1a365d] rounded-lg">
              <p className="text-lg font-medium text-[#1a365d]">{isBengali ? 'বিষয়' : 'Topic'}: {data.topicName}</p>
            </div>
          </div>
          <div className="my-2 space-y-1 text-start px-8">
            <p className="text-lg font-bold text-[#1a365d] uppercase">{isBengali ? 'কোর্স কোড' : 'Course Code'}: {data.courseCode}</p>
            <p className="text-lg font-bold text-[#2d3748] uppercase">{isBengali ? 'কোর্স নাম' : 'Course Name'}: {data.courseTitle}</p>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-12">
            <div className="text-center">
              <p className="text-base uppercase tracking-[0.2em] text-[#d69e2e] mb-3">{isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}</p>
              <p className="text-xl font-display font-semibold text-[#1a365d]">{data.studentName}</p>
              <p className="text-[#718096]">Roll: {data.roll}</p>
              <p className="text-[#718096]">ID: {data.studentId}</p>
              <p className="text-[#718096]">Batch: {data.batch}{data.section}</p>
            </div>
            <div className="text-center">
              <p className="text-base uppercase tracking-[0.2em] text-[#d69e2e] mb-3">{isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}</p>
              <p className="text-xl font-display font-semibold text-[#1a365d]">{data.teacherName}</p>
              <p className="text-base font-semibold text-[#2d3748]">{designationName},</p>
              <p className="text-base font-semibold text-[#2d3748]">{departmentName}</p>
            </div>
          </div>
          <div className="text-center pt-6">
            <p className="text-md uppercase  text-[#718096]">{isBengali ? 'জমা দেওয়ার তারিখ' : 'Date of Submission'}</p>
            <p className="text-base font-semibold text-[#1a365d]">{data.submissionDate}</p>
          </div>
        </div>
      </div>
    );
  }

  // --- STYLE 4 (Minimalist) ---
  if (style === 4) {
    return (
      <div ref={ref} className={`w-[210mm] min-h-[297mm] bg-white p-16 mx-auto shadow-elevated ${isBengali ? 'font-bengali' : 'font-body'}`} style={{ aspectRatio: '210/297' }}>
        <div className="h-full flex flex-col">
          <div className="inline-flex flex-col items-center gap-2 mb-12">
            <img src="/wub_logo_j.png" alt="wub-logo" className="w-40"/>
            <img src="/wub-name.png" alt="logo-name" className="h-20" />
            <p className="text-xl text-[#2d3748]">{departmentName}</p>
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-base uppercase font-semibold text-[#2d3748]">{isBengali ? 'হোমওয়ার্ক' : 'Homework'}:</p>
            <div className="space-y-2 border-l-2 border-[#1a365d] pl-4">
              <p className="text-lg font-bold text-[#2d3748]">{isBengali ? 'বিষয়' : 'Topic'}: {data.topicName}</p>
              <p className="text-[#2d3748] font-bold">{isBengali ? 'কোর্স কোড' : 'Course Code'}: {data.courseCode}</p>
              <p className="text-[#2d3748] font-bold">{isBengali ? 'কোর্স নাম' : 'Course Name'}: {data.courseTitle}</p>
              <p className="text-base font-semibold text-[#2d3748]">{isBengali ? 'জমা দেওয়ার তারিখ' : 'Submission Date'}: <span className="text-[#718096]">{data.submissionDate}</span></p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 mb-20">
            <div>
              <p className="text-lg font-semibold uppercase text-[#d69e2e] mb-3">{isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}</p>
              <p className="font-bold text-[#1a365d] text-lg">{data.studentName}</p>
              <p className="text-md text-[#718096]">ID: {data.roll}</p>
              <p className="text-md text-[#718096]">ID: {data.studentId}</p>
              <p className="text-md text-[#718096]">Batch: {data.batch}{data.section}</p>
            </div>
            <div>
              <p className="text-lg font-semibold uppercase text-[#d69e2e] mb-3">{isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}</p>
              <p className="font-bold text-[#1a365d] text-lg">{data.teacherName}</p>
              <p className="text-md text-[#718096]">{designationName},</p>
              <p className="text-md text-[#718096]">{departmentName}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- STYLE 1 (Classic) ---
  return (
    <div ref={ref} className={`w-[210mm] min-h-[297mm] bg-white p-12 mx-auto shadow-elevated ${isBengali ? 'font-bengali' : 'font-body'}`} style={{ aspectRatio: '210/297' }}>
      <div className="cover-page-border h-full p-8 flex flex-col">
        <div className="justify-center flex flex-col space-y-2 mb-8">
          <img src="/wub.png" alt="wub-logo" />
          <h2 className="text-center text-xl text-[#718096]">{departmentName}</h2>
        </div>
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[#1a365d]/30" />
          <div className="w-3 h-3 rotate-45 border-2 border-[#1a365d]" />
          <div className="flex-1 h-px bg-[#1a365d]/30" />
        </div>
        <div className="text-center space-y-4 my-4">
          <h2 className="text-xl font-display font-semibold text-[#2d3748]">{isBengali ? 'হোমওয়ার্ক' : 'HOMEWORK'}</h2>
          <div className="inline-block px-8 py-3 border-2 border-[#1a365d] rounded-lg">
            <p className="text-lg font-medium text-[#1a365d]">{isBengali ? 'বিষয়' : 'Topic'}: {data.topicName}</p>
          </div>
        </div>
        <div className="bg-[#f7fafc] rounded-lg p-4 my-6">
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="py-2 font-semibold text-[#718096] w-1/4">{isBengali ? 'কোর্স কোড' : 'Course Code'}:</td>
                <td className="py-2 text-[#2d3748] font-semibold">{data.courseCode}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-[#718096]">{isBengali ? 'কোর্স শিরোনাম' : 'Course Title'}:</td>
                <td className="py-2 text-[#2d3748] font-semibold">{data.courseTitle}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#1a365d] uppercase tracking-wider border-b border-[#1a365d] pb-2">{isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}</h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-[#718096]">{isBengali ? 'নাম' : 'Name'}:</span> <span className="font-medium text-[#2d3748]">{data.studentName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'রোল' : 'Roll'}:</span> <span className="font-medium text-[#2d3748]">{data.roll}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'আইডি' : 'ID'}:</span> <span className="font-medium text-[#2d3748]">{data.studentId}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'ব্যাচ' : 'Batch'}:</span> <span className="font-medium text-[#2d3748]">{data.batch}{data.section}</span></p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#1a365d] uppercase tracking-wider border-b border-[#1a365d] pb-2">{isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}</h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-[#718096]">{isBengali ? 'নাম' : 'Name'}:</span> <span className="font-medium text-[#2d3748]">{data.teacherName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'পদবী' : 'Designation'}:</span> <span className="font-medium text-[#2d3748]">{designationName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'ডিপার্টমেন্ট' : 'Department'}:</span> <span className="font-medium text-[#2d3748]">{departmentName}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 border-t border-[#1a365d]/30">
          <p className="text-sm text-[#718096]">{isBengali ? 'জমা দেওয়ার তারিখ' : 'Date of Submission'}: <span className="font-semibold text-[#2d3748]">{data.submissionDate}</span></p>
        </div>
      </div>
    </div>
  );
});

HomeworkTemplate.displayName = 'HomeworkTemplate';
export default HomeworkTemplate;