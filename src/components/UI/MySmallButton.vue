<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-small-button'
}
</script>

<style lang="scss" scoped>
.btn {
    padding: 14px 46px;
    background: transparent;
    color: $text;
    border-radius: $radius;
    border: 1px solid $dark;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    text-transform: lowercase;
    cursor: pointer;
}

.btn:hover {
    border: 1px solid $main;
    background: $main;
    color: white;
}
</style>