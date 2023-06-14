<template>
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
      >
        <v-hover v-slot="{ hover }">
          <div>
            <i
              class="fi fi-sr-shopping-bag mr-3 text--accent-2"
              :class="tab === n - 1 && ' blue--text'"
            />

            {{ n === 1 ? "Venta principal" : `Venta ${n - 1}` }}

            <v-btn
              icon
              min-width="30px"
              class="ml-3"
              small
              :style="{ visibility: hover && n > 1 ? 'visible' : 'hidden' }"
              @click="tabs--"
            >
              <v-icon class="ma-0">mdi-delete</v-icon>
            </v-btn>
          </div>
        </v-hover>
      </v-tab>
      <v-btn
        icon
        class="elevation-0 white"
        min-width="55px"
        @click="tabs++"
        style="border: 1px solid #ccc !important"
      >
        <v-icon class="ma-0">mdi-plus</v-icon>
      </v-btn>
    </v-tabs>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "FooterTabs",
  data() {
    return {
      tabs: 1,
      tab: 0,
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
