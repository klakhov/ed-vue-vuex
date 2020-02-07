import Vue from 'vue';
import Vuex from 'vuex';
import state from "@/components/Shop/ShopStore/state";
import mutations from "@/components/Shop/ShopStore/mutations";
import getters from "@/components/Shop/ShopStore/getters";
import actions from "@/components/Shop/ShopStore/actions";
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});
export default store