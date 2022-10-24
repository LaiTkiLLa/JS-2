

const goods = {
    1: {
        id: "1",
        name: "Шляпа",
        description: "Модная шляпа",
        sizes: "На каждую голову",
        price: 200,
        available: true,
    },
    2: {
        id: "2",
        name: "Очки",
        description: "Крутые очки",
        sizes: "На любое лицо",
        price: 100,
        available: true,
    },
    3: {
        id: "3",
        name: "Куртка",
        description: "Рваная куртка",
        sizes: "Любые размеры",
        price: 500,
        available: true,
    },
    4: {
        id: "4",
        name: "Джинсы",
        description: "Порезанные джинсы",
        sizes: "Любой длины",
        price: 300,
        available: true,
    },
    5: {
        id: "5",
        name: "Ботинки",
        description: "Высокие ботинки",
        sizes: "43 размер",
        price: 300,
        available: true,
    },
}


basket = [
    {
        good : 2,
        amount : 2,
    },
    {
        good: 5,
        amount: 4,
    }
]

function addGood(name, description,sizes, price,available) {
    i = Object.keys(goods).length+1;
    n = {
        id : i,
        name : name,
        decription : description,
        sizes: sizes,
        price : price,
        available : available,
    }
    goods[i] = n
    return goods
}

function deleteGood(id){
    delete goods[id]
    return goods
}

function clearAll(){
    for (let n = Object.keys(goods).length; n >= 0; n--) {
        delete goods[n]
    }
    return goods
}

clearAll()

addGood('Часы', "Ролекс", 'мини', 400, true)
addGood('Сумка', "Конверс", ' ', 100, true)
addGood('Рюкзак', "Daking", 'мини', 300, true)
addGood('наушники', "JBL", 'беспроводные', 500, true)
deleteGood(1)
deleteGood(3)
deleteGood(4)
clearAll()

function sumBasket(){
    sum = []
    amount = []
    for (let i = 0; i < basket.length; i++) {
        let goodsId = basket[i].good
        let cost = goods[goodsId].price * basket[i].amount
        sum.push(cost)
        amount.push(basket[i].amount)
    }
    let basket_sum = 0;
    let amount_sum = 0;

    for (let n = 0; n < sum.length; n++) {
        basket_sum += sum[n]
        amount_sum += amount[n]
    }

    let result = {
        totalAmount : amount_sum,
        totalSumm : basket_sum,
    }

    return result

}
