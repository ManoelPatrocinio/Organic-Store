var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

var fruitDIV =  document.getElementById("fruitDIV");
var juiceDIV =  document.getElementById("juiceDIV");
var saladDIV =  document.getElementById("saladDIV");


var FRUIT =[
    {name:'Papaya', price:1},
    {name:'Strawberry', price:1},
    {name:'Apple', price:1}
];

var JUICE = [
    {name:'juice #1', price:10},
    {name:'juice #2', price:11},
    {name:'juice #3', price:12},
    {name:'juice #4', price:10}
];

var SALAD =[
    {name:'salad #1', price:9},
    {name:'salad #2', price:10},
    {name:'salad #3', price:11}
];


function HTMLfruitProduct(con) {
    let URL = `../img/fruits/fruit${con}.jpg`;
    let btn = `btnFruits${con}`;

    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img src="${URL}" alt=" Card image cap" class="card-img-top" style="height:16rem;">
                <div class="card-body">
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>

                    <p class="card-text">${FRUIT[con-1].name}</p>
                    <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>

                    <div class="d-fex justify-content-between align-items-center">

                        <div class="btn-group">
                            <button type="button" onclick="cart2('${FRUIT[con-1].name}',
                            '${FRUIT[con-1].price}', '${URL}','${con}', '${btn}')" class="btn btn-sm btn-outline-secondary"> <a
                                    style="color: inherit;" href="/cart">Buy</a>
                            </button>

                            <button id="${btn}" type="button"
                                onclick="cart('${FRUIT[con-1].name}', '${FRUIT[con-1].price}', '${URL}','${con}','${btn}')"
                                class="btn btn-sm btn-outline-secondary">Add to Cart
                            </button>
                        </div>
                        <small class="text-muted">Free Shopping</small>
                    </div>

                </div>
            </div>
        </div>
    
    `;
}

function HTMjuiceProduct(con) {
    let URL = `../img/juice/juice${con}.jpg`;
    let btn = `btnFruits${con}`; 
    
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img src="${URL}" alt=" Card image cap" class="card-img-top" style="height:16rem;">
                <div class="card-body">
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>

                    <p class="card-text">${JUICE[con-1].name}</p>
                    <p class="card-text">Price: ${JUICE[con-1].price}.00</p>

                    <div class="d-fex justify-content-between align-items-center">

                        <div class="btn-group">
                            <button type="button" onclick="cart2('${JUICE[con-1].name}',
                            '${JUICE[con-1].price}', '${URL}','${con}', '${btn}')" class="btn btn-sm btn-outline-secondary"> <a
                                    style="color: inherit;" href="/cart">Buy</a>
                            </button>

                            <button id="${btn}" type="button"
                                onclick="cart('${JUICE[con-1].name}', '${JUICE[con-1].price}', '${URL}','${con}','${btn}')"
                                class="btn btn-sm btn-outline-secondary">Add to Cart</button>
                        </div>
                        <small class="text-muted">Free Shopping</small>
                    </div>

                </div>
            </div>
        </div>
    `;
}


function HTMsaladProduct(con) {
    let URL = `../img/salads/salad${con}.jpg`;
    let btn = `btnFruits${con}`; 
    
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img src="${URL}" alt=" Card image cap" class="card-img-top" style="height:16rem;">
                <div class="card-body">
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>
                    <i style="color: orange;" class="fa fa-star"></i>

                    <p class="card-text">${SALAD[con-1].name}</p>
                    <p class="card-text">Price: ${SALAD[con-1].price}.00</p>

                    <div class="d-fex justify-content-between align-items-center">

                        <div class="btn-group">
                            <button type="button" onclick="cart2('${SALAD[con-1].name}',
                            '${SALAD[con-1].price}', '${URL}','${con}', '${btn}')" class="btn btn-sm btn-outline-secondary"> <a
                                    style="color: inherit;" href="/cart">Buy</a>
                            </button>

                            <button id="${btn}" type="button"
                                onclick="cart('${SALAD[con-1].name}', '${SALAD[con-1].price}', '${URL}','${con}','${btn}')"
                                class="btn btn-sm btn-outline-secondary">
                                Add to Cart
                            </button>
                        </div>
                        <small class="text-muted">Free Shopping</small>
                    </div>

                </div>
            </div>
        </div>
    `;
}

function animation() {
    const toast = swal.mixin({
        toast:true,
        position: 'top-end',
        showConfirmButton:false,
        timer:3000
    });

    toast({
        type:'success',
        title: 'Added to shpping cart'
    });
    
}

function cart(name,price,url,con,btncart) {
    var item = {
        name:name,
        price:price,
        url:url
    }

    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem('cart'))

    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem('cart'));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }

    products = JSON.parse(localStorage.getItem('cart'));
    n_cartItem = Object.keys(products).length;
    cart_n.innerHTML = `[${n_cartItem}]`;
    document.getElementById(btncart).style.display="none";
    animation();

}

function cart2(name,price,url,con,btncart) {
    var item = {
        name:name,
        price:price,
        url:url
    }

    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem('cart'))

    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem('cart'));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }

    products = JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML = `[${products.lenght}]`;
    document.getElementById(btncart).style.display="none";
}

(()=>{
    for (let index = 1; index <= 3; index++) {
        fruitDIV.innerHTML += `${HTMLfruitProduct(index)}`;
        saladDIV.innerHTML += `${HTMsaladProduct(index)}`;

        
    }

    for (let index = 1; index <= 4; index++) {
        juiceDIV.innerHTML += `${HTMjuiceProduct(index)}`;
        
    }

    if (localStorage.getItem("cart") == null) {
        // alert("cart vazio");
    } else {
        products = JSON.parse(localStorage.getItem('cart'));
        n_cartItem = Object.keys(products).length;
        cart_n.innerHTML = `[${n_cartItem}]`;
    }
})();