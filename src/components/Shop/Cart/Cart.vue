<template>
    <div class="card">
        <div class="card-header">
            The cart
        </div>
        <div class="container">
            <Thing v-for="(good, ind) in notNulledList" :key="ind" :item="good"/>
        </div>
        <div class="container">
            <div class="row justify-content-center p-2">
                <div class="col-auto">
                    Total:
                </div>
                <div class="col-auto">
                    {{getCurrentPrice}}$
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'
    import Thing from "@/components/Shop/Cart/Thing/Thing";
    export default {
        mounted() {
        },
        components:{
            Thing
        },
        computed:{
            ...mapState({
                list:'shoppingList'
            }),
            ...mapGetters([
                'getAmountById',
                'getCurrentPrice'
            ]),
            notNulledList(){
                return this.list.filter((item)=>{
                    return !!this.getAmountById(item.id);
                })
            }
        }
    }
</script>