let openshoping = document.querySelector('.openshoping');
let closeshoping = document.querySelector('.closeshoping');
let body = document.querySelector('body');
let list= document.querySelector('.list');
let listcard= document.querySelector('.listcard');
let quantity= document.querySelector('.quantity');
let total= document.querySelector('.total');

openshoping.addEventListener('click', ()=>{
  body.classList.add('active');
})
closeshoping.addEventListener('click', ()=>{
  body.classList.remove('active');
})

let products = [
  {
    id : 1,
    Image : 'https://5.imimg.com/data5/ECOM/Default/2023/9/340858396/AP/RZ/RZ/187325221/1693843320605-3e0ba0540b1cc809e84bbd9b762fd686-500x500.jpeg ',
    name:'veg-thali ',
    price:1000
  },
  {
    id : 2,
    Image : 'https://5.imimg.com/data5/ECOM/Default/2023/9/340858396/AP/RZ/RZ/187325221/1693843320605-3e0ba0540b1cc809e84bbd9b762fd686-500x500.jpeg ',
    name:'veg-thali ',
    price:1000
  },
  {
    id : 3,
    Image : 'https://5.imimg.com/data5/ECOM/Default/2023/9/340858396/AP/RZ/RZ/187325221/1693843320605-3e0ba0540b1cc809e84bbd9b762fd686-500x500.jpeg ',
    name:'veg-thali ',
    price:1000
  },
  {
    id : 4,
    Image : 'https://5.imimg.com/data5/ECOM/Default/2023/9/340858396/AP/RZ/RZ/187325221/1693843320605-3e0ba0540b1cc809e84bbd9b762fd686-500x500.jpeg ',
    name:'veg-thali ',
    price:1000
  },
  {
    id : 5,
    Image : 'https://5.imimg.com/data5/ECOM/Default/2023/9/340858396/AP/RZ/RZ/187325221/1693843320605-3e0ba0540b1cc809e84bbd9b762fd686-500x500.jpeg ',
    name:'veg-thali ',
    price:1000
  },
  {
    id : 6,
    Image : 'https://5.imimg.com/data5/ECOM/Default/2023/9/340858396/AP/RZ/RZ/187325221/1693843320605-3e0ba0540b1cc809e84bbd9b762fd686-500x500.jpeg ',
    name:'veg-thali ',
    price:1000
  },
  
];

let listcards = [];

function intiAPP(){
  products.forEach((value,key)=>{
   let  newdiv = document.createElement('div');
    newdiv.classList.add('item')
    newdiv.innerHTML=` 
                     <img src ="${value.Image}"/>
                     <div class ="name">${value.name}</div>
                     <div class ="price">${value.price.toLocaleString()}</div>
                     <button onClick="addTocard(${key})">ADD CART</button>
                     `;
                     list.appendChild(newdiv);

  })
}
intiAPP();

function addTocard(key){
  if(listcards[key]== null){
    listcards[key] = products[key];
    listcards[key].quantity = 1
  }
  reloadcard();
}

function reloadcard(){
  listcard.innerHTML = '';
  let count = 0;
  let totalprice = 0;


  listcards.forEach((value,key) =>{
    count = count+value.quantity;
    totalprice = totalprice + value.price;

if(value != null){
  let newdiv = document.createElement('li')
  newdiv.innerHTML = `
                     <div><img src ="${value.Image}"/><div>
                      <div>${value.name} </div>
                       <div>${value.price.toLocaleString()} </div>
                    <div>
                    <button onClick="changeQuantity(${key} , ${value.quantity +1})">+</button>
                    <div class="count">${value.quantity }</div>
                    <button onClick="changeQuantity(${key} , ${value.quantity -1})">-</button>
                    </div>
                    `;
                    listcard.appendChild(newdiv);
}
  })
  total.innerText = totalprice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key,quantity){
   if(quantity == 0){
    delete listcards[key]
   }else{
    listcards[key].quantity = quantity
    listcards[key].price = quantity * products[key].price;

   }
   reloadcard();
}



