import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useReactToPrint } from 'react-to-print';
import { ArrowLeft, Printer, RotateCcw, Save, Eye, EyeOff, ZoomIn, ZoomOut } from 'lucide-react';
import Header from '@/components/Header';
import CoverPageEditor from '@/components/CoverPageEditor';
import AssignmentTemplate from '@/components/templates/AssignmentTemplate';
import LabReportTemplate from '@/components/templates/LabReportTemplate';
import ForumTemplate from '@/components/templates/ForumTemplate';
import HomeworkTemplate from '@/components/templates/HomeworkTemplate';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import {
  CoverPageData,
  defaultCoverPageData,
  saveToLocalStorage,
  loadFromLocalStorage,
  clearLocalStorage,
} from '@/lib/storage';

const Editor = () => {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();
  const styleParam = parseInt(searchParams.get('style') || '1');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const isBengali = i18n.language === 'bn';
  const printRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<CoverPageData>(loadFromLocalStorage);
  const [showPreview, setShowPreview] = useState(true);
  const [style, setStyle] = useState(styleParam);
  const [zoom, setZoom] = useState(50);

  useEffect(() => {
    const saved = loadFromLocalStorage();
    setData(saved);
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `${type}-cover-page`,
  });

  const handleSave = () => {
    saveToLocalStorage(data);
    toast({
      title: isBengali ? 'সংরক্ষিত!' : 'Saved!',
      description: isBengali ? 'আপনার তথ্য সংরক্ষণ করা হয়েছে' : 'Your data has been saved to local storage',
    });
  };

  const handleReset = () => {
    clearLocalStorage();
    setData(defaultCoverPageData);
    toast({
      title: isBengali ? 'রিসেট!' : 'Reset!',
      description: isBengali ? 'সব তথ্য মুছে ফেলা হয়েছে' : 'All data has been cleared',
    });
  };

  const renderTemplate = () => {
    switch (type) {
      case 'assignment':
        return <AssignmentTemplate ref={printRef} data={data} style={style} />;
      case 'labReport':
        return <LabReportTemplate ref={printRef} data={data} style={style} />;
      case 'forum':
        return <ForumTemplate ref={printRef} data={data} style={style} />;
      case 'homework':
        return <HomeworkTemplate ref={printRef} data={data} style={style} />;
      default:
        return <AssignmentTemplate ref={printRef} data={data} style={style} />;
    }
  };

  const templateTitle = {
    assignment: t('assignment'),
    labReport: t('labReport'),
    forum: t('forum'),
    homework: t('homework'),
  }[type || 'assignment'];

  const styleNames = [t('style1'), t('style2'), t('style3'), t('style4')];

  // Calculate scale based on zoom (30-100 maps to 0.3-1.0)
  const scale = zoom / 100;

  // Handle mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -5 : 5;
      setZoom(prev => Math.min(100, Math.max(30, prev + delta)));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Top Actions */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-6"
          >
            <Button
              variant="ghost"
              onClick={() => navigate('/templates')}
              className={`gap-2 ${isBengali ? 'font-bengali' : ''}`}
            >
              <ArrowLeft className="w-4 h-4" />
              {t('back')}
            </Button>

            <h1 className={`text-2xl font-display font-bold text-foreground ${isBengali ? 'font-bengali' : ''}`}>
              {templateTitle} {isBengali ? 'এডিটর' : 'Editor'}
            </h1>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowPreview(!showPreview)}
                className="md:hidden"
                title={showPreview ? 'Hide Preview' : 'Show Preview'}
              >
                {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
              <Button
                variant="outline"
                onClick={handleReset}
                className={`gap-2 ${isBengali ? 'font-bengali' : ''}`}
              >
                <RotateCcw className="w-4 h-4" />
                {t('reset')}
              </Button>
              <Button
                variant="outline"
                onClick={handleSave}
                className={`gap-2 ${isBengali ? 'font-bengali' : ''}`}
              >
                <Save className="w-4 h-4" />
                {t('save')}
              </Button>
              <Button
                id="print-btn"
                onClick={() => handlePrint()}
                className={`gap-2 ${isBengali ? 'font-bengali' : ''}`}
              >
                <Printer className="w-4 h-4" />
                {t('print')}
              </Button>
            </div>
          </motion.div>

          {/* Style Selector */}
          <div id="style-selector" className="flex gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar">
            {[1, 2, 3, 4].map((s) => (
              <Button
                key={s}
                variant={style === s ? 'default' : 'outline'}
                size="sm"
                onClick={() => setStyle(s)}
                className={isBengali ? 'font-bengali' : ''}
              >
                {styleNames[s - 1]}
              </Button>
            ))}
          </div>

          {/* Zoom Controls */}
          <div id="zoom-controls" className="flex items-center gap-4 mb-6 p-3 rounded-xl bg-muted/30 border border-border">
            <ZoomOut className="w-4 h-4 text-muted-foreground" />
            <Slider
              value={[zoom]}
              onValueChange={(value) => setZoom(value[0])}
              min={30}
              max={100}
              step={5}
              className="w-40"
            />
            <ZoomIn className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground min-w-[3rem]">{zoom}%</span>
          </div>

          {/* Editor Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form */}
            <motion.div
              id="editor-form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card overflow-y-auto max-h-[calc(100vh-280px)] hide-scrollbar"
            >
              <CoverPageEditor
                data={data}
                onChange={setData}
                templateType={type || 'assignment'}
              />
            </motion.div>

            {/* Preview */}
            <motion.div
              id="preview-area"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`bg-muted/30 rounded-2xl border border-border p-6 overflow-auto max-h-[calc(100vh-280px)] hide-scrollbar ${
                showPreview ? 'block' : 'hidden lg:block'
              }`}
              onWheel={handleWheel}
            >
              <div 
                className="origin-top-left transition-transform duration-200"
                style={{ 
                  transform: `scale(${scale})`,
                  width: `${100 / scale}%`
                }}
              >
                {renderTemplate()}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Editor;
