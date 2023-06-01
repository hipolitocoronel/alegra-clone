<template>
  <v-navigation-drawer v-model="drawerItems" absolute temporary height="100vh">
    Drawer
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DrawerItems",
  data() {
    return {
      items: [
        { text: "", to: "" },
        { text: "", to: "" },
        { text: "", to: "" },
        { text: "", to: "" },
        { text: "", to: "" },
      ],
    };
  },
  computed: {
    drawerItems: {
      get() {
        return this.$store.getters["drawerItems"];
      },
      set(drawer) {
        this.$store.dispatch("setDrawerItems", drawer);
      },
    },
  },
};
</script>
