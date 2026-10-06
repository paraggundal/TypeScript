// Flexible Arrays

let record: (Date | string) [] = []

record.push(new Date());
record.push('20-05-2002')

console.log(record)

// Tuples

let tuples_ : [string, boolean, number] = ['parag',true, 24]

// Maintains order, tuples result in information loss, we need to remember the order

// Type Alias

type Student = [string, number, Date]

let student1:Student = ['Parag', 24, new Date()]


