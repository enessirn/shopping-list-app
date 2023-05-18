import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ShopList from "./ShopList";
import { useState } from "react";

function App() {
const [inputValue,setInputValue] = useState('');
const [valueList,setValueList] = useState([]);
const addItem = (e) => {
  if(e.key == "Enter") {
    setValueList([...valueList,inputValue]);
    console.log(valueList);
    setInputValue('');
  }
}
  return (
    <div className="flex items-center flex-col w-full py-4 px-2">
      <div className="text-4xl md:text-7xl select-none cursor-pointer">
        <FontAwesomeIcon
          className="mr-8 text-orange-400 font-bold"
          icon={faCartShopping}
        />
        Shopping List
        <span className="ml-6 font-bold text-orange-400">App</span>
      </div>
      <div className="w-full md:w-[500px] m-auto mt-12">
        <div className="relative mt-2 rounded-md shadow-sm m-auto ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <FontAwesomeIcon
                className="text-orange-300"
                icon={faCartShopping}
              />
            </span>
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6 outline-none"
            placeholder="Buy an apple"
            value={inputValue}
            onKeyPress={addItem}
            onChange={((e) => setInputValue(e.target.value))}
          />
        </div>
      </div>
      <div className="mt-8">
        {
          valueList.map((list,index) => {
            return(
              <ShopList item={list} data-index={index}/>
            )
            
          })
        }
      </div>
      {/* content end */}
    </div>
  );
}

export default App;
