import { render, screen } from "@testing-library/react"
import Contact from "../page/Contact"
import "@testing-library/jest-dom"


describe('this is the contact page test case',()=>{
// check the contact component is renderd or not using the heading 
it('should render the contact page',()=>{

    render(<Contact/>)


    //this is called Querying
    const heading=screen.getByRole("heading")

    //Assertion
    expect(heading).toBeInTheDocument()  

})


// check the contact component is renderd or not using the button inside the component
test('it should render the contact page button',()=>{

    render(<Contact/>)

    //querying
    const button=screen.getByRole('button')

    //assertion
    expect(button).toBeInTheDocument()
})


//check the contact component is rendered or not using the input box

it ('it should render 2 input boxes',()=>{

    render(<Contact/>)

    const inputBox=screen.getAllByRole('textbox')


    expect(inputBox.length).toBe(2)
    
})

})

