 //Data 2
 const data = [1,3,5,6,"hello", "guava", "hello world", 34,56 ,54]
 const numberArry = [453,656,67645,5476,798,5678,989,34545,6465768,79,76545364,75,8789,987,64765,]

 let totalSum = numberArry.reduce(function (element, current){
    return element + current;
 }, 0);

 console.log(totalSum);