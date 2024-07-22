function createAnimal (name , sound){
    let obj = {}

    obj.name = name,
    obj.sound = sound,
    obj.makeSound = function(){
        console.log("Animalsound");
        
    }

return obj;
}

let animal = createAnimal("cow" , "mamam");
console.log(animal);

function createDog( name , sound , breed){
    let Dogobj=createAnimal(name , sound);

    Dogobj.name = name,
    Dogobj.sound = sound,
    Dogobj.breed = breed,

    Dogobj.fetch = function(){
        console.log("woof-woof")
    }
    return Dogobj;
}

let Buddy=createDog( "Buddy", "Woof", "Labrador");
console.log(Buddy);
console.log(Buddy.fetch());
console.log(Buddy.makeSound());