import { useEffect, useState } from "react";

export const useDebounce = (initialValue, delay = 1000) => {
  const [debouncevalue, setDebounceValue] = useState(initialValue);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceValue(initialValue);
    }, delay);
    return () => {
      clearInterval(timerId);
    };
  }, [initialValue, delay]);

  return debouncevalue;
};
