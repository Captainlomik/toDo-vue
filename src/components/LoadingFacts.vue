<template>
    <div class="advice">
        <p class="advice__header">
            Совет #20391203</p>
        <p class="advice__txt">Для обретения гиперфокуса рекомендуем вам ни на что не отвлекаться, вот так вот. Не ожидали,
            да?</p>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.advice {
    background: $dark;
    border-radius: $radius;
    color: white;
    text-align: center;
    padding: 30px 120px;

    &__header {
        padding-bottom: 20px;
        font-weight: 800;
        font-size: 24px;
        line-height: 33px;
    }

    &__txt {
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
    }
}
</style>