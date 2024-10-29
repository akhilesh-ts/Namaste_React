 import RestoCard,{BestSellerResto} from '../component/Body/RestoCard'
 import { render,screen } from '@testing-library/react'
 import RestoCardMockData from '../mocks/RestoCardMockData.json'
 import '@testing-library/jest-dom'
 
 const BestSellerRestoCard = BestSellerResto(RestoCard);

 describe('Restautant card component ',()=>{
  it('should run the restaurant name  ',()=>{
    render(
        <RestoCard resData={RestoCardMockData}/>
    )

    const resName= screen.getByText('Chinese Wok')

    expect(resName).toBeInTheDocument()
  })
 
 
 })

 describe('testing the HOC component',()=>{
    it('should check the card contain the best Seller tag',()=>{
        render(<BestSellerRestoCard resData={RestoCardMockData}/>)

        const bestSellerTag = screen.getByTestId("best-seller-tag");
      //  screen.debug()
        expect(bestSellerTag).toBeInTheDocument()
    })
 })