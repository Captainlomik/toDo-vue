<template>
    <select :value="modelValue" @change="changeOption">
         <option value="" disabled>Выберите из списка</option>
         <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
     </select>
 </template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
select {
    width: 50%;
    min-width: 320px;
    border-radius: $radius;
    padding: 20px;
    border: none;
    color: #171B0980;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    margin-right: 30px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    background: url('@/assets/arrow.svg') no-repeat;
    background-color: $gray;
    background-position: 90% 50%;
}
</style>