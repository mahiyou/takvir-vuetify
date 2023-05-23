<template>
  <v-container class="main-menue-container">
    <div class="mb-6 text-grey-lighten-1 font-weight-medium">سوره ها</div>
    <v-row>
      
      <v-col md="4" cols="12">
        <v-btn
          block
          variant="text"
          dir="ltr"
          class="text-mygreen mm-font-size mm-justify-content mb-5"
          v-for="index in 38"
          :key="index"
          :class="'icon-surah' + index"
          :href="'/surah/'+ index"
        >
          <p class="text-grey-lighten-1 text-button ml-5">
            {{ persianNumber(index) }}
          </p></v-btn
        >
      </v-col>
      <v-col md="4" cols="12">
        <v-btn
          block
          variant="text"
          dir="ltr"
          class="text-mygreen mm-font-size mm-justify-content mb-5"
          v-for="index in 38"
          :key="index"
          :class="'icon-surah' + (index + 38)"
          :href="'/surah/'+ (index + 38)"
        >
          <p class="text-grey-lighten-1 text-button ml-5">
            {{ persianNumber(index + 38) }}
          </p></v-btn
        >
      </v-col>
      <v-col md="4" cols="12">
        <v-btn
          block
          variant="text"
          dir="ltr"
          class="text-mygreen mm-font-size mm-justify-content mb-5"
          v-for="index in 38"
          :key="index"
          :class="'icon-surah' + (index + 76)"
          :href="'/surah/'+ (index + 76)"
        >
          <p class="text-grey-lighten-1 text-button ml-5">
            {{ persianNumber(index + 76) }}
          </p></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.main-menue-container {
  min-width: 95%;
  max-width: 95%
}
.mm-font-size {
  font-size: 1.7rem;
}
.mm-justify-content {
  justify-content: right;
}
</style>

<script>
export default {
  methods: {
    persianNumber(n) {
      n = n.toString();
      const nlength = n.length;
      const farsiNum = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < nlength; j++) {
          const istring = i.toString();
          n = n.replace(istring, farsiNum[i]);
        }
      }

      return n;
    },
  },
};
</script>