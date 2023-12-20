import { PathsProps } from '@/types/commonTypes';

interface HeaderProps {
  current: PathsProps;
  totalLength: number;
  onClickBack: () => void;
  onClickForward: () => void;
}
const Header = ({ current, totalLength, onClickBack, onClickForward }: HeaderProps) => {
  return (
    <header className="flex justify-center w-full h-12 relative bg-blue-400 ">
      {current.index !== 0 && (
        <div onClick={onClickBack} className="absolute h-full top-0 bottom-0 left-10">
          &lt;
        </div>
      )}

      <h1 className="text-3xl font-bold">{current.path}</h1>
      {current.index < totalLength - 1 && (
        <div onClick={onClickForward} className="absolute top-0 bottom-0 right-10">
          &gt;
        </div>
      )}
    </header>
  );
};

export default Header;
