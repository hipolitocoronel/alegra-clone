<template>
  <v-col
    class="product-container py-8 mx-auto mx-lg-0"
    cols="12"
    md="6"
    lg="4"
    elevation="10"
  >
    <v-icon style="font-size: 70px" class="grey--text text--lighten-1">
      mdi-tag-text-outline
    </v-icon>
    <span class="grey lighten-5 blue--text caption px-2 py-1 rounded-lg">
      Stock {{ product.amount }}
    </span>
    <span class="font-weight-light">{{ product.name }}</span>
    <span class="font-weight-bold">${{ product.price }}</span>

    <v-btn icon tile class="blue btn-star rounded-b-lg" absolute>
      <v-icon class="white--text">mdi-star-outline</v-icon>
    </v-btn>
    <v-btn
      absolute
      outlined
      fab
      x-small
      color="blue"
      class="cant-product body-2 font-weight-bold"
    >
      1
    </v-btn>
  </v-col>
</template>

<script>
export default {
  props: { product: Object },
  name: "ProductItem",
  data() {
    return {
      selected: null,
    };
  },
};
</script>

<style scoped>
.product-container {
  max-width: 220px;
  background: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;
  position: relative;

  box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.btn-star {
  top: 0px;
  right: 10px;
}

.cant-product {
  top: 0;
  right: 0;
  background: #fff;
  transform: translate(50%, -30%);
  border-width: 2px;
}
</style>
