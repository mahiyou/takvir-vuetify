/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import '@/assets/main.scss';
import '@/assets/soure-names.scss';

// Composables
import { createVuetify } from 'vuetify';
import { VSkeletonLoader } from 'vuetify/labs/components';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    components: {
        VSkeletonLoader
    },
    theme: {
        themes: {
            light: {
                colors: {
                    /* My custom colors */
                    primary: "#2ca4ab",
                    mygreen: "#2ca4ab",
                    footer: "#32312c",


                },
            },
            dark: {
                colors: {
                    primary: "#2ca4ab",
                    mygreen: "#2ca4ab",
                    footer: "#32312c",
                }
            }
        },
    },
});
