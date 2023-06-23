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

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#1867C0',
                    secondary: '#5CBBF6',
                    /* My custom colors */
                    mygreen: "#2ca4ab",
                    footercolor: "#32312c",


                },
            },
            // dark:{
            //   colors: {
        


            //   }
            // }
        },
    
    },
});
