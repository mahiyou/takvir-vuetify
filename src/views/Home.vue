<template>
    <Header />
    <QuickLinkPart />
    <MainMenu />
</template>
  
  
<script lang="ts">
import Header from "@/components/Header.vue";
import MainMenu from "@/components/MainMenu.vue";
import QuickLinkPart from "@/components/QuickLinkPart.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Header,
        MainMenu,
        QuickLinkPart,
    },
});
</script>
  