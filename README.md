# Namaste_React

# why react is fast

> react has fast rendering mechnism
> react has virtual dom concept
> Lazy loading
> hmr
> tree shaking

# hooks

hooks at the end of the day its a normal javascript function.but its have a specific usecase

# when ever the state variable react re-render the and start reconsilation 

# Setting up Testing in our app

> install React Testing library
> Install jest
> Install Babel dependencies
> Configure Babel
> Configure Parcel config file to disable default babel transpilation
> jest configuration  (npx jest --init) 
> install jsDom :- from the react testing library.....jest 28
> install @babel/preset-react for  enabling the jsx in the test function  
> after install babel preset then incude  @babel/preset-react inside the babel config           
> after adding and run again at that time we got another error . the error come from toBeInTheDocument();
> to solve this error we want another library called 
                     npm install --save-dev @testing-library/jest-dom
>                     

