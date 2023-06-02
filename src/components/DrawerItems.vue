<template>
  <v-navigation-drawer v-model="drawerItems" fixed temporary>
    <v-list class="mt-10">
      <div v-for="link in items" :key="link.text">
        <v-list-item
          link
          v-if="!link.subitems"
          active-class="blue--text white"
          exact-active-class=""
          background-color="red"
          :to="link.to"
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          active-class="blue--text"
          :value="false"
          :prepend-icon="icon"
          no-action
          v-else
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            link
            v-for="sub in link.subitems"
            :key="sub.text"
            class="px-12"
          >
            <v-list-item-content>
              <v-list-item-title>{{ sub.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DrawerItems",
  data() {
    return {
      items: [
        { text: "Facturar", to: "/" },
        { text: "Ventas", to: "" },
        { text: "Gestión de dinero", to: "" },
        {
          text: "Inventario",
          to: "",
          subitems: [
            { text: "Productos", to: "" },
            { text: "Depositos", to: "" },
            { text: "Categorias", to: "" },
            { text: "Lista de precios", to: "" },
          ],
        },
        { text: "Configuración", to: "" },
        { text: "Atajos de teclado", to: "" },
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

<style scoped>
/* .v-list-item--link::before {
  background: #fff;
} */
</style>
