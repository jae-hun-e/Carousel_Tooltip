import { RefObject, useCallback, useEffect, useState } from 'react';

const useOnClick = <T,>(ref: RefObject<T>) => {
  const [state, setState] = useState(false);
  const handleClickToggle = useCallback(() => setState((prev) => !prev), []);

  useEffect(() => {
    const element = ref.current;
    if (!element || !(element instanceof HTMLElement)) return;

    element.addEventListener('click', handleClickToggle);

    return () => {
      element.removeEventListener('click', handleClickToggle);
    };
  }, [handleClickToggle]);

  return state;
};

export default useOnClick;
