<template>
    <div class="main__wrap">
        <div class="main__choose">
            <h1 class="main__header">Над чем поработаем?</h1>
            <p class="main__txt">Звезды сообщили, что сегодня подходящий день, чтобы ботать</p>
            <div class="choose__btns">
                <select name="" id=""></select>
                <my-button class="choose__btn" size="large">За работу</my-button>
            </div>
        </div>
        <div class="result">
            <div class="result__wrap">
                <p>1 час 40 минут фокуса сегодня</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main {
    &__header {
        text-transform: uppercase;
        text-align: center;
    }

    &__txt {
        margin: 20px 0 70px 0;
        text-align: center;
    }

    &__wrap {
        height: calc(100vh - 100px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    &__choose {
        width: 100%;
    }

}

.choose {
    &__btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__select {
        margin-right: 30px;
    }

}

.result{
    &__wrap{
        padding: 16px 76px;
        background: black;
        color:white;
        text-align: center;
        border-radius: $radius;
    }
}
</style>