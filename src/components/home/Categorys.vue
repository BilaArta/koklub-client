<template>
    <v-row>
        <v-col
            cols="12"
            v-for="(item, property, index) in categorys" :key="index"
            class="pa-4 ml-2"
        >
            <p class="headline font-weight-bold">Category {{property}}</p>
            <Contents :category="item"></Contents>
        </v-col>
    </v-row>
</template>

<script>
import Contents from "./Content"
export default {
    props: ['categorys'],
    
    data: () => ({
        test: ''
    }),
    components: {
        Contents
    }

}
</script>

<style>

</style>