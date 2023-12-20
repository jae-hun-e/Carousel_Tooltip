import { RefObject, useEffect, useRef, useState } from 'react';

import useFocus from '@/hooks/useFocus';
import useHover from '@/hooks/useHover';
import useOnClick from '@/hooks/useOnClick';

const useInteraction = <T,>(): [RefObject<T>, boolean] => {
  const [state, setState] = useState(false);
  const ref = useRef<T>(null);
  const isHover = useHover<T>(ref);
  const isFocus = useFocus<T>(ref);
  const onClick = useOnClick<T>(ref);

  useEffect(() => {
    if (isHover || isFocus || onClick) setState(true);
    else setState(false);
  }, [isHover, isFocus, onClick]);

  return [ref, state];
};

export default useInteraction;
