<template>
    <div class="container mt-3 mb-3">
        <div class="row">
            <div class="col">
                {{name}}
            </div>
            <div class="col-auto">
                {{price}}$
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {},
            price:{}
        },
        mounted() {
        },
    }
</script>