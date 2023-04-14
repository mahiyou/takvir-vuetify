<template>
  <v-container class="toolbar-container">
    <v-toolbar color="white" height="19">
      <v-btn variant="plain" class="font-weight-bold">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="plain" class="btn-font">
        <v-icon class="ml-1">mdi-android</v-icon>
        دریافت نسخه ی اندروید
      </v-btn>
    </v-toolbar>
  </v-container>
</template>
<style lang="scss">
  .toolbar-container{
    padding: 0px;
    min-width: 95%;
    max-width: 95%;
    .btn-font{
      font-family: yekan;
      letter-spacing: 0px;
      font-size: 0.9rem;
    }
  }
</style>


