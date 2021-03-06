import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';

import VueLazyload from '@jambonn/vue-lazyload';
import 'virtual:svg-icons-register';

import infiniteScroll from 'vue3-infinite-scroll-good';

import '@/styles/index.css';
import '@/styles/common.css';
import '@/styles/variables.scss';

import TheImage from '@/components/TheImage.vue';
import TheLink from '@/components/TheLink.vue';
import TheScrollbar from '@/components/TheScrollbar.vue';
import TheIcon from '@/components/TheIcon.vue';
import TheButton from '@/components/button/TheButton.vue';

const app = createApp(App);

const myComponents = {
  TheImage: TheImage,
  TheLink: TheLink,
  TheScrollbar: TheScrollbar,
  TheIcon: TheIcon,
  TheButton: TheButton,
};

for (let key in myComponents) {
  app.component(key, myComponents[key]);
}

app
  .use(VueLazyload, {
    preLoad: 1.3,
    attempt: 3,
  })
  .use(infiniteScroll)
  .use(store)
  .use(router)
  .mount('#app');
