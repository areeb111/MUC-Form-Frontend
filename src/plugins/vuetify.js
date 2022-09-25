import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    dark: false,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#FFFFFF",
        secondary: "#8a8d93",
        accent: "#0d6efd",
        error: "#ff4c51",
        info: "#16b1ff",
        success: "#6CB633",
        warning: "#ffb400",
        background: "#FFFFFF",
        baseBackground: "#BEE7C4",
      },
    },
  },
});
