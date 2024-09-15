import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import { createI18n } from 'vue-i18n';

const app = createApp(App)

const i18n = createI18n({
    locale: !localStorage.getItem('lang')? 'it': localStorage.getItem('lang'),
    fallbackLocale: 'it',
    messages: {
        it: {
            titleLanguage: "Scegli una lingua",
            startGame: "Inizia il gioco",
            messageErrorStart: "Per iniziare il gioco devi selezionare una lingua.",
            messageLose: "HAI PERSO!",
            messageWin: "BRAVO, HAI VINTO!",
            errors: "Errori",
            elapsedTime: "Tempo impiegato"
        },

        en: {
            titleLanguage: "Choose a lenguage",
            startGame: "Start game",
            messageErrorStart: "To start the game you must select a language",
            messageLose: "GAME OVER!",
            messageWin: "GOOD, YOU WON!",
            errors: "Errors",
            elapsedTime: "Elapsed Time"
        },

        es: {
            titleLanguage: "Elige un idioma",
            startGame: "El juego comienza",
            messageErrorStart: "Para iniciar el juego debes seleccionar un idioma.",
            messageLose: "JUEGO TERMINADO!",
            messageWin: "BIEN, GANASTE!",
            errors: "Errores",
            elapsedTime: "Tiempo transcurrido"
        },

        fr: {
            titleLanguage: "Choisir une langue",
            startGame: "Le jeu commence",
            messageErrorStart: "Pour démarrer le jeu, vous devez sélectionner une langue",
            messageLose: "JEU TERMINÉ!",
            messageWin: "BIEN, TU AS GAGNÉ",
            errors: "Erreurs",
            elapsedTime: "Temps écoulé"
        }
    }
})

import BaseModel from "./UI/BaseModel.vue";
import BaseButton from './UI/BaseButton.vue';

app.component('BaseModel',BaseModel);
app.component('BaseButton',BaseButton);

app.use(store);
app.use(i18n);

router.beforeEach((to,from,next) => {
    if(from.path === '/game' && to.path === '/'){
        store.dispatch('resetGame');
    }
    next()
})

app.use(router);

app.mount('#app')
