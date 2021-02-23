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

// it access if the variable is not in closed with in closure function.
//  it can reach out side but the outer function can not access the inner function;
// the inner function can get access to outer function, plus it can get acces to global scoped variables too.
// 
