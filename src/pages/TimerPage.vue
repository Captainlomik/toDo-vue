<template>
    <div class="timer">
        <div class="timer__clock">
            <p class="timer__clock-time"> 20:20</p>
            <div class="timer__btns">
                <my-small-button class="timer__btn end">завершить</my-small-button>
                <my-small-button class="timer__btn reset">перезагрузить</my-small-button>
            </div>
        </div>
        <div class="checkBlock__wrap">
            <div class="checkBlock">
                <div class="checkBlock__box check"></div>
                <div class="checkBlock__box"></div>
                <div class="checkBlock__box"></div>
                <div class="checkBlock__box"></div>
            </div>
            <p class="checkBock__txt">Ты еще в самом начале пути, сосредоточься!</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.timer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    &__clock {
        width: 100%;

        &-time {
            font-weight: 800;
            font-size: 72px;
            line-height: 98px;
            text-transform: uppercase;
        }
    }

    &__btns {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.end {
    margin-right: 30px;
}

.checkBlock {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    &__box {
        height: 60px;
        width: 60px;
        border: 4px solid $dark;
        border-radius: 20px;
        margin-right: 10px;
    }
}

.checkBlock__box.check {
    background-color: $main;
}

.checkBlock__box.check:after {
    content: '✓';
    font-weight: 800;
    font-size: 35px;
}
</style>