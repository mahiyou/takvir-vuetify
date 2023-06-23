<template>
<v-container class="toolbar-container">
    <v-toolbar density="comfortable" title="تکویر">
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn prepend-icon="mdi-home" :active="false" :to="{ name: 'Home' }">صفحه ی اصلی</v-btn>
            <v-btn prepend-icon="mdi-help-circle" :active="false" :to="{ name: 'api' }">رابط های برنامه نویسی</v-btn>
            <v-btn prepend-icon="mdi-email" :active="false" :to="{ name: 'contact-us' }">تماس با ما</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn variant="text" prepend-icon="mdi-android" :href="apkURL">دریافت نسخه ی اندروید</v-btn>
        </v-toolbar-items>
        <v-btn icon :href="apkURL" class="hidden-md-and-up">
            <v-icon>mdi-android</v-icon>
        </v-btn>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="show = !show"></v-app-bar-nav-icon>
    </v-toolbar>
    <v-expand-transition v-show="show">
        <div class="collapse-menu">
            <v-btn variant="text" block prepend-icon="mdi-home" :active="false" :to="{ name: 'Home' }">صفحه ی اصلی</v-btn>
            <v-btn variant="text" block prepend-icon="mdi-help-circle" :active="false" :to="{ name: 'api' }">رابط های برنامه نویسی</v-btn>
            <v-btn variant="text" block prepend-icon="mdi-email" :active="false" :to="{ name: 'contact-us' }">تماس با ما</v-btn>
            <v-btn variant="text" block prepend-icon="mdi-android" :href="apkURL">دریافت نسخه ی اندروید</v-btn>
        </div>
    </v-expand-transition>
</v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            show: false,
        }
    },
    computed: {
        apkURL(): string {
            return import.meta.env.VITE_APK_URL;
        }
    }
});
</script>

<style lang="scss">
.v-container.toolbar-container {
    padding-top: 0;
    padding-bottom: 0;
    .v-toolbar {
        background: none;
        .v-toolbar-title {
            flex: 0 0 auto;
            min-width: 80px;
        }
    }
    .collapse-menu {
        padding: 1em 0;
        .v-btn {
            justify-content: start;
        }
    }
}
</style>
