import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify, {
  options: {
    customProperties: true,
  },
  iconfont: 'md',
  lang: {
    locales: { es },
    current: 'es',
  },
});
