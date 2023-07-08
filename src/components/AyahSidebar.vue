<template>
    <v-navigation-drawer class="sidebar" :modelValue="modelValue" @update:modelValue="updateModelValue" temporary location="left">
        <div class="sidebar-header">
            <h4 class="siderbar-title">تنظیمات</h4>
        </div>
        <v-list nav>
            <v-list-item prepend-icon="mdi-lightbulb" title="حالت شب" @click="toggleDarkmode"></v-list-item>
        </v-list>
        <v-list nav :selected="[qari]" @update:selected="(v) => $emit('update:qari', v[0])">
            <v-list-group>
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-microphone" title="قاری"></v-list-item>
                </template>
                <template v-if="qaries" #default>
                    <v-list-item v-for="qari in qaries.qaries" :key="qari.id" :title="qari.name_fa" :value="qari.name_en"/>
                </template>
                <template v-else #default>
                    <v-skeleton-loader type="list-item" v-for="n in 5" />
                </template>
            </v-list-group>
        </v-list>
        <v-list nav :selected="[translator]" @update:selected="(v) => $emit('update:translator', v[0])">
            <v-list-group>
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-volume-high" title="ترجمه">
                        <template v-slot:append>
                            <v-list-item-action end>
                                <v-checkbox-btn :modelValue="translation" @update:modelValue="(v) => $emit('update:translation', v)"></v-checkbox-btn>
                            </v-list-item-action>
                        </template>
                    </v-list-item>
                </template>
                <template v-if="qaries">
                    <v-list-item v-for="qari in qaries.translators" :key="qari.id" :title="qari.name_fa" :value="qari.name_en"/>
                </template>
                <template v-else>
                    <v-skeleton-loader type="list-item" v-for="n in 2" />
                </template>
            </v-list-group>
            <v-list-item>
                <template v-slot:prepend>
                    <v-list-item-action start>
                        <v-btn variant="text" icon="mdi mdi-plus" @click="$emit('update:ayahSize', ayahSize + 1)" :disabled="ayahSize >= 50" />
                    </v-list-item-action>
                </template>
                <template v-slot:append>
                    <v-list-item-action end>
                        <v-btn variant="text" icon="mdi mdi-minus" @click="$emit('update:ayahSize', ayahSize - 1)" :disabled="ayahSize < 5" />
                    </v-list-item-action>
                </template>
                <v-list-item-title class="text-center">اندازه آیه</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <template v-slot:prepend>
                    <v-list-item-action start>
                        <v-btn variant="text" icon="mdi mdi-plus" @click="$emit('update:translateSize', translateSize + 1)" :disabled="translateSize >= 50" />
                    </v-list-item-action>
                </template>
                <template v-slot:append>
                    <v-list-item-action end>
                        <v-btn variant="text" icon="mdi mdi-minus" @click="$emit('update:translateSize', translateSize - 1)" :disabled="translateSize < 5"  />
                    </v-list-item-action>
                </template>
                <v-list-item-title class="text-center">اندازه ترجمه</v-list-item-title>
            </v-list-item>

        </v-list>

    </v-navigation-drawer>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { defineComponent } from 'vue';
import { useTheme } from 'vuetify';
import type { IQariesList } from "@/api";

export default defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
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
        "update:modelValue",
        "update:qari",
        "update:translator",
        "update:translation",
        "update:ayahSize",
        "update:translateSize",
    ],
    setup() {
        return {
            theme: useTheme()
        };
    },
    data() {
        return {
            isActive: true,
        };
    },
    methods: {
        updateModelValue(newValue: boolean): void {
            this.$emit("update:modelValue", newValue);
        },
        toggleDarkmode(): void {
            this.theme.global.name.value = this.theme.global.current.value.dark ? 'light' : 'dark';
        },
    }
});
</script>

<style lang="scss" scoped>
.sidebar {
    color: #777777;
}

.sidebar-header {
    padding: 15px 10px;
    border-bottom: 1px solid #eee;

    .siderbar-title {
        color: #d1d0d0;
        font-weight: normal;
    }
}
</style>