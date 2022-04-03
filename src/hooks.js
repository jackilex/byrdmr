import React,{ useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

export const useScreenHook = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

  };
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });


  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1440px)",
  });



    return {
      height,
      isDesktop,
      isMobileDevice,
      isTabletDevice
    }
};
