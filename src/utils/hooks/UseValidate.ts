import { useState, useEffect } from "react";

const useValidateURL = (url: string): boolean => {
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const validateURL = (url: string): boolean => {
      try {
        new URL(url);
        return true;
      } catch (e) {
        return false;
      }
    };

    setIsValid(validateURL(url));
  }, [url]);

  return isValid;
};

export default useValidateURL;
