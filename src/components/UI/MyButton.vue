<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style lang="scss" scoped>
.btn {
    padding: 24px 70px;
    background: $main;
    color: $text;
    border-radius: $radius;
    border: none;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    cursor: pointer;
    border: 2px solid transparent;
    text-transform: lowercase;
}

.btn:hover{
    border: 2px solid $main;
    background: transparent;
}
</style>