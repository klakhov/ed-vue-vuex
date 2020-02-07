<template>
    <div class="container mt-3 mb-3">
        <div class="row">
            <div class="col pt-2">
                {{item.name}}
            </div>
            <div class="col-auto pt-2">
                {{item.price}}$
            </div>
            <div class="col-auto">
                <button class="btn btn-primary" @click="addToCart">+</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item:{},
        },
        mounted() {
        },
        methods: {
            addToCart() {
                this.$store.commit('addToCart', this.item)
            }
        },
    }
</script>