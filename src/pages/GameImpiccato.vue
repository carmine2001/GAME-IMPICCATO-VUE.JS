<template>
    <BaseModel>
        <div id="game">

            <GuessWord :word="word"/>

        </div>
    </BaseModel>
</template>


<script>
import { computed,onBeforeMount } from "vue";
import { useStore } from "vuex";
import GuessWord from "@/components/GuessWord.vue";
export default {
    components: {
        GuessWord
    },
    setup() {
        const store = useStore();

        onBeforeMount(async () => {
                await store.dispatch('getWord');
                store.dispatch('getTimeIncrement');
            })

        const word = computed(() => {
            return store.getters.word;
        })

        return {
            word
        }
    }
}
</script>

<style scoped>

#game{
    text-align: center;
}


</style>