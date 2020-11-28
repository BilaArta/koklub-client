<template>
    <v-container>
        <Categorys :categorys="categorys"></Categorys>
    </v-container>
</template>

<script>

import Categorys from "./Categorys";

export default {
    components: {
        Categorys
    },
    data : () => ({
        categorys: {
            Sport : [1,2,3,4,5,6], 
            Education: [1,2,3,4], 
            Bussiness: [1,2,3,4,5]}
    }),
}
</script>

<style>

</style>