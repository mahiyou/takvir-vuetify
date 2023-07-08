<template>
	<Player
		:url="srcAudio"
		:title="playerTitle"
		@ended="onTrackEnd"
		@prevoius="playPrevoiusAyah"
		@next="playNextAyah"
		v-model="playing"
		v-model:repeat="repeat"
		v-model:linked="linked"
	    />
</template>

<script lang="ts">
import Player, { RepeatMode } from "@/components/Player.vue";
import { defineComponent } from "vue";
import type { PropType } from "vue";
import api, { type IAyah } from "@/api";


export default defineComponent({
	components: {
		Player,
	},
	props: {
		ayahs: {
			type: Array as PropType<IAyah[]>,
			required: true,
		},
		qari: {
			type: String,
			required: true,
		},
		translation: {
			type: Boolean,
			required: true,
		},
		translator: {
			type: String,
		}
	},
	data() {
		return {
			repeat: RepeatMode.REPEAT_OFF,
			linked: true,
			ayahIndex: 0,
			lang: "ar",
			playing: false,
		};
	},
	methods: {
		playAyah(index: number): void {
			this.ayahIndex = index;
			this.lang = "ar";
			this.playing = true;
			if (this.linked) {
				document.getElementById("ayah-" + index)?.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
			}
		},
		onTrackEnd(): void {
			if (this.lang == "ar" && this.translation) {
				this.playTranslate();
			} else {
				this.playNextAyah();
			}
		},
		playPrevoiusAyah(): void {
			if (this.ayahIndex > 1) {
				this.playAyah(this.ayahIndex - 1);
			}
		},
		playTranslate(): void {
			this.lang = "fa";
			this.playing = true;
		},
		playNextAyah(): void {
			if (this.repeat == RepeatMode.REPEAT_OFF) {
				if (this.ayahIndex <= this.ayahs.length) {
					this.playAyah(this.ayahIndex + 1);
				}
			} else if (this.repeat == RepeatMode.REPEAT_TRACK) {
				setTimeout(() => this.playAyah(this.ayahIndex), 0);
			} else if (this.repeat == RepeatMode.REPEAT_LIST) {
				if (this.ayahIndex == this.ayahs.length) {
					this.playAyah(1);
				} else if (this.ayahIndex <= this.ayahs.length) {
					this.playAyah(this.ayahIndex + 1);
				}
			}
		},

	},

	computed: {
		ayah(): IAyah {
			return this.ayahs[this.ayahIndex];
		},
		srcAudio() {
			const qari = this.lang == "ar" ? this.qari : this.translator;
			if (!qari) {
				throw new Error("translation is enabled no translator selected");
			}
			return api.audio.getURL(this.ayah.surah, this.ayah.number, qari);
		},
		playerTitle() {
			return `آیه ${this.ayah.number}`;
		},
	},
});
</script>