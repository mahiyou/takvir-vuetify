<template>
    <v-locale-provider rtl>
        <v-app>
            <SurahToolbar
                v-if="ayehs"
                :surahNum="$route.params.surahNum"
                :surahAyehs="ayehs.length"
                @side-bar="openNav"
            >
                <v-menu open-on-click>
                    <template v-slot:activator="{ props }">
                        <v-btn class="toolbar-menu toolbar-btn-color" v-bind="props">
                            برو به آیه <v-icon>mdi-menu-down</v-icon></v-btn
                        >
                    </template>
                    <v-list>
                        <v-list-item v-for="index in ayehs.length" :key="index">
                            <v-list-item-title
                            ><v-btn variant="text" float="right" @click="scrollTo(index)">{{
                                persianNumber(index)
                            }}</v-btn></v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-menu open-on-click>
                    <template v-slot:activator="{ props }">
                        <v-btn class="toolbar-menu toolbar-btn-color" v-bind="props"
                        ><span :class="'icon-surah' + $route.params.surahNum"></span
                        ><v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="index in 114" :key="index">
                            <a
                                :href="'/surah/' + index"
                                class="text-decoration-none text-black"
                            >
                                <v-row>
                                    <v-col class="d-inline-flex text-grey-lighten-1" cols="3">{{
                                        persianNumber(index)
                                    }}</v-col>
                                    <v-col class="d-inline-flex" cols="9">
                                        <span
                                            :class="'icon-surah' + index"
                                        ></span
                                        ></v-col>
                                </v-row>
                            </a>
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
                    <v-btn v-if="$route.params.surahNum > 1" variant="text" class="next-btn-style" :href="'/surah/'+($route.params.surahNum-1)"
                    ><v-icon icon="mdi-arrow-right-thin" class="ml-1 mt-1"></v-icon>سوره
                        ی قبل</v-btn
                    >
                </v-col>
                <v-col cols="2" offset="6">
                    <v-btn v-if="$route.params.surahNum < 114" variant="text" class="next-btn-style" :href="'/surah/'+(parseInt($route.params.surahNum)+1)"
                    >سوره ی بعد<v-icon
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
import Player from "@/components/Player.vue";
import SurahSideBar from "@/components/SurahSideBar.vue";
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
            if (this.player.ayeh > 1) {
                this.playAyeh(this.player.ayeh - 1);
            }
        },
        playNextAyeh() {
            if (this.player.ayeh < this.ayehs.length) {
                this.playAyeh(this.player.ayeh + 1);
            }
        },
        playMeaning() {
            this.player.lang = "fa";
            this.player.playing = true;
        },
        playNext() {
            if (this.repeatState == "repeatOff") {
                if (this.player.ayeh < this.ayehs.length) {
                    this.playAyeh(this.player.ayeh + 1);
                }
            } else if (this.repeatState == "repeatTrack") {
                setTimeout(() => this.playAyeh(this.player.ayeh), 0);
            } else if (this.repeatState == "repeatList") {
                if (this.player.ayeh == this.ayehs.length) {
                    this.playAyeh(1);
                } else if (this.player.ayeh < this.ayehs.length) {
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
        scrollTo(ayehIndexScrool) {
            this.ayehIndexScrool = ayehIndexScrool;
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
            let URL = this.ayehs
                ? this.player.lang == "ar"
                    ? this.ayehs[this.player.ayeh - 1].ayah.audios[this.qariId - 1].url
                    : this.ayehs[this.player.ayeh - 1].translates[0].audios[
                        this.translationId - 1
                    ].url
                : "http://s3.eu-1.jeyserver.com/takvir//packages/takvir/storage/public/AbdulSamad/1/1.mp3";

            URL = URL.replace(/https/g, "http");
            return URL;
        },
        playerTitle() {
            return `آیه ${this.player.ayeh}`;
        },
    },
    mounted() {
        let response = fetch(
            `https://takv.ir/surah/${this.$route.params.surahNum}?api=1`
        );
        response
            .then((response) => response.json())
            .then((surah) => {
                this.ayehs = surah.items;
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
  }
  .toolbar-btn-color {
    color: #2ca4ab;
    &:hover {
      color: #337ab7;
    }
  }
</style>