import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useReactToPrint } from 'react-to-print';
import {
  ArrowLeft,
  Printer,
  RotateCcw,
  Save,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';

import Header from '@/components/Header';
import CoverPageEditor from '@/components/CoverPageEditor';
import AssignmentTemplate from '@/components/templates/AssignmentTemplate';
import LabReportTemplate from '@/components/templates/LabReportTemplate';
import ForumTemplate from '@/components/templates/ForumTemplate';
import HomeworkTemplate from '@/components/templates/HomeworkTemplate';

import { Button } from '@/components/ui/button';
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
  const previewRef = useRef<HTMLDivElement>(null);

  /* ---------------- DATA ---------------- */
  const [data, setData] = useState<CoverPageData>(loadFromLocalStorage);
  const [style, setStyle] = useState(styleParam);

  /* ---------------- PREVIEW TRANSFORM ---------------- */
  const [scale, setScale] = useState(0.6);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setData(loadFromLocalStorage());
  }, []);

  /* ---------------- PREVENT BROWSER ZOOM (CRITICAL) ---------------- */
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;

    const wheelHandler = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault(); // 🔥 browser zoom বন্ধ
        const delta = e.deltaY < 0 ? 0.06 : -0.06;
        setScale(prev =>
          Math.min(1.3, Math.max(0.3, prev + delta))
        );
      }
    };

    el.addEventListener('wheel', wheelHandler, { passive: false });
    return () => el.removeEventListener('wheel', wheelHandler);
  }, []);

  /* ---------------- PRINT ---------------- */
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `${type}-cover-page`,
  });

  /* ---------------- ACTIONS ---------------- */
  const handleSave = () => {
    saveToLocalStorage(data);
    toast({
      title: isBengali ? 'সংরক্ষিত!' : 'Saved!',
      description: isBengali
        ? 'আপনার তথ্য সংরক্ষণ করা হয়েছে'
        : 'Your data has been saved',
    });
  };

  const handleReset = () => {
    clearLocalStorage();
    setData(defaultCoverPageData);
    setScale(0.6);
    setPosition({ x: 0, y: 0 });
    toast({
      title: isBengali ? 'রিসেট!' : 'Reset!',
      description: isBengali
        ? 'সব তথ্য মুছে ফেলা হয়েছে'
        : 'All data cleared',
    });
  };

  /* ---------------- DRAG ---------------- */
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const stopDragging = () => setIsDragging(false);

  /* ---------------- TEMPLATE ---------------- */
  const renderTemplate = () => {
    const props = { ref: printRef, data, style };
    switch (type) {
      case 'assignment':
        return <AssignmentTemplate {...props} />;
      case 'labReport':
        return <LabReportTemplate {...props} />;
      case 'forum':
        return <ForumTemplate {...props} />;
      case 'homework':
        return <HomeworkTemplate {...props} />;
      default:
        return <AssignmentTemplate {...props} />;
    }
  };

  const templateTitle = {
    assignment: t('assignment'),
    labReport: t('labReport'),
    forum: t('forum'),
    homework: t('homework'),
  }[type || 'assignment'];

  const styleNames = [t('style1'), t('style2'), t('style3'), t('style4')];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <Button variant="ghost" onClick={() => navigate('/templates')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('back')}
            </Button>

            <h1 className="text-2xl font-bold">
              {templateTitle} {isBengali ? 'এডিটর' : 'Editor'}
            </h1>

            <div className="flex gap-2">
              <Button variant="outline" onClick={handleReset}>
                <RotateCcw className="w-4 h-4 mr-1" />
                {t('reset')}
              </Button>
              <Button variant="outline" onClick={handleSave}>
                <Save className="w-4 h-4 mr-1" />
                {t('save')}
              </Button>
              <Button onClick={handlePrint}>
                <Printer className="w-4 h-4 mr-1" />
                {t('print')}
              </Button>
            </div>
          </div>

          {/* STYLE + ZOOM */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map(s => (
                <Button
                  key={s}
                  size="sm"
                  variant={style === s ? 'default' : 'outline'}
                  onClick={() => setStyle(s)}
                >
                  {styleNames[s - 1]}
                </Button>
              ))}
            </div>

            {/* ZOOM BUTTONS */}
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => setScale(s => Math.max(0.3, s - 0.1))}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="text-sm w-12 text-center">
                {Math.round(scale * 100)}%
              </span>
              <Button
                size="icon"
                variant="outline"
                onClick={() => setScale(s => Math.min(1.3, s + 0.1))}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* MAIN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-3 bg-card border rounded-2xl p-6 h-[calc(100vh-50px)] overflow-y-auto hide-scrollbar">
              <CoverPageEditor
                data={data}
                onChange={setData}
                templateType={type || 'assignment'}
              />
            </div>

            {/* RIGHT PREVIEW */}
            <div
              ref={previewRef}
              className="lg:col-span-7 bg-muted/20 border rounded-2xl relative overflow-hidden h-[calc(100vh-250px)]"
            >
              <div
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
              >
                <div
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transformOrigin: '0 0',
                    width: 'fit-content',
                    transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                  }}
                >
                  {renderTemplate()}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Editor;
