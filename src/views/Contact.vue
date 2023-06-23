<template>
    <Header />
    <ContactForm />
</template>
<script lang="ts">
import Header from "@/components/Header.vue";
import ContactForm from "@/components/ContactForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Header,
        ContactForm,
    },
});
</script>
