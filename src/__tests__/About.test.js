import { render, screen,fireEvent } from "@testing-library/react";
import About from "../page/About";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestoCard,{BestSellerResto} from "../component/Body/RestoCard";
import RestoCardMockData from '../mocks/RestoCardMockData.json'

const BestSellerRestoCard=BestSellerResto(RestoCard)

describe("it should render the about page", () => {
  it("should render the Our Mission heading", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(screen.getByText("Our Mission")).toBeInTheDocument();
  });

  it("if we click the get started button at that time should redirect to the home page", () => {
    render(
      <BrowserRouter>
      <RestoCard resData={RestoCardMockData}/>
      <BestSellerRestoCard resData={RestoCardMockData}/>
        <About />
      </BrowserRouter>
    );

    const startButton=screen.getByTestId('get-started-button')
    fireEvent.click(startButton)

    const resCard=screen.getAllByTestId("resto-card")

    expect(resCard.length).toBe(2)
    
    // expect(button).toBeInTheDocument()
  });
});
