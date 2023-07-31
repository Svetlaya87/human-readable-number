module.exports = function toReadable (number) {
      
  let Units = {
    
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"


  }

  let elevenNineteen = {
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen"
  }

  let dozen = {
      
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety"
  }
  let res=[];
  if(number ===0){
    return "zero";
}
  
  if(number%100>=10 && number%100<=19){

      if(Math.trunc(number/100) !==0){
          res.push(Units[Math.trunc(number/100)]+" hundred")
     }

      res.push(elevenNineteen[number%100]);
  }else{
     if(Math.trunc(number/100) !==0){
          res.push(Units[Math.trunc(number/100)]+" hundred")
     }

     if(Math.trunc(number%100/10) !==0){
          res.push(dozen[Math.trunc(number%100/10)]);
     }
      res.push(Units[Math.trunc(number%10)]);
  }


  res = res.join(" ").trim();

  return res;


} 

