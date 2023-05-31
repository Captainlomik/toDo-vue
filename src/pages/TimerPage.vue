<template>
    <div class="timer">
        <div class="timer__clock">
            <timer-vue :time-left="timeLeft" :class="{ visible: active }" class="timer__clock-time" />
            <div class="timer__btns">
                <my-small-button @click="stopTimer" class="timer__btn end">завершить</my-small-button>
                <!-- <my-small-button @click="handleStart" class="timer__btn start">Начать</my-small-button> -->
                <my-small-button @click="resetTimer" class="timer__btn reset">перезагрузить</my-small-button>
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
import TimerVue from '@/components/Timer';

export default {
    data() {
        return {
            workPeriod: 1500,
            timePassed: 0,
            active: false
        }
    },
    components:{
        TimerVue
    },
    created: function(){
        this.handleStart()
    },
    computed: {
        timeLeft() {
            return this.active ? this.workPeriod - this.timePassed : 0
        }
    },
    methods: {
        handleStart() {
            this.active = true
            this.startTimer()
        },
        startTimer() {
            const start = Date.now()
            let tickInterval = setInterval(tick.bind(this), 500)
            function tick() {
                if (this.timeLeft > 0) {
                    this.timePassed = Math.floor((Date.now() - start) / 1000)
                }
                else {
                    clearInterval(tickInterval)
                    this.active = false;
                    this.timePassed = 0;
                }
            }
        },
        stopTimer(){
            console.log(this.timePassed)
            this.active = false;
        },
        resetTimer(){
            this.timePassed = 0
        }
    }
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