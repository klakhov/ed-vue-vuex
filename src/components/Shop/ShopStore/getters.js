export default {
    getAmountById: (state) => (id)=>{
        let amount = 0;
        state.buyerList.forEach((item)=>{
            if(item.id === id) amount++;
        });
        return amount;
    },
    getPriceById: (state)=>(id)=>{
        for(let item of state.shoppingList){
            if(item.id === id) return item.price;
        }
        return undefined;
    },
    getCurrentPriceById: (state,getters)=>(id)=>{
        let currentPrice = 0;
        let price = getters.getPriceById(id);
        for(let item of state.buyerList){
            if(item.id === id) currentPrice += price;
        }
        return currentPrice;
    },
    getCurrentPrice: (state,getters)=>{
        let price = 0;
        for(let item of state.buyerList){
            price+= getters.getPriceById(item.id);
        }
        return price;
    }
}