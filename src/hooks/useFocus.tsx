import { RefObject, useCallback, useEffect, useState } from 'react';

const useFocus = <T,>(ref: RefObject<T>) => {
  const [state, setState] = useState(false);
  const handleFocusIn = useCallback(() => setState(true), []);
  const handleFocusOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element || !(element instanceof HTMLElement)) return;

    element.addEventListener('focusin', handleFocusIn);
    element.addEventListener('focusout', handleFocusOut);

    return () => {
      element.removeEventListener('focusin', handleFocusIn);
      element.removeEventListener('focusout', handleFocusOut);
    };
  }, [handleFocusIn, handleFocusOut]);

  return state;
};

export default useFocus;
