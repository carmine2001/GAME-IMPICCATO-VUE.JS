<template>
    <SpinnerLoading v-if="loading"/>
    <BaseModel>
        <div id="game" @mousemove="onMouseMove">
            <GuessWord :word="word" />
        </div>
    </BaseModel>
</template>


<script>
import { computed, onMounted, } from "vue";
import { useStore } from "vuex";
import GuessWord from "@/components/GuessWord.vue";
export default {
    components: {
        GuessWord
    },
    setup() {
        const store = useStore();

        onMounted(async () => {
            await store.dispatch('getWord');
            store.dispatch('getTimeIncrement');
        })

        const word = computed(() => {
            return store.getters.word;
        })

        const onMouseMove = (event) => {

            store.dispatch('getAxisX',event.movementX);
            store.dispatch('getAxisY',event.movementY);

        }

        const loading = computed(() => {
            return store.getters.loading;
        })

        return {
            word,
            onMouseMove,
            loading
        }
    }
}
</script>

<style scoped>
#game {
    text-align: center;
}
</style>