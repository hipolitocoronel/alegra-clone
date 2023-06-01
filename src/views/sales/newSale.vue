<template>
  <div class="d-flex">
    <v-navigation-drawer expand-on-hover permanent height="100vh" class="white">
      <v-list>
        <v-list-item
          link
          class="px-3"
          v-for="category in categories"
          :key="category.avatar"
        >
          <v-list-item-avatar class="my-0">
            <v-avatar :color="category.color" size="33" class="white--text">{{
              category.avatar
            }}</v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ category.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="grey lighten-3" style="flex-grow: 1">Content page newSale</div>

    <v-bottom-navigation
      horizontal
      app
      class="grey lighten-4 elevation-0 d-flex flex-column"
      max-height="49px"
    >
      <v-divider></v-divider>
      <v-tabs
        v-model="tab"
        background-color="blue-grey lighten-5 "
        color="blue accent-2 "
        slider-size="3"
        show-arrows
      >
        <v-tab
          class="grey--text text--darken-2 font-weight-regular text-capitalize"
          v-for="n in tabs"
          :key="n"
          active-class="white"
          ><v-hover v-slot="{ hover }">
            <div>
              <i
                class="fi fi-sr-shopping-bag mr-3 text--accent-2"
                :class="tab === n - 1 && ' blue--text'"
              ></i>
              {{ n === 1 ? "Venta principal" : `Venta ${n - 1}` }}

              <v-btn
                icon
                min-width="30px"
                class="ml-3"
                small
                :style="{ visibility: hover && n > 1 ? 'visible' : 'hidden' }"
                @click="tabs--"
                ><v-icon class="ma-0">mdi-delete</v-icon></v-btn
              >
            </div>
          </v-hover>
        </v-tab>
        <v-btn
          icon
          outlined
          text
          tile
          class="elevation-0"
          min-width="55px"
          @click="tabs++"
          ><v-icon class="ma-0">mdi-plus</v-icon></v-btn
        >
      </v-tabs>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "newSale",
  data() {
    return {
      tabs: 1,
      tab: 0,
      categories: [
        { title: "Aceites", avatar: "A", color: "teal" },
        { title: "Gaseosas", avatar: "G", color: "amber" },
        { title: "Limpieza", avatar: "L", color: "blue-grey" },
        { title: "Fiambreria", avatar: "F", color: "red" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.v-tabs {
  ::v-deep {
    .v-tabs-slider-wrapper {
      transition: none;
      top: 0;
    }
  }
}
</style>
