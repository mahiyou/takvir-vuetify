<template>
    <v-footer class="bg-footer">
        <v-container>
            <v-row justify="center" no-gutters>
                <v-col md="3" xs="12" class="text-center">
                    <v-btn variant="text" prepend-icon="mdi-home" :active="false" :to="{ name: 'Home' }">صفحه ی اصلی</v-btn>
                </v-col>

                <v-col md="3" xs="12" class="text-center">
                    <v-btn variant="text" prepend-icon="mdi-help-circle" :active="false" :to="{ name: 'api' }">رابط های برنامه نویسی </v-btn>
                </v-col>
                <v-col md="3" xs="12" class="text-center">
                    <v-btn variant="text" prepend-icon="mdi-email" :active="false" :to="{ name: 'contact-us' }">تماس با ما</v-btn>
                </v-col>
                <v-col md="3" xs="12" class="text-center">
                    <v-btn variant="text" prepend-icon="mdi-android" :href="apkURL">دریافت نسخه ی اندروید</v-btn>
                </v-col>
            </v-row>
            <v-divider class="my-4"></v-divider>
            <div>
                <p>
                    گرداوری و جمع آوری توسط
                    <a class="footer-js-link text-subtitle-2" href="https://dnj.co.ir/">داده نگار جی</a>
                </p>
                <p class="text-subtitle-2 text-secondary-darken-1">© تمامی حقوق محفوظ مباشد.</p>
            </div>
      
        </v-container>
    </v-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    computed: {
        apkURL(): string {
            return import.meta.env.VITE_APK_URL;
        }
    }
});
</script>
<style lang="scss">
.footer-js-link {
  text-decoration: none;
  color: #2ca4ab;
}
</style>