<template>
  <v-app id="app" style="background-color: #c9c9c9">
    <v-system-bar
      hide-on-scroll
      v-if="!isLoggedIn"
      height="64px"
      style="z-index: 100"
      dark
      app
    >
      <v-btn icon>
        <v-icon size="30"></v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <img src="@/assets/logo.jpeg" height="30px" />
      &nbsp; &nbsp;
      <h3>كلية المنصور</h3>
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-main>
      <v-container fluid>
        <vue-page-transition name="fade">
          <router-view />
        </vue-page-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    menu: [
      // { title: "الرئيسية", icon: "ti-home", path: "/" },
      // { title: "الطلاب", icon: "ti-users", path: "/students" },
      // { title: "الحسابات", icon: "ti-coin", path: "/accountant" },
      // { title: "الاقساط", icon: "ti-receipt-2", path: "/payments" },
      // { title: "التقارير", icon: "ti-report", path: "/reports" },
    ],
  }),
  methods: {
    logout() {
      localStorage.clear();
      location.reload();
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    userInfo() {
      return this.$store.getters.getLoginInfo;
    },
    currentYear() {
      return this.$store.getters.getCurrentYear;
    },
    mySection() {
      return this.$store.getters.getMySection;
    },
  },
};
</script>

<style src="./style.css"></style>