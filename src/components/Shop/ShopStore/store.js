import Vue from 'vue';
import Vuex from 'vuex';
import state from "@/components/Shop/ShopStore/state";
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
});
export default store