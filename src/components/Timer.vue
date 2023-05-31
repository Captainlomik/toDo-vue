<template>
    <div class="timer">
        <span class="time">{{ formattedTimeLeft }}</span>
    </div>
</template>

<script>
export default {
    name: 'timer-vue',
    props: {
        timeLeft: {Number}
    },
    computed: {
        formattedTimeLeft() {
            const timeLeft = this.timeLeft;
            let minutes = Math.floor(timeLeft / 60)
            let seconds = timeLeft % 60

            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds
            
            return `${minutes}:${seconds}`
        }
    },
}
</script>

<style lang="scss" scoped></style>