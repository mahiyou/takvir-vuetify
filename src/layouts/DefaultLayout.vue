<template>
    <Toolbar v-model:collapsToggle="collapsToggle" />
    <CollapsMenu :collapsToggle="collapsToggle" />
    <v-main>
        <router-view />
    </v-main>
    <Footer />
</template>


<script lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import Footer from "@/components/Footer.vue";
import CollapsMenu from "@/components/CollapsMenu.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Toolbar,
        Footer,
        CollapsMenu,
    },
    data() {
        return {
            collapsToggle: false,
        };
    },
});
</script>
  