<template>
    <div class="wrapper-languages">
        <BaseModel>
            <languages @select-lang="selectLang"/>
        </BaseModel>
    </div>
</template>

<script>
import Languages from "../components/Languages.vue";
import { useStore } from 'vuex';
export default {
    components: {
        Languages
    },
    setup(){
        const store = useStore();

        const selectLang = (lang) => {
            store.dispatch('getLang',lang);
        }

        return {
            selectLang
        }
    }
}
</script>


<style scoped>
    .wrapper-languages {
        text-align: center;
    }
</style>