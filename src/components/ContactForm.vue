<template>
    <v-container class="contact-container">
        <div>
            <p class="title">تماس با ما</p>
        </div>
        <v-row>
            <v-col cols="6" offset="3">
                <v-form validate-on="submit" @submit.prevent="submit" class="v-form-w">
                    <div class="box-style f-b">
                        <v-icon class="icon-style ml-3">mdi-email</v-icon>
                        <input
                            class="input-style"
                            type="email"
                            v-model="email"
                            placeholder="آدرس ایمیل"
                        />
                    </div>

                    <div class="box-style">
                        <v-icon class="icon-style ml-3"
                        >mdi-comment-processing-outline</v-icon
                        >
                        <input
                            class="input-style"
                            type="text"
                            v-model="subject"
                            placeholder="موضوع"
                        />
                    </div>
                    <div class="box-style">
                        <v-row>
                            <v-col cols="1">
                                <v-icon class="icon-style">mdi-comment-outline</v-icon></v-col
                            >
                            <v-col cols="11" class="px-0">
                                <textarea
                                    class="input-style"
                                    placeholder="متن نظر"
                                    v-model="content"
                                    style="width: 97%"
                                ></textarea>
                            </v-col>
                        </v-row>
                    </div>
                    <v-btn type="submit" class="mt-2 float-left btn-style"
                    ><v-icon class="ml-1">mdi-send-outline</v-icon>ارسال</v-btn
                    >
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        subject: "",
        content:"",
        email: "",
        emailRules: [
            (value) => {
                if (value) return true;

                return "E-mail is requred.";
            },
            (value) => {
                if (/.+@.+\..+/.test(value)) return true;

                return "E-mail must be valid.";
            },
        ],
    }),
    methods: {
        submit() {
            fetch("https://takv.ir/contact-us?ajax=1", {
                method: "POST",
                body: JSON.stringify({
                    subject: this.subject,
                    email: this.email,
                    content:this.content,
                    //   status: true,
                }),
                // headers: {
                //   "Content-type": "application/json; charset=UTF-8",
                // },
            });
        },
    },
};
</script>
<style lang="scss">
.contact-container {
  margin-bottom: 40px;
  .title {
    font-size: 28px;
    color: gray;
    font-family: yakan;
    font-weight: 500;
  }

  .box-style {
    background: white;
    border-radius: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    padding: 10px;
    margin: 10px;

    // &:focus {
    //   border-color: #66afe9;
    //   -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    //     0 0 8px rgba(102, 175, 233, 0.6);
    //   box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    //     0 0 8px rgba(102, 175, 233, 0.6);
    // }
    .icon-style {
      color: #2ca4ab;
      margin: 0px;
    }
  }
  .v-form-w {
    padding: 20px;
  }
  .btn-style {
    background: #2ca4ab;
    color: white;
  }
  .input-style {
    color: gray;
    font-family: yekan;
    font-size: 14px;
    width: 80%;
    &:focus {
      outline: 0;
    }
  }
}
</style>
