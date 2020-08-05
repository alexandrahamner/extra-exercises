/*
    Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.
    When I purchase items I receive a receipt which lists the name of all the items and their price, including taxes, finishing with the total cost of the items and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains n * p / 100 amount of sales tax, rounded up to the nearest 0.05.

    Write an application that prints out the receipt details for these shopping baskets: */


// Shopping Baskets
// -----------------------------------------------------

var shoppingBasketOne = [
    { item: "book",
      cost: 12.49,
      salesTax: 0,
    },
    { item: "music CD",
        cost: 14.99,
        salesTax: .10,
    },
    { item: "chocolate bar",
        cost: .85,
        salesTax: 0,
    }
]


var shoppingBasketTwo = [
    { item: "imported box of chocolates",
        cost: 10.50,
        salesTax: 0,
        importTax: .05
    },
    { item: "imported bottle of perfume",
        cost: 54.65,
        salesTax: .10,
        importTax: .05
    }
]


var shoppingBasketThree = [
    { item: "imported bottle of perfume",
        cost: 27.99,
        salesTax: .10,
        importTax: .05
    },
    { item: "bottle of perfume",
        cost: 18.99,
        salesTax: .10,
    },
    { item: "packet of headache pills",
        cost: 9.75,
        salesTax: 0,
    },
    { item: "imported box of chocolates",
        cost: 11.25,
        salesTax: 0,
        importTax: .05
    }
]

// Application to Output a Receipt
// -----------------------------------------------------

function receiptOutput (shoppingBasket) {
    for (var x = 0 ; x < shoppingBasket.length ; x++) {
        var shoppingItem = shoppingBasket[x];
        console.log("1 " + shoppingItem.item + " at $" + shoppingItem.cost);
    }

}

receiptOutput(shoppingBasketOne);
receiptOutput(shoppingBasketTwo);
receiptOutput(shoppingBasketThree);