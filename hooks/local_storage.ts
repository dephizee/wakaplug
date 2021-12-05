import React, { useState } from 'react';

export const useStateWithLocalStorage = (localStorageKey:string) => {
  const [value, setValue] = useState(
    typeof window !== 'undefined'?(localStorage.getItem(localStorageKey) || '') : ''
  );
 
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value,localStorageKey ]);
 
  return [value, setValue];
};
export const useStateWithLocalStorageToken:any = () => {
    const [value, setValue] = useState(
        typeof window !== 'undefined'?(localStorage.getItem('app_token') || '') : ''
    );
   
    React.useEffect(() => {
        try {
            localStorage.setItem('app_token', value);      
        } catch (error) {
            
        }
      
    }, [value]);
   
    return [value, setValue];
  };

// export {useStateWithLocalStorage};