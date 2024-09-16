import React, { useEffect, useState } from "react";
import { DataContext } from "./context";
import router from "./routes";
import { initialData, loadData } from "./utils";
import { RouterProvider } from "react-router-dom";


function App() {
  let [data, setData] = useState(initialData);
  const value = { data, setData };

  useEffect(() => {
    loadData(setData);
  }, []);

  return (
    <DataContext.Provider value={value}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
}

export default App;
