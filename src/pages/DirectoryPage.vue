<template>
    <div class="page__wrap">
        <div class="directory">
            <div class="directory__info">
                <h2 class="directory__info-header">Справочник</h2>
                <p class="directory__info-txt">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper fringilla gravida habitant vitae mattis. Odio ut hac
                    pharetra ultrices elementum.
                </p>
            </div>
            <div class="directory__info-icon">
                <img src="@/assets/dictionary.svg" alt="directory_icon">
            </div>
        </div>
        <div class="questions">
            <h3 class="questions__header">Часто задаваемые вопросы</h3>
            <div class="questions__block">
                <div class="tabs">
                    <div class="tab">
                        <input type="checkbox" id="chck1">
                        <label class="tab-label" for="chck1">Как перестать отвлекаться?</label>
                        <div class="tab-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                        </div>
                    </div>
                    <div class="tab">
                        <input type="checkbox" id="chck2">
                        <label class="tab-label" for="chck2">Как соблюдать дедлайны по всем предметам?</label>
                        <div class="tab-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                        </div>
                    </div>
                    <div class="tab">
                        <input type="checkbox" id="chck3">
                        <label class="tab-label" for="chck3">Как я могу эффективно донести свои потребности, связанные с
                            СДВГ, до своих преподавателей?</label>
                        <div class="tab-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                        </div>
                    </div>
                    <div class="tab">
                        <input type="checkbox" id="chck4">
                        <label class="tab-label" for="chck4">Как соблюдать дедлайны по всем предметам?</label>
                        <div class="tab-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page__wrap {
    padding: 30px 100px;
}

.directory {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &__info {

        &-header {
            font-weight: 800;
            font-size: 40px;
            line-height: 54px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        &-txt {
            width: 70%;
        }
    }
}

.questions {
    margin-top: 100px;
    margin-bottom: 20px;

    &__header {
        font-weight: 800;
        font-size: 28px;
        line-height: 38px;
    }

    &__block {
        margin: 20px 0;
    }
}

/* Accordion styles */
input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}


.tab {
    width: 100%;
    color: white;
    overflow: hidden;
    margin-bottom: 10px;
    border-radius: 10px;

    &-label {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        background: $dark;
        cursor: pointer;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 38px;

        /* Icon */
        &:hover {
            background: darken($dark, 10%);
        }

        &::after {
            content: "\276F";
            width: 1em;
            height: 1em;
            text-align: center;
            transition: all .35s;
        }
    }

    &-content {
        max-height: 0;
        padding: 0 1em;
        color: $dark;
        background: white;
        transition: all .35s;
    }

    &-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        background: $dark;
        cursor: pointer;

        &:hover {
            background: darken($dark, 10%);
        }
    }
}

// :checked
input:checked {
    +.tab-label {
        background: darken($dark, 10%);

        &::after {
            transform: rotate(90deg);
        }
    }

    ~.tab-content {
        max-height: 100vh;
        padding: 1em;
    }
}
</style>