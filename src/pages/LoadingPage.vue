<template>
    <div class="loading">
        <div class="loading__text">
            <h1 class="loading__header">Загрузка...</h1>
            <p class="loading__txt">Настраиваем аппаратуру для гиперфокуса, приготовьтесь</p>
        </div>
        <div class="loading__fact">
            <loading-facts></loading-facts>
        </div>
    </div>
</template>

<script>
import LoadingFacts from "@/components/LoadingFacts";

export default {
    components: { LoadingFacts },
}
</script>

<style lang="scss" scoped>
.loading {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}
</style>