<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
    div{
        background-color: white;
        padding: 20px;
        border-radius: 30px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1), 
                    0 6px 20px rgba(0, 0, 0, 0.1);
    }
</style>