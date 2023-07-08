<template>
    <AyahsView :page="parseInt(page)" :ayahs="ayahs" :qaries="qaries" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AyahsView from "./Ayahs.vue";
import api, { IQariesList, IAyah } from "@/api";

export default defineComponent({
    components: {
        AyahsView,
    },
    props: {
        page: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            ayahs: undefined as any[] | undefined,
            qaries: undefined as IQariesList | undefined,
        };
    },
    mounted() {
        this.reloadData(parseInt(this.page));
    },
    beforeRouteUpdate(to, from, next) {
        this.ayahs = undefined;
        this.reloadData(parseInt(to.params.page as string));
        next();
    },
    methods: {
        reloadData(page: number) {
            api.ayahs.byPage(page)
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