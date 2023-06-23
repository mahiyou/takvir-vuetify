<template>
    <v-locale-provider rtl>
        <v-app>
            <Toolbar v-model:collapsToggle="collapsToggle" />
            <CollapsMenu :collapsToggle="collapsToggle" />
            <Header />
            <QuickLinkPart />
            <MainMenu />
            <Footer />
        </v-app>
    </v-locale-provider>
</template>
  
  
<script>
import Toolbar from "@/components/Toolbar.vue";
import Header from "@/components/Header.vue";
import MainMenu from "@/components/MainMenu.vue";
import Footer from "@/components/Footer.vue";
import QuickLinkPart from "@/components/QuickLinkPart.vue";
import CollapsMenu from "@/components/CollapsMenu.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Toolbar,
        Header,
        MainMenu,
        Footer,
        QuickLinkPart,
        CollapsMenu,
    },
    data() {
        return {
            navItem: "start",
            currentNavItem: "start",
            collapsToggle: false,
        };
    },
});
</script>
  