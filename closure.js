// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation (Min 50 words): 

// waxa weeye sabaab ay #nestedFunction ay usoo daabayso #internal verbialka waxa weeye var #internal aya loo dir #nestedFunction si uu console gareeyo
//  sikale shaqada #nestedFunction function waxa weeye in uu soo #consolelog #internal varka sare 
//  aan #nestedFunction waxa lagu #invonking gareeyay #paran functionka. #internal varka waxa weeye 
// #function #scope 
// ka dibna waxa la soo #consonlelog gareeyay #paran funtion  

