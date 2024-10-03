import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp  } from "react-icons/io";

const NestedDishDetails = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <>
    <div className="px-3">
      
      <div
        className="py-2 bg-white flex items-center justify-between"
        onClick={() => setIsopen((prev) => !prev)}
      >
        <h2 className="font-normal md:font-semibold text-sm md:text-lg">nested</h2>
        <div>
          {isOpen ? (
            <IoIosArrowDown className="text-sm md:text-lg font-semibold" />
          ) : (
            <IoIosArrowUp className="text-sm md:text-lg font-semibold" />
          )}
        </div>
      </div>
      <hr className=" border-1 md:border-2 border-zinc-200 mb-3 mt-3 " />
      </div>
    </>
  );
};

export default NestedDishDetails;
