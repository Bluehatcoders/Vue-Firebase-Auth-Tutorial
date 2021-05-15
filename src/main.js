import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB_XI44VWLNUspyqMRjbAZAt9vTAb6LsIY",
  authDomain: "learning-vhxdqt.firebaseapp.com",
  databaseURL: "https://learning-vhxdqt.firebaseio.com",
  projectId: "learning-vhxdqt",
  storageBucket: "learning-vhxdqt.appspot.com",
  messagingSenderId: "300528074788",
  appId: "1:300528074788:web:da3b6c990169e2082258b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
