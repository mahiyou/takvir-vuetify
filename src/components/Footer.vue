<template>
  <v-footer class="bg-footercolor" height="200px">
    <v-container class="footer-container">
      <v-row justify="center" no-gutters>
        <v-col md="3" xs="12" class="text-center">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-btn
              variant="text"
              class="footer-options-style"
              href="#"
              v-bind="props"
              :color="isHovering ? 'mygreen' : 'white'"
            >
              <v-icon>mdi-home</v-icon>
              صفحه ی اصلی
            </v-btn>
          </v-hover>
        </v-col>

        <v-col md="3" xs="12" class="text-center">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-btn
              variant="text"
              class="footer-options-style"
              href="/api"
              v-bind="props"
              :color="isHovering ? 'mygreen' : 'white'"
            >
              <v-icon>mdi-help-circle</v-icon>
              رابط های برنامه نویسی
            </v-btn>
          </v-hover>
        </v-col>
        <v-col md="3" xs="12" class="text-center">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-btn
              variant="text"
              class="footer-options-style"
              href="/contact-us"
              v-bind="props"
              :color="isHovering ? 'mygreen' : 'white'"
            >
              <v-icon>mdi-email</v-icon>
              تماس با ما
            </v-btn>
          </v-hover>
        </v-col>
        <v-col md="3" xs="12" class="text-center">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-btn
              variant="text"
              class="footer-options-style"
              href="#"
              v-bind="props"
              :color="isHovering ? 'mygreen' : 'white'"
            >
              <v-icon>mdi-android</v-icon>
              دریافت نسخه ی اندروید
            </v-btn>
          </v-hover>
        </v-col>
        </v-row>
        <v-divider class="my-4"></v-divider>
        <div>
          <div class="footer-font d-block">
            گرداوری و جمع آوری توسط
            <a class="footer-js-link" href="https://www.jeyserver.com/"
              >جی سرور</a
            >
          </div>
          <div class="f-last-sent-style d-block">© تمامی حقوق محفوظ مباشد.</div>
        </div>
      
    </v-container>
  </v-footer>
</template>
<style>
.footer-container{
  min-width: 95%;
  max-width: 95%;
}
.f-last-sent-style {
  font-size: 0.8rem;
  color: #4e5860;
  margin-top: 2px;
}

.footer-js-link {
  font-size: 0.9rem;
  font-family: yekan;
  vertical-align: none;
  text-decoration: none;
  color: #2ca4ab;
  padding-right: 3px;
}
.footer-options-style {
  font-family: yekan;
  font-size: 1.1rem;
  letter-spacing: 0px;
}
.footer-font {
  font-family: nazanin;
}
</style>