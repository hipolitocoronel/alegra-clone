<template>
  <v-col class="product-container py-8 mx-auto mx-lg-0" cols="12" md="6" lg="4">
    <v-icon style="font-size: 60px" class="grey--text text--lighten-1"
      >mdi-tag-text-outline</v-icon
    >
    <span class="grey lighten-5 blue--text caption px-2 py-1 rounded-lg">
      Stock 10
    </span>
    <span class="font-weight-light">9 de oro</span>
    <span class="font-weight-bold">$220,00</span>

    <v-btn icon tile class="blue btn-star rounded-b-lg" absolute
      ><v-icon class="white--text">mdi-star-outline</v-icon>
    </v-btn>
    <v-btn
      absolute
      outlined
      fab
      x-small
      color="blue"
      class="cant-product body-2 font-weight-bold"
      >1</v-btn
    >
  </v-col>
</template>

<script>
export default {
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

  border: 2px solid #448aff;
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
