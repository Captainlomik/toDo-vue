<template>
    <div class="navbar">
        <div class="navbar__wrap">
            <a class="navbar__logo" @click="$router.push('/')"><img class="navbar__logo-img" src="@/assets/logo.svg"
                    alt="focus_logo"></a>
            <nav>
                <ul class="navbar__ul">
                    <li><a class="navbar__link" @click="$router.push('/directory')"><img src="@/assets/book.svg"
                                alt="directory_page"></a></li>
                    <li><a class="navbar__link" @click="$router.push('/account')"><img src="@/assets/avatar.svg"
                                alt="account_page"></a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>

export default {
    name: "my-navbar",
}
</script>

<style lang="scss" scoped>
.navbar {
    width: 100%;

    &__logo-img {
        max-height: 56px;
        cursor: pointer;
    }

    &__wrap {
        height: 100%;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__ul {
        display: flex;
        align-items: center;
        height: 100%;

        li {
            margin-right: 30px;
        }

        li::last-child {
            margin-right: 0;
        }

    }

    &__link {
        cursor: pointer;
    }


}</style>