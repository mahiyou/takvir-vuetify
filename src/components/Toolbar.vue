<template>
    <v-container class="mx-0 toolbar-container">
        <v-toolbar color="rgb(248, 247, 247)" height="19">
          <v-toolbar-title class="title-font">تکویر</v-toolbar-title>
            <v-btn variant="plain" class="btn-font set-display" href="/">
              <v-icon class="ml-1">mdi-home</v-icon>
              صفحه ی اصلی
            </v-btn>
            <v-btn variant="plain" class="btn-font set-display" href="/api">
              <v-icon class="ml-1">mdi-help-circle</v-icon>
              رابط های برنامه نویسی 
            </v-btn>
            <v-btn variant="plain" class="btn-font set-display" href="/contact-us">
              <v-icon class="ml-1">mdi-email</v-icon>
              تماس با ما  
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn variant="plain" class="btn-font set-display">
              <v-icon class="ml-1 h1">mdi-android</v-icon>
              دریافت نسخه ی اندروید
            </v-btn>
          <v-app-bar-nav-icon class="colaps-display collaps-icon" @click="updateCollaps" ></v-app-bar-nav-icon>
        </v-toolbar>
        
    </v-container> 
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:{
    collapsToggle:{
      type: Boolean,
      require: true,
    },
  },
  methods:{
    updateCollaps(){
      this.$emit("update:collapsToggle" , !this.collapsToggle)
    }
  } 
})
</script>

<style lang="scss">

  .toolbar-container{
    padding: 5px;  
    min-width: 100%;
    max-width: 100%; 
    border-bottom: 1px solid rgb(234, 234, 234);
    background: rgb(248, 247, 247);
    .title-font{
      font-family: yekan;
      letter-spacing: 0px;
      font-size: 1.1rem;
      font-weight: 600;
      color: #777;
      flex: 0.1 1;
      padding: 0px;

    }
    .v-toolbar-title__placeholder{
      overflow: inherit;
      text-overflow: inherit;
    }
    .btn-font{
      font-family: yekan;
      letter-spacing: 0px;
      font-size: 0.8rem;
      color:#434242;
      padding: 8px;

      &:hover{
      color: black;
    }

    }
    .collaps-icon{
      color: #777;
      font-size: 20px;
      border-color: #ddd;
      background-color: transparent;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 9px 10px 9px 10px;

    }
    .set-display{
      display: none;
    }
    .colaps-display{
      display: block;
    }
     @media (min-width: 959px){
      .set-display{
        display: block;
      }
      .colaps-display{
        display: none;
      }
    }
   
 
  }

 
</style>


