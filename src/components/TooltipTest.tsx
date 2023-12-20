import Tooltip from '@/components/Tooltip';

const TooltipTest = () => {
  return (
    <>
      <Tooltip message={'top'} direction={'top'}>
        <p>top Tooltip.</p>
      </Tooltip>
      <Tooltip message={'right'} direction={'right'}>
        <p>right Tooltip.</p>
      </Tooltip>
      <Tooltip message={'bottom'} direction={'bottom'}>
        <p>bottom Tooltip.</p>
      </Tooltip>
      <Tooltip message={'left'} direction={'left'}>
        <p>left Tooltip. </p>
      </Tooltip>

      <Tooltip message={'input1'} direction={'bottom'}>
        <input placeholder={'input1'} />
      </Tooltip>
      <Tooltip message={'input2'} direction={'bottom'}>
        <input placeholder={'input2'} />
      </Tooltip>
    </>
  );
};

export default TooltipTest;
