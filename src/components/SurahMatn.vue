<template>
  <v-container class="smatn-container">
    <div
      v-for="index in ayehs.length"
      :key="index"
      :id="`ayeh-${this.ayehs[index - 1].ayah.number}`"
    >
      <div v-if="this.ayehs[index - 1].ayah.number == 1 &&  this.ayehs[index - 1].ayah.surah != 9 && this.ayehs[index - 1].ayah.surah != 1" class="bismillah">﷽</div>
      <v-row>
        <v-col md="1" cols="12">
          <v-row>
            <v-col md="12" cols="4"
              ><a href="#" class="a-style"
                ><div class="num-style">
                  {{ persianNumber(this.ayehs[index - 1].ayah.number) }}
                </div></a
              ></v-col
            >
            <v-col md="12" cols="4">
              <a class="a-style play-link-style" @click="$emit('play', this.ayehs[index - 1].ayah.number)">
                <v-icon class="play-link-margin">mdi-play</v-icon>
                پخش
              </a>
            </v-col>
            <v-col md="12" cols="4">
              <a href="#" class="a-style social-m-link-style ml-2"
                ><v-icon icon="mdi-facebook"></v-icon
              ></a>
              <a href="#" class="a-style social-m-link-style"
                ><v-icon icon="mdi-twitter"></v-icon
              ></a>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="11" cols="12">
          <div>
            <div
              class="ar-style"
              :style="{ fontSize: this.ayehFontSize + 'px' }"
            >
              {{ this.ayehs[index - 1].ayah.ayah }}
            </div>
          </div>
          <div
            class="fa-style"
            :style="{ fontSize: this.meaningFontSize + 'px' }"
          >
            {{ this.ayehs[index - 1].translates[0].translate }}
          </div>
        </v-col>
        <v-divider class="my-4"></v-divider>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    ayehs: {
      type: Object,
      required: true,
    },
    ayehFontSize: {
      type: Number,
      required: true,
    },
    meaningFontSize: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
    linked: {
      type: Boolean,
      required: true,
    },
    ayehIndexScrool: {
      type: Number,
      required: true,
    },
  },
  emits: ["play"],
  data() {
    return {};
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
  watch: {
    modelValue(newValue) {
      if (this.linked) {
        document.getElementById(`ayeh-${newValue}`).scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    },
    ayehIndexScrool(newValue) {
      if (this.ayehIndexScrool != 0) {
        document.getElementById(`ayeh-${newValue}`).scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    },
  },
});
</script>
<style lang="scss">
.smatn-container {
  min-width: 90%;
  max-width: 90%;
  margin-top: 60px;
  .num-style {
    font-family: nazanin;
    color: #2ca4ab;
    font-size: 28px;
    &:hover {
      color: #337ab7;
    }
  }
  .a-style {
    text-decoration: none;
  }
  .play-link-style {
    font-size: 14px;
    color: #d1d0d0;
    &:hover {
      color: black;
    }
  }
  .play-link-margin {
    margin-left: -8px;
  }
  .social-m-link-style {
    font-size: 10px;
    color: #2ca4ab;
    &:hover {
      color: #337ab7;
    }
    @media (max-width: 960px) {
      font-size: 18px;
    }
  }
  .bismillah {
    font-family: bismillah;
    font-size: 60px;
    display: block;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 15px;
  }
  .ar-style {
    line-height: 2;
    font-family: quran-taha;
  }
  .fa-style {
    font-size: 20px;
    font-family: quran-taha;
  }

}
</style>
