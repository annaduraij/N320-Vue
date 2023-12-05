/* Auth: Jay Annadurai            */
/* Proj: N320: Vue - Teams        */
/* Date: 28 November 2023         */
/* Desc: Vue JS Loading File      */

// import InputForm from './components/InputForm.vue';
// import Roster from './components/Roster.vue';
// import Member from './components/Member.vue';
import ButtonSlot from './components/Templates/ButtonSlot.vue';
import router from './router/index.js';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.component('button-slot', ButtonSlot);
// app.component('')

app.use(router);
app.mount('#app');
