<template>
  <v-navigation-drawer expand-on-hover permanent absolute class="white">
    <v-list>
      <v-list-item
        link
        class="px-3"
        v-for="category in categories"
        :key="category.avatar"
      >
        <v-list-item-avatar class="my-0">
          <v-avatar :color="category.color" size="33" class="white--text">
            {{ category.avatar }}
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title> {{ category.title }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DrawerCategories",
  data() {
    return {
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
