export default {
    addToCart(state, item) {
        let newState = {...state};
        newState.buyerList.push(item);
        return newState;
    },
    removeItemById(state, id){
        let newState = {...state};
        for(let key in newState.buyerList){
            if(newState.buyerList[key].id === id){
                newState.buyerList.splice(key,1);
                break;
            }
        }
        return newState;
    }
}