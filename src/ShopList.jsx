import { useState } from "react";
export default function ShopList({ item, index }) {
const [checkValue,setCheckValue] = useState('');
  return (
    <div className="bg-orange-200 w-[500px] py-4 px-2 border-b-2 border-orange-300 rounded">
      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" data-index={index}>
        <input type="checkbox" onChange={(e)=> setCheckValue(e.target.checked)} />
        <label 
        className={`inline-block pl-[0.15rem] hover:cursor-pointer ${checkValue === true ? "line-through" : ""} text-2xl ml-4 `} >
          {item}
        </label>
      </div>
    </div>
  );
}
