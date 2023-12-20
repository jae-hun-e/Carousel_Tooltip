import { ReactNode, useEffect, useRef } from 'react';

interface CarouselProps {
  children: ReactNode;
  currentIndex: number;
}

const Carousel = ({ children, currentIndex }: CarouselProps) => {
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  }, []);

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden h-[90vh]">
      <ul className="flex w-full h-full" ref={carouselRef}>
        {children}
      </ul>
    </div>
  );
};

export default Carousel;
