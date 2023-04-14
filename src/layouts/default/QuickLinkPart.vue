<template>
  <v-container class="quick-linck-container">
    <v-row>
      <v-col md="8" cols="12">
        <div class="mb-4 text-grey-lighten-1 font-weight-medium">
          لینک های سریع
        </div>
        <div class="text-align-center">
          <a
          v-for="n in surahNums"
          :key="n"
            href="#"
            variant="text"
            class="font-weight-medium quick-linck-font-size surah-link"
            :class="'icon-surah' + n"
          ></a>
        </div>
      </v-col>
      <v-col md="4" cols="12">
        <div class="text-grey-darken-1 font-weight-bold text-body-2 mb-3">
          شماره صفحه
        </div>
        <select class="ql-select ql-select-style form-control">
          <option :value="index" data-href="#" v-for="index in 603" :key="index">
            {{ persianNumber(index) }}
          </option>
        </select>
      </v-col>
      <v-divider></v-divider>
    </v-row>
  </v-container>
</template>
<style lang="scss">
.quick-linck-container {
  min-width: 95%;
  max-width: 95%;
  .quick-linck-font-size {
    font-size: 1.7rem;
  }
  .surah-link{
    text-decoration: none;
    display: inline-block;
    line-height: 50px;
    margin-right: 20px;
    color: #2ca4ab;
    &:hover{
      color: #337ab7;
    }
  }
  .text-align-center{
    text-align: center;
  }
  .ql-select-style {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
  }
  .ql-select{
    appearance: auto;
    font-size: 0.9rem;
    &:focus{
      border-color: #66afe9;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
    }
  }
}

</style>
<script lang="ts" setup>
const surahNums = [1, 45, 69, 100, 44, 5, 34];

function persianNumber(n) {
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
}
</script>