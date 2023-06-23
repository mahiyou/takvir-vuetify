<template>
    <v-locale-provider rtl>
        <v-app>
            <Toolbar v-model:collapsToggle="collapsToggle"/>
            <CollapsMenu  :collapsToggle="collapsToggle"/>
            <v-row>
                <v-col md="3" class="py-0">
                    <Navigation v-model:currentNavItem="currentNavItem"/>
                </v-col>
                <v-col md="9" cols="12">
                    <ApiContent v-model:currentNavItem="currentNavItem"/>
                </v-col>
            </v-row>
            <Footer />
        
        
        </v-app>
    </v-locale-provider>
</template>
<script>
import Toolbar from "@/components/Toolbar.vue";
import Navigation from "@/components/Navigation.vue";
import ApiContent from "@/components/ApiContent.vue";
import Footer from "@/components/Footer.vue";
import CollapsMenu from "@/components/CollapsMenu.vue";

import { defineComponent } from "vue";

export default defineComponent({
    components:{
        Toolbar,
        Navigation,
        ApiContent,
        Footer,
        CollapsMenu,

    },
    data(){
        return {
            // navItem:"start",
            currentNavItem: "start",
            collapsToggle:false,      
        };
    },
    methods:{

    }
});
</script>
