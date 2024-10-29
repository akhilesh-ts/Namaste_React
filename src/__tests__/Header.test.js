import Navbar from "../component/Header/NavBar";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import MockDataForGeoLocation from '../mocks/MockDataForGeoLocation.json'
import { act } from "react";
import '@testing-library/jest-dom'



const PUBLISHABLE_KEY = "pk_test_ZGVzaXJlZC1zbHVnLTQzLmNsZXJrLmFjY291bnRzLmRldiQ"

global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MockDataForGeoLocation)
        }
    })
})

beforeAll(()=>{
    global.navigator.geolocation={
        getCurrentPosition:jest.fn((success)=>{
            success({coords:{latitude:51.5,longitude:45.3}} )
        })
    }
})

describe("it should contain the logo menu and cart icon and login icon",() => {
  it("it should render the logo", async() => {

    await act(async ()=>{
        render(
            <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <BrowserRouter>
            <Provider store={appStore}>
              <Navbar/>
            </Provider>
          </BrowserRouter>
          </ClerkProvider>
        );
    })

    expect(screen.getByTestId('cart-icon')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByTestId('logo-image')).toBeInTheDocument()    
  });
});
