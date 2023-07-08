<template>
    <v-container class="contact-container">
        <h3 class="text-primary">تماس با ما</h3>
        <v-row>
            <v-col cols="6" offset="3">
                <v-form v-model="valid" @submit.prevent="onSubmit">
                    <v-text-field
                        variant="outlined"
                        type="email"
                        v-model="email"
                        prepend-inner-icon="mdi-email"
                        label="آدرس ایمیل"
                        :rules="[validateEmail]"
                    />
                    <v-text-field
                        variant="outlined"
                        type="text"
                        prepend-inner-icon="mdi-comment-processing-outline"
                        v-model="subject"
                        label="موضوع"
                    />
                    <v-textarea label="متن نظر" variant="outlined" prepend-inner-icon="mdi-comment-outline"></v-textarea>
            
                    <div class="text-left">
                        <v-btn type="submit" color="primary" class="mt-2" :loading="loading" :disabled="loading || !valid" prepend-icon="mdi-send-outline">ارسال</v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {
            subject: "",
            content: "",
            email: "",
            valid: false,
            loading: false,
        };
    },
    methods: {
        validateEmail(value: string) {
            if (!value) {
                return "ورود ایمیل اجباری می‌باشد.";
            }
            if (!/.+@.+\..+/.test(value)) {
                return "ایمیل شما معتبر نمی‌باشد";
            }
            return true;
        },
        async onSubmit(){
            if (!this.valid || this.loading) {
                return;
            }
            this.loading = true;
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact-us?ajax=1`, {
                    method: "POST",
                    body: JSON.stringify({
                        subject: this.subject,
                        email: this.email,
                        content: this.content,
                    }),
                });
            } catch (e) {
                // TODO
            } finally {
                this.loading = false;
            }
            
        },
    },
});
</script>