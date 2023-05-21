<template>
    <div class="account">
        <div class="account__info">
            <h1 class="account__info-header">Твои успехи за сегодня</h1>
            <p class="account__info-txt">Lorem ipsum dolor sit amet consectetur. Ullamcorper fringilla gravida habitant
                vitae mattis. Odio ut hac
                pharetra ultrices elementum.</p>
            <div class="account__info-list">
                <div class="account__info-list-item">
                    <p class="list__item-name">Ты отлично поработал, так держать!</p>
                    <p class="list__item-data">12 часов</p>
                </div>
                <div class="account__info-list-item">
                    <p class="list__item-name">Ты поднялся в рейтинге недели на n позиций</p>
                    <p class="list__item-data">+1 в рейтинге</p>
                </div>
                <div class="account__info-list-item">
                    <p class="list__item-name">Разблокировано новое достижение!</p>
                    <p class="list__item-data">В фокусе</p>
                </div>
            </div>
        </div>
        <div class="account__btns">
            <div class="account__btn">
                <my-small-button>прогресс</my-small-button>
            </div>
            <div class="account__btn">
                <my-small-button>награды</my-small-button>
            </div>
            <div class="account__btn">
                <my-small-button>рейтинг</my-small-button>
            </div>
            <div class="account__btn">
                <my-small-button>стратегии</my-small-button>
            </div>
            <div class="account__btn">
                <my-small-button>настройки</my-small-button>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.account {
    &__info {
        border: 4px solid $dark;
        border-radius: $radius;
        padding: 40px 60px;

        &-header {
            font-size: 30px;
        }

        &-txt {
            margin-bottom: 20px;
        }

        &-list {
            &-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 10px;
                margin-left: 20px;
                position: relative;
            }

            &-item:before {
                content: '';
                display: block;
                background-color: $dark;
                height: 8px;
                width: 8px;
                border-radius: 2px;
                position: absolute;
                left: -20px;
            }
        }

    }

    &__btns {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin: 50px 0;
    }

    &__btn {
        width: 33%;
        margin-bottom: 30px;
        text-align: center;
    }

    &__btn button{
        min-width: 250px;
        margin-right: 10px;
        font-weight: 700;
        border: 4px solid $dark;
    }

}

.list {
    &__item {
        &-name {
            width: 70%;
            margin-right: 10px;
        }

        &-data {
            width: 20%;
            text-align: start;
        }
    }
}
</style>