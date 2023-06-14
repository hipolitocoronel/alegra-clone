<template>
  <div style="max-height: 100%">
    <DrawerCategories />

    <v-row class="new-sale-container" no-gutters>
      <v-col
        cols="6"
        lg="8"
        class="pa-5"
        style="max-height: calc(100vh - 75px)"
      >
        <v-card
          style="max-height: 100%; overflow-y: auto; background: transparent"
          elevation="0"
          class="products-list-container"
        >
          <div class="d-flex align-center">
            <v-btn-toggle v-model="toggleSearchType" dense>
              <v-btn color="blue accent-2" min-height="40px">
                <v-icon class="white--text">mdi-magnify</v-icon>
              </v-btn>

              <v-btn
                color="blue accent-2"
                min-height="40px"
                class="rounded-r-0"
              >
                <v-icon class="white--text">mdi-barcode</v-icon>
              </v-btn>
            </v-btn-toggle>
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
            >
              Nuevo producto
              <v-icon class="ml-2">mdi-plus-box-multiple</v-icon>
            </v-btn>
          </div>

          <v-row
            class="my-7 mx-8"
            justify="space-between"
            no-gutters
            style="gap: 20px; max-height: 100%"
          >
            <ProductItem
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" lg="4" class="cart-container">
        <!-- CABECERA CART -->
        <div class="d-flex pa-3">
          <span class="text-h6 font-weight-regular">Factura de venta</span>
          <v-spacer />

          <v-btn fab x-small elevation="0" class="grey--text text--darken-2">
            <v-icon>mdi-printer</v-icon>
          </v-btn>
        </div>
        <v-divider />

        <!-- FILTRO CLIENTE  -->
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
        <v-divider />

        <!-- CUERPO CART -->
        <div class="cart-body grey lighten-5">
          <div class="empty-cart grey--text text-subtitle-1" v-show="!cart">
            <v-icon class="grey--text" x-large>mdi-basket-outline</v-icon>
            <p>Acá verás los productos que elijas para tu venta</p>
          </div>

          <div class="cart-items">
            <v-list dense class="py-0">
              <v-list-item
                style="border-bottom: 1px solid #ddd"
                v-for="n in 2"
                :key="n"
              >
                <v-list-item-content class="pt-2">
                  <v-list-item-title
                    class="d-flex align-center text-subtitle-1"
                  >
                    Cepita <v-spacer />
                    <v-btn
                      fab
                      tile
                      x-small
                      elevation="0"
                      class="grey--text text--darken-2 mx-2 rounded-lg"
                    >
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <span class="mx-2 font-weight-regular text-h6"> 1 </span>
                    <v-btn
                      fab
                      x-small
                      tile
                      elevation="0"
                      class="grey--text text--darken-2 mx-2 mr-6 rounded-lg"
                    >
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    $250,00
                  </v-list-item-title>
                  <v-list-item-subtitle class="button">
                    $250,00
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>

          <v-card class="cart-resume pa-5 pb-1 white">
            <v-btn
              dark
              color="blue accent-2"
              large
              class="text-capitalize text-h6 font-weight-regular"
              block
            >
              Vender (F1)
              <v-spacer />
              $500,00
            </v-btn>
            <div class="d-flex mt-2">
              <span class="font-weight-medium grey--text">2 productos</span>
              <v-spacer />
              <v-btn text small class="text-capitalize body-2" color="red">
                Limpiar
              </v-btn>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <FooterTabs />
    <NewProductSimple />
  </div>
</template>

<script>
import ProductItem from "@/components/newSale/ProductItem.vue";
import DrawerCategories from "@/components/newSale/DrawerCategories.vue";
import FooterTabs from "@/components/newSale/FooterTabs.vue";
import productService from "@/services/product";
import NewProductSimple from "@/components/products/newProductSimple.vue";

export default {
  name: "newSale",
  components: { ProductItem, DrawerCategories, FooterTabs, NewProductSimple },
  data() {
    return {
      search: "",
      cart: [0],
      products: [],

      toggleSearchType: 0,
    };
  },
  async mounted() {
    const data = await productService.getProducts();
    this.products = data;

    console.log("data: ", data);
  },
};
</script>
<style lang="scss" scoped>
.new-sale-container {
  margin-left: 55px;
  height: calc(100vh - 95px);
  background: #f4f5fb;
}

.cart-container {
  border-left: 1px solid #ccc;
  background: #fff;

  display: flex;
  flex-direction: column;
  height: calc(100vh - 96px);
}

.cart-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  position: relative;
}
.cart-items {
  flex-grow: 1;
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
