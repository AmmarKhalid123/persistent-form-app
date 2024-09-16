import { useContext } from "react";
import { DataContext } from "../context";

export default function UserData (){
  const {data, setData} = useContext(DataContext);

  const update = (target) => {
    setData({
      ...data,
      [target.name]: target.value
    });
  }
  return (
    <div>
      <input type='text' value={data.first_name} name="first_name" onChange={(e) => update(e.target)} placeholder='Firstname' /><br/>
      <input type='text' value={data.last_name} name="last_name" onChange={(e) => update(e.target)} placeholder='Lastname' /><br/>
      <input type='number' value={data.age} name="age" onChange={(e) => update(e.target)} placeholder='Age' />
    </div>
  );
}
