import Vue from 'vue';
import Vuex from 'vuex';
import state from "@/components/Shop/ShopStore/state";
import mutations from "@/components/Shop/ShopStore/mutations";
import getters from "@/components/Shop/ShopStore/getters";
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations,
});
export default store