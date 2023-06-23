<template>
    <TopNavigationBar />
    <v-main>
        <router-view />
    </v-main>
    <Footer />
</template>


<script lang="ts">
import TopNavigationBar from "@/components/TopNavigationBar.vue";
import Footer from "@/components/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        TopNavigationBar,
        Footer,
    },
});
</script>
  