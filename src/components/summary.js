import { useContext } from "react";
import { DataContext } from "../context";

export default function Summary (){
  const { data } = useContext(DataContext);
  return(
    <div>
      <div>Firstname: {data.first_name} </div>
      <div>Lastname: {data.last_name} </div>
      <div>Age: {data.age} </div>
      <div>City: {data.city} </div>
      <div>Zip Code:  {data.zip_code}Code: </div>
      <div>Country: {data.country} </div>
    </div>
  );
}