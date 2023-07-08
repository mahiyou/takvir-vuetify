<template v-if="ayahs">
    <template v-if="ayahs">
        <template v-for="(ayah, n) in ayahs" :key="n">
            <div v-if="needBismillah(ayah)" class="text-center">
                <img src="@/assets/pics/bismillah.svg" width="220" height="45" />
            </div>
            <v-row :id="'ayah-' + n" class="ayah-row">
                <v-col cols="12" sm="2" lg="1">
                    <v-row class="text-center">
                        <v-col sm="12">
                            <router-link :to="ayahRoute(ayah)" class="ayah-number text-primary">{{ persianNumber(ayah.number) }}</router-link>
                        </v-col>
                        <v-col sm="12">
                            <v-btn variant="plain" prepend-icon="mdi-play" color="primary" class="display-block" @click="$emit('play', n)">پخش</v-btn>
                        </v-col>
                        <v-col sm="12">
                            <v-btn variant="plain" icon="mdi-twitter" size="small" :href="twitterLink(ayah)" target="_blank" color="#1D9BF0" density="comfortable"/>
                            <v-btn variant="plain" icon="mdi-send" size="small" :href="telegramLink(ayah)"  target="_blank" color="#54A9EB" density="comfortable"/>
                        </v-col>
                    </v-row>
                    
                    
                    
                </v-col>
                <v-col cols="12" sm="10" lg="11">
                    <div class="ayah-text" :style="{ fontSize: ayahSize + 'px' }" v-text="ayah.text" />
                    <div class="translate-text" :style="{ fontSize: translateSize + 'px' }" v-text="ayah.translates.fa"/>
                </v-col>
            </v-row>
        </template>
    </template>
    <template v-else>
        <div class="bismillah-skeleton">
            <v-skeleton-loader type="text" :width="200"/>
        </div>
        <v-skeleton-loader type="list-item-two-line" v-for="n in 5"></v-skeleton-loader>
    </template>
</template>
<script lang="ts">
import { IAyah } from "@/api";
import { PropType } from "vue";
import { defineComponent } from "vue";
import { persianNumber } from "@/utilities";
import type { RouteLocationNamedRaw } from "vue-router";

export default defineComponent({
    props: {
        ayahs: {
            type: Array as PropType<IAyah[]>,
        },
        ayahSize: {
            type: Number,
            required: true,
        },
        translateSize: {
            type: Number,
            required: true,
        },
    },
    emits: ["play"],
    setup() {
        return { persianNumber };
    },
    data() {
        return {};
    },
    methods: {
        needBismillah({number, surah}: IAyah): boolean {
            return (number === 1 && surah !== 1 && surah !== 9);
        },
        ayahRoute({surah, number}: IAyah): RouteLocationNamedRaw {
            return {
                name: "surah",
                params: {
                    surah,
                }
            };
        },
        ayahLink(ayah: IAyah): string {
            return window.location.protocol + "//" + window.location.host + this.$router.resolve(this.ayahRoute(ayah)).href;
        },
        twitterLink(ayah: IAyah): string {
            const query = new URLSearchParams({
                text: ayah.text,
                url: this.ayahLink(ayah)
            });

            return `https://twitter.com/intent/tweet?${query.toString()}`;
        },
        telegramLink(ayah: IAyah): string {
            const query = new URLSearchParams({
                text: ayah.text,
                url: this.ayahLink(ayah)
            });

            return `https://t.me/share/url?${query.toString()}`;
        }
    }
});
</script>
<style lang="scss" scoped>
.bismillah-skeleton {
    width: 200px;
    margin:0 auto;
}
.ayah-text {
    line-height: 2;
    font-family: quran-taha;
}
.translate-text {
    font-family: quran-taha;
    color: #939598;
}
.ayah-row {
    margin: 20px 0;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
}
.ayah-number {
    font-size: larger;
    text-decoration: none;

}
</style>
