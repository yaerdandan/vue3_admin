<template>
    <svg :width="width" :height="height">
        <use :href="prefix + name" :fill="color"></use>
    </svg>
</template>

<script setup lang='ts' name="SvgIcon">
defineProps({
    prefix: {
        type: String,
        default: '#icon-'
    },
    name: String,
    color: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '16px'
    },
    height: {
        type: String,
        default: '16px'
    }
})
</script>

<style></style>