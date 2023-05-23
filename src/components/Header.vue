<template>
  <div class="backgroungimg">
    <v-container>
      <div class="d-flex justify-center align-center mt-11 mb-6">
        <a href="#" class="ql-img-w"
          ><v-img
            max-width="100%"
            height="auto"
            aspect-ratio="16/9"
            cover
            src="@/assets/pics/logo-lg-w.png"
          ></v-img
        ></a>
      </div>

      <div class="d-flex justify-center align-center mb-2">
        <p class="font-weight-medium ql-title-font">قرآن کریم</p>
      </div>
      <div class="d-flex justify-center align-center align-center">
        <div class="form-group search-input justify-center pr-4">
          <div class="input-group">
            <v-row>
                <v-col cols="10">
                    <input
                    type="text"
                    value=""
                    name="word"
                    class="ql-input-style form-control ui-autocomplete-input"
                    placeholder="نام سوره و یا کلمه ای از قرآن را وارد کنید .."
                    />
                </v-col>
                <v-col cols="2">

                    <v-btn variant="text" type="submit" class="bg-mygreen ql-btn-confirm">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn> 
                </v-col>
            </v-row> 
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style lang="scss">
.backgroungimg {
  background: url("@/assets/pics/background.jpg")
 
    no-repeat center center;
  background-size: cover;
  background-color: #2ca4ab;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  padding: 14px 0;
  color: #fff;
  margin-bottom: 20px;
}

.ql-title-font {
  font-family: yekan;
  letter-spacing: -1px;
  font-size: 2.5rem;
}
.size-of-text-field {
  max-width: 90%;
  height: 75px;
}
.ql-img-w {
  display: inline-block;
  width: 24%;
}
@media (max-width: 800px) {
  .ql-img-w {
  width: 35%;
}


}
@media (max-width: 400px) {
  .ql-img-w {
  width: 45%;
}


}
.search-input {
  width: 95%;
  background-color: white;
  border-radius: 4px;
  min-height: 60px;
  input:focus{
    outline: none;
}
}
.ql-input-style {
  width: 100%;
  height: 55px;
  font-size: 0.95rem;
}
.ql-btn-confirm {
  border-radius: 0px;
  min-height: 55px;
  min-width: 40px;
  margin: 3px;
  float: left;  
}
</style>

