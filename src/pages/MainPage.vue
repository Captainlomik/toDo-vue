<template>
    <div class="main__wrap">
        <div class="main__choose">
            <h1 class="main__txt">Над чем поработаем?</h1>
            <div class="choose__btns">
             <select name="" id=""></select>
                <button class="choose__btn" size="large">За работу</button>
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
    &__wrap {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: $red;
    }

    &__choose {
        width: 100%;
    }

    &__txt {
        margin-bottom: 30px;
        text-align: center;
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

    &__btn{
        margin-bottom: 22px;
    }

}
</style>