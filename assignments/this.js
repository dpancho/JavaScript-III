/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding defines it on a global scope 
* 2. Implicit looks to left of the "this." to find what this refers to
* 3. New binding makes new object that "this" points to 
* 4. explicit refers to a specfic value using call, apply or bind.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function shoes(letGetSome){
  console.log(this.letGetSome);
}

// Principle 2
// code example for Implicit Binding
let myDog = {
    name: 'Cosmo',
    favToy: 'ball',
    playtime: function(){
      console.log(this.favToy);
    }
  }

  myDog.playtime();

// Principle 3
// code example for New Binding
function Bird(saying){
  this.saying = saying;
}

Bird.prototype.birdfunction = function(){
    return this.saying;
}

let myBird = new Bird('Fly high');
// console.log(myBird.birdfunction());

// Principle 4
// code example for Explicit Binding

function animals(){
    console.log(this.species);
}

let myAnimals = {
    name: 'Yogi',
    species: 'bear',
    howToInteract: 'play dead'
}

animals.call(myAnimals);