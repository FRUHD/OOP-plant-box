// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Garden {
    //QUESTION: If we add another property, do we need to add it to EVERY child constructor??
    constructor(name, soil, location, purpose){
      this._name = name
      this._soil = soil
      //raised bed, greenhouse, tree
      this._location = location
      this._purpose = purpose
      this._season = season
     }
    get name(){
      return this._name
    }
    get soil(){
      return this._soil
    }
    get location(){
      return this._location
    }
    get purpose(){
      return this._purpose
    }  
    get season(){
        return this._season
    }
    waterAmount() {
      console.log(`The irrigation system turns on and ${this._name} is watered.`)
    }
  }
  
  class EdiblePlant extends Garden{
    constructor(name, soil, location, edibleType){
      super(name, soil, location)
      this._edibleType = edibleType
    }
    get edibleType(){
      return this._edibleType
    }
    
  }
  
  class PrettyFlowers extends Garden {
    constructor(name, soil, location, purpose, color){
      super(name, soil, location, purpose)
      this._color=color
    }
    get color(){
      return this._color
    }
  }
  
  class DecorativePlants extends Garden {
    constructor(name, soil, location, purpose, bloomSeason) {
      super(name, soil, location, purpose)
      this._bloomSeason = bloomSeason
    }
    get bloomSeason() {
      return this._bloomSeason
    }
    appreciateFlowers() {
      console.log(`It's ${this._bloomSeason}, my ${this.name} has hella flowers.`)
    }
  }  

  let pickleLand = new Garden()