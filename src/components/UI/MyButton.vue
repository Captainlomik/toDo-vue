<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name:'my-button'
    }
</script>

<style lang="scss" scoped>
.btn{
    padding: 20px 50px;
    border: 1px solid black;
}

</style>