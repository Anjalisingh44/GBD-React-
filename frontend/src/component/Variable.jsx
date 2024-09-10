import React from 'react'

const Variable = () => {
const subject1 = "Mathematics";
const subject2 = "Science";
const subject3 = "English";
const passing_score = 40;
let score1 = 50;
let score2= 60;
let score3 = 70;
const student1Scores = [50,60,70];
const student2Scores = [80, 85, 90];

const calculateAverage =(s1,s2,s3)=>
(s1+s2+s3)/3
const result = calculateAverage(score1,score2,score3);
const determineResult = (result)=>{
    if (result >= passing_score){
        console.log("passed")
        return "passed";
    
    }
    else {
        console.log("failed");
        return "failed";
    }
    
    
}
  const resultmessage = determineResult(result)






  return (
    <div>
        {subject1}: {score1}<br/>
        {subject2}:{score2}<br/>
        {subject3}:{score3}
        <p>the average  is {result}</p>
    <p>{resultmessage}</p>
    </div>
  )
}

export default Variable