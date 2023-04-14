<template>
  <v-locale-provider rtl>
    <v-app>
      <Toolbar />
      <Header />
      <QuickLinkPart />
      <MainMenu />
      <Footer />
    </v-app>
  </v-locale-provider>
</template>


<script lang="ts" setup>
import Toolbar from "./Toolbar.vue";
import Header from "./Header.vue";
import MainMenu from "./MainMenu.vue";
import Footer from "./Footer.vue";
import QuickLinkPart from "./QuickLinkPart.vue";
</script>
