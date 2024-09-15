<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: ['mode']
    }
</script>


<style scoped>
    button{
        outline: none;
        border: none;
        padding: 20px 20px;
        border-radius: 30px;
        cursor: pointer;
    }
</style>