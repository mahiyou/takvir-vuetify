<template>
  <div id="mySidebar" class="sidebar">
    <v-container class="side-bar-container">
      <div>
        <span class="title">تنظیمات</span>
        <a @click="closeNav()" class="closebtn">×</a>
      </div>
      <v-divider class="mt-10 mb-3"></v-divider>

      <a href="" class="btns-style"
        ><v-icon class="ml-3">mdi-information</v-icon>مشخصات سوره
      </a>
      <a href="#"  class="btns-style" @click="toggleTheme" 
        ><v-icon class="ml-3">mdi-lightbulb</v-icon>حالت شب</a
      >

      <v-expansion-panels>
        <v-expansion-panel :elevation="0" class="expansion-panel-style m-0">
          <v-expansion-panel-title
            expand-icon=""
            collapse-icon=""
            class="pr-2 expansion-panel-title"
          >
            <v-icon class="ml-3">mdi-microphone</v-icon>
            قاری
          </v-expansion-panel-title>
          <v-expansion-panel-text class="radio-style">
            <form>
              <div v-for="n in qaries.items.qaries.length" :key="n" class="mb-3">
                <input type="radio" name="fav_language" @click="updateQari(qaries.items.qaries[n-1].id)"/><label
                  class="mr-3 small-font"
                  >{{ qaries.items.qaries[n-1].name_fa }}</label
                ><br />
              </div>
            </form>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-row>
        <v-col cols="10">
          <v-expansion-panels :disabled="!disabled">
            <v-expansion-panel class="expansion-panel-style m-0" :elevation="0">
              <v-expansion-panel-title
                expand-icon=""
                collapse-icon=""
                class="pr-2 expansion-panel-title"
              >
                <v-icon class="ml-3">mdi-volume-high</v-icon>
                صوت ترجمه
              </v-expansion-panel-title>
              <v-expansion-panel-text class="radio-style">
                <form>
                  <div v-for="n in qaries.items.translations.length" :key="n" class="mb-3">
                    <input type="radio" name="fav_language" :disabled = "!disabled" 
                    v-if ="disabled"  @click="updateTranslation(qaries.items.translations[n-1].id)"
                    /><label
                      class="mr-3 small-font"
                      >{{ qaries.items.translations[n-1].name_fa }}</label
                    ><br />
                  </div>
                </form>
              </v-expansion-panel-text>
            </v-expansion-panel>
            

          </v-expansion-panels>
        </v-col>
        <v-col cols="2">
          <div>
            <input class="mt-6" type="checkbox" v-model="disabled" @click="updateTranslation(0)"/>
          </div>
        </v-col>
      </v-row>

      <div>
        <p class="font-btn-style mt-6">اندازه ی فونت</p>
        <v-row>
          <v-col cols="4" class="pt-6 pb-1"
            ><v-btn variant="text" class="font-btn-options2" @click="onPlusAyeh">+</v-btn></v-col
          >
          <v-col cols="4" class="font-btn-options pt-6 pb-1">آیه</v-col>
          <v-col cols="4" class="pt-6 pb-1"
            ><v-btn variant="text" class="font-btn-options2" @click="onMinusAyeh">-</v-btn></v-col
          >
        </v-row>
        <v-row>
          <v-col cols="4" class="py-0"
            ><v-btn variant="text" class="font-btn-options2" @click="onPlusMeaning">+</v-btn></v-col
          >
          <v-col cols="4" class="font-btn-options py-0">ترجمه</v-col>
          <v-col cols="4" class="py-0"
            ><v-btn variant="text" class="font-btn-options2" @click="onMinusMeaning">-</v-btn></v-col
          >
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>

import { useTheme } from 'vuetify'
export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme(){
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
       }
      
    }
  },

  props: {
    modelValueAye: {
      type: Number,
      required: true
    },
    modelValueMeaning: {
      type: Number,
      required: true
    },
    qaries: {
      type: Object,
      required: true
    },
    qariId:{
      type: Number,
      required: true
    },
    translationId:{
      type:Number,
      required: true
    }

  },
  data() {
    return {
      disabled: false,
    };
  },
  emits: ['update:modelValueAye','modelValueMeaning','qariId','translationId'],
  methods: {
    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
    },
    onPlusAyeh() {
      this.$emit("update:modelValueAye", this.modelValueAye + 1);
    },
    onMinusAyeh() {
      this.$emit("update:modelValueAye", this.modelValueAye - 1);
    },
    onPlusMeaning() {
      this.$emit("update:modelValueMeaning", this.modelValueMeaning + 1);
    },
    onMinusMeaning() {
      this.$emit("update:modelValueMeaning", this.modelValueMeaning - 1);
    },
    updateQari(Id){
      this.$emit("update:qariId" , Id)
    },
    updateTranslation(Id){
      this.$emit("update:translationId" , Id)
    }
  },
};
</script>

<style lang="scss">
.sidebar {
  background:white;
  height: 100%;
  width: 0px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 2s;
  color: #939598;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  .side-bar-container {
    padding: 20px;
    .title {
      float: right;
      color: #d1d0d0;
      font-size: 16px;
      font-weight: 500;
    }
    .closebtn {
      float: left;
      color: #d1d0d0;
      font-size: 23px;
      text-decoration: none;
      font-weight: 900;
      &:hover {
        color: black;
      }
    }
    .btns-style {
      font-size: 25;
      font-weight: 700;
      color: #777;
      text-decoration: none;
      display: block;
      padding: 10px;

      &:hover {
        color: black;
        background: #bdbdbd;
      }
    }
    .font-btn-style {
      font-weight: 700;
      color: #777;
    }
    .font-btn-options {
      text-align: center;
      font-size: 20px;
      color: #939598;
    }
    .btn-font{
      font-family: yekam;
    }
    .font-btn-options2 {
      color: #2ca4ab;
      font-size: 30px;
      font-weight: 900;
    }
    .expansion-panel-style {
      background: none;
      font-weight: 600;
      color: #777;
      font-family: yekan;
    }
    .expansion-panel-title {
      font-size: 18px;
    }
    .small-font {
      font-size: 12px;
    }

    .radio-style {
      color: #939598;
      font-size: 11px;
    }
    .boxshadow-none {
      box-shadow: none;
    }
  }
}
</style>