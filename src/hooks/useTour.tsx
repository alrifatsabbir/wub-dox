import { useEffect, useCallback } from 'react';
import { driver, DriveStep } from 'driver.js';
import 'driver.js/dist/driver.css';

const TOUR_SEEN_KEY = 'covergen_tour_seen';

interface TourConfig {
  steps: DriveStep[];
  onComplete?: () => void;
}

export const useTour = (config: TourConfig) => {
  const { steps, onComplete } = config;

  const startTour = useCallback(() => {
    const driverObj = driver({
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      steps,
      popoverClass: 'driver-popover-dark',
      onDestroyed: () => {
        localStorage.setItem(TOUR_SEEN_KEY, 'true');
        onComplete?.();
      },
    });
    
    driverObj.drive();
  }, [steps, onComplete]);

  const resetTour = useCallback(() => {
    localStorage.removeItem(TOUR_SEEN_KEY);
  }, []);

  const hasSeenTour = useCallback(() => {
    return localStorage.getItem(TOUR_SEEN_KEY) === 'true';
  }, []);

  useEffect(() => {
    // Auto-start tour for first-time users after a delay
    const timer = setTimeout(() => {
      if (!hasSeenTour()) {
        startTour();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [hasSeenTour, startTour]);

  return { startTour, resetTour, hasSeenTour };
};

export const homeTourSteps: DriveStep[] = [
  {
    element: '#logo',
    popover: {
      title: '🎓 Welcome to CoverGen!',
      description: 'Create professional university cover pages in seconds. Let us show you around!',
      side: 'bottom',
      align: 'start',
    },
  },
  {
    element: '#templates-link',
    popover: {
      title: '📄 Templates',
      description: 'Browse all available templates for assignments, lab reports, forums, and homework.',
      side: 'bottom',
      align: 'center',
    },
  },
  {
    element: '#language-toggle',
    popover: {
      title: '🌐 Language Toggle',
      description: 'Switch between English and বাংলা with a single click!',
      side: 'bottom',
      align: 'end',
    },
  },
  {
    element: '#social-links',
    popover: {
      title: '🔗 Follow Us',
      description: 'Connect with us on GitHub and LinkedIn for updates!',
      side: 'bottom',
      align: 'end',
    },
  },
  {
    element: '#get-started-btn',
    popover: {
      title: '🚀 Get Started',
      description: 'Click here to start creating your first cover page!',
      side: 'top',
      align: 'center',
    },
  },
  {
    element: '#template-cards',
    popover: {
      title: '📋 Choose Your Template',
      description: 'Select from 4 different template types, each with 4 unique styles!',
      side: 'top',
      align: 'center',
    },
  },
];

export const editorTourSteps: DriveStep[] = [
  {
    element: '#editor-form',
    popover: {
      title: '✏️ Edit Your Details',
      description: 'Fill in your course, student, and teacher information here.',
      side: 'right',
      align: 'start',
    },
  },
  {
    element: '#zoom-controls',
    popover: {
      title: '🔍 Zoom Controls',
      description: 'Zoom in or out to preview your document better.',
      side: 'bottom',
      align: 'center',
    },
  },
  {
    element: '#style-selector',
    popover: {
      title: '🎨 Style Selection',
      description: 'Choose from 4 different styles for your cover page.',
      side: 'bottom',
      align: 'start',
    },
  },
  {
    element: '#preview-area',
    popover: {
      title: '👁️ Live Preview',
      description: 'See your changes in real-time as you edit!',
      side: 'left',
      align: 'start',
    },
  },
  {
    element: '#print-btn',
    popover: {
      title: '🖨️ Print Your Document',
      description: 'When ready, click here to print or save as PDF!',
      side: 'bottom',
      align: 'end',
    },
  },
];
