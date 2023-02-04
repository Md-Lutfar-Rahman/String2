const phones = [
    { name : 'Samsung' , camera : 12 , storage :'32GB', price:36000,color:'silver' },
    { name : 'Walton' , camera : 10 , storage :'32GB', price:22000,color:'silver' },
    { name : 'iphone' , camera : 50 , storage :'32GB', price:82000,color:'silver' },
    { name : 'Xaomi' , camera : 10 , storage :'32GB', price:52000,color:'silver' },
    { name : 'Oppo' , camera : 10 , storage :'32GB', price:20000,color:'silver' },
    { name : 'Nokia' , camera : 10 , storage :'32GB', price:44000,color:'silver' },
    { name : 'HTC' , camera : 10 , storage :'32GB', price:62000,color:'silver' },
];
function cheapestphone(phones){
    let cheapest = phones[0];

    for (let i = 0; i<phones.length;i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.price<cheapest.price){
            cheapest = phone; 
        }
    }
    return cheapest;

}
const mySelection = cheapestphone(phones);
console.log(mySelection);