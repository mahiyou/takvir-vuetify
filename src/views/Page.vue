<template>
    <v-locale-provider rtl>
        <v-app>
            <SurahToolbar
                v-if="ayehs"
                :surahNum="$route.params.pageNum"
                @side-bar="openNav"
            >
                <v-menu open-on-click width="130px">
                    <template v-slot:activator="{ props }">
                        <v-btn class="toolbar-menu toolbar-btn-color" v-bind="props">
                            برو به صفحه <v-icon>mdi-menu-down</v-icon></v-btn
                        >
                    </template>
                    <v-list>
                        <v-list-item v-for="index in 604" :key="index">
                            <a
                                :href="'/page/' + index"
                                class="text-decoration-none text-black toolbar-items"
                            >
                                {{ persianNumber(index) }}</a
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>
            </SurahToolbar>
            <SurahMatn
                v-if="ayehs"
                :ayehFontSize="ayehFontSize"
                :meaningFontSize="meaningFontSize"
                :linked="linked"
                :ayehIndexScrool="ayehIndexScrool"
                @play="playAyeh"
                v-model:ayehs="ayehs"
                v-model="player.ayeh"
            />
            <v-row>
                <v-col cols="2" offset="1">
                    <v-btn
                        v-if="$route.params.pageNum > 1"
                        variant="text"
                        class="next-btn-style"
                        :href="'/page/' + ($route.params.pageNum - 1)"
                    ><v-icon icon="mdi-arrow-right-thin" class="ml-1 mt-1"></v-icon>صفحه
                        ی قبل</v-btn
                    >
                </v-col>
                <v-col cols="2" offset="6">
                    <v-btn
                        v-if="$route.params.pageNum < 604"
                        variant="text"
                        class="next-btn-style"
                        :href="'/page/' + (parseInt($route.params.pageNum) + 1)"
                    >صفحه ی بعد<v-icon
                        icon="mdi-arrow-left-thin"
                        class="mr-1 mt-1"
                    ></v-icon
                    ></v-btn>
                </v-col>
            </v-row>

            <Footer />
            <Player
                ref="player"
                :url="srcAudio"
                :title="playerTitle"
                @ended="playerEnded"
                @prevoius="playPrevoiusAyeh"
                @next="playNextAyeh"
                @repeat="repeat"
                @linked="islinked"
                v-model="player.playing"
            />
            <SurahSideBar
                v-if="qaries"
                v-model:modelValueAye="ayehFontSize"
                v-model:modelValueMeaning="meaningFontSize"
                v-model:qariId="qariId"
                v-model:translationId="translationId"
                :qaries="qaries"
            />
        </v-app>
    </v-locale-provider>
</template>
<script>
import SurahMatn from "@/components/SurahMatn.vue";
import Footer from "@/components/Footer.vue";
import SurahToolbar from "@/components/SurahToolbar.vue";
import SurahSideBar from "@/components/SurahSideBar.vue";
import Player from "@/components/Player.vue";

import { defineComponent } from "vue";

export default defineComponent({
    name: "Surah",
    components: {
        SurahToolbar,
        SurahMatn,
        SurahSideBar,
        Footer,
        Player,
    },
    data() {
        return {
            ayehFontSize: 40,
            meaningFontSize: 20,
            meaningGhariValue: false,
            ayehIndexScrool: 0,
            repeatState: "repeatOff",
            linked: false,
            player: {
                ayeh: 1,
                lang: "ar",
                playing: false,
            },
            ayehs: undefined,
            qaries: undefined,
            qariId: 1,
            translationId: 0,
        };
    },
    methods: {
        openNav() {
            document.getElementById("mySidebar").style.width = "320px";
        },
        playAyeh(index) {
            this.player.ayeh = index;
            this.player.lang = "ar";
            this.player.playing = true;
        },
        playerEnded() {
            if (this.player.lang == "ar" && this.translationId != 0) {
                this.playMeaning();
            } else {
                this.playNext();
            }
        },
        playPrevoiusAyeh() {
            if (this.player.ayeh > this.ayehs[0].ayah.number) {
                this.playAyeh(this.player.ayeh - 1);
            }
        },
        playNextAyeh() {
            if (this.player.ayeh < this.ayehs[this.ayehs.length - 1].ayah.number) {
                this.playAyeh(this.player.ayeh + 1);
            }
        },
        playMeaning() {
            this.player.lang = "fa";
            this.player.playing = true;
        },
        playNext() {
            if (this.repeatState == "repeatOff") {
                if (this.player.ayeh < this.ayehs[this.ayehs.length - 1].ayah.number) {
                    this.playAyeh(this.player.ayeh + 1);
                }
            } else if (this.repeatState == "repeatTrack") {
                setTimeout(() => this.playAyeh(this.player.ayeh), 0);
            } else if (this.repeatState == "repeatList") {
                if (this.player.ayeh == this.ayehs[this.ayehs.length - 1].ayah.number) {
                    this.playAyeh(this.ayehs[0].ayah.number);
                } else if (this.player.ayeh < this.ayehs[this.ayehs.length - 1].ayah.number) {
                    this.playAyeh(this.player.ayeh + 1);
                }
            }
        },
        repeat(repeatState) {
            this.repeatState = repeatState;
        },
        islinked(linked) {
            this.linked = linked;
        },
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
    computed: {
        srcAudio() {
            let URL = "";
            if (this.ayehs) {
                if (this.player.lang == "ar") {
                    for (const ayeh of this.ayehs) {
                        if (ayeh.ayah.number == this.player.ayeh) {
                            URL = ayeh.ayah.audios[this.qariId - 1].url;
                        }
                    }
                } else {
                    for (const ayeh of this.ayehs) {
                        if (ayeh.ayah.number == this.player.ayeh) {
                            URL = ayeh.translates[0].audios[this.translationId - 1].url;
                        }
                    }
                }
            } else {
                URL =
                    "http://s3.eu-1.jeyserver.com/takvir//packages/takvir/storage/public/AbdulSamad/1/1.mp3";
            }
            URL = URL.replace(/https/g, "http");
            console.log(URL);
            return URL;
        },
        playerTitle() {
            return `آیه ${this.player.ayeh}`;
        },
    },
    mounted() {
        let response = fetch(
            `https://takv.ir/page/${this.$route.params.pageNum}?api=1`
        );
        response
            .then((response) => response.json())
            .then((page) => {
                Object.keys(page.items).forEach((key) => {
                    if (this.ayehs) {
                        this.ayehs = this.ayehs.concat(page.items[`${key}`].ayahs);
                    } else {
                        this.ayehs = page.items[`${key}`].ayahs;
                    }
                });
            });

        let response2 = fetch("https://takv.ir/qaries?api=1");
        response2
            .then((response2) => response2.json())
            .then((qaries) => {
                this.qaries = qaries;
            });
    },
});
</script>
<style lang="scss">
.next-btn-style {
  border: 1px solid #ccc;
  letter-spacing: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  float: left;
}
.toolbar-menu {
  font-size: 14px;
  letter-spacing: 0;
  font-family: "yekan";
  padding: 0px;
}
.toolbar-btn-color {
  color: #2ca4ab;
  &:hover {
    color: #337ab7;
  }
}
.toolbar-items {
  font-family: yekan;
  display: block;
  font-size: 14px;
  padding-left: 12px;
  padding-right: 5px;
  &:hover {
    background: #eeeeee;
  }
}
</style>