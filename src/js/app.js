console.log();
const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special';

let cashback = 0;

const purchases = [
    {
        amount: 15000,
        category:REGULAR_CATEGORY,
    },
    {
        amount: 20000,
        category:INCREASED_CATEGORY,
    },
    {
        amount: 9000,
        category: SPECIAL_CATEGORY,
    },
    {
        amount: 8600,
        category:SPECIAL_CATEGORY,
    },
];

const regularPurchasesPercent = 0.01;
const increasedPurchasesPercent = 0.05;
const specialPurchasesPercent =0.30;
const cashbackLimit = 3000;

let cashbackgive = 0;

function percent(amount, percent){
    let total = amount * percent / 100;
    return total;
};

for(const purchase of purchases){
    if(purchase.category == REGULAR){
        cashbackgive += percent(purchase.amount, regularPurchasesPercent);
    } else if(purchase.category == INCREASED){
        cashbackgive += percent(purchase.amount, increasedPurchasesPercent);
    } else if(purchase.category == SPECIAL){
        cashbackgive += percent(purchase.amount, specialPurchasesPercent);
    }
    
}
if(cashbacklimit > cashbacklimit)
cashbackgive = cashbacklimit;
cashback = cashbacklimit;
console.log(cashback);

