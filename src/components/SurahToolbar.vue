<template dir="rtl">
    <v-container class="SurahToolbar-container">
        <v-toolbar class="surah-toolbar bg-white" density="compact">
            <v-btn variant="text" href="/">
                <v-icon class="toolbar-btn-color">mdi-home</v-icon>
            </v-btn>
            <slot/>

            <v-spacer></v-spacer>

            <div class="form-group search-input justify-center s-d-none">
                <div class="input-group">
                    <v-row>
                        <v-col cols="10">
                            <input
                                type="text"
                                value=""
                                name="word"
                                class="ql-input-style form-control ui-autocomplete-input"
                            />
                        </v-col>
                        <v-col cols="2">
                            <v-btn
                                variant="text"
                                type="submit"
                                class="bg-mygreen ql-btn-confirm"
                            >
                                <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </div>

            <v-btn variant="text" @click="$emit('side-bar')" class="font-weight-bold">
                <v-icon class="toolbar-btn-color">mdi-cogs</v-icon>
            </v-btn>
        </v-toolbar>
    </v-container>
</template>
<style lang="scss">
.SurahToolbar-container {
  padding: 0;
  margin: 0;
  max-width: 100%;
  min-width: 100%;
  .surah-toolbar {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    padding-right: 1%;
    padding-left: 1%;
    position: fixed;
  }
  .toolbar-menu {
    font-size: 14px;
    letter-spacing: 0;
    font-family: "yekan";
  }
  .toolbar-menu-items {
    font-family: yekan;
   
  } 
  .menu-num{
      color:gray;
      font-size: 10px;
    }
  .toolbar-btn-color {
    color: #2ca4ab;
    &:hover {
      color: #337ab7;
    }
  }

  .search-input {
    width: 200px;
    background-color: white;
    min-height: 30px;
    border: 1px solid #ccc;

    input:focus {
      outline: none;
    }

    @media (max-width: 750px) {
      display: none;
    }
  }

  .ql-select-style {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
  }
  .ql-select {
    appearance: auto;
    font-size: 0.9rem;
    &:focus {
      border-color: #66afe9;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
    }
  }

  .ql-input-style {
    width: 100%;
    height: 30px;
    font-size: 0.95rem;
  }
  .ql-btn-confirm {
    border-radius: 0px;
    min-height: 30px;
    min-width: 40px;
    float: left;
  }
}
</style>

<script lang="ts" >
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        surahNum:undefined,
    },
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
});
</script>