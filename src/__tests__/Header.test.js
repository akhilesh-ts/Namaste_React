import { fireEvent, render, screen } from "@testing-library/react"
import NavBar from '../component/Header/NavBar'
import { Provider } from "react-redux"
import appStore from '../utils/store/appStore'
import { BrowserRouter, } from "react-router-dom"
import MockDataForGeoLocation from '../mocks/MockDataForGeoLocation.json'
import { act } from 'react';
import "@testing-library/jest-dom"




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


describe('should render the header component along with this test cases',()=>{
    it('should load the header component with login button',async()=>{

        await act(async ()=>{
            render(
                <BrowserRouter>
                <Provider store={appStore}>
            <NavBar/>
            </Provider>
            </BrowserRouter>
        )
        })
    
        const button = screen.getByRole('button',{name:"Login"})
    
        expect(button).toBeInTheDocument()
    
    })

    it('should render the cart button with items 0',async()=>{

        await act(async()=>{
            render(
                <BrowserRouter>
                <Provider store={appStore}>
                    <NavBar/>
                </Provider>
                </BrowserRouter>
            )
        })

        const cartValue= screen.getByText('0')

        expect(cartValue).toBeInTheDocument()

       
    })

    it('should render the button with Login and if i click the button at that time changes to Logout',async ()=>{

        await act(async()=>{
            render(
                <BrowserRouter>
                <Provider store={appStore}>
                    <NavBar/>
                </Provider>
                </BrowserRouter>
            )
        })

        const loginButton=screen.getByRole('button',{name:'Login'})

        fireEvent.click(loginButton)

        const logOutButton=screen.getByRole('button',{name:'Logout'})

        expect(logOutButton).toBeInTheDocument()
    })

})

