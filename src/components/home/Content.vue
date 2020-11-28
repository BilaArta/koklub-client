<template>
    <v-card 
        outlined
        class="pa-4"
        color="yellow"
    >
            <v-layout 
                row 
                align-content-center 
                horiz-scroll
            >
                <v-flex
                    v-for="(i, index) in category"
                    :key="index"
                    px-1
                    pb-2
                    class="flex-0"
                >
                    <v-card
                        color="yellow lighten-1 text-center"
                        height="20vh"
                    >
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-1">
                                {{i}}
                                </v-list-item-title>
                                <v-list-item-subtitle>subtitle</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-flex>
            </v-layout>
    </v-card>
</template>

<script>
export default {
    props: ['category'],
    data: () => ({
        test: ''
    })

}
</script>

<style>


</style>