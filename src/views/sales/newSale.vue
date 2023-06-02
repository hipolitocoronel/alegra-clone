<template>
  <div style="max-height: 100%">
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
        <div class="d-flex align-center">
          <v-btn-toggle v-model="toggleSearchType" dense>
            <v-btn color="blue accent-2" min-height="40px">
              <v-icon class="white--text">mdi-magnify</v-icon>
            </v-btn>

            <v-btn color="blue accent-2" min-height="40px" class="rounded-r-0">
              <v-icon class="white--text">mdi-barcode</v-icon>
            </v-btn></v-btn-toggle
          >
          <v-autocomplete
            :search-input.sync="search"
            placeholder="Buscar producto"
            class="mr-2 text-h6 rounded-l-0 font-weight-regular"
            background-color="white"
            hide-details
            outlined
            dense
            no-data-text="Sin resultados"
            clearable
            append-icon=""
            :hide-no-data="!search ? true : false"
          >
          </v-autocomplete>
          <v-btn
            outlined
            color="blue accent-2"
            height="40px"
            class="text-capitalize font-weight-regular align-self-center"
            >Nuevo producto
            <v-icon class="ml-2">mdi-plus-box-multiple</v-icon></v-btn
          >
        </div>
      </v-col>
      <v-col cols="6" lg="4" class="cart-container">
        <div class="d-flex pa-3">
          <span class="text-h6 font-weight-regular">Factura de venta</span>
          <v-spacer></v-spacer
          ><v-btn fab x-small elevation="0" class="grey--text text--darken-2"
            ><v-icon>mdi-printer</v-icon></v-btn
          >
        </div>
        <v-divider></v-divider>
        <div class="d-flex py-3 px-5">
          <v-autocomplete
            outlined
            placeholder="Consumidor final (1111111)"
            dense
            hide-details
            class="mr-2"
            append-icon="mdi-chevron-down"
          >
            <template v-slot:prepend>
              <span class="grey--text text--darken-3">Cliente:</span>
            </template>
          </v-autocomplete>
          <v-btn
            outlined
            color="blue accent-2"
            height="40px"
            class="font-weight-regular text-capitalize"
          >
            <v-icon class="mr-2">mdi-account-plus</v-icon>
            Nuevo
          </v-btn>
        </div>
        <v-divider></v-divider>
        <div class="cart-body grey lighten-5">
          <div class="empty-cart grey--text text-subtitle-1" v-show="!cart">
            <v-icon class="grey--text" x-large>mdi-basket-outline</v-icon>
            <p>Acá verás los productos que elijas para tu venta</p>
          </div>

          <div class="cart-items">
            <v-list dense class="py-0">
              <v-list-item
                style="border-bottom: 1px solid #ddd"
                v-for="n in 10"
                :key="n"
              >
                <v-list-item-content class="pt-2">
                  <v-list-item-title
                    class="d-flex align-center text-subtitle-1"
                  >
                    Cepita <v-spacer></v-spacer>
                    <v-btn
                      fab
                      x-small
                      elevation="0"
                      class="grey--text text--darken-2 mx-2"
                      ><v-icon>mdi-plus</v-icon></v-btn
                    >
                    <span class="mx-2 font-weight-regular text-h6"> 1 </span>
                    <v-btn
                      fab
                      x-small
                      elevation="0"
                      class="grey--text text--darken-2 mx-2 mr-6"
                      ><v-icon>mdi-minus</v-icon></v-btn
                    >
                    $250,00
                  </v-list-item-title>
                  <v-list-item-subtitle class="button"
                    >$250,00</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <div class="cart-resume">Vender</div>
        </div>
      </v-col>
    </v-row>

    <v-bottom-navigation
      app
      horizontal
      max-height="49px"
      class="elevation-0 d-flex flex-column"
      style="border-top: 1px solid #ccc"
    >
      <v-tabs
        v-model="tab"
        background-color="grey lighten-3 "
        color="blue accent-2 "
        slider-size="2"
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
      search: "",
      cart: [0],
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
  height: calc(100vh - 95px);
  background: #f4f5fb;
}

.cart-container {
  min-height: 100%;
  border-left: 1px solid #ccc;
  background: #fff;
}

.cart-body {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

.empty-cart {
  position: absolute;
  width: 100%;
  top: 45%;
  padding: 0 10px;
  opacity: 0.7;

  text-align: center;
  font-weight: 400;

  transform: translate(0, -50%);
}
</style>
