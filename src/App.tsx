import Carousel from '@/components/Carousel';
import Content from '@/components/Content';
import Header from '@/components/Header';
import { route } from '@/constants/dummyData';
import usePath from '@/hooks/usePath';

const App = () => {
  const { getPaths, addPaths, currentIndex, setCurrentIndex } = usePath();

  const handleBack = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleForward = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleNextPath = () => {
    setCurrentIndex((prev) => prev + 1);
    addPaths(route[currentIndex + 1].title);
  };

  return (
    <div>
      <Header
        current={{ path: route[currentIndex].title, index: currentIndex }}
        totalLength={getPaths.length}
        onClickBack={handleBack}
        onClickForward={handleForward}
      />
      <main>
        {getPaths && (
          <Carousel currentIndex={currentIndex}>
            {route?.map(({ title, id }) => (
              <Content
                key={id}
                title={title}
                onNextPath={handleNextPath}
                isEnd={id === route[route.length - 1].id}
              />
            ))}
          </Carousel>
        )}
      </main>
    </div>
  );
};

export default App;
