import { ReactNode, useEffect, useRef, useState } from 'react';

import useInteraction from '@/hooks/useInteraction';
import { cls } from '@/utils/utils';

type Direction = 'top' | 'right' | 'bottom' | 'left';
interface TooltipProps {
  children: ReactNode;
  message: string;
  direction: Direction;
}

const Tooltip = ({ children, message, direction }: TooltipProps) => {
  const [ref, openTooltip] = useInteraction<HTMLDivElement>();
  const messageRef = useRef<HTMLDivElement>(null);

  const [messagePosition, setMessagePosition] = useState<{ [key in Direction]?: number }>();
  const [tick, setTick] = useState<{ [key in Direction]?: number }>();

  useEffect(() => {
    const el = messageRef.current;
    if (!el) return;

    const width = el.offsetWidth;
    const height = el.offsetHeight;

    const newSize = { ...messagePosition };

    if (direction === 'top' || direction === 'bottom') {
      newSize[direction] = -10 - height;
    } else {
      newSize[direction] = -10 - width;
    }
    setMessagePosition(newSize);
    setTick({ [direction]: -25 });
  }, [openTooltip]);

  return (
    <div className="relative inline-flex justify-center items-center" ref={ref}>
      {children}

      <div
        className={cls(
          openTooltip ? 'visible opacity-100' : 'invisible opacity-0',
          'transition-opacity absolute bg-gray-500 origin-center rotate-45 w-4 h-4'
        )}
        style={tick}
      />
      <div
        className={cls(
          openTooltip ? 'visible opacity-100' : 'invisible opacity-0',
          'transition-opacity absolute bg-gray-500 rounded-xl shadow-2xl p-1 text-center z-10'
        )}
        style={messagePosition}
        ref={messageRef}>
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
