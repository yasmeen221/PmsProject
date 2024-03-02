import { useEffect } from "react";

// this function to store all useEffects or any side effect and reusable it more place
export const useTitle = (title) => {
  return useEffect(() => {
    document.title = `innovaPMS | ${title}`;
  }, [title]);
};
