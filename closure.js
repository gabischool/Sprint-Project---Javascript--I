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


closures are  one of  the most  popular concepts and  one of the hardest things that i encounter so far, 
if i try to define it , closure is a conecept that allows inner functions to have acces the outer fucntion 
 in the lexinal scope as well as to the global scope , in other words its functions with in an other function ,
  for example the   the nested fucniton inside this example above can reach outside to  grab vallue outside of its scope 