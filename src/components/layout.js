import { Outlet, useNavigate } from "react-router-dom";
import { pages, useFindPath } from "../utils";
import { useContext } from "react";
import { DataContext } from "../context";

export default function Layout(){
  let route = useFindPath();
  let navigate = useNavigate();
  const { data } = useContext(DataContext);
  
  const prevPage = () => {
    pages.forEach((page, i) => {
      if (page.route === route){
        navigate(pages[i-1].route);
        return true;
      }
    });
  }
  const nextPage = () => {
    localStorage.setItem('data', JSON.stringify(data));
    pages.forEach((page, i) => {
      if (page.route === route){
        navigate(pages[i+1].route);
        return true;
      }
    });
  }

  const isFirstRoute = (route) => pages[0].route === route;
  const isLastRoute = (route) => pages[pages.length - 1].route === route;

  return(
    <div className="main">
      <div>
        <Outlet/>
        <div className="nav-btns">
        {!isFirstRoute(route) && <button className="back" onClick={prevPage}>Back</button>}
        {!isLastRoute(route) && <button className="next" onClick={nextPage}>Next</button>}
        </div>
      </div>
    </div>
  );
}