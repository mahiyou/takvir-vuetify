<template>
    <v-app-bar color="white" density="compact" :elevation="2" floating>
        <v-btn variant="text" :to="{name: 'Home'}" icon="mdi-home" color="primary" />
        <slot/>
        <template v-slot:append>
            <v-btn @click="toggleSidebar" icon="mdi-cogs" color="primary" />
      </template>
    </v-app-bar>

    <AyahSidebar
        v-model="sidebar"
        :qaries="qaries"
        :qari="qari"
        @update:qari="(v) => $emit('update:qari', v)"
        :translator="translator"
        @update:translator="(v) => $emit('update:translator', v)"
        :translation="translation"
        @update:translation="(v) => $emit('update:translation', v)"
        :ayahSize="ayahSize"
        @update:ayahSize="(v) => $emit('update:ayahSize', v)"
        :translateSize="translateSize"
        @update:translateSize="(v) => $emit('update:translateSize', v)"
        />
   
</template>
<script lang="ts">
import { type PropType, defineComponent } from 'vue';
import AyahSidebar from "@/components/AyahSidebar.vue";
import type { IQariesList } from '@/api';

export default defineComponent({
    components: {
        AyahSidebar
    },
    props: {
        qaries: {
            type: Object as PropType<IQariesList>,
        },
        qari: {
            type: String,
            required: true,
        },
        translator: {
            type: String,
            required: true,
        },
        translation: {
            type: Boolean,
            required: true,
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
    emits: [
        "update:qari",
        "update:translator",
        "update:translation",
        "update:ayahSize",
        "update:translateSize",
    ],
    data() {
        return {
            sidebar: false,
        };
    },
    methods: {
        toggleSidebar(): void {
            this.sidebar = !this.sidebar;
        }
    }
});
</script>
