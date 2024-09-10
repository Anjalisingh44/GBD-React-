import React from 'react'
import Variable from './component/Variable';

const App = () => {
const calculateSum = (a, b) => a + b;
const num1= 30;
const num2 = 20;
const result = calculateSum(num1,num2);
// console.log(result);

 

  return (
  
    <div>
      
      <p> The sum of {num1} and {num2} is {result}</p>
      <Variable/>
    </div>
    
  )
}

export default App