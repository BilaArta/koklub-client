<template>
    <v-toolbar
        
        justify="center"
    >
    <router-link to="/">
      <v-toolbar-title class="yellow--text subtitle-1 text-uppercase">Koklub</v-toolbar-title>
    </router-link>
      <v-spacer></v-spacer>
      <div>
        <v-btn
            dense
            class="ma-1"
            text
        >
            F.A.Q
        </v-btn>

        <v-btn
            dense
            class="ma-1"
            text
            @click="route('/')"
        >
            Login
        </v-btn>
        <v-btn
            dense
            class="ma-1"
            text
            @click="route('sign-in')"
        >
            Sign In
        </v-btn>
      </div>
    
    </v-toolbar>
</template>

<script>
export default {
    data : () => ({

    }),
    methods: {
        route(url) {
            this.$router.push(url);
        }
    }
}
</script>

<style>

</style>