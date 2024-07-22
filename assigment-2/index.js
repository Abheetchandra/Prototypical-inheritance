function animal( name , sound){

    this.name = name ,
    this.sound = sound,
    this.makeSound = function(){
        console.log("wof-wof");
    }

}
 let animal1 = new animal("dog" , "bark")
 console.log(animal1 , animal1.makeSound());

function Dog(name , sound , breed){
    animal.call(this, name , sound)
    this.breed = breed,
    this.fetch = function(){
        console.log(`${this.name}, fetches the ball!`)

    }

}

let dog1 = new Dog("Buddy" , "Woof" , "Labrador")
console.log(dog1)
console.log(dog1.makeSound());
console.log(dog1.fetch());
