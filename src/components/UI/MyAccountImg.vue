<template>
    <div class="account">
        <a class="account__link" @click="$router.push('/account')">
            <v-avatar
                image="https://media.istockphoto.com/id/1317495176/vector/cute-gray-cat-waving-paw-cartoon-vector-illustration.jpg?s=612x612&w=0&k=20&c=JTn75zEV-A02vAhUxW8oC2ipLRb5wNxCxdrXTZ1EYP8="
                size="51"></v-avatar>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.account {
    cursor: pointer;
}
</style>