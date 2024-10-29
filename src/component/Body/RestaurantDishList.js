import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import DishDetails from "./DishDetails";
// import NestedDishItems from "./NestedDishItems";

const RestaurantDishList = ({ categoryitems, showItem, setShowItem }) => {

  const openAccordion = (index) => {
    setShowItem((prev) => (prev === index ? null : index));
  };

  // console.log(categoryitems);
  
  return (
    <>
      <div>
        {categoryitems.map((item, index) => (
          <div key={item?.card?.card?.title}>
            <hr className=" border-4 border-zinc-200 mb-3 mt-3 " />
            <div
              className="py-2 bg-white flex items-center justify-between"
              onClick={() => openAccordion(index)}
            >
              <h2 data-testid="accordian-header"  className="font-semibold text-lg">
                {item?.card?.card?.title}
                {/* (
                {`${item?.card?.card?.itemCards.length}`}) */}
              </h2>
              <div>
                {showItem === index ? (
                  <IoIosArrowDown className="text-lg font-semibold" />
                ) : (
                  <IoIosArrowUp className="text-lg font-semibold" />
                )}
              </div>
            </div>
            {
             
              showItem === index && (
                <DishDetails details={item?.card?.card?.itemCards} />
              )
            }
          </div>
        ))}

      </div>
    </>
  );
};

export default RestaurantDishList;
