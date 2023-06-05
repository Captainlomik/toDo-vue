export default{
    data:{
        time:1500
    },
    methods: {
        formattedTime() {
            let minutes = Math.floor(this.time / 60)
            let seconds = this.time % 60

            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds
            
            // return `${minutes}:${seconds}`
            let arr = [minutes, seconds]
            return arr
        }
    },
    mounted(){}
}