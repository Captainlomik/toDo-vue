<template>
    <div class="main__wrap">
        <div class="main__choose">
            <h1 class="main__header">Над чем поработаем?</h1>
            <p class="main__txt">Звезды сообщили, что сегодня подходящий день, чтобы ботать</p>
            <div class="choose__btns">
                <my-select v-model="selectLesson" :options="lessons"></my-select>
                <my-button class="choose__btn" size="large" @click="$router.push('/timer')">За работу</my-button>
            </div>
        </div>
        <div class="result">
            <div class="result__wrap" v-if="selectLesson">
                <!-- <p>{{ updated }} фокуса сегодня</p> -->
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        ...mapState({
            selectLesson: state => state.time.selectLesson,
            lessons: state => state.time.lessons
        }),
        ...mapGetters([
            'updated'
        ]),
    }
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
        height: 100%;
        width: 100%;
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
        justify-content: center;
        align-items: center;
    }

    &__select {
        margin-right: 30px;
    }

}

.result {
    min-height: 60px;

    &__wrap {
        padding: 16px 76px;
        background: black;
        color: white;
        text-align: center;
        border-radius: $radius;
    }
}
</style>