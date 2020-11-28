<template>
    <v-row no-gutters>
        <v-col cols="4">
            <v-card
                tile
                class="pa-4 ml-4 mt-6"
                color="grey lighten-2"
                elevation="6"
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">
                    {{user.name}}
                    </div>
                    <v-list-item-title class="headline mb-1">
                    User Profile
                    </v-list-item-title>
                    <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{user.phoneNumber}}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{user.birthday}}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{user.password}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                ></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                <v-btn
                    outlined
                    rounded
                    text
                >
                    Show More
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="8">
            <Container></Container>
        </v-col>
    </v-row>
</template>

<script>

import Container from "@/components/home/Container";
import postUsers from "../../services/api.js"

export default {
    data: () => ({
        user: {name:''},
    }),
    components: {
        Container
    },
    methods: {
        async getUser(){
            try{
                const {id} = this.$route.params; 
                const data = await postUsers.getOneUser(id)
                // console.log(data);
                return data;
            }catch{
                this.user = "error get user"
            }
        }
    },
    created(){
        this.getUser()
            .then((result => this.user = result))
            .catch((err) => console.log(err))
    },
    mounted() {
        // console.log(this.user);
    }
}
</script>

<style>

</style>