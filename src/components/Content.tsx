import TooltipTest from '@/components/TooltipTest';

interface MainProps {
  title: string;
  onNextPath: () => void;
  isEnd: boolean;
}

const Content = ({ title, isEnd, onNextPath }: MainProps) => {
  return (
    <div className="min-w-full h-full flex flex-col justify-center items-center gap-5">
      <p className="text-2xl">current Page : {title}</p>
      {isEnd ? (
        <>
          <p className="text-xl">마지막 페이지 입니다.</p>
          <TooltipTest />
        </>
      ) : (
        <button
          onClick={onNextPath}
          className="border-2 border-blue-200 bg-blue-300 px-3 py-1 rounded-2xl">
          다음페이지
        </button>
      )}
    </div>
  );
};

export default Content;
