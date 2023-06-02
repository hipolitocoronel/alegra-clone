<template>
  <v-app>
    <v-app-bar app color="blue accent-2" dense elevation="0">
      <v-app-bar-nav-icon
        dark
        @click="setDrawerItems(true)"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">{{
        currentRouteName
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="#" class="white" rounded elevation="0">
        <span class="mr-2">Nombre negocio</span>
        <v-avatar color="teal white--text" size="30">H</v-avatar>
      </v-btn>
    </v-app-bar>
    <drawer-items />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import DrawerItems from "@/components/DrawerItems.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: { DrawerItems },
  methods: {
    ...mapActions(["setDrawerItems"]),
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
html {
  overflow: hidden;
  box-sizing: border-box;
}

$body-font-family: "Inter";

.v-application {
  .display-1,
  .display-2,
  .display-3,
  .display-4,
  .headline,
  .title,
  .subtitle-1,
  .subtitle-2,
  .body-1,
  .body-2,
  .caption,
  .overline {
    font-family: $body-font-family !important;
  }
}
</style>
