<template>
    <section class="player">
        <div>
            <v-slider
                id="slider"
                class="sliderStyle"
                v-model="currentTime"
                color="mygreen"
                :max="duration"
                @click="changCurrentTime"
            ></v-slider>
        </div>
        <ul class="controller">
            <li class="controller-icon">{{ persianNumber(title) }}</li>
            <li class="controller-icon" @click="next">
                <v-icon>mdi-step-forward</v-icon>
            </li>
            <li class="controller-icon" @click="togglePlay">
                <v-icon>{{ playIcon }}</v-icon>
            </li>
            <li class="controller-icon" @click="prevoius">
                <v-icon>mdi-step-backward</v-icon>
            </li>
            <li class="controller-icon" @click="repeat">
                <v-icon>{{ repeatIcon }}</v-icon>
            </li>
            <li class="controller-icon" @click="linked">
                <v-icon :color="linkIcon">mdi-link</v-icon>
            </li>
        </ul>
    </section>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
    emits: [
        "started",
        "next",
        "prevoius",
        "ended",
        "update:modelValue",
        "repeat",
        "linked",
    ],
    data() {
        return {
            audio: undefined,
            islinked: false,
            currentTime: 0,
            duration: undefined,
            repeatMoods: [
                {
                    state: "repeatOff",
                    icon: " mdi-repeat-off",
                },
                {
                    state: "repeatTrack",
                    icon: "mdi-repeat-once",
                },
                {
                    state: "repeatList",
                    icon: "mdi-repeat",
                },
            ],
            repeatState: 0,
        };
    },
    methods: {
        togglePlay() {
            if (this.modelValue) {
                this.pause();
            } else {
                this.play();
            }
        },
        setupAudio() {
            this.audio = new Audio(this.url);
            this.audio.addEventListener("timeupdate", () => {
                this.currentTime = this.audio.currentTime;
            });
            this.audio.addEventListener("durationchange", () => {
                this.duration = this.audio.duration;
            });
            this.audio.addEventListener("ended", () => {
                this.$emit("update:modelValue", false);
                this.$emit("ended");
            });
        },
        play() {
            if (!this.audio) {
                this.setupAudio();
            }
            this.audio.play();
            this.$emit("update:modelValue", true);
        },
        pause() {
            this.$emit("update:modelValue", false);
            if (!this.audio) {
                return;
            }
            this.audio.pause();
        },

        prevoius() {
            this.$emit("prevoius");
        },
        next() {
            this.$emit("next");
        },
        linked() {
            this.islinked = !this.islinked;
            this.$emit("linked", this.islinked);
        },

        repeat() {
            if (this.repeatState < 2) {
                this.repeatState++;
            } else {
                this.repeatState = 0;
            }

            this.$emit("repeat", this.repeatMoods[this.repeatState].state);
        },
        changCurrentTime() {
            if (document.getElementById("slider").value != this.audio.currentTime) {
                this.audio.currentTime = document.getElementById("slider").value;
            }
        },
        persianNumber(n) {
            n = n.toString();
            const nlength = n.length;
            const farsiNum = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < nlength; j++) {
                    const istring = i.toString();
                    n = n.replace(istring, farsiNum[i]);
                }
            }

            return n;
        },
    },
    computed: {
        playIcon() {
            return this.modelValue ? "mdi-pause" : "mdi-play";
        },
        repeatIcon() {
            return this.repeatMoods[this.repeatState].icon;
        },
        linkIcon() {
            return this.islinked ? "blue-darken-2" : "";
        },
    },
    watch: {
        url() {
            if (this.audio) {
                this.audio.pause();
            }
            this.audio = undefined;
            if (this.modelValue) {
                this.play();
            }
        },
        modelValue(newValue) {
            if (newValue) {
                this.play();
            } else {
                this.pause();
            }
        },
    },
    mounted() {
        if (this.modelValue) {
            this.play();
        }
    },
});
</script>
<style lang="scss">
.player {
  height: 90px;
  width: 330px;
  color: #939598;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.2);
  bottom: 15px;
  left: 5px;
  position: fixed;
  padding: 12px;
  background: white;
}
.sliderStyle {
  height: 30px;
}

.controller {
  margin-top: 13px;
  display: block;
  text-align: center;
}
.controller-icon {
  float: right;
  list-style-type: none;
  margin-right: 7%;
  &:hover {
    color: #2ca4ab;
  }
}
@media (max-width: 750px) {
  .player {
    width: 100%;
    bottom: 0px;
    left: 0px;
  }
}
</style>