<template>
    <div class="wrapper-loading">
        <div class="loading d-flex justify-content-center">
            <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper-loading{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spinner-border{
        width: 100px;
        height: 100px;
    }
</style>