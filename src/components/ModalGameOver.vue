<template>
    <div id="wrapper">
        <div class="game-over">
            <slot></slot>
            <div class="actions">
                <div class="icon-home" @click="toHome">
                    <img src=".././assets/icons8-home-50.png" alt="">
                </div>

                <div class="icon-restart" @click="restart">
                    <img src=".././assets/icons8-restart-60.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { inject, onMounted } from "vue";
export default {
    setup(){
        const router = useRouter();
        const store = useStore()

        const toHome = () => {
            router.push("/");
        }

        const resetDivAlphabet = inject('resetAlphabet');

        const restart = async () => {
            store.dispatch('resetGame');
            await store.dispatch('getWord');
            resetDivAlphabet();
            store.dispatch('getTimeIncrement');
        }

        onMounted(() => {
            store.dispatch('getCursorDistance');
        })

        return {
            toHome,
            restart
        }


    }

}
</script>

<style scoped>
#wrapper{
    background-color: rgba(0, 0, 0, 0.254);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.game-over {
    border: 40px solid rgb(232, 196, 129);
    border-radius: 20px;
    max-width: 500px;
    padding: 40px;
    background-color: rgb(224, 154, 63);
}

.actions {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.icon-home {
    margin-right: 20px;
    cursor: pointer;
}

.icon-restart{
    cursor: pointer;
}
</style>