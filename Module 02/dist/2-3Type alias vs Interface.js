//* type alias vs interface
// Interface is generally connected to objects
// type alias is more connected to literals, unions, tuples, primitives
const user = {
    name: "Tarek",
    id: 124,
    role: "admin",
};
console.log(user);
const cat = {
    species: "Felix Catus",
    breed: "Persian",
};
console.log(cat);
const car = {
    model: "Corolla",
    brand: "Toyota",
};
console.log(car);
///! This is not valid -- thiss prosses is not working in the type
// type TEmployee = {
//   name: string;
// };
// type TEmployee = {}
const employee = {
    id: 123,
    name: "ABC",
};
export {};
