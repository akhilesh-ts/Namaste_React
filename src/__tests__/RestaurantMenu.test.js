import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenuList from "../component/Body/RestaurantMenuList";
import "driver.js/dist/driver.css";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import MockRestaurantMenu from "../mocks/MockRestaurantMenu.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantDetails from "../component/Body/RestaurantDetails";
import OfferCarousel from "../component/Body/OfferCarousel";
import RestaurantDishList from "../component/Body/RestaurantDishList";
import MockRestaurantDishDetails from "../mocks/MockRestaurantDishDetails.json";
import MockDishDetailsWithoutNestedItem from "../mocks/MockDishDetailsWithoutNestedItem.json";
import DishDetails from "../component/Body/DishDetails";
import Cart from "../page/Cart";
import { ClerkProvider } from "@clerk/clerk-react";

jest.mock("driver.js");

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockRestaurantMenu);
    },
  });
});

const PUBLISHABLE_KEY = "pk_test_ZGVzaXJlZC1zbHVnLTQzLmNsZXJrLmFjY291bnRzLmRldiQ"

describe("restaurnant menu page", () => {
  // filter-button
  it("should render the restaurantMenuList with the  filter button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantMenuList />
          </Provider>
        </BrowserRouter>
      );
    });

    expect(screen.getAllByTestId("filter-button").length).toBe(3);
  });

  it("should render the name no the restaurant", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantMenuList />
            <RestaurantDetails restaurantDetails={MockRestaurantMenu} />
          </Provider>
        </BrowserRouter>
      );
    });
    //  screen.debug()
    expect(screen.getAllByTestId("restaurant-name").length).toBe(4);
  });
});

describe("restaurant offer carousel", () => {
  it("should render the offer carousel heading", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantMenuList />
            <OfferCarousel offerDetails={MockRestaurantMenu} />
          </Provider>
        </BrowserRouter>
      );
    });

    expect(
      (await screen.findAllByText("Deals For you")).length
    ).toBeGreaterThan(0);
  });

  it("should render the offer carousel data's", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantMenuList />
            <OfferCarousel offerDetails={MockRestaurantMenu} />
          </Provider>
        </BrowserRouter>
      );
    });

    expect(screen.getAllByTestId("offer-carousel").length).toBe(5);

    expect(screen.getAllByTestId("arrow").length).toBe(4);
  });
});

describe("dish details-acordain", () => {
  it("should render the all the category", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantMenuList />
            <RestaurantDishList categoryitems={MockRestaurantDishDetails} />
            <DishDetails details={MockDishDetailsWithoutNestedItem} />
          </Provider>
        </BrowserRouter>
      );
    });

    const category = screen.getAllByTestId("accordian-header");

    expect(category.length).toBe(29);

    const ActiveAcordain = screen.getAllByTestId("food-items");

    expect(ActiveAcordain.length).toBe(35);

    fireEvent.click(category[2]);

    const dishDetails = screen.getAllByTestId("food-items");

    expect(dishDetails.length).toBe(30);
  });
});

describe('cart functionality',()=>{

    it('should  render the cart button',async()=>{
        await act (async ()=>{
            render(
                <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                <BrowserRouter>
                  <Provider store={appStore}>
                    <RestaurantMenuList />
                    <RestaurantDishList categoryitems={MockRestaurantDishDetails} />
                    <DishDetails details={MockDishDetailsWithoutNestedItem} />
                     <Cart/>
                  </Provider>
                </BrowserRouter>
                </ClerkProvider>
              );
        })

        const category=screen.getAllByTestId('accordian-header')

        expect(category.length).toBe(29)

        const dishDetails= screen.getAllByTestId('food-items')
        expect( dishDetails.length).toBe(35)
        const cartButton=screen.getAllByRole('button',{name:'ADD'})
        fireEvent.click(cartButton[1])
        const afterClickTheButton=screen.getAllByRole('button',{name:'Go to cart'})

        expect(afterClickTheButton.length).toBe(1)
          
        
        

        
   
    })
})