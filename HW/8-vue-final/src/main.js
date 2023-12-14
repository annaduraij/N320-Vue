/* Auth: Jay Annadurai            */
/* Proj: N320: Vue - Final        */
/* Date: 8 December 2023          */
/* Desc: Vue JS Loading File      */


//Import Function to Create New Vue App
import { createApp } from 'vue';
//Import the root component of your Vue application | The Top Layout
import App from './App.vue';
//Initialize the Vue App
const vueApp = createApp(App);


//Import and Use the Router Middleware for a Vue SPA
import router from './router/index.js';
vueApp.use(router);


//Import and Assign Global Components
import ButtonSlot from './components/Templates/ButtonSlot.vue';
vueApp.component('button-slot', ButtonSlot);


//Ideally the Last Step is to Mount the Application
//Mounted to the HTML DOM Element of ID '#app' in the Root Component
vueApp.mount('#app');