<template>
  <v-dialog v-model="dialog" max-width="550px">
    <v-card>
      <v-card-title>Formulario básico de productos</v-card-title>
      <v-divider></v-divider>
      <div class="pa-5">
        <p class="body-2 grey--text text--darken-1">
          Creá los artículos que vendes e incluí todos sus detalles.
        </p>
        <form>
          <p class="body-2 grey--text text--darken-1">Nombre *</p>
          <v-text-field outlined dense></v-text-field>
          <p class="body-2 grey--text text--darken-1">Nombre *</p>
          <v-text-field outlined dense></v-text-field>
          <p class="body-2 grey--text text--darken-1">Nombre *</p>
          <v-text-field outlined dense></v-text-field>
          <p class="body-2 grey--text text--darken-1">Nombre *</p>
          <v-text-field outlined dense></v-text-field>
        </form>
      </div>
      <v-divider></v-divider>
      <v-card-actions class="py-3">
        <v-btn width="50%" outlined style="visibility: hidden"></v-btn>
        <v-btn color="blue accent-2" dark width="50%" elevation="0">
          Crear producto
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "newProductSimple",
  data() {
    return {
      dialog: true,
    };
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>
