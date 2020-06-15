import React, { useState, useEffect, useCallback } from 'react';

// from app
import { useDispatch, useGlobalState } from 'src/Store';
import { ActionType } from 'src/reducer';

/** カウンターアプリ */
const CounterPage: React.FC = () => {
  const dispatch = useDispatch();
  const grobalCount = useGlobalState('count');
  const [count, setCount] = useState<number>(0);
  const [syobon, setSyobon] = useState<string>('');

  useEffect(() => {
    console.log('[Counter] count = ' + count);
    console.log('[Counter] grobalCount = ' + grobalCount);
  });

  const handleCountUp = useCallback(() => {
    setCount(count + 1);
    count % 3 === 2 ? setSyobon('(´･ω･`)') : setSyobon('');
  }, [count]);

  const handleGlobalCountUp = useCallback(() => {
    dispatch({
      type: ActionType.SET_COUNT,
      payload: count,
    });
  }, [count, dispatch]);

  return (
    <div>
      <h1>Counter</h1>
      <p>Global Count: {grobalCount}</p>
      <p>Count: {count}</p>
      <p>{syobon}</p>
      <button onClick={handleCountUp}>Click me</button>
      <button onClick={handleGlobalCountUp}>Save</button>
    </div>
  );
};

export default CounterPage;
