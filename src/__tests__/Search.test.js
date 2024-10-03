import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantList from "../component/Body/RestaurantList";
import MockRestaurantListData from "../mocks/MockRestaurantListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockRestaurantListData);
    },
  });
});

describe("should render the entire restaurant list component to test the search function", () => {
  it("should render the search button and input box to search ", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <RestaurantList />
        </BrowserRouter>
      );
    });
    const beforeSearchrestoCard = screen.getAllByTestId("resto-card");

    expect(beforeSearchrestoCard.length).toBe(8);

    const searchButton = screen.getByTestId("search-button");

    const searchInputBox = screen.getByTestId("search-input");

    fireEvent.change(searchInputBox, { target: { value: "burger" } });

    fireEvent.click(searchButton);

    const afterSearchResCard = screen.getAllByTestId("resto-card");

    expect(afterSearchResCard.length).toBe(1);
  });

  it("should render the top rated button to test top rated functionality", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <RestaurantList />
        </BrowserRouter>
      );
    });

    const restoCard = screen.getAllByTestId("resto-card");
    expect(restoCard.length).toBe(8);

    const topRatedButton = screen.getByTestId("topRated-button");

    fireEvent.click(topRatedButton);

    const afterClickTheTopRatedButton = screen.getAllByTestId("resto-card");

    expect(afterClickTheTopRatedButton.length).toBe(2);
  });
});
