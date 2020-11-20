<template>
  <v-app>
    <Header></Header>
    <Beranda></Beranda>
    <v-list disabled>
      <v-subheader>dataset</v-subheader>
      <v-list-item-group

        color="primary"
      >
        <v-list-item
          v-for="(data, index) in datas"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title v-text="data.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/header.vue'
import Beranda from '@/components/beranda/beranda.vue'
import postUsers from '../../services/api'

export default {
  name: 'Home',
  components: {
    Beranda,
    Header
  },
  data: () => ({
    datas: [],
    error : ''
  }),
  async created() {
    try {
      this.datas = await postUsers.getUsers();
    } catch (error) {
      this.error = error
    }
  }
}
</script>
