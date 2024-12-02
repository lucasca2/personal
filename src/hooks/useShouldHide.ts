import { useEffect, useRef, useState } from "react";

type UseShouldHide = {
  condition: boolean;
  timeout?: number;
};

export const useShouldHide = ({ condition, timeout = 500 }: UseShouldHide) => {
  const [shouldHide, setShouldHide] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | undefined>();
  const renderTimeoutRef = useRef<NodeJS.Timeout | undefined>();

  useEffect(() => {
    if (condition) {
      clearInterval(renderTimeoutRef.current);
      
      setShouldHide(true);

      hideTimeoutRef.current = setTimeout(() => {
        setShouldHide(false);
        setShouldRender(false);
      }, timeout);
    }

    if (!condition) {
      clearInterval(hideTimeoutRef.current);

      renderTimeoutRef.current = setTimeout(() => {
        setShouldHide(false);
        setShouldRender(true);
      }, timeout);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition]);

  return { shouldHide, shouldRender };
};
