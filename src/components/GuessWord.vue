<template>
    <ModalGameOver v-if="gameOver">
        <p class="game-over">{{ $t('messageLose') }}</p>
    </ModalGameOver>

    <ModalGameOver v-if="winner">
        <p class="game-win">{{ $t('messageWin') }}</p>
        <div class="data-win">
            <ElapsedTime/>
            <p>{{ $t('errors') }}: {{ errors }}</p>
            <p>{{ $t('longestSequence') }}: {{ longestSequence }}</p>
        </div>
    </ModalGameOver>
    <header>
        <div class="first-wrapper">
            <p>ROUND: 1</p>
        </div>

        <div class="second-wrapper">
            <p class="errors">{{ $t('errors') }} {{ errors }}</p>
        </div>
    </header>

    <div class="wrapperWord" v-if="word">
        <div class="singleLetter" v-for="letter in word[0]" :key="letter" ref="singleLetter">__</div>
    </div>

    <div class="wrapperLetters">
        <div class="letterClick" v-for="lettera in $t('alphabet')" :key="lettera" ref="singleLetterAlphabet"
            @click="clickLetter(lettera)">{{ lettera }}
        </div>
    </div>
</template>

<script>
import { ref, computed, provide, onMounted } from "vue";
import ModalGameOver from "./ModalGameOver.vue";
import ElapsedTime from "./ElapsedTime.vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
export default {
    components: {
        ModalGameOver,
        ElapsedTime
    },
    props: ['word'],
    setup(props) {

        // const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const singleLetter = ref();
        const singleLetterAlphabet = ref();

        const clickLetter = (letter) => {
            for (let i = 0; i < props.word[0].length; i++) {
                const letterWord = props.word[0][i];
                if (letterWord.toUpperCase() === letter) {
                    singleLetter.value[i].innerHTML = letter;
                }
                else {
                    const index = alphabet.indexOf(letter);
                    singleLetterAlphabet.value[index].classList.add('isClicked');
                }
            }

            incrementErrors(letter);
            winGame();
        }

        const store = useStore();

        const errors = computed(() => {
            return store.getters.errors;
        })

        const gameOver = computed(() => {
            return store.getters.gameOver;
        })

        const incrementErrors = (letter) => {
            if(props.word[0].split('').includes(letter.toLowerCase())){
                store.dispatch('getIncrementSequence');
            }
            else {
                store.dispatch('getErrors');
                store.dispatch('getSaveSequences');
                store.dispatch('getResetSequence');
            }
            if (errors.value === 6) {
                lose();
            }
        }

        const lose = () => {
            store.dispatch('getGameOver', true);
            store.dispatch('getClearTime');
            for (let i = 0; i < props.word[0].length; i++) {
                const letterWord = props.word[0][i];
                singleLetter.value[i].innerHTML = letterWord.toUpperCase();
            }
        }

        const winner = computed(() => {
            return store.getters.winGame;
        })

        const longestSequence = computed(() => {
            return store.getters.longestSequence;
        })

        const winGame = () => {
            let wordWin = '';
            for (let i = 0; i < singleLetter.value.length; i++) {
                const element = singleLetter.value[i];
                if (element.innerHTML != '__') {
                    wordWin += element.innerHTML;
                }
            }
            if (errors.value < 6 && wordWin === props.word[0].toUpperCase()) {
                store.dispatch('getWinGame', true);
                store.dispatch('getClearTime');
                store.dispatch('getSaveSequences');
                store.dispatch('getLongestSequences');
                console.log(longestSequence.value)
            }
        }

        const resetDivAlphabet = () => {
            for (let i = 0; i < singleLetterAlphabet.value.length; i++) {
                const element = singleLetterAlphabet.value[i];
                element.classList.remove('isClicked');
            }
        }

        const i18n = useI18n()

        onMounted(() => {
            // console.log(i18n);
            provide('resetAlphabet', resetDivAlphabet);
        })

        return {
            singleLetter,
            singleLetterAlphabet,
            clickLetter,
            errors,
            gameOver,
            winner,
            longestSequence
        }
    }

}
</script>


<style scoped>
header {
    display: flex;
    padding: 20px;
}

header div {
    width: 100%;
    font-size: 1.3rem;
}

.game-over {
    font-size: 4rem;
    color: rgba(255, 0, 0, 0.899);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.game-win {
    font-size: 4rem;
    color: green;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.data-win{
    margin-top: 20px;
    color: white;
    font-size: 1rem
}

.first-wrapper {
    text-align: left;
}

.second-wrapper {
    text-align: end;
}

.wrapperWord {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
}

.isClicked {
    pointer-events: none;
    opacity: 0;
}

.wrapperLetters {
    display: flex;
    margin-bottom: 20px;
    flex-wrap: wrap
}

.singleLetter {
    cursor: pointer;
    width: 70px;
    height: 70px;
    margin: 0 10px 10px 0;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.letterClick {
    border-radius: 5px;
    background-color: yellow;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1),
        0 6px 20px rgba(0, 0, 0, 0.1);
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 70px;
    height: 70px;
    margin: 0 10px 10px 0;
}

.errors {
    color: red;
    font-size: 1.1rem;
}
</style>