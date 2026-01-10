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

  if (style === 2) {
    return (
      <div
        ref={ref}
        className={`w-[210mm] min-h-[297mm] bg-white p-10 mx-auto shadow-elevated ${isBengali ? 'font-bengali' : 'font-body'}`}
        style={{ aspectRatio: '210/297' }}
      >
        <div className="h-full flex flex-col relative border-2 border-[#2d3748] p-8">
          {/* Top banner */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-[#1a365d] flex items-center justify-center">
            <h2 className="text-xl font-display font-bold text-white tracking-widest">
              {isBengali ? 'হোমওয়ার্ক' : 'HOMEWORK'}
            </h2>
          </div>

          {/* Header */}
          <div className="text-center space-y-2 mt-16 mb-6">
            <h1 className="text-2xl font-display font-bold text-[#1a365d] uppercase tracking-wide">
              {data.universityName}
            </h1>
            <p className="text-base text-[#4a5568]">{facultyName}</p>
            <p className="text-sm text-[#718096]">{departmentName}</p>
          </div>

          {/* Topic */}
          {data.topicName && (
            <div className="text-center my-6">
              <div className="inline-block px-8 py-4 bg-[#f7fafc] border-l-4 border-[#d69e2e]">
                <p className="text-xs text-[#718096] uppercase tracking-wider mb-1">{isBengali ? 'বিষয়' : 'Topic'}</p>
                <h3 className="text-lg font-display font-semibold text-[#2d3748]">
                  {data.topicName}
                </h3>
              </div>
            </div>
          )}

          {/* Course Info */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-[#f7fafc] rounded-lg text-center">
              <p className="text-xs text-[#718096]">{isBengali ? 'কোর্স কোড' : 'Course Code'}</p>
              <p className="font-bold text-lg text-[#1a365d]">{data.courseCode}</p>
            </div>
            <div className="p-4 bg-[#f7fafc] rounded-lg text-center">
              <p className="text-xs text-[#718096]">{isBengali ? 'কোর্স শিরোনাম' : 'Course Title'}</p>
              <p className="font-semibold text-[#2d3748]">{data.courseTitle}</p>
            </div>
          </div>

          {/* Submitted sections */}
          <div className="flex-1 flex items-center">
            <div className="w-full space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 border border-[#e2e8f0] rounded-lg">
                  <h3 className="text-xs font-bold text-[#1a365d] uppercase tracking-wider mb-3 pb-2 border-b border-[#d69e2e]">
                    {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-[#2d3748]">{data.studentName}</p>
                    <p className="text-[#718096]">ID: {data.studentId}</p>
                    <p className="text-[#718096]">{data.semester} | Section {data.section}</p>
                    <p className="text-[#718096]">Session: {data.session}</p>
                  </div>
                </div>
                <div className="p-4 border border-[#e2e8f0] rounded-lg">
                  <h3 className="text-xs font-bold text-[#1a365d] uppercase tracking-wider mb-3 pb-2 border-b border-[#d69e2e]">
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
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-[#e2e8f0]">
            <p className="text-sm text-[#718096]">
              {isBengali ? 'জমা দেওয়ার তারিখ' : 'Date of Submission'}: <span className="font-bold text-[#1a365d]">{data.submissionDate}</span>
            </p>
          </div>
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
        <div className="h-full flex flex-col relative">
          {/* Elegant gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7fafc] to-white" />
          
          <div className="relative flex-1 flex flex-col px-12 py-8">
            {/* Header */}
            <div className="text-center space-y-3 mb-8">
              <h1 className="text-xl font-display font-bold text-[#1a365d] uppercase tracking-[0.15em]">
                {data.universityName}
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d69e2e] to-transparent mx-auto" />
              <p className="text-sm text-[#718096]">{departmentName}</p>
            </div>

            {/* Elegant Homework title */}
            <div className="text-center my-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#a0aec0]">
                {isBengali ? 'গৃহকাজ' : 'Homework'}
              </p>
            </div>

            {/* Topic */}
            {data.topicName && (
              <div className="text-center my-6">
                <h3 className="text-xl font-display font-semibold text-[#1a365d] leading-relaxed max-w-md mx-auto">
                  {data.topicName}
                </h3>
              </div>
            )}

            {/* Course */}
            <div className="text-center my-4">
              <p className="text-sm text-[#718096]">
                {data.courseCode} — {data.courseTitle}
              </p>
            </div>

            {/* Submitted sections */}
            <div className="flex-1 flex items-center">
              <div className="w-full space-y-8 text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d69e2e] mb-3">
                    {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
                  </p>
                  <p className="text-lg font-display font-semibold text-[#1a365d]">{data.studentName}</p>
                  <p className="text-sm text-[#718096]">ID: {data.studentId}</p>
                  <p className="text-sm text-[#718096]">{data.semester} Semester | Section {data.section}</p>
                </div>
                
                <div className="w-16 h-px bg-[#e2e8f0] mx-auto" />
                
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d69e2e] mb-3">
                    {isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}
                  </p>
                  <p className="text-lg font-display font-semibold text-[#1a365d]">{data.teacherName}</p>
                  <p className="text-sm text-[#718096]">{designationName}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6">
              <p className="text-xs text-[#a0aec0]">{data.submissionDate}</p>
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
          <div className="text-center mb-8">
            <h1 className="text-base font-medium text-[#2d3748]">{data.universityName}</h1>
            <p className="text-xs text-[#a0aec0] mt-1">{departmentName}</p>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#a0aec0] mb-6">
              {isBengali ? 'হোমওয়ার্ক' : 'Homework'}
            </p>
            
            {data.topicName && (
              <h3 className="text-2xl font-display font-light text-[#1a365d] max-w-md leading-relaxed">
                {data.topicName}
              </h3>
            )}
            
            <div className="mt-8">
              <p className="text-xs text-[#a0aec0]">{data.courseCode}</p>
              <p className="text-sm text-[#718096] mt-1">{data.courseTitle}</p>
            </div>
          </div>

          {/* Minimal info */}
          <div className="grid grid-cols-2 gap-8 text-sm border-t border-[#f0f0f0] pt-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#a0aec0] mb-2">
                {isBengali ? 'শিক্ষার্থী' : 'Student'}
              </p>
              <p className="font-medium text-[#2d3748]">{data.studentName}</p>
              <p className="text-[#718096] text-xs">{data.studentId}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#a0aec0] mb-2">
                {isBengali ? 'শিক্ষক' : 'Instructor'}
              </p>
              <p className="font-medium text-[#2d3748]">{data.teacherName}</p>
              <p className="text-[#718096] text-xs">{designationName}</p>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-xs text-[#a0aec0]">{data.submissionDate}</p>
          </div>
        </div>
      </div>
    );
  }

  // Style 1 - Original
  return (
    <div
      ref={ref}
      className={`w-[210mm] min-h-[297mm] bg-white p-12 mx-auto shadow-elevated ${isBengali ? 'font-bengali' : 'font-body'}`}
      style={{ aspectRatio: '210/297' }}
    >
      <div className="h-full p-8 flex flex-col relative bg-gradient-to-b from-[#1a365d]/5 to-transparent rounded-lg border border-[#1a365d]/20">
        {/* Decorative circles */}
        <div className="absolute top-4 left-4 w-20 h-20 border-2 border-[#1a365d]/20 rounded-full" />
        <div className="absolute top-8 left-8 w-12 h-12 border-2 border-[#d69e2e]/30 rounded-full" />
        <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-[#1a365d]/20 rounded-full" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-[#d69e2e]/30 rounded-full" />

        {/* Header */}
        <div className="text-center space-y-2 mb-8 relative z-10">
          <h1 className="text-2xl font-display font-bold text-[#1a365d] uppercase tracking-wide">
            {data.universityName}
          </h1>
          <p className="text-lg text-[#4a5568]">{facultyName}</p>
          <p className="text-base text-[#718096]">{departmentName}</p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="w-8 h-1 bg-[#d69e2e] rounded-full" />
          <div className="w-2 h-2 bg-[#1a365d] rounded-full" />
          <div className="w-8 h-1 bg-[#d69e2e] rounded-full" />
        </div>

        {/* Homework Title */}
        <div className="text-center my-6">
          <h2 className="text-3xl font-display font-bold text-[#1a365d] tracking-wider">
            {isBengali ? 'হোমওয়ার্ক' : 'HOMEWORK'}
          </h2>
        </div>

        {/* Topic */}
        {data.topicName && (
          <div className="text-center my-4 px-12">
            <div className="inline-block px-8 py-4 bg-white border-2 border-dashed border-[#1a365d]/40 rounded-lg">
              <p className="text-sm text-[#718096] mb-1">{isBengali ? 'বিষয়' : 'Topic'}:</p>
              <h3 className="text-lg font-display font-semibold text-[#2d3748]">
                {data.topicName}
              </h3>
            </div>
          </div>
        )}

        {/* Course Info */}
        <div className="my-6 text-center">
          <div className="inline-flex gap-8 px-8 py-4 bg-[#f7fafc] rounded-lg">
            <div>
              <p className="text-xs text-[#718096] uppercase tracking-wider">{isBengali ? 'কোর্স কোড' : 'Course Code'}</p>
              <p className="font-bold text-[#1a365d] text-lg">{data.courseCode}</p>
            </div>
            <div className="w-px bg-[#e2e8f0]" />
            <div>
              <p className="text-xs text-[#718096] uppercase tracking-wider">{isBengali ? 'কোর্স শিরোনাম' : 'Course Title'}</p>
              <p className="font-semibold text-[#2d3748] text-lg">{data.courseTitle}</p>
            </div>
          </div>
        </div>

        {/* Submitted By & To */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-lg space-y-8">
            <div className="text-center">
              <h3 className="inline-block px-6 py-2 bg-[#1a365d] text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
                {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-lg font-semibold text-[#2d3748]">{data.studentName}</p>
                <p><span className="text-[#718096]">{isBengali ? 'আইডি' : 'ID'}:</span> <span className="font-medium text-[#2d3748]">{data.studentId}</span></p>
                <div className="flex justify-center gap-6">
                  <p><span className="text-[#718096]">{isBengali ? 'সেমিস্টার' : 'Semester'}:</span> <span className="font-medium text-[#2d3748]">{data.semester}</span></p>
                  <p><span className="text-[#718096]">{isBengali ? 'সেকশন' : 'Section'}:</span> <span className="font-medium text-[#2d3748]">{data.section}</span></p>
                </div>
                <p><span className="text-[#718096]">{isBengali ? 'সেশন' : 'Session'}:</span> <span className="font-medium text-[#2d3748]">{data.session}</span></p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="inline-block px-6 py-2 bg-[#d69e2e] text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
                {isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-lg font-semibold text-[#2d3748]">{data.teacherName}</p>
                <p className="text-[#718096]">{designationName}</p>
                <p className="text-[#718096]">{departmentName}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 mt-6">
          <div className="inline-block px-8 py-3 border border-[#1a365d]/30 rounded-lg bg-white">
            <p className="text-sm">
              <span className="text-[#718096]">{isBengali ? 'জমা দেওয়ার তারিখ' : 'Date of Submission'}:</span>{' '}
              <span className="font-bold text-[#1a365d]">{data.submissionDate}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

HomeworkTemplate.displayName = 'HomeworkTemplate';

export default HomeworkTemplate;
