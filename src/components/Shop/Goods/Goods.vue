<template>
    <div class="card">
        <div class="card-header">
            List of goods
        </div>
        <div class="container">
            <Thing v-for="(good, ind) in list" :key="ind" :name="good.name" :price="good.price"/>
        </div>
    </div>
</template>

<script>
    import Thing from "@/components/Shop/Thing/Thing";
    import { mapState } from 'vuex'
    export default {
        components:{
            Thing
        },
        computed: {
            ...mapState({
                list: 'shoppingList'
            })
        },
        mounted() {
        },
    }
</script>