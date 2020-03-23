export default {
    namespaced:true,
    state: {
        goods: [{
            id: 1,
            name: "苹果",
            count: 0,
            price: 5,
        }, {
            id: 2,
            name: "香蕉",
            count: 0,
            price: 6,
        }, {
            id: 3,
            name: "梨子",
            count: 0,
            price: 7,
        }],
    },
    
    mutations: {
        addcount(state,id) {
            for (let i of state.goods) {
                if (i.id == id) {
                    i.count++;
                }
            }
        },
        subcount(state,id) {
            for (let i of state.goods) {
                if (i.id == id) {
                    if (i.count == 0) {
                        return;
                    } else {
                        i.count--;
                    }
                }
            }
        },
    },
    getters:{
        sumcount(state) {
            let countSum = 0;
            for (let i = 0; i < state.goods.length; i++) {
                countSum += state.goods[i].count;
            }
            console.log(countSum);
            return countSum;
        },
        priceSum(state) {
            let countSum = 0;
            for (let i = 0; i < state.goods.length; i++) {
                countSum += state.goods[i].count * state.goods[i].price;
            }
            return countSum;
        },
    }
}