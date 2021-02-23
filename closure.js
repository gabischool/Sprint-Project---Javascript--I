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
the const external can be accessed anywhere . its in the outside function , compared to the internal one that is only available inside the declared function. we use outer functions whenever we want to use the function from outside anytime .in this case the function internal is using the outer function thats already declared outside .