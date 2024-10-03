import { renderHook } from "@testing-library/react"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import MockRestaurantMenu from '../mocks/MockRestaurantMenu.json'
import { act } from "react"

global.fetch=jest.fn(()=>{
   return Promise.resolve({
        json:()=>{
            return Promise.resolve(MockRestaurantMenu)
        }
    })
})

it('should check wheather data get or not ',async()=>{

    await act(async ()=>{
        const {result}=renderHook(useRestaurantMenu)
       
        
    })

    
})


