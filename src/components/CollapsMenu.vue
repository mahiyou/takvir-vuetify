<template>
  <v-container class="collaps-menu-con colaps-display-con">
    <v-expand-transition v-show="collapsToggle">
      <div class="collaps-menu">
        <a class="btn-font" href="/">
          <v-icon class="ml-1">mdi-home</v-icon>
          صفحه ی اصلی
        </a>
        <a class="btn-font" href="/api">
          <v-icon class="ml-1">mdi-help-circle</v-icon>
          رابط های برنامه نویسی
        </a>
        <a class="btn-font" href="/contact-us">
          <v-icon class="ml-1">mdi-email</v-icon>
          تماس با ما
        </a>
        <v-spacer></v-spacer>
        <a class="btn-font">
          <v-icon class="ml-1 h1">mdi-android</v-icon>
          دریافت نسخه ی اندروید
        </a>
      </div>
    </v-expand-transition>
  </v-container>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    collapsToggle: {
      type: Boolean,
      require: true,
    },
  },
});
</script>
<style lang="scss">
.collaps-menu-con {
  padding: 0px;
  margin: 0px;
  .collaps-menu {
    padding: 0px;
    float: right;
  }
  .btn-font {
    text-decoration: none;
    display: block;
    color: #777;
    font-family: yekan;
    letter-spacing: 0px;
    font-size: 13px;
    
    padding: 12px;


    &:hover {
      color: black;
    }
  }
 
}
.colaps-display-con {
    display: block;
  
  @media (min-width: 959px) {

      display: none;
  }
}
</style>
