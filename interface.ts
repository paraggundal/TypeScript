interface Report{
    summary() : void;
    name : string
}

function printSummary(item:Report):void{
    return item.summary()
}

const vehicle = {
    name:'Buggatti',
    color : 'Grey-White',
    summary():void{
        console.log(`The Name of Vehicle is ${this.name}`)
    }
}

const drink = {
    name : "Sprite",
    color : "Red",
    sugar_Present : true,
    summary():void{
        console.log(`The Name of Drink is ${this.name}`)
    }

}

printSummary(vehicle)
printSummary(drink)

/* 
   Interface Creates a new type, defined by user, It acts as a gatekeeper for function,
   The Argument passed to function must be interface
   Use Object properties to work with the function created
   This is General Strategy to reuse the code block, as mentioned in example above
*/
