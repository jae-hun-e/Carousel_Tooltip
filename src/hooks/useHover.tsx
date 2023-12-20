import { RefObject, useCallback, useEffect, useState } from 'react';

const useHover = <T,>(ref: RefObject<T>) => {
  const [state, setState] = useState(false);
  const handleMouseOver = useCallback(() => setState(true), []);
  const handleMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element || !(element instanceof HTMLElement)) return;

    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);

    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseOut, handleMouseOver]);

  return state;
};

export default useHover;
