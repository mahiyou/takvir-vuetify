<template>
    <section class="player">
        <div>
            <v-slider
                :model-value="currentTime"
                :on-update:model-value="changeCurrentTime"
                color="mygreen"
                :max="duration"
                :hide-details="true"
            ></v-slider>
        </div>
        <div class="text-center">
            <span class="px-3">{{ title }}</span>
            <v-btn variant="text" icon="mdi-step-forward" @click="onNextClick" />
            <v-btn variant="text" :icon="playIcon" @click="togglePlay" />
            <v-btn variant="text" icon="mdi-step-backward" @click="onPrevoiusClick" />
            <v-btn variant="text" :icon="repeatIcon" @click="onRepeatClick" />
            <v-btn variant="text" icon="mdi-link" @click="onLinkClick" :color="linkIconColor" />
        </div>
    </section>
</template>
<script lang="ts">
import { PropType } from "vue";
import { defineComponent } from "vue";
export enum RepeatMode {
    REPEAT_OFF,
    REPEAT_TRACK,
    REPEAT_LIST,
}
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
        repeat: {
            type: Number as PropType<RepeatMode>,
            default: RepeatMode.REPEAT_OFF,
        },
        linked: {
            type: Boolean,
            default: true,
        }
    },
    emits: [
        "started",
        "next",
        "prevoius",
        "ended",
        "update:modelValue",
        "update:repeat",
        "update:linked",
    ],
    unmounted() {
        this.audio?.pause();
        this.audio = undefined;
    },
    data() {
        return {
            audio: undefined as (HTMLAudioElement | undefined),
            currentTime: 0,
            duration: 0,
            repeatMoods: [
                {
                    state: RepeatMode.REPEAT_OFF,
                    icon: " mdi-repeat-off",
                },
                {
                    state: RepeatMode.REPEAT_TRACK,
                    icon: "mdi-repeat-once",
                },
                {
                    state: RepeatMode.REPEAT_LIST,
                    icon: "mdi-repeat",
                },
            ],
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
                this.currentTime = this.audio?.currentTime || 0;
            });
            this.audio.addEventListener("durationchange", () => {
                this.duration = this.audio?.duration || 0;
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
            this.audio?.play();
            this.$emit("update:modelValue", true);
        },
        pause() {
            this.$emit("update:modelValue", false);
            if (!this.audio) {
                return;
            }
            this.audio.pause();
        },

        onPrevoiusClick() {
            this.$emit("prevoius");
        },
        onNextClick() {
            this.$emit("next");
        },
        onLinkClick(): void {
            this.$emit("update:linked", !this.linked);
        },

        onRepeatClick(): void {
            this.$emit("update:repeat", (this.repeat + 1) % 3);
        },
        changeCurrentTime(newValue: number) {
            if (!this.audio) {
                return;
            }
            this.audio.currentTime = newValue;
        },
    },
    computed: {
        playIcon() {
            return this.modelValue ? "mdi-pause" : "mdi-play";
        },
        repeatIcon() {
            return this.repeatMoods[this.repeat].icon;
        },
        linkIconColor() {
            return this.linked ? "blue-darken-2" : undefined;
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