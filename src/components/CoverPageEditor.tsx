import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  CoverPageData,
  faculties,
  departmentsByFaculty,
  designations,
  semesters,
  sections,
  getTeachersForDepartment,
} from '@/lib/storage';

interface CoverPageEditorProps {
  data: CoverPageData;
  onChange: (data: CoverPageData) => void;
  templateType: string;
}

const FIXED_UNIVERSITY_NAME = 'World University of Bangladesh';

const formatToInputDate = (dateStr: string) => {
  if (!dateStr || !dateStr.includes('/')) return "";
  const [day, month, year] = dateStr.split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

const formatToDisplayDate = (dateStr: string) => {
  if (!dateStr || !dateStr.includes('-')) return dateStr;
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};

const CoverPageEditor = ({ data, onChange, templateType }: CoverPageEditorProps) => {
  const { t, i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const handleChange = (field: keyof CoverPageData, value: string) => {
    const newData = { ...data, [field]: value };

    if (field === 'facultyName') {
      const depts = departmentsByFaculty[value] || [];
      newData.departmentName = depts[0]?.key || '';
      newData.teacherName = '';
    }

    if (field === 'departmentName') {
      newData.teacherName = '';
    }

    onChange(newData);
  };

  const handleTeacherChange = (teacherName: string) => {
    const teachers = getTeachersForDepartment(data.departmentName);
    const teacher = teachers.find(t => t.name === teacherName);

    onChange({
      ...data,
      teacherName,
      teacherDesignation: teacher?.designation || 'lecturer',
    });
  };

  const renderField = (
    label: string,
    field: keyof CoverPageData,
    type: 'text' | 'select' | 'date' = 'text',
    options?: { value: string; label: string }[]
  ) => (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-2"
    >
      <Label className={`text-sm font-medium ${isBengali ? 'font-bengali' : ''}`}>
        {label}
      </Label>

      {type === 'select' && options ? (
        <Select value={data[field] as string} onValueChange={(value) => handleChange(field, value)}>
          <SelectTrigger className={`w-full text-white placeholder:text-gray-400 bg-slate-700/50 border-slate-600 focus:ring-2 focus:ring-[#e7b008] focus:border-[#e7b008] ${isBengali ? 'font-bengali' : ''}`}>
            <SelectValue className="text-white" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 text-white border-slate-600">
            {options.map(opt => (
              <SelectItem key={opt.value} value={opt.value} className="text-gray-300 focus:bg-[#e7b008] focus:text-gray-800">
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          type={type}
          value={type === 'date' ? formatToInputDate(data[field] as string) : (data[field] as string)}
          onChange={(e) => {
            const val = type === 'date' ? formatToDisplayDate(e.target.value) : e.target.value;
            handleChange(field, val);
          }}
          className={`w-full text-white placeholder:text-gray-400 bg-slate-700/50 border-slate-600 focus:ring-2 focus:ring-[#e7b008] focus:border-[#e7b008] ${isBengali ? 'font-bengali' : ''}`}
        />
      )}
    </motion.div>
  );

  const facultyOptions = faculties.map(f => ({
    value: f.key,
    label: isBengali ? f.bn : f.en,
  }));

  const departmentOptions =
    departmentsByFaculty[data.facultyName]?.map(d => ({
      value: d.key,
      label: isBengali ? d.bn : d.en,
    })) || [];

  const designationOptions = designations.map(d => ({
    value: d.key,
    label: isBengali ? d.bn : d.en,
  }));

  const teacherOptions = getTeachersForDepartment(data.departmentName).map(t => ({
    value: t.name,
    label: t.name,
  }));

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-muted/30 border space-y-4">
        <h3 className={`font-semibold ${isBengali ? 'font-bengali' : ''}`}>
          {isBengali ? 'প্রতিষ্ঠানের তথ্য' : 'Institution Info'}
        </h3>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <Label className={`text-sm font-medium ${isBengali ? 'font-bengali' : ''}`}>
            {t('universityName')}
          </Label>
          <Input
            value={FIXED_UNIVERSITY_NAME}
            disabled
            className={`w-full bg-muted cursor-not-allowed ${isBengali ? 'font-bengali' : ''}`}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <Label className={`text-sm font-medium ${isBengali ? 'font-bengali' : ''}`}>
            {isBengali ? 'অনুষদ নির্বাচন করুন' : 'Select Faculty'}
          </Label>
          <Select
            value={data.facultyName}
            onValueChange={(value) => handleChange('facultyName', value)}
          >
            <SelectTrigger className={`w-full text-white placeholder:text-gray-400 bg-slate-700/50 border-slate-600 focus:ring-2 focus:ring-[#e7b008] focus:border-[#e7b008] ${isBengali ? 'font-bengali' : ''}`}>
              <SelectValue className="text-white" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 text-white border-slate-600">
              {facultyOptions.map(opt => (
                <SelectItem key={opt.value} value={opt.value} className="text-gray-300 focus:bg-[#e7b008] focus:text-gray-800">
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>
        {renderField(t('departmentName'), 'departmentName', 'select', departmentOptions)}
      </div>

      <div className="p-4 rounded-xl bg-muted/30 border space-y-4">
        <h3 className="font-semibold">{isBengali ? 'কোর্সের তথ্য' : 'Course Info'}</h3>
        {renderField(t('courseCode'), 'courseCode')}
        {renderField(t('courseTitle'), 'courseTitle')}
        {templateType === 'assignment' && (
          <>
            {renderField(t('assignmentNo'), 'assignmentNo')}
            {renderField(t('assignmentTitle'), 'assignmentTitle')}
          </>
        )}
        {templateType === 'labReport' && (
          <>
            {renderField(t('experimentNo'), 'experimentNo')}
            {renderField(t('experimentName'), 'experimentName')}
          </>
        )}
        {(templateType === 'forum' || templateType === 'homework') &&
          renderField(t('topicName'), 'topicName')}
        {templateType === 'forum' && (
          <>
            {renderField(t('forumNo'),'forumNo')}
          </>
        )}
      </div>

      <div className="p-4 rounded-xl bg-muted/30 border space-y-4">
        <h3 className="font-semibold">{t('submittedBy')}</h3>
        {renderField(t('studentName'), 'studentName')}
        {renderField(t('studentId'), 'studentId')}
        {renderField(t('Roll'),'roll')}
        {renderField(t('Batch (E.g. A,B,C,D....)'), 'section', 'select', sections.map(s => ({ value: s, label: s })))}
        {renderField(t('semester'), 'semester', 'select', semesters.map(s => ({ value: s, label: s })))}
        {renderField(t('batch'), 'batch')}
      </div>

      <div className="p-4 rounded-xl bg-muted/30 border space-y-4">
        <h3 className="font-semibold">{t('submittedTo')}</h3>
        <Select value={data.teacherName} onValueChange={handleTeacherChange}>
          <SelectTrigger className="w-full text-white placeholder:text-gray-400 bg-slate-700/50 border-slate-600 focus:ring-2 focus:ring-[#e7b008] focus:border-[#e7b008]">
            <SelectValue placeholder={t('teacherName')} className="text-gray-400" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 text-white border-slate-600">
            {teacherOptions.map(opt => (
              <SelectItem key={opt.value} value={opt.value} className="text-gray-300 focus:bg-[#e7b008] focus:text-gray-800">
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {renderField(t('teacherDesignation'), 'teacherDesignation', 'select', designationOptions)}
      </div>

      <div className="p-4 rounded-xl bg-muted/30 border space-y-4">
        <h3 className="font-semibold">{isBengali ? 'তারিখ' : 'Dates'}</h3>
        {renderField(t('submissionDate'), 'submissionDate', 'date')}
        {templateType === 'labReport' &&
          renderField(t('experimentDate'), 'experimentDate', 'date')}
      </div>
    </div>
  );
};

export default CoverPageEditor;