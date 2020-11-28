<template>
  <v-app>
    <v-main>
    <Header />
    <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "../header/header";
import Footer from "../footer/footer";
export default {
  name: 'Container',
  components: {
    Header,
    Footer
    
  }
}
</script>

<style>

</style>