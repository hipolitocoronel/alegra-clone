<template>
  <v-app>
    <v-app-bar app color="blue accent-2" dense elevation="0">
      <v-app-bar-nav-icon dark></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn href="#" target="_blank" class="white" rounded elevation="0">
        <span class="mr-2">Negocio de prueba</span>
        <v-avatar color="teal white--text" size="30">H</v-avatar>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
