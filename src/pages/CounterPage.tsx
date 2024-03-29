import { useCallback, useEffect, useState } from 'react';
import { ActionType } from 'src/constants/enums';
import { useDispatch, useStore } from 'src/store/Context';

/** カウンターアプリ */
const CounterPage: React.FC = () => {
  const { dispatchCounter } = useDispatch();
  const globalCounterState = useStore('counter');
  const [count, setCount] = useState<number>(0);
  const [syobon, setSyobon] = useState<string>('');

  useEffect(() => {
    console.log('[Counter] count = ' + count);
    console.log('[Counter] globalCount = ' + globalCounterState.count);
  });

  const handleCountUp = useCallback(() => {
    setCount(count + 1);
    count % 3 === 2 ? setSyobon('(´･ω･`)') : setSyobon('');
  }, [count]);

  const handleGlobalCountUp = useCallback(() => {
    dispatchCounter({
      type: ActionType.SET_COUNT,
      payload: count,
    });
  }, [count, dispatchCounter]);

  return (
    <div>
      <h1>Counter</h1>
      <p>Global Count: {globalCounterState.count}</p>
      <p>Count: {count}</p>
      <p>{syobon}</p>
      <button onClick={handleCountUp}>Click me</button>
      <button onClick={handleGlobalCountUp}>Save</button>
    </div>
  );
};

export default CounterPage;
