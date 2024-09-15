<template>

    <h1>{{ $t('titleLanguage') }}</h1>

    <div>

        <div class="languages">

            <div>
                <input type="radio" id="it" name="language" @click="selectLang('it')">
                <label class="ita" for="it" :class="{isSelect: lang === 'it'}">
                    <img src="../assets//italian.png" alt="img-lang-Italian">
                    <p>Italiano</p>
                </label>
            </div>

            <div>
                <input type="radio" id="en" name="language" @click="selectLang('en')">
                <label class="eng" for="en" :class="{isSelect: lang === 'en'}">
                    <img src="../assets//united-states-of-america.png" alt="img-lang-English">
                    <p>English</p>
                </label>
            </div>

            <div>
                <input type="radio" id="es" name="language"  @click="selectLang('es')">
                <label class="esp" for="es" :class="{isSelect: lang === 'es'}">
                    <img src="../assets//spanish.png" alt="img-lang-Spanish">
                    <p>Español</p>
                </label>
            </div>

            <div>
                <input type="radio" id="fr" name="language" @click="selectLang('fr')">
                <label class="fra" for="fr" :class="{isSelect: lang === 'fr'}">
                    <img src="../assets//france.png" alt="img-lang-French">
                    <p>Français</p>
                </label>
            </div>

        </div>

        <p class="message-error" v-if="isValid">{{ $t('messageErrorStart') }}</p>

        <BaseButton @click="startGame">
            {{ $t('startGame') }}
        </BaseButton>
    </div>

</template>

<script>
import { computed,ref } from "vue";
import { useStore } from 'vuex';
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
export default {
    emits: ['selectLang'],
    setup(_,{ emit }) {
        const store = useStore();
        const i18n = useI18n();
        const isValid = ref(false);
        const router = useRouter();

        const selectLang = (lang) => {
            emit('selectLang',lang);
            i18n.locale.value=lang;
        }

        const lang = computed(() => {
            return store.getters.lang
        })

        const startGame = () => {
            if(lang.value === ''){
                isValid.value = true;
            }else {
                isValid.value = false;
                router.push('/game');
            }
        }
        
        return {
            selectLang,
            lang,
            startGame,
            isValid
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 3.5rem;
}

.languages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "ita eng"
                        "esp fra";
    justify-items: center;
    gap: 20px 20px;
    margin: 20px 0;
}

.isSelect{
    background-color: #e0e0e0;
}

label {
    display: block;
    cursor: pointer;
    border-radius: 10%;
    width: 100px;
    height: 100px;
    background-color: white;
}

.languages div input{
    display: none;
}

.languages div label:hover {
    background-color: #e0e0e0;
}

.languages div p {
    font-size: 1.1rem;
}

.ita {
    grid-area: "ita";
}

.eng {
    grid-area: "eng";
}

.esp {
    grid-area: "esp";
}

.fra {
    grid-area: "fra";
}
</style>