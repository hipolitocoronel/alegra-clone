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

      <v-hover v-slot="{ hover }">
        <div class="opc-container">
          <v-btn href="#" class="white" rounded elevation="0">
            <span class="mr-2">Nombre negocio</span>
            <v-avatar color="teal white--text font-weight-black " size="30"
              >H</v-avatar
            >
          </v-btn>

          <div
            class="list-opc"
            :style="{ visibility: hover ? 'visible' : 'hidden' }"
          >
            <v-list dense class="body-2 white rounded-lg" elevation="6"
              ><v-list-item
                ><v-list-item-content class="pt-0"
                  ><v-list-title class="font-weight-bold body-1"
                    >Nombre negocio</v-list-title
                  >
                  <v-list-subtitle>
                    hipolitocoronel1522@gmail.com
                  </v-list-subtitle>
                </v-list-item-content></v-list-item
              >
              <v-divider class="my-1"></v-divider>

              <v-list-item link>
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-cogs</v-icon>
                </v-list-item-icon>
                Configuraciones</v-list-item
              >
              <v-list-item link>
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                Cerrar sesión
              </v-list-item>
            </v-list>
          </div>
        </div>
      </v-hover>
    </v-app-bar>
    <drawer-items />

    <v-main style="height: calc(100vh - 50px)">
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

* {
  font-family: "Inter";
}

.opc-container {
  position: relative;
}

.list-opc {
  position: absolute;
  right: 0;
  width: 260px;
  padding-top: 10px;
  background: transparent;
}
</style>
