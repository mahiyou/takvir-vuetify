<template>
    <v-container class="navigation-container">
        <v-layout>
            <v-navigation-drawer
                class="nav"
                style="position: fixed; height: 365px"
                permanent
                location="right"
            >
        
                <span class="title-style">رابط های برنامه نویسی</span>
       

                <v-list density="compact" nav>
                    <v-list-item
                        v-for="index in this.items.length"
                        :key="index"
                        :title="this.items[index - 1].title"
                        :name="this.items[index - 1].value"
                        class="nav-item"
                        :style = "navItemColor(this.items[index - 1].value)"
                        @click="updateCurrentNavItem(this.items[index - 1].value)"
                    ></v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-container>
</template>
<script>

import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            items: [
                { title: "شروع", value: "start" },
                { title: "گرفتن تمام سوره ها", value: "get-surahs" },
                { title: "گرفتن قاری ها", value: "get-qaries" },
                { title: "گرفتن سوره", value: "get-surah" },
                { title: "گرفتن صفحه", value: "get-page" },
                { title: "گرفتن آیه", value: "get-ayeh" },
                { title: "جستجو", value: "search" },
            ],
        };
    
    },
    props:{

        currentNavItem: {
            type: undefined,
            require: true,
        },
    },
    methods:{
        updateCurrentNavItem(currentNavItem){
            this.$emit("update:currentNavItem" , currentNavItem);
        },
        navItemColor(value){
            if(this.currentNavItem == value){
                return "color: #2ca4ab;";
            }else{
                return "color: #939598";
            }
        }
    },
    watch:{

    }
});
</script>
<style lang="scss">
.navigation-container {
  text-align: center;

  .nav {
    border: 0px;
    margin-top: 70px;
  }
  .title-style {
    font-weight: 400;
    font-size: 20px;
    color: #6a6a6a;
  }
  .nav-item {
    font-size: 20px;
    padding-bottom: 0px;
    padding-top: 0px;
    // &:focus {
    //   color: #2ca4ab;
    //   background: white;
    //   --v-theme-overlay-multiplier: 0;
    // }
  }
}
@media (max-width: 959px){
  .navigation-container {
    display: none;
  }
}
</style>