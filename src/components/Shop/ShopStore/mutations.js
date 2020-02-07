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
    },

    setRating(state, ratings){
        for(let key in state.shoppingList){
            state.shoppingList[key].rating = ratings[key];
        }
    },

    setMostPopular(state){
        let rating = state.shoppingList[0].rating;
        let id = 0;
        for(let key in state.shoppingList){
            if(state.shoppingList[key].rating > rating){
                rating = state.shoppingList[key].rating;
                id = key;
            }
        }
        state.shoppingList[id].mostPopular = true;
    }
}