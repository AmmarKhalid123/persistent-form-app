import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useFindPath = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState();
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  return currentPath;
};

export const loadData = (setData) => {
  try{
    let persisted_data = JSON.parse(localStorage.getItem('data'));
    if (persisted_data){
      setData(persisted_data);
    }
  }
  catch(e){
    console.log('Invalid data in local storage');
    localStorage.deleteItem('data');
  }
}