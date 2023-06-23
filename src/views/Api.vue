<template>
    <v-row>
        <v-col md="3" class="py-0">
            <Navigation v-model:currentNavItem="currentNavItem"/>
        </v-col>
        <v-col md="9" cols="12">
            <ApiContent v-model:currentNavItem="currentNavItem"/>
        </v-col>
    </v-row>
</template>
<script lang="ts">
import Navigation from "@/components/Navigation.vue";
import ApiContent from "@/components/ApiContent.vue";

import { defineComponent } from "vue";

export default defineComponent({
    components:{
        Navigation,
        ApiContent,
    },
    data(){
        return {
            currentNavItem: "start",
        };
    },
});
</script>
