<template>
    <AyahsView :surah="parseInt(surah)" :ayahs="ayahs" :qaries="qaries"/>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AyahsView from "./Ayahs.vue";
import type { IQariesList, IAyah } from "@/api";
import api from "@/api";

export default defineComponent({
    components: {
        AyahsView,
    },
    props: {
        surah: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            ayahs: undefined as IAyah[] | undefined,
            qaries: undefined as IQariesList | undefined,
        };
    },
    mounted() {
        this.reloadData(parseInt(this.surah));
    },
    beforeRouteUpdate(to, from, next) {
        this.ayahs = undefined;
        this.reloadData(parseInt(to.params.surah as string));
        next();
    },
    methods: {
        reloadData(surah: number) {
            api.ayahs.bySurah(surah)
                .then((ayahs) => {
                    this.ayahs = ayahs;
                });
            if (!this.qaries) {
                api.qaries.all().then((qaries) => {
                    this.qaries = qaries;
                });
            }
        }
    }
});
</script>