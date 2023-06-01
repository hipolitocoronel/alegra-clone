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
      <drawer-items />
      <v-spacer></v-spacer>
      <v-btn href="#" target="_blank" class="white" rounded elevation="0">
        <span class="mr-2">Nombre negocio</span>
        <v-avatar color="teal white--text" size="30">H</v-avatar>
      </v-btn>
    </v-app-bar>

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

<style>
html {
  overflow: hidden;
}
</style>
