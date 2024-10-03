import Sum from '../component/Body/Sum'
test('it should calculate the sum of two numbers',()=>{

    const result=Sum(4,3)

    expect(result).toBe(7)
})