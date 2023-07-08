
export interface IQariPerson {
	id: number;
	name_en: string;
	name_fa: string;
}

export interface IQariesList {
	qaries: IQariPerson[];
	translators: IQariPerson[];
}

export interface IAyah {
	surah: number;
	number: number;
	page: number;
	text: string;
	plain: string;
	translates: {
		[key:string]: string;
	}
}

export class Takvir {
	public constructor(protected backendURL: string = "https://takv.ir") {
	}

	public qaries = {
		all: async (): Promise<IQariesList> => {
			const response = await fetch(`${this.backendURL}/qaries?api=1`);
			const data = await response.json();
			return {
				qaries: data.items.qaries,
				translators: data.items.translations,
			};
		}
	}

	public audio = {
		getURL(surah: number, ayah: number, qari_en: string): string {
			return import.meta.env.VITE_AUDIO_STORAGE_URL + `/${qari_en}/${surah}/${ayah}.mp3`;
		}
	}

	public ayahs = {
		bySurah: async (surah: number): Promise<IAyah[]> => {
			const response = await fetch(`${this.backendURL}/surah/${surah}?api=1`);
			const data = await response.json();
			return data.items.map((i: any) => {
				const translates: IAyah["translates"] = {};
				for (const translate of i.translates) {
					translates[translate.lang] = translate.translate;
				}

				return {
					surah: i.ayah.surah,
					number: i.ayah.number,
					page: i.ayah.page,
					text: i.ayah.ayah,
					plain: i.ayah.plain,
					translates
				}
			});
		},
		byPage: async (surah: number): Promise<IAyah[]> => {
			const response = await fetch(`${this.backendURL}/page/${surah}?api=1`);
			const data = await response.json();
			const ayahs: IAyah[] = [];
			for (const surah of Object.values(data.items) as any[]) {
				for (const ayah of surah.ayahs) {
					const translates: IAyah["translates"] = {};
					for (const translate of ayah.translates) {
						translates[translate.lang] = translate.translate;
					}
					ayahs.push({
						surah: ayah.ayah.surah,
						number: ayah.ayah.number,
						page: ayah.ayah.page,
						text: ayah.ayah.ayah,
						plain: ayah.ayah.plain,
						translates
					});
				}
			}
			return ayahs;
		}
	}
}
const api = new Takvir();

export default api;