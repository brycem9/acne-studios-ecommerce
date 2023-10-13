export const getLocalStorageItem = (key) => {
    if (typeof window !== 'undefined') {
      // Check if window (browser) is defined before accessing localStorage
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  };
  
  export const setLocalStorageItem = (key, value) => {
    if (typeof window !== 'undefined') {
      // Check if window (browser) is defined before accessing localStorage
      localStorage.setItem(key, JSON.stringify(value));
    }
  };