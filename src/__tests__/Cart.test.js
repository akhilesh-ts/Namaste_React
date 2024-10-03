import RestaurantMenuList from "../component/Body/RestaurantMenuList";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MockDishListData from "../mocks/MockDishListData.json";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import "@testing-library/jest-dom";
import Cart from "../page/Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockDishListData);
    },
  });
});



describe("this test case for checking the cart flow", () => {
  it("should render the restaurant menu list ", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <RestaurantMenuList />
        </Provider>
      );
    });

    const heading = screen.getByTestId("restaurant-name");
    const offerCard = screen.getByText("Deals For you");

    expect(offerCard).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it("should render the accordian render to open and close accordian", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <RestaurantMenuList />
        </Provider>
      );
    });

    expect(screen.getAllByTestId("accordian-header").length).toBe(15);

    const accordianHeader = screen.getByText("Recommended");

    expect(accordianHeader).toBeInTheDocument();

    expect(screen.getAllByTestId("food-items").length).toBe(14);

    const accordianOpenAndClose = screen.getByText("Drinks");

    expect(accordianOpenAndClose).toBeInTheDocument();

    fireEvent.click(accordianOpenAndClose);

    expect(screen.getAllByTestId("food-items").length).toBe(10);
  });

  it("it should render the cart button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantMenuList />
            <Cart />
            
          </Provider>
        </BrowserRouter>
      );
    });

    const cartAddButton = screen.getAllByRole("button", { name: "ADD" });

  


    fireEvent.click(cartAddButton[0]);

    expect(screen.getAllByTestId("cart-details").length).toBe(1);
    
    fireEvent.click(cartAddButton[1]);

    // const cartItems=screen.getAllByTestId('cart-details')

    expect(screen.getByText("Combo for 1 Non-Veg")).toBeInTheDocument();

    // testid is not working check this
    // expect(screen.getAllByTestId('cart-details').length).toBe(2)

    fireEvent.click(cartAddButton[2]);

    expect(screen.getByText("Combo for 1 Non-Veg")).toBeInTheDocument(
      "Hunan Paneer Dry"
    );
  });
});
