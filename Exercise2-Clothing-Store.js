function addCart(typeClothe, quantityForPurchase) {

    switch (typeClothe) {
        case '1':
            cart.Shirts += quantityForPurchase
            break
        case '2':
            cart.Pants += quantityForPurchase
            break
        case '3':
            cart.Shoes += quantityForPurchase
            break
        case '4':
            cart.Accessories += quantityForPurchase
            break
        default:
            alert('You dont select a correct opcion');
    }
};

function applyDiscount(value, discount) {
    return value - (value * discount / 100)
};

let finishBuying = false;
let finishAddCart = false;


let cart = {
    Shirts: 0,
    Pants: 0,
    Shoes: 0,
    Accessories: 0,
}

let cartPrices = {
    Shirts: 0,
    Pants: 0,
    Shoes: 0,
    Accessories: 0,
}

const clothes = {
    Shirts: 25000,
    Pants: 60000,
    Shoes: 45000,
    Accessories: 10000,
}


const randomDiscountShirt = Math.floor(Math.random() * 100 + 1)
const randomDiscountPant = Math.floor(Math.random() * 100 + 1)
const randomDiscountShoes = Math.floor(Math.random() * 100 + 1)
const randomDiscountAccesories = Math.floor(Math.random() * 100 + 1)



while (!finishBuying) {
    const menu = prompt(`
    ===Welcome to the Clothe's Store===

    Select An Option

    1.Clothes
    2.Discount of the day
    3.Cart
    4.Complete Purchase
    5.Exit

    ===================================
    `)

    if (menu == '1') {

        while (!finishAddCart) {

            const selectClothe = prompt(`
            
            ===Select a Clothe to add to the Cart===
                
            1.Shirts
            2.Pants
            3.Shoes
            4.Accesories
            5.Back
    
            ========================================
            `);

            if (selectClothe == '1') {
                const quantityForPurchase = parseInt(prompt('How many do you want to take??'));

                if (quantityForPurchase) {
                    
                } else {
                    alert('Please select the quantity you want to add to the cart');
                    continue
                }

                const totalClothes = quantityForPurchase * 25000;

                const buyConfirment = prompt('The Price is $25.000, are you want continue??, Please write Yes or No');

                if (buyConfirment == 'Yes' || buyConfirment == 'yes') {
                    cartPrices.Shirts += applyDiscount(totalClothes, randomDiscountShirt);
                    addCart(selectClothe, quantityForPurchase);
                    alert(`added to cart, check out`)
                } else if (buyConfirment == 'No' || buyConfirment == 'no') {
                    break;
                } else {
                    alert('Please, write Yes or No');
                    continue
                };

            } else if (selectClothe == '2') {
                
                const quantityForPurchase = parseInt(prompt('How many do you want to take??'));


                if (quantityForPurchase) {
                    
                } else {
                    alert('Please select the quantity you want to add to the cart');
                    continue
                }


                const totalClothes = quantityForPurchase * 60000;
                const buyConfirment = prompt('The Price is $60.000, are you want continue??, Please write Yes or No');
                if (buyConfirment == 'Yes' || buyConfirment == 'yes') {
                    cartPrices.Pants += applyDiscount(totalClothes, randomDiscountPant);
                    addCart(selectClothe, quantityForPurchase);
                    alert(`added to cart, check out`)
                } else if (buyConfirment == 'No' || buyConfirment == 'no') {
                    break;
                } else {
                    alert('Please, write Yes or No');
                };

            } else if (selectClothe == '3') {

                const quantityForPurchase = parseInt(prompt('How many do you want to take?'));


                if (quantityForPurchase) {
                    
                } else {
                    alert('Please select the quantity you want to add to the cart');
                    continue
                }

                const totalClothes = quantityForPurchase * 45000;
                const buyConfirment = prompt('The Price is $45.000, are you want continue??, Please write Yes or No');
                if (buyConfirment == 'Yes' || buyConfirment == 'yes') {
                    cartPrices.Shoes += applyDiscount(totalClothes, randomDiscountShoes);
                    addCart(selectClothe, quantityForPurchase);
                    alert(`added to cart, check out`)
                } else if (buyConfirment == 'No' || buyConfirment == 'no') {
                    break;
                } else {
                    alert('Please, write Yes or No');
                };

            } else if (selectClothe == '4') {

                const quantityForPurchase = parseInt(prompt('How many do you want to take?'));


                if (quantityForPurchase) {
                    
                } else {
                    alert('Please select the quantity you want to add to the cart');
                    continue
                }


                const totalClothes = quantityForPurchase * 10000;
                const buyConfirment = prompt('The Price is $10.000, are you want continue??, Please write Yes or No');
                if (buyConfirment == 'Yes' || buyConfirment == 'yes') {
                    alert(`added to cart, check out`)
                    cartPrices.Accessories += applyDiscount(totalClothes, randomDiscountAccesories);
                    addCart(selectClothe, quantityForPurchase);
                } else if (buyConfirment == 'No' || buyConfirment == 'no') {
                    break;
                } else {
                    alert('Please, write Yes or No');
                };

            } else if (selectClothe == '5') {
                break

            } else {
                alert('Error, Please select a correct Opcion');
            };

        };

    } else if (menu == '2') {
        let offersMenu = `
        ============ Offerts Menu================

        Shirts: ${randomDiscountShirt}%
        Pants: ${randomDiscountPant}%
        Shoes: ${randomDiscountShoes}%
        Accesories: ${randomDiscountAccesories}%
        
        =====================================
                        `;
        alert(offersMenu);

    } else if (menu == '3') {
        let cartMenu = `=== Your Cart===\n`;
        let total = 0;
        for (let list in cart) {
            const name = `${list}`;
            const quantityName = `${cart[list]}`;
            const totalPrice = `${cartPrices[list]}`;
            // const quantyTotalPrice= list[quantityName];
            cartMenu += `${name} = Quantity: ${quantityName}, Total Price: ${totalPrice}\n`;
            total += cartPrices[list];
        }



        alert(`
        ${cartMenu}
            
        Total a pagar: ${total}

            `);

    } else if (menu == '4') {
        alert(`Purchase completed, Thanks for Purchasing`);
        finishBuying = true;
    } else if (menu == '5'){
        alert('Thanks for see, come back soon')
        finishBuying = true;
    }


};