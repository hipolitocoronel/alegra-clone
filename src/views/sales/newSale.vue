<template>
  <div style="height: 100%">
    <v-navigation-drawer expand-on-hover permanent absolute class="white">
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
    <v-row class="new-sale-container" no-gutters>
      <v-col cols="6" lg="8" class="pa-5">
        <div class="d-flex">
          <v-btn-toggle v-model="toggleSearchType" dense>
            <v-btn color="blue accent-2" min-height="100%">
              <v-icon class="white--text">mdi-magnify</v-icon>
            </v-btn>

            <v-btn color="blue accent-2" min-height="100%" class="rounded-r-0">
              <v-icon class="white--text">mdi-barcode</v-icon>
            </v-btn></v-btn-toggle
          >
          <v-autocomplete
            placeholder="Buscar producto"
            class="mr-2 text-h6 rounded-l-0 font-weight-regular"
            background-color="white"
            hide-details
            outlined
            dense
            no-data-text="Sin resultados"
            clearable
            append-icon=""
          ></v-autocomplete>
          <v-btn
            outlined
            color="blue accent-2"
            class="text-capitalize font-weight-regular"
            >Nuevo producto
            <v-icon class="ml-2">mdi-plus-box-multiple</v-icon></v-btn
          >
        </div>
      </v-col>
      <v-col cols="6" lg="4" class="cart-container">a</v-col>
    </v-row>

    <v-bottom-navigation
      horizontal
      app
      max-height="49px"
      class="elevation-0 d-flex flex-column"
      style="border-top: 1px solid #ccc"
    >
      <v-tabs
        v-model="tab"
        background-color="grey lighten-3 "
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
          class="elevation-0 white"
          min-width="55px"
          @click="tabs++"
          style="border: 1px solid #ccc !important"
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
      toggleSearchType: 0,
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

.new-sale-container {
  margin-left: 55px;
  height: 100%;
  background: #f4f5fb;
}

.cart-container {
  min-height: 100%;
  border-left: 1px solid #ccc;
  background: #fff;
}
</style>
