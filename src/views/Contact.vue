<template>
    <v-locale-provider rtl>
        <v-app>
            <Toolbar v-model:collapsToggle="collapsToggle" />
            <CollapsMenu :collapsToggle="collapsToggle" />
            <Header />
            <ContactForm />
            <Footer />
        </v-app>
    </v-locale-provider>
</template>
<script>
import Toolbar from "@/components/Toolbar.vue";
import Header from "@/components/Header.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";
import CollapsMenu from "@/components/CollapsMenu.vue";
import { defineComponent } from "vue";
export default defineComponent({
    components: {
        Toolbar,
        Header,
        ContactForm,
        Footer,
        CollapsMenu,
    },
    data() {
        return {
            navItem: "start",
            currentNavItem: "start",
            collapsToggle: false,
        };
    },
});
</script>
