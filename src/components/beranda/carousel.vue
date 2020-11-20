<template>
  <v-carousel
    cycle
    interval="3000"
    show-arrows-on-hover
    >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="`${publicPath}img/` + slide"
    >

    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    slides: ["Advocate-Art _ London - Marbella - New York.jpeg", "Ink and Paper Photo Contest.jpeg", "Timber Edge Floating Shelves.jpeg"],
    publicPath: process.env.BASE_URL,
    colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
    
  })
}
</script>

<style>

</style>