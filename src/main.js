import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import { createI18n } from 'vue-i18n';

import it from './translation_messages/it';
import en from './translation_messages/en';
import es from './translation_messages/es';
import fr from './translation_messages/fr';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App)

const i18n = createI18n({
    locale: !localStorage.getItem('lang')? 'it': localStorage.getItem('lang'),
    fallbackLocale: 'it',
    messages: {
        it,
        en,
        es,
        fr
    }
})

import BaseModel from "./UI/BaseModel.vue";
import BaseButton from './UI/BaseButton.vue';
import SpinnerLoading from './components/SpinnerLoading.vue';

app.component('BaseModel', BaseModel);
app.component('BaseButton', BaseButton);
app.component('SpinnerLoading', SpinnerLoading)

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
