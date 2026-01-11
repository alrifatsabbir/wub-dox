import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CoverPageData, faculties, departments, designations } from '@/lib/storage';

interface TemplateProps {
  data: CoverPageData;
  style?: number;
}

const ForumTemplate = forwardRef<HTMLDivElement, TemplateProps>(({ data, style = 1 }, ref) => {
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
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-[#d69e2e]" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-[#d69e2e]" />
          
          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-2xl font-display font-bold text-[#2d3748] uppercase tracking-wider">
              {data.universityName}
            </h1>
            {/* <p className="text-base text-[#4a5568]">{facultyName}</p> */}
            <p className="text-sm text-[#718096]">{departmentName}</p>
          </div>

          {/* Forum badge */}
          <div className="text-center my-8">
            <div className="inline-block bg-[#2d3748] px-10 py-4">
              <h2 className="text-2xl font-display font-bold text-white tracking-wider">
                {isBengali ? 'ফোরাম' : 'FORUM'}
              </h2>
            </div>
          </div>

          {/* Topic */}
          <div className="text-center my-6 px-8">
            <div className="border-l-4 border-r-4 border-[#d69e2e] px-6 py-4">
              <p className="text-xs uppercase tracking-wider text-[#718096] mb-2">{isBengali ? 'বিষয়' : 'Topic'}</p>
              <h3 className="text-xl font-display font-semibold text-[#2d3748]">
                {data.topicName}
              </h3>
            </div>
          </div>

          {/* Course Details */}
          <div className="grid grid-cols-2 gap-6 my-6">
            <div className="text-center p-4 bg-[#f7fafc]">
              <p className="text-xs text-[#718096] uppercase tracking-wider">{isBengali ? 'কোর্স কোড' : 'Course Code'}</p>
              <p className="font-bold text-lg text-[#2d3748]">{data.courseCode}</p>
            </div>
            <div className="text-center p-4 bg-[#f7fafc]">
              <p className="text-xs text-[#718096] uppercase tracking-wider">{isBengali ? 'কোর্স শিরোনাম' : 'Course Title'}</p>
              <p className="font-semibold text-[#2d3748]">{data.courseTitle}</p>
            </div>
          </div>

          {/* Submitted sections */}
          <div className="flex-1 flex items-center">
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="p-4 border border-[#e2e8f0]">
                <h3 className="text-xs font-bold text-[#2d3748] uppercase tracking-wider mb-3 pb-2 border-b border-[#d69e2e]">
                  {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#2d3748]">{data.studentName}</p>
                  <p className="text-[#718096]">ID: {data.studentId}</p>
                  <p className="text-[#718096]">{data.semester} | Section {data.section}</p>
                  <p className="text-[#718096]">Session: {data.session}</p>
                </div>
              </div>
              <div className="p-4 border border-[#e2e8f0]">
                <h3 className="text-xs font-bold text-[#2d3748] uppercase tracking-wider mb-3 pb-2 border-b border-[#d69e2e]">
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
              {isBengali ? 'জমা দেওয়ার তারিখ' : 'Date of Submission'}: <span className="font-bold text-[#2d3748]">{data.submissionDate}</span>
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
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/5 to-transparent" />
          
          <div className="relative flex-1 flex flex-col px-12 py-8">
            {/* Header */}
            <div className="text-center space-y-3 mb-8">
              <h1 className="text-xl font-display font-bold text-[#1a365d] uppercase tracking-[0.15em]">
                {data.universityName}
              </h1>
              <div className="w-20 h-1 bg-[#d69e2e] mx-auto" />
              {/* <p className="text-sm text-[#4a5568]">{facultyName}</p> */}
              <p className="text-xs text-[#718096]">{departmentName}</p>
            </div>

            {/* Elegant Forum title */}
            <div className="text-center my-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#718096] mb-2">
                {isBengali ? 'ফোরাম উপস্থাপনা' : 'Forum Presentation'}
              </p>
              <div className="w-32 h-px bg-[#d69e2e] mx-auto my-4" />
            </div>

            {/* Topic - Centered and prominent */}
            <div className="text-center my-6">
              <h3 className="text-2xl font-display font-semibold text-[#1a365d] leading-relaxed max-w-lg mx-auto">
                "{data.topicName}"
              </h3>
            </div>

            {/* Course Info */}
            <div className="text-center my-6">
              <p className="text-sm text-[#718096]">
                {data.courseCode} — {data.courseTitle}
              </p>
            </div>

            {/* Submitted sections */}
            <div className="flex-1 flex items-center">
              <div className="w-full space-y-8 text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d69e2e] mb-3">
                    {isBengali ? 'উপস্থাপক' : 'Presented By'}
                  </p>
                  <p className="text-lg font-display font-semibold text-[#1a365d]">{data.studentName}</p>
                  <p className="text-sm text-[#718096]">ID: {data.studentId}</p>
                  <p className="text-sm text-[#718096]">{data.semester} Semester | Section {data.section}</p>
                </div>
                
                <div className="w-16 h-px bg-[#e2e8f0] mx-auto" />
                
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d69e2e] mb-3">
                    {isBengali ? 'কোর্স শিক্ষক' : 'Course Instructor'}
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
              {isBengali ? 'ফোরাম' : 'Forum'}
            </p>
            
            <h3 className="text-2xl font-display font-light text-[#1a365d] max-w-md leading-relaxed">
              {data.topicName}
            </h3>
            
            <div className="mt-8">
              <p className="text-xs text-[#a0aec0]">{data.courseCode}</p>
              <p className="text-sm text-[#718096] mt-1">{data.courseTitle}</p>
            </div>
          </div>

          {/* Minimal info */}
          <div className="grid grid-cols-2 gap-8 text-sm border-t border-[#f0f0f0] pt-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#a0aec0] mb-2">
                {isBengali ? 'উপস্থাপক' : 'Presenter'}
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
      <div className="h-full border-2 border-[#1a365d] p-8 flex flex-col relative">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1a365d] via-[#d69e2e] to-[#1a365d]" />

        {/* Header */}
        <div className="text-center space-y-3 mb-8 pt-4">
          <h1 className="text-2xl font-display font-bold text-[#1a365d] uppercase tracking-wider">
            {data.universityName}
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-[#d69e2e]" />
            <div className="w-2 h-2 bg-[#d69e2e] rounded-full" />
            <div className="h-px w-16 bg-[#d69e2e]" />
          </div>
          {/* <p className="text-lg text-[#4a5568]">{facultyName}</p> */}
          <p className="text-base text-[#718096]">{departmentName}</p>
        </div>

        {/* Forum Title */}
        <div className="text-center my-8">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-[#d69e2e]/10 rounded-lg transform rotate-1" />
            <h2 className="relative text-2xl font-display font-bold text-[#1a365d] px-10 py-4 bg-white border-2 border-[#d69e2e] rounded-lg">
              {isBengali ? 'ফোরাম' : 'FORUM'}
            </h2>
          </div>
        </div>

        {/* Topic */}
        <div className="text-center my-6 px-8">
          <p className="text-sm text-[#718096] mb-2">{isBengali ? 'বিষয়' : 'Topic'}:</p>
          <h3 className="text-xl font-display font-semibold text-[#2d3748] leading-relaxed">
            "{data.topicName}"
          </h3>
        </div>

        {/* Course Details */}
        <div className="bg-[#f7fafc] rounded-xl p-6 my-6 border border-[#e2e8f0]">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#718096] mb-1">{isBengali ? 'কোর্স কোড' : 'Course Code'}</p>
              <p className="font-semibold text-lg text-[#2d3748]">{data.courseCode}</p>
            </div>
            <div>
              <p className="text-[#718096] mb-1">{isBengali ? 'কোর্স শিরোনাম' : 'Course Title'}</p>
              <p className="font-semibold text-lg text-[#2d3748]">{data.courseTitle}</p>
            </div>
          </div>
        </div>

        {/* Submitted By & To */}
        <div className="flex-1 flex items-center">
          <div className="w-full space-y-6">
            <div className="border-l-4 border-[#1a365d] pl-4">
              <h3 className="text-sm font-semibold text-[#1a365d] uppercase tracking-wider mb-3">
                {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
              </h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <p><span className="text-[#718096]">{isBengali ? 'নাম' : 'Name'}:</span> <span className="font-medium block text-[#2d3748]">{data.studentName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'আইডি' : 'ID'}:</span> <span className="font-medium block text-[#2d3748]">{data.studentId}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'সেমিস্টার' : 'Semester'}:</span> <span className="font-medium block text-[#2d3748]">{data.semester}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'সেকশন' : 'Section'}:</span> <span className="font-medium block text-[#2d3748]">{data.section}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'সেশন' : 'Session'}:</span> <span className="font-medium block text-[#2d3748]">{data.session}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'ব্যাচ' : 'Batch'}:</span> <span className="font-medium block text-[#2d3748]">{data.batch}</span></p>
              </div>
            </div>

            <div className="border-l-4 border-[#d69e2e] pl-4">
              <h3 className="text-sm font-semibold text-[#d69e2e] uppercase tracking-wider mb-3">
                {isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}
              </h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <p><span className="text-[#718096]">{isBengali ? 'নাম' : 'Name'}:</span> <span className="font-medium block text-[#2d3748]">{data.teacherName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'পদবী' : 'Designation'}:</span> <span className="font-medium block text-[#2d3748]">{designationName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'বিভাগ' : 'Dept'}:</span> <span className="font-medium block text-[#2d3748]">{departmentName}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-[#e2e8f0]">
          <p className="text-sm text-[#718096]">
            {isBengali ? 'জমা দেওয়ার তারিখ' : 'Date of Submission'}:{' '}
            <span className="font-semibold text-[#2d3748]">{data.submissionDate}</span>
          </p>
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1a365d] via-[#d69e2e] to-[#1a365d]" />
      </div>
    </div>
  );
});

ForumTemplate.displayName = 'ForumTemplate';

export default ForumTemplate;
