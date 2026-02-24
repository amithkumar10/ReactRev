import { useRef, useCallback } from "react";

function useThrottle(callback, delay) {
  const lastCall = useRef(0);

  const throttledFunction = useCallback(
    (...args) => {
      const now = Date.now();
      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        callback(...args);
      }
    },
    [callback, delay]
  );

  return throttledFunction;
}

export default useThrottle;