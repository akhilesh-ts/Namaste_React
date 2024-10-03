import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import NestedDishDetails from "./NestedDishDetails";

const NestedDishItems=()=>{
    const [isOpen,setIsopen]=useState(false)
    return (
<div>
      <hr className=" border-4 border-zinc-200 mb-3 mt-3 " />
      <div
        className="py-2 bg-white flex items-center justify-between"
        onClick={() => setIsopen((prev) => !prev)}
      >
        <h2 className="font-semibold text-lg">Recomended</h2>
        <div>
            {
                isOpen?<IoIosArrowDown className="text-lg font-semibold" />:<IoIosArrowUp className="text-lg font-semibold" />
            }
          
        </div>
      </div>
      {
        isOpen && <NestedDishDetails/>
      }
    </div>
    )

}

export default NestedDishItems