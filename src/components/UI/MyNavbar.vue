<template>
    <v-app-bar class="navbar" :elevation="2">
        <!-- <v-app-bar-title>Title</v-app-bar-title> -->
        <div class="navbar__wrap">
            <nav>
                <ul class="navbar__ul">
                    <li><a class="navbar__link" @click="$router.push('/')">Главная</a></li>
                    <li><a class="navbar__link" @click="$router.push('/directory')">Справочник</a></li>
                </ul>
            </nav>
            <MyAccountImg></MyAccountImg>
        </div>
    </v-app-bar>
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
    &__wrap {
        height: 100%;
        width: 100%;
        margin: 0 250px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__ul {
        display: flex;
        align-items: center;
        height: 100%;

        li{
            margin-right: 20px;
        }

        li::last-child{
            margin-right: 0;
        }
    }

    &__link {
        cursor: pointer;
    }

}
</style>