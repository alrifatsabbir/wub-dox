import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CoverPageData, faculties, departments, designations } from '@/lib/storage';

interface TemplateProps {
  data: CoverPageData;
  style?: number;
}

const LabReportTemplate = forwardRef<HTMLDivElement, TemplateProps>(({ data, style = 1 }, ref) => {
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
        <div className="h-full flex flex-col relative border-[3px] border-[#1a365d] p-8">
          {/* Scientific pattern corners */}
          <div className="absolute top-2 left-2 w-12 h-12">
            <div className="absolute top-0 left-0 w-full h-full border-l-2 border-t-2 border-[#d69e2e]" />
            <div className="absolute top-2 left-2 w-2 h-2 bg-[#d69e2e] rounded-full" />
          </div>
          <div className="absolute top-2 right-2 w-12 h-12">
            <div className="absolute top-0 right-0 w-full h-full border-r-2 border-t-2 border-[#d69e2e]" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#d69e2e] rounded-full" />
          </div>
          <div className="absolute bottom-2 left-2 w-12 h-12">
            <div className="absolute bottom-0 left-0 w-full h-full border-l-2 border-b-2 border-[#d69e2e]" />
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#d69e2e] rounded-full" />
          </div>
          <div className="absolute bottom-2 right-2 w-12 h-12">
            <div className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-[#d69e2e]" />
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#d69e2e] rounded-full" />
          </div>

          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-2xl font-display font-bold text-[#1a365d] uppercase tracking-wide">
              {data.universityName}
            </h1>
            <p className="text-sm text-[#718096]">{departmentName}</p>
          </div>

          {/* Lab Report Badge */}
          <div className="text-center my-6">
            <div className="inline-block bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] px-10 py-4 rounded-lg">
              <h2 className="text-xl font-display font-bold text-white tracking-wider">
                {isBengali ? 'ল্যাব রিপোর্ট' : 'LAB REPORT'}
              </h2>
            </div>
          </div>

          {/* Experiment Info */}
          <div className="my-4 text-center">
            <div className="inline-block bg-[#f7fafc] border-2 border-[#d69e2e] rounded-lg px-8 py-4">
              <p className="text-xs text-[#718096] uppercase tracking-wider">{isBengali ? 'এক্সপেরিমেন্ট নং' : 'Experiment No'}</p>
              <p className="text-3xl font-bold text-[#1a365d]">{data.experimentNo}</p>
            </div>
          </div>

          <div className="text-center my-4">
            <h3 className="text-lg font-display font-semibold text-[#2d3748]">
              {data.experimentName}
            </h3>
          </div>

          {/* Course Info */}
          <div className="grid grid-cols-2 gap-4 my-4 text-sm">
            <div className="p-3 bg-[#f7fafc] rounded-lg text-center">
              <p className="text-xs text-[#718096]">{isBengali ? 'কোর্স কোড' : 'Course Code'}</p>
              <p className="font-bold text-[#1a365d]">{data.courseCode}</p>
            </div>
            <div className="p-3 bg-[#f7fafc] rounded-lg text-center">
              <p className="text-xs text-[#718096]">{isBengali ? 'কোর্স শিরোনাম' : 'Course Title'}</p>
              <p className="font-semibold text-[#2d3748]">{data.courseTitle}</p>
            </div>
          </div>

          {/* Submitted sections */}
          <div className="flex-1 flex items-center">
            <div className="w-full grid grid-cols-2 gap-6">
              <div className="p-4 border border-[#e2e8f0] rounded-lg">
                <h3 className="text-xs font-bold text-[#1a365d] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full" />
                  {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#2d3748]">{data.studentName}</p>
                  <p className="text-[#718096]">ID: {data.studentId}</p>
                  <p className="text-[#718096]">{data.semester} | Section {data.section}</p>
                  <p className="text-[#718096]">Group: {data.group}</p>
                </div>
              </div>
              <div className="p-4 border border-[#e2e8f0] rounded-lg">
                <h3 className="text-xs font-bold text-[#d69e2e] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#d69e2e] rounded-full" />
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
          <div className="pt-4 border-t border-[#e2e8f0] mt-4">
            <div className="flex justify-between text-sm">
              <p className="text-[#718096]">
                {isBengali ? 'এক্সপেরিমেন্টের তারিখ' : 'Experiment Date'}: <span className="font-semibold text-[#2d3748]">{data.experimentDate}</span>
              </p>
              <p className="text-[#718096]">
                {isBengali ? 'জমা দেওয়ার তারিখ' : 'Submission Date'}: <span className="font-semibold text-[#2d3748]">{data.submissionDate}</span>
              </p>
            </div>
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
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/3 to-transparent" />
          
          <div className="relative flex-1 flex flex-col px-12 py-8">
            {/* Header */}
            <div className="text-center space-y-3 mb-6">
              <h1 className="text-xl font-display font-bold text-[#1a365d] uppercase tracking-[0.15em]">
                {data.universityName}
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-[#d69e2e]" />
                <div className="w-2 h-2 border border-[#d69e2e] rotate-45" />
                <div className="w-12 h-px bg-[#d69e2e]" />
              </div>
              <p className="text-sm text-[#4a5568]">{departmentName}</p>
            </div>

            {/* Elegant Lab Report title */}
            <div className="text-center my-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#718096] mb-2">
                {isBengali ? 'গবেষণাগার' : 'Laboratory'}
              </p>
              <h2 className="text-2xl font-display font-light text-[#1a365d] tracking-wide">
                {isBengali ? 'প্রতিবেদন' : 'Report'}
              </h2>
            </div>

            {/* Experiment Info */}
            <div className="text-center my-6">
              <div className="inline-block border border-[#e2e8f0] px-10 py-4">
                <p className="text-xs text-[#a0aec0] uppercase tracking-wider mb-1">
                  {isBengali ? 'এক্সপেরিমেন্ট' : 'Experiment'} #{data.experimentNo}
                </p>
                <h3 className="text-lg font-display font-semibold text-[#1a365d]">
                  {data.experimentName}
                </h3>
              </div>
            </div>

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
                  <p className="text-sm text-[#718096]">ID: {data.studentId} | Group: {data.group}</p>
                  <p className="text-sm text-[#718096]">{data.semester} Semester | Section {data.section}</p>
                </div>
                
                <div className="w-16 h-px bg-[#e2e8f0] mx-auto" />
                
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d69e2e] mb-3">
                    {isBengali ? 'ল্যাব ইনস্ট্রাক্টর' : 'Lab Instructor'}
                  </p>
                  <p className="text-lg font-display font-semibold text-[#1a365d]">{data.teacherName}</p>
                  <p className="text-sm text-[#718096]">{designationName}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 flex justify-between text-xs text-[#a0aec0]">
              <p>{isBengali ? 'এক্সপেরিমেন্টের তারিখ' : 'Exp. Date'}: {data.experimentDate}</p>
              <p>{isBengali ? 'জমা দেওয়ার তারিখ' : 'Submitted'}: {data.submissionDate}</p>
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#a0aec0] mb-4">
              {isBengali ? 'ল্যাব রিপোর্ট' : 'Lab Report'}
            </p>
            
            <span className="text-7xl font-display font-light text-[#1a365d]">{data.experimentNo}</span>
            
            <div className="mt-6 max-w-sm">
              <h3 className="text-lg text-[#2d3748]">{data.experimentName}</h3>
              <p className="text-xs text-[#a0aec0] mt-3">{data.courseCode}</p>
            </div>
          </div>

          {/* Minimal info */}
          <div className="grid grid-cols-2 gap-8 text-sm border-t border-[#f0f0f0] pt-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#a0aec0] mb-2">
                {isBengali ? 'শিক্ষার্থী' : 'Student'}
              </p>
              <p className="font-medium text-[#2d3748]">{data.studentName}</p>
              <p className="text-[#718096] text-xs">{data.studentId} | Group {data.group}</p>
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
            <p className="text-xs text-[#a0aec0]">{data.experimentDate} → {data.submissionDate}</p>
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
      <div className="h-full border-4 border-double border-[#1a365d] p-8 flex flex-col relative">
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-[#d69e2e]" />
        <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-[#d69e2e]" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-[#d69e2e]" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-[#d69e2e]" />

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl font-display font-bold text-[#1a365d] uppercase tracking-wide">
            {data.universityName}
          </h1>
          {/* <p className="text-lg text-[#4a5568] font-medium">{facultyName}</p> */}
          <p className="text-base text-[#718096]">{departmentName}</p>
        </div>

        {/* Lab Report Title */}
        <div className="text-center my-6">
          <div className="inline-block">
            <h2 className="text-2xl font-display font-bold text-[#1a365d] px-8 py-3 border-y-2 border-[#1a365d]">
              {isBengali ? 'ল্যাব রিপোর্ট' : 'LAB REPORT'}
            </h2>
          </div>
        </div>

        {/* Experiment Info */}
        <div className="bg-gradient-to-r from-[#1a365d]/5 to-[#d69e2e]/5 rounded-lg p-6 my-4 border border-[#1a365d]/20">
          <div className="text-center space-y-2">
            <p className="text-lg">
              <span className="font-medium text-[#718096]">{isBengali ? 'এক্সপেরিমেন্ট নং' : 'Experiment No'}:</span>{' '}
              <span className="font-bold text-[#1a365d] text-xl">{data.experimentNo}</span>
            </p>
            <h3 className="text-xl font-display font-semibold text-[#2d3748] mt-4">
              {data.experimentName}
            </h3>
          </div>
        </div>

        {/* Course Info */}
        <div className="bg-[#f7fafc] rounded-lg p-4 my-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><span className="text-[#718096]">{isBengali ? 'কোর্স কোড' : 'Course Code'}:</span> <span className="font-semibold text-[#2d3748]">{data.courseCode}</span></p>
            <p><span className="text-[#718096]">{isBengali ? 'কোর্স শিরোনাম' : 'Course Title'}:</span> <span className="font-semibold text-[#2d3748]">{data.courseTitle}</span></p>
          </div>
        </div>

        {/* Submitted By & To */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
              <h3 className="text-sm font-semibold text-[#1a365d] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#1a365d] rounded-full" />
                {isBengali ? 'জমা দিয়েছেন' : 'Submitted By'}
              </h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-[#718096]">{isBengali ? 'নাম' : 'Name'}:</span> <span className="font-medium text-[#2d3748]">{data.studentName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'আইডি' : 'ID'}:</span> <span className="font-medium text-[#2d3748]">{data.studentId}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'সেমিস্টার' : 'Semester'}:</span> <span className="font-medium text-[#2d3748]">{data.semester}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'সেকশন' : 'Section'}:</span> <span className="font-medium text-[#2d3748]">{data.section}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'গ্রুপ' : 'Group'}:</span> <span className="font-medium text-[#2d3748]">{data.group}</span></p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-[#e2e8f0] p-4">
              <h3 className="text-sm font-semibold text-[#1a365d] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#d69e2e] rounded-full" />
                {isBengali ? 'জমা দেওয়া হয়েছে' : 'Submitted To'}
              </h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-[#718096]">{isBengali ? 'নাম' : 'Name'}:</span> <span className="font-medium text-[#2d3748]">{data.teacherName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'পদবী' : 'Designation'}:</span> <span className="font-medium text-[#2d3748]">{designationName}</span></p>
                <p><span className="text-[#718096]">{isBengali ? 'বিভাগ' : 'Dept'}:</span> <span className="font-medium text-[#2d3748]">{departmentName}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t-2 border-[#1a365d]/30 mt-6">
          <div className="flex justify-between text-sm">
            <p>
              <span className="text-[#718096]">{isBengali ? 'এক্সপেরিমেন্টের তারিখ' : 'Experiment Date'}:</span>{' '}
              <span className="font-semibold text-[#2d3748]">{data.experimentDate}</span>
            </p>
            <p>
              <span className="text-[#718096]">{isBengali ? 'জমা দেওয়ার তারিখ' : 'Submission Date'}:</span>{' '}
              <span className="font-semibold text-[#2d3748]">{data.submissionDate}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

LabReportTemplate.displayName = 'LabReportTemplate';

export default LabReportTemplate;
