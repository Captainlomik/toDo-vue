<template>
    <div class="navbar">
        <div class="navbar__wrap">
            <nav>
                <ul class="navbar__ul">
                    <li><a class="navbar__link" @click="$router.push('/')">Главная</a></li>
                    <li><a class="navbar__link" @click="$router.push('/directory')">Справочник</a></li>
                </ul>
            </nav>
            <MyAccountImg></MyAccountImg>
        </div>
    </div>
</template>

<script>
import MyAccountImg from './MyAccountImg.vue';

export default {
    name: "my-navbar",
    components: { MyAccountImg }
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    background: lightgray;

    &__wrap {
        height: 100%;
        margin: 0 250px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__ul {
        display: flex;
        align-items: center;
        height: 100%;
    }

    &__link {
        cursor: pointer;
    }

}
</style>