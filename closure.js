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

/*hello , in my knowdlage internal is a global variable ,
it is not declared in nasted function but its declared the big function, 
so  when we are in closure ,function are nasted
so if the first fucntion is declared a variable and nasted another fucntion
we can access that variable in thr nastedfucntion but if we create a variable in the nastedfucntion
 we can't access that variable ine the main fucntion */
