import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  CoverPageData, 
  faculties, 
  departmentsByFaculty,
  designations, 
  semesters, 
  sections, 
  groups,
  getTeachersForDepartment 
} from '@/lib/storage';

interface CoverPageEditorProps {
  data: CoverPageData;
  onChange: (data: CoverPageData) => void;
  templateType: string;
}

const CoverPageEditor = ({ data, onChange, templateType }: CoverPageEditorProps) => {
  const { t, i18n } = useTranslation();
  const isBengali = i18n.language === 'bn';

  const handleChange = (field: keyof CoverPageData, value: string) => {
    const newData = { ...data, [field]: value };
    
    // When faculty changes, reset department and teacher
    if (field === 'facultyName') {
      const depts = departmentsByFaculty[value] || [];
      newData.departmentName = depts[0]?.key || '';
      newData.teacherName = '';
    }
    
    // When department changes, reset teacher
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
      teacherDesignation: teacher?.designation || 'lecturer'
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
      <Label className={`text-sm font-medium text-foreground ${isBengali ? 'font-bengali' : ''}`}>
        {label}
      </Label>
      {type === 'select' && options ? (
        <Select value={data[field]} onValueChange={(value) => handleChange(field, value)}>
          <SelectTrigger className={`w-full ${isBengali ? 'font-bengali' : ''}`}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="max-h-60">
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value} className={isBengali ? 'font-bengali' : ''}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          type={type}
          value={data[field]}
          onChange={(e) => handleChange(field, e.target.value)}
          className={`w-full ${isBengali ? 'font-bengali' : ''}`}
        />
      )}
    </motion.div>
  );

  const facultyOptions = faculties.map((f) => ({
    value: f.key,
    label: isBengali ? f.bn : f.en,
  }));

  // Get departments based on selected faculty
  const currentDepartments = departmentsByFaculty[data.facultyName] || [];
  const departmentOptions = currentDepartments.map((d) => ({
    value: d.key,
    label: isBengali ? d.bn : d.en,
  }));

  const designationOptions = designations.map((d) => ({
    value: d.key,
    label: isBengali ? d.bn : d.en,
  }));

  // Get teachers based on selected department
  const currentTeachers = getTeachersForDepartment(data.departmentName);
  const teacherOptions = currentTeachers.map((teacher) => ({
    value: teacher.name,
    label: teacher.name,
  }));

  const semesterOptions = semesters.map((s) => ({ value: s, label: s }));
  const sectionOptions = sections.map((s) => ({ value: s, label: s }));
  const groupOptions = groups.map((g) => ({ value: g, label: g }));

  return (
    <div className="space-y-6">
      {/* University Info - Faculty hidden from view but used for filtering */}
      <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-4">
        <h3 className={`font-display font-semibold text-foreground ${isBengali ? 'font-bengali' : ''}`}>
          {isBengali ? 'প্রতিষ্ঠানের তথ্য' : 'Institution Info'}
        </h3>
        {renderField(t('universityName'), 'universityName')}
        
        {/* Faculty selector - used for filtering departments only */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <Label className={`text-sm font-medium text-muted-foreground ${isBengali ? 'font-bengali' : ''}`}>
            {isBengali ? 'অনুষদ নির্বাচন করুন (বিভাগ ফিল্টার করতে)' : 'Select Faculty (to filter departments)'}
          </Label>
          <Select value={data.facultyName} onValueChange={(value) => handleChange('facultyName', value)}>
            <SelectTrigger className={`w-full ${isBengali ? 'font-bengali' : ''}`}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {facultyOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} className={isBengali ? 'font-bengali' : ''}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>
        
        {renderField(t('departmentName'), 'departmentName', 'select', departmentOptions)}
      </div>

      {/* Course Info */}
      <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-4">
        <h3 className={`font-display font-semibold text-foreground ${isBengali ? 'font-bengali' : ''}`}>
          {isBengali ? 'কোর্সের তথ্য' : 'Course Info'}
        </h3>
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
        
        {(templateType === 'forum' || templateType === 'homework') && (
          renderField(t('topicName'), 'topicName')
        )}
      </div>

      {/* Student Info */}
      <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-4">
        <h3 className={`font-display font-semibold text-foreground ${isBengali ? 'font-bengali' : ''}`}>
          {t('submittedBy')}
        </h3>
        {renderField(t('studentName'), 'studentName')}
        {renderField(t('studentId'), 'studentId')}
        <div className="grid grid-cols-2 gap-4">
          {renderField(t('section'), 'section', 'select', sectionOptions)}
          {renderField(t('semester'), 'semester', 'select', semesterOptions)}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {renderField(t('session'), 'session')}
          {renderField(t('batch'), 'batch')}
        </div>
        {templateType === 'labReport' && (
          renderField(t('group'), 'group', 'select', groupOptions)
        )}
      </div>

      {/* Teacher Info */}
      <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-4">
        <h3 className={`font-display font-semibold text-foreground ${isBengali ? 'font-bengali' : ''}`}>
          {t('submittedTo')}
        </h3>
        
        {/* Teacher dropdown based on department */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <Label className={`text-sm font-medium text-foreground ${isBengali ? 'font-bengali' : ''}`}>
            {t('teacherName')}
          </Label>
          <Select value={data.teacherName} onValueChange={handleTeacherChange}>
            <SelectTrigger className={`w-full ${isBengali ? 'font-bengali' : ''}`}>
              <SelectValue placeholder={isBengali ? 'শিক্ষক নির্বাচন করুন' : 'Select Teacher'} />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {teacherOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>
        
        {renderField(t('teacherDesignation'), 'teacherDesignation', 'select', designationOptions)}
      </div>

      {/* Dates */}
      <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-4">
        <h3 className={`font-display font-semibold text-foreground ${isBengali ? 'font-bengali' : ''}`}>
          {isBengali ? 'তারিখ' : 'Dates'}
        </h3>
        {renderField(t('submissionDate'), 'submissionDate', 'date')}
        {templateType === 'labReport' && (
          renderField(t('experimentDate'), 'experimentDate', 'date')
        )}
      </div>
    </div>
  );
};

export default CoverPageEditor;
