import { useContext } from "react";
import { DataContext } from "../context";

export default function UserAddress (){
  const {data, setData} = useContext(DataContext);
  const update = (target) => {
    setData({
      ...data,
      [target.name]: target.value
    });
  }
  return( 
    <div>
      <input type='text' name="city" onChange={e => update(e.target)} value={data.city} placeholder='City' /><br/>
      <input type='text' name="zip_code" onChange={e => update(e.target)} value={data.zip_code} placeholder='Zip Code' /><br/>
      <input type='text' name="country" onChange={e => update(e.target)} value={data.country} placeholder='Country' />
    </div>
  );
}