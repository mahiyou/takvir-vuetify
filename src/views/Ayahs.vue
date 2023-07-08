<template>
    <AyahToolbar
        :qaries="qaries"
        v-model:qari="player.qari"
        v-model:translator="player.translator"
        v-model:translation="player.translation"
        v-model:ayah-size="ayahSize"
        v-model:translate-size="translateSize"
    >
        <template v-if="ayahs && surah">
            <v-menu open-on-click>
                <template v-slot:activator="{ props }">
                    <v-btn class="toolbar-menu toolbar-btn-color" append-icon="mdi-menu-down" v-bind="props">برو به آیه</v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="index in ayahs.length" :key="index">
                        <v-list-item-title>
                            <v-btn variant="text" float="right" @click="scrollToAyah(index)">{{ persianNumber(index) }}</v-btn>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-menu open-on-click>
                <template v-slot:activator="{ props }">
                    <v-btn class="toolbar-menu toolbar-btn-color" append-icon="mdi-menu-down" v-bind="props">
                        <span :class="'icon-surah' + surah"></span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="index in 114" :key="index">
                        <v-btn variant="text" block :to="{ name: 'surah', params: { surah: index } }">
                            <span :class="'icon-surah' + index"></span>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
        <template v-else-if="ayahs">
            <v-menu open-on-click width="130px">
                <template v-slot:activator="{ props }">
                    <v-btn class="toolbar-menu toolbar-btn-color" append-icon="mdi-menu-down" v-bind="props">برو به صفحه</v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="index in 604" :key="index" :to="{ name: 'page', params: { page: index } }" :title="persianNumber(index)" />
                </v-list>
            </v-menu>
        </template>
    </AyahToolbar>
    <v-main>
        <v-container class="mb-8">
            <AyahsList
                :ayahs="ayahs"
                :ayahSize="ayahSize"
                :translateSize="translateSize"
                @play="playAyah"
            />
            <v-row v-if="surah !== undefined">
                <v-col>
                    <v-btn v-if="surah > 1" variant="outlined" prepend-icon="mdi-arrow-right-thin" :to="{ name: 'surah', params: { surah: surah - 1 } }">سوره ی قبل</v-btn>
                </v-col>
                <v-col class="text-left">
                    <v-btn v-if="surah < 114" variant="outlined" append-icon="mdi-arrow-left-thin" :to="{ name: 'surah', params: { surah: surah + 1 } }">سوره ی بعد</v-btn>
                </v-col>
            </v-row>
            <v-row v-if="page !== undefined">
                <v-col>
                    <v-btn v-if="page > 1" variant="outlined" prepend-icon="mdi-arrow-right-thin" :to="{ name: 'page', params: { page: page - 1 } }">صفحه ی قبل</v-btn>
                </v-col>
                <v-col class="text-left">
                    <v-btn v-if="page < 604" variant="outlined" append-icon="mdi-arrow-left-thin" :to="{ name: 'page', params: { page: page + 1 } }">صفحه ی بعد</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
    <AyahsPlayer v-if="ayahs" ref="ayahsPlayer" :ayahs="ayahs" :qari="player.qari" :translation="player.translation" :translator="player.translator" />
    <Footer />
    
</template>
<script lang="ts">
import AyahsList from "@/components/AyahsList.vue";
import Footer from "@/components/Footer.vue";
import AyahToolbar from "@/components/AyahToolbar.vue";
import AyahsPlayer from "@/components/AyahsPlayer.vue";
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";
import { persianNumber } from "@/utilities";
import { IAyah, IQariesList } from "@/api";


export default defineComponent({
    components: {
        AyahToolbar,
        AyahsList,
        Footer,
        AyahsPlayer,
    },
    props: {
        surah: {
            type: Number,
        },
        page: {
            type: Number,
        },
        ayahs: {
            type: Array as PropType<IAyah[]>,
        },
        qaries: {
            type: Object as PropType<IQariesList>
        }
    },
    setup() {
        return {
            persianNumber,
            ayahsPlayer: ref<typeof AyahsPlayer | undefined>()
        };
    },
    data() {
        return {
            ayahSize: 40,
            translateSize: 20,
            ayehIndexScrool: 0,
            player: {
                qari: "AbdulSamad",
                translator: "Fooladvand Hedayatfar",
                translation: true,
            },
        };
    },
    methods: {
        playAyah(ayahIndex: number): void  {
            this.ayahsPlayer?.playAyah(ayahIndex);
        },
        scrollToAyah(ayahNumber: number): void {
            document.getElementById("ayah-" + (ayahNumber - 1))?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    },
});
</script>
<style lang="scss">
.toolbar-btn-color {
    color: #2ca4ab;
    &:hover {
        color: #337ab7;
    }
}
</style>