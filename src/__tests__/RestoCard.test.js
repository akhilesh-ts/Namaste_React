import { render, screen } from "@testing-library/react";
import RestoCard, { BestSellerResto } from "../component/Body/RestoCard";
import RestoCardMockData from "../mocks/RestoCardMockData.json";
import "@testing-library/jest-dom";

const BestSellerRestoCard = BestSellerResto(RestoCard);

describe("should render the resto card along with this test cases", () => {
  it("should render restocard with the props", () => {
    render(<RestoCard resData={RestoCardMockData} />);
    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
  });
});

//higher order component

describe("should check the HOC component rendered or not", () => {
  it("should rendered the hoc with best seller tag", () => {
    render(<BestSellerRestoCard resData={RestoCardMockData} />);

    const name = screen.getByText("Best Seller");

    expect(name).toBeInTheDocument();
  });
});
