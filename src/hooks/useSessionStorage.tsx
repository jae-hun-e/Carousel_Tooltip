import { useState } from 'react';

const useSessionStorage = (key: string, initialValue: string) => {
  const [getSession, setSessionValue] = useState<Array<string>>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setSession = (value: string) => {
    try {
      const current = getSession;
      setSessionValue([...current, value]);
      sessionStorage.setItem(key, JSON.stringify([...current, value]));
    } catch (error) {
      console.error(error);
    }
  };

  const initSession = (value: string) => {
    try {
      sessionStorage.setItem(key, JSON.stringify([value]));
    } catch (error) {
      console.error(error);
    }
  };

  return { getSession, setSession, initSession };
};

export default useSessionStorage;
