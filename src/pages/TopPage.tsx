import React, { useState, useEffect } from "react";

// from app
import { useDispatch, useGlobalState } from "Store";
import { ActionType } from "Reducer";

/**
 * 管理画面トップページ
 * @author kotatanaka
 */
const TopPage: React.FC = () => {
  const dispatch = useDispatch();
  const grobalCount = useGlobalState("count");
  const [count, setCount] = useState<number>(0);
  const [syobon, setSyobon] = useState<string>("");

  useEffect(() => {
    console.log("count=" + count);
    console.log("grobalCount=" + grobalCount)
  });

  return (
    <div>
      <h1>Find Wi-Fi 管理コンソール</h1>
      <p>Global Count: {grobalCount}</p>
      <p>Count: {count}</p>
      <p>{syobon}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          count % 3 === 2
            ? setSyobon("(´･ω･`)")
            : setSyobon("");
        }}
      >
        Click me
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionType.SET_COUNT,
            payload: count
          })
        }
      >
        Save
      </button>
    </div>
  );
};

export default TopPage;
