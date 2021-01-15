import React, {
  useState,
  useMemo,
  useCallback,
  ChangeEvent,
  ReactText,
} from 'react';

/** 型変換 */
const ConvertValuePage: React.FC = () => {
  const [value, setValue] = useState<ReactText>('');

  const result = useMemo(() => {
    return {
      [`<Input> Number(${value})`]: Number(value),
      ['Number(null)']: Number(null),
      ['Number(undefined)']: Number(undefined),
      [`<Input> String(${value})`]: String(value),
      ['String(null)']: String(null),
      ['String(undefined)']: String(undefined),
    };
  }, [value]);

  const displayValue = useMemo<string | number>(() => {
    return Number.isNaN(Number(value)) || value === '' ? `"${value}"` : value;
  }, [value]);

  const displayResult = useMemo<{ [x: string]: ReactText }>(() => {
    const obj: { [x: string]: ReactText } = {};

    Object.keys(result).forEach((key) => {
      const keyName =
        Number.isNaN(Number(value)) || value === ''
          ? key.replace(`(${value})`, `("${value}")`)
          : key;
      const displayResult =
        typeof result[key] === 'string' ? `"${result[key]}"` : result[key];

      obj[keyName] = displayResult;
    });

    return obj;
  }, [result]);

  const handleInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value],
  );

  return (
    <div>
      <h1>Convert Value</h1>
      <input value={value} onChange={handleInput} />
      <p>入力値:&nbsp;{displayValue}</p>
      {Object.keys(displayResult).map((key) => {
        return (
          <p>
            {key} = {displayResult[key]}
          </p>
        );
      })}
    </div>
  );
};

export default ConvertValuePage;
