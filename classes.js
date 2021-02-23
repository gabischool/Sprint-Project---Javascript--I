// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


// function   Cuboid ( x){

//     this.height = x.height;
//     this.width = x.width;
//    this.length = x.length;
 
//  this.volume = function(){
//    return this.height * this.length * this.width;
//  }
//  }
 
 
 
 
//  const volume = new Cuboid({
//    height:5,
//    width:5,
//    length:4
 
 
//  });

class  Cuboid{
    constructor(x) {
        this.height = x.height;
         this.width = x.width;
         this.length = x.length;
    }
    
    volume() {
      return this.height * this.length * this.width;
    }
  }


  const Adder = new  Cuboid({
    height:5,
    width:5,
    length:4
  })

  console.log(Cuboid.volume())