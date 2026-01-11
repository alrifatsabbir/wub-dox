import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CoverPageData, faculties, departments, designations } from '@/lib/storage';

interface TemplateProps {
  data: CoverPageData;
  style?: number;
}

const AssignmentTemplate = forwardRef<HTMLDivElement, TemplateProps>(({ data, style = 1 }, ref) => {
  const { i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const faculty = faculties.find((f) => f.key === data.facultyName);
  const department = departments.find((d) => d.key === data.departmentName);
  const designation = designations.find((d) => d.key === data.teacherDesignation);

  const facultyName = isBengali ? faculty?.bn : faculty?.en;
  const departmentName = isBengali ? department?.bn : department?.en;
  const designationName = isBengali ? designation?.bn : designation?.en || data.teacherDesignation;

  if (style === 2) {
    return (
      <div
        ref={ref}
        className={`w-[210mm] min-h-[297mm] bg-white p-10 mx-auto shadow-elevated ${isBengali ? 'font-bengali' : 'font-body'}`}
        style={{ aspectRatio: '210/297' }}
      >
        <div className="h-full border-[3px] border-[#1a365d] p-8 flex flex-col relative">
          {/* Top decorative line */}
          <div className="absolute top-4 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-[#d69e2e] to-transparent" />
          
          {/* Header */}
          <div className="text-center space-y-3 mb-6 pt-4">
            <h1 className="text-2xl font-display font-bold text-[#1a365d] uppercase tracking-widest">
              {data.universityName}
            </h1>
            {/* <p className="text-base text-[#2d3748]">{facultyName}</p> */}
            <p className="text-sm text-[#718096]">{departmentName}</p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="flex-1 h-px bg-[#d69e2e]" />
            <div className="w-4 h-4 border-2 border-[#d69e2e] rotate-45" />
            <div className="flex-1 h-px bg-[#d69e2e]" />
          </div>

          {/* Assignment Badge */}
          <div className="text-center my-6">
            <div className="inline-block px-12 py-4 bg-[#1a365d] text-white">
              <h2 className="text-xl font-display font-bold tracking-wider">
                {isBengali ? 'অ্যাসাইনমেন্ট' : 'ASSIGNMENT'}
              </h2>
              <p className="text-2xl font-bold mt-1 text-[#d69e2e]">#{data.assignmentNo}</p>
            </div>
          </div>

          {/* Course Details */}
          <div className="my-6 text-center">
            <div className="space-y-2">
              <p className="text-sm text-[#718096]">{isBengali ? 'কোর্স কোড' : 'Course Code'}: <span className="font-bold text-[#1a365d]">{data.courseCode}</span></p>
              <p className="text-lg font-semibold text-[#2d3748]">{data.courseTitle}</p>
              {data.assignmentTitle && (
                <p className="text-base text-[#4a5568] italic">"{data.assignmentTitle}"</p>
              )}
            </div>
          </div>

          {/* Two column layout */}
          <div className="flex-1 flex items-center">
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="p-4 bg-[#f7fafc] border-l-4 border-[#1a365d]">
                <h3 className="text-xs font-bold text-[#1a365d] uppercase tracking-wider mb-3">
                  {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#2d3748]">{data.studentName}</p>
                  <p className="text-[#718096]">ID: {data.studentId}</p>
                  <p className="text-[#718096]">{data.semester} Semester | Section: {data.section}</p>
                  <p className="text-[#718096]">Session: {data.session}</p>
                </div>
              </div>
              <div className="p-4 bg-[#f7fafc] border-l-4 border-[#d69e2e]">
                <h3 className="text-xs font-bold text-[#d69e2e] uppercase tracking-wider mb-3">
                  {isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#2d3748]">{data.teacherName}</p>
                  <p className="text-[#718096]">{designationName}</p>
                  <p className="text-[#718096]">{departmentName}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-[#e2e8f0]">
            <p className="text-sm text-[#718096]">
              {isBengali ? 'জমা দেওয়ার তারিখ' : 'Date of Submission'}: <span className="font-bold text-[#1a365d]">{data.submissionDate}</span>
            </p>
          </div>
          
          {/* Bottom decorative line */}
          <div className="absolute bottom-4 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-[#d69e2e] to-transparent" />
        </div>
      </div>
    );
  }

  if (style === 3) {
    return (
      <div
        ref={ref}
        className={`w-[210mm] min-h-[297mm] bg-white p-8 mx-auto shadow-elevated ${isBengali ? 'font-bengali' : 'font-body'}`}
        style={{ aspectRatio: '210/297' }}
      >
        <div className="h-full flex flex-col relative overflow-hidden">
          {/* Elegant side borders */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1a365d] to-transparent opacity-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1a365d] to-transparent opacity-10" />
          
          {/* Main content */}
          <div className="flex-1 flex flex-col px-12 py-8">
            {/* Header */}
            <div className="text-center space-y-4 mb-8">
              <div className="inline-block px-6 py-2 border-b-2 border-[#d69e2e]">
                <h1 className="text-xl font-display font-bold text-[#1a365d] uppercase tracking-[0.2em]">
                  {data.universityName}
                </h1>
              </div>
              {/* <p className="text-base text-[#4a5568]">{facultyName}</p> */}
              <p className="text-sm text-[#718096]">{departmentName}</p>
            </div>

            {/* Elegant assignment title */}
            <div className="text-center my-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#718096] mb-2">
                {isBengali ? 'অ্যাসাইনমেন্ট' : 'Assignment'}
              </p>
              <div className="inline-block">
                <span className="text-6xl font-display font-bold text-[#1a365d]">{data.assignmentNo}</span>
              </div>
            </div>

            {/* Course Info - Elegant cards */}
            <div className="my-6 space-y-4 text-center">
              <div className="inline-block px-8 py-3 border border-[#e2e8f0] rounded-sm">
                <p className="text-xs text-[#718096] uppercase tracking-wider">{isBengali ? 'কোর্স কোড' : 'Course Code'}</p>
                <p className="text-lg font-bold text-[#1a365d]">{data.courseCode}</p>
              </div>
              <p className="text-lg text-[#2d3748]">{data.courseTitle}</p>
              {data.assignmentTitle && (
                <p className="text-base text-[#4a5568] italic border-l-2 border-[#d69e2e] pl-4 mx-auto max-w-md">
                  {data.assignmentTitle}
                </p>
              )}
            </div>

            {/* Submitted sections */}
            <div className="flex-1 flex items-center">
              <div className="w-full space-y-8">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d69e2e] mb-3">
                    {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
                  </p>
                  <p className="text-xl font-display font-semibold text-[#1a365d]">{data.studentName}</p>
                  <p className="text-sm text-[#718096]">ID: {data.studentId} | {data.semester} Semester | Section {data.section}</p>
                  <p className="text-sm text-[#718096]">Session: {data.session}</p>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-24 h-px bg-[#d69e2e]" />
                </div>
                
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d69e2e] mb-3">
                    {isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}
                  </p>
                  <p className="text-xl font-display font-semibold text-[#1a365d]">{data.teacherName}</p>
                  <p className="text-sm text-[#718096]">{designationName}</p>
                  <p className="text-sm text-[#718096]">{departmentName}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#718096]">
                {isBengali ? 'জমা দেওয়ার তারিখ' : 'Date of Submission'}
              </p>
              <p className="text-base font-semibold text-[#1a365d]">{data.submissionDate}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (style === 4) {
    return (
      <div
        ref={ref}
        className={`w-[210mm] min-h-[297mm] bg-white p-16 mx-auto shadow-elevated ${isBengali ? 'font-bengali' : 'font-body'}`}
        style={{ aspectRatio: '210/297' }}
      >
        <div className="h-full flex flex-col">
          {/* Minimal header */}
          <div className="text-center mb-12">
            <h1 className="text-lg font-medium text-[#2d3748] tracking-wide">
              {data.universityName}
            </h1>
            <p className="text-sm text-[#718096] mt-1">{departmentName}</p>
          </div>

          {/* Large assignment number */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a0aec0] mb-4">
              {isBengali ? 'অ্যাসাইনমেন্ট' : 'Assignment'}
            </p>
            <span className="text-8xl font-display font-light text-[#1a365d]">{data.assignmentNo}</span>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-[#a0aec0]">{data.courseCode}</p>
              <p className="text-lg text-[#2d3748] mt-1">{data.courseTitle}</p>
              {data.assignmentTitle && (
                <p className="text-sm text-[#718096] mt-2 italic">{data.assignmentTitle}</p>
              )}
            </div>
          </div>

          {/* Minimal info grid */}
          <div className="grid grid-cols-2 gap-8 text-sm border-t border-[#e2e8f0] pt-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#a0aec0] mb-2">
                {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
              </p>
              <p className="font-medium text-[#2d3748]">{data.studentName}</p>
              <p className="text-[#718096]">{data.studentId}</p>
              <p className="text-[#718096]">{data.semester} | {data.section}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#a0aec0] mb-2">
                {isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}
              </p>
              <p className="font-medium text-[#2d3748]">{data.teacherName}</p>
              <p className="text-[#718096]">{designationName}</p>
            </div>
          </div>

          {/* Minimal footer */}
          <div className="text-center mt-8 pt-4">
            <p className="text-xs text-[#a0aec0]">{data.submissionDate}</p>
          </div>
        </div>
      </div>
    );
  }

  // Style 1 - Classic (Original)
  return (
    <div
      ref={ref}
      className={`w-[210mm] min-h-[297mm] bg-white p-12 mx-auto shadow-elevated ${isBengali ? 'font-bengali' : 'font-body'}`}
      style={{ aspectRatio: '210/297' }}
    >
      <div className="cover-page-border h-full p-8 flex flex-col">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-display font-bold text-[#1a365d] uppercase tracking-wide">
            {data.universityName}
          </h1>
          {/* <p className="text-lg text-[#4a5568]">{facultyName}</p> */}
          <p className="text-base text-[#718096]">{departmentName}</p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[#1a365d]/30" />
          <div className="w-3 h-3 rotate-45 border-2 border-[#1a365d]" />
          <div className="flex-1 h-px bg-[#1a365d]/30" />
        </div>

        {/* Assignment Info */}
        <div className="text-center space-y-4 my-8">
          <h2 className="text-xl font-display font-semibold text-[#2d3748]">
            {isBengali ? 'অ্যাসাইনমেন্ট' : 'ASSIGNMENT'}
          </h2>
          <div className="inline-block px-8 py-3 border-2 border-[#1a365d] rounded-lg">
            <p className="text-lg font-medium text-[#1a365d]">
              {isBengali ? 'অ্যাসাইনমেন্ট নং' : 'Assignment No'}: {data.assignmentNo}
            </p>
          </div>
        </div>

        {/* Course Details */}
        <div className="bg-[#f7fafc] rounded-lg p-6 my-6">
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="py-2 font-medium text-[#718096] w-1/3">
                  {isBengali ? 'কোর্স কোড' : 'Course Code'}:
                </td>
                <td className="py-2 text-[#2d3748] font-semibold">{data.courseCode}</td>
              </tr>
              <tr>
                <td className="py-2 font-medium text-[#718096]">
                  {isBengali ? 'কোর্স শিরোনাম' : 'Course Title'}:
                </td>
                <td className="py-2 text-[#2d3748] font-semibold">{data.courseTitle}</td>
              </tr>
              {data.assignmentTitle && (
                <tr>
                  <td className="py-2 font-medium text-[#718096]">
                    {isBengali ? 'বিষয়' : 'Topic'}:
                  </td>
                  <td className="py-2 text-[#2d3748] font-semibold">{data.assignmentTitle}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Submitted By & To */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#1a365d] uppercase tracking-wider border-b border-[#1a365d] pb-2">
                {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
              </h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-[#718096]">{isBengali ? 'নাম' : 'Name'}:</span> <span className="font-medium text-[#2d3748]">{data.studentName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'আইডি' : 'ID'}:</span> <span className="font-medium text-[#2d3748]">{data.studentId}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'সেমিস্টার' : 'Semester'}:</span> <span className="font-medium text-[#2d3748]">{data.semester}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'সেকশন' : 'Section'}:</span> <span className="font-medium text-[#2d3748]">{data.section}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'সেশন' : 'Session'}:</span> <span className="font-medium text-[#2d3748]">{data.session}</span></p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#1a365d] uppercase tracking-wider border-b border-[#1a365d] pb-2">
                {isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}
              </h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-[#718096]">{isBengali ? 'নাম' : 'Name'}:</span> <span className="font-medium text-[#2d3748]">{data.teacherName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'পদবী' : 'Designation'}:</span> <span className="font-medium text-[#2d3748]">{designationName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'বিভাগ' : 'Department'}:</span> <span className="font-medium text-[#2d3748]">{departmentName}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-[#1a365d]/30">
          <p className="text-sm text-[#718096]">
            {isBengali ? 'জমা দেওয়ার তারিখ' : 'Date of Submission'}: <span className="font-semibold text-[#2d3748]">{data.submissionDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
});

AssignmentTemplate.displayName = 'AssignmentTemplate';

export default AssignmentTemplate;
