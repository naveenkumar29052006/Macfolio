import { useEffect } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import './tour.css';

export const Tour = () => {
  useEffect(() => {
    const hasSeenTour = localStorage.getItem('macfolio_tour_seen');
    
    if (!hasSeenTour) {
      const tourDriver = driver({
        popoverClass: 'mac-tour-theme',
        steps: [
          { element: '#welcome', popover: { title: 'Welcome!', description: 'Welcome to my interactive Mac OS themed portfolio.', side: "bottom", align: 'start' } },
          { element: '#desktop-items > div:first-child', popover: { title: 'My Projects', description: 'Here are my projects on the desktop. Double-click the folders to explore them!', side: "left", align: 'start' } },
          { element: '#dock', popover: { title: 'The Dock', description: 'Here are all the main apps. You can open them by clicking the icons.', side: "top", align: 'center' } },
          { element: '[aria-label="Projects"]', popover: { title: 'Resume', description: 'This is the Finder. Open it to find my Resume!', side: "top", align: 'center' } },
          { element: '[aria-label="Bio & Experience"]', popover: { title: 'About Me', description: 'This is Safari, where you can learn more about me and my experience.', side: "top", align: 'center' } },
          { element: '[aria-label="Skills"]', popover: { title: 'My Skills', description: 'Open the Terminal to see my technical skills and stack.', side: "top", align: 'center' } },
          { element: '[aria-label="Contact"]', popover: { title: 'Contact', description: 'Want to hire me or get in touch? Click here to open my contact info.', side: "top", align: 'center' } },
        ],
        onDestroyStarted: () => {
          if (!tourDriver.hasNextStep() || confirm("Are you sure you want to skip the tour?")) {
            localStorage.setItem('macfolio_tour_seen', 'true');
            tourDriver.destroy();
          }
        },
      });

      // Small delay to ensure elements are fully rendered after preloader
      setTimeout(() => {
         tourDriver.drive();
      }, 500);
    }
  }, []);

  return null;
};

export const startTour = () => {
  const tourDriver = driver({
    popoverClass: 'mac-tour-theme',
    steps: [
      { element: '#welcome', popover: { title: 'Welcome!', description: 'Welcome to my interactive Mac OS themed portfolio.', side: "bottom", align: 'start' } },
      { element: '#desktop-items > div:first-child', popover: { title: 'My Projects', description: 'Here are my projects on the desktop. Double-click the folders to explore them!', side: "left", align: 'start' } },
      { element: '#dock', popover: { title: 'The Dock', description: 'Here are all the main apps. You can open them by clicking the icons.', side: "top", align: 'center' } },
      { element: '[aria-label="Projects"]', popover: { title: 'Resume', description: 'This is the Finder. Open it to find my Resume!', side: "top", align: 'center' } },
      { element: '[aria-label="Bio & Experience"]', popover: { title: 'About Me', description: 'This is Safari, where you can learn more about me and my experience.', side: "top", align: 'center' } },
      { element: '[aria-label="Skills"]', popover: { title: 'My Skills', description: 'Open the Terminal to see my technical skills and stack.', side: "top", align: 'center' } },
      { element: '[aria-label="Contact"]', popover: { title: 'Contact', description: 'Want to hire me or get in touch? Click here to open my contact info.', side: "top", align: 'center' } },
    ]
  });
  tourDriver.drive();
}
