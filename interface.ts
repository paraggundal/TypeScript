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