<template>
    <div class="container mt-3 mb-3">
        <div class="row">
            <div class="col pt-2">
                {{item.name}}
            </div>
            <div class="col-auto pt-2">
                x{{getAmountById(item.id)}}
                total:
            </div>
            <div class="col-auto pt-2">
                {{getCurrentPriceById(item.id)}}$
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-secondary" @click="deleteItem(item.id)">&times;</button >
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters,mapMutations} from "vuex";

    export default {
        props:{
            item:{}
        },
        mounted() {
        },
        computed: {
            ...mapState({
                list: 'buyerList',
            }),
            ...mapGetters([
                'getAmountById',
                'getCurrentPriceById',
            ]),
            ...mapMutations([
                'removeItemById'
            ])
        },
        methods: {
            deleteItem(id) {
                this.$store.commit('removeItemById',id);
            }
        },
    }
</script>