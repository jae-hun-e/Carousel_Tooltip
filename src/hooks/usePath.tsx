import { useEffect, useState } from 'react';

import useSessionStorage from '@/hooks/useSessionStorage';

const usePath = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { getSession, setSession } = useSessionStorage('path', '');
  const { getSession: currentPath, initSession } = useSessionStorage('current', '');

  useEffect(() => {
    if (!currentPath) {
      setSession('home');
    } else {
      setCurrentIndex(getSession.findIndex((v) => v === currentPath[0]));
    }
  }, []);

  useEffect(() => {
    initSession(getSession[currentIndex]);
  }, [currentIndex]);

  return { getPaths: getSession, addPaths: setSession, currentIndex, setCurrentIndex };
};

export default usePath;
