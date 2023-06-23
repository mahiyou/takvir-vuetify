<template>
    <div class="top-menu top-menu-display">
        <v-row>
            <v-col cols="6" class="py-5 pr-15 top-menu-title">رابط های برنامه نویسی</v-col>
            <v-col cols="6" class="py-5">
                <v-menu open-on-click>
                    <template v-slot:activator="{ props }">
                        <button v-bind="props" class="top-menu-title"
                        >متد ها<v-icon>mdi-menu-down</v-icon>
                        </button>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list density="compact" nav>
                                <v-list-item
                                    prepend-icon="mdi-chevron-left"
                                    v-for="index in this.items.length"
                                    :href="'#' + this.items[index - 1].value"
                                    :key="index"
                                    :title="this.items[index - 1].title"
                                    :name="this.items[index - 1].value"
                                    class="list-item-style"
                                ></v-list-item>
                            </v-list>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-col>
        </v-row>
    </div>
    <v-container class="api-content-con">
        <div id="start" class="mb-8" v-intersect="onIntersectStart">
            <div style="font-size: 24px">شروع</div>
            <v-divider class="my-4"></v-divider>
            <div>
                <p>
                    تمامی متد ها به صورت <span class="bold-word">GET</span> نوشته شده است
                    .
                </p>
                <p>
                    در پایان هر متد ، نمونه ای از درخواست فرستاده شده و پاسخ دریافت شده ،
                    وجود دارد .
                </p>
                <p>
                    هر متد را تا پایان مطالعه کرده و کد خود را با نمونه ی موجود و پاسخ آن
                    مقایسه کنید ، در صورتی که مشکلی داشتید در قسمت
                    <a href="/contact-us" class="link-style">تماس با ما </a>عنوان کنید.
                    (حتما یک راه تماس معتبر برای ارتباط ما با شما وارد کنید) .
                </p>
            </div>
        </div>
        <div id="get-surahs" v-intersect="onIntersectSurahs">
            <div style="font-size: 24px">گرفتن تمام سوره ها</div>
            <v-divider class="my-4"></v-divider>
            <div>
                <p>
                    قرآن ۱۱۴ سوره دارد که در این پروژه ، سوره ها به ترتیب وارده شده و
                    شناسه ی هر سوره ، در واقع همان شماره سوره است .
                </p>
                <div>
                    <p style="font-size: 18px; font-weight: 400" class="mt-3">
                        آدرس ارسالی
                    </p>
                    <p class="address">https://takv.ir?api=1</p>

                    <p style="font-size: 18px; font-weight: 400" class="mt-8">
                        نمونه درخواست
                    </p>
                    <v-divider class="my-4"></v-divider>
                    <p class="code-box">GET https://takv.ir?api=1</p>
                    <p>پاسخ</p>
                    <pre class="code-box">
            <code>
{ 
        "status": true, 
        "items": [{ 
            "id": 1, 
            "title_fa": "الحمد",
            "title_en": "Al-Fatihah", 
            "ayahs": 7 
            }, 
        { 
            "id": 2,
            "title_fa":"البقرة",
            "title_en": "Al-Baqarah", 
            "ayahs": 286
        }, 
        {
            "id": 3, 
            "title_fa": "آل عمران",
            "title_en": "Ali Imran", 
            "ayahs":200 
        }...] 
}
            </code>
          </pre>
                </div>
            </div>
        </div>
        <div id="get-qaries" v-intersect="onIntersectQari">
            <div style="font-size: 24px" class="mt-8">گرفتن قاری ها</div>
            <v-divider class="my-4"></v-divider>
            <div>
                <P>
                    صوت آیه به آیه هر سوره با قاری های سرشناس و متفاوت همراه با صوت ترجمه
                    هر آیه
                </P>
                <div>
                    <p style="font-size: 18px; font-weight: 400" class="mt-3">
                        آدرس ارسالی
                    </p>
                    <p class="address">GET https://takv.ir/qaries?api=1</p>

                    <p style="font-size: 18px; font-weight: 400" class="mt-8">
                        نمونه درخواست
                    </p>
                    <v-divider class="my-4"></v-divider>
                    <p class="code-box">GET https://takv.ir?api=1</p>
                    <p>پاسخ</p>
                    <pre class="code-box">
            <code>
{
        "status": true,
        "items": {
            "qaries": [{
                "id": 2,
                "name_en": "AbdulBasit",
                "name_fa": "عبدالباسط"
            }, {
                "id": 3,
                "name_en": "AbdulBasit - murattal",
                "name_fa": "عبدالباسط - مرتل"
            }, {
                "id": 4,
                "name_en": "Abdullah Awad Al Juhany",
                "name_fa": "عبدالله عواد الجهنی"
            }, {
                "id": 5,
                "name_en": "Abdullah basfer",
                "name_fa": "عبدالله بصفر"
            }, {
                "id": 6,
                "name_en": "Abdullah matrood",
                "name_fa": "عبدالله مطرود"
            }...],
            "translations": [{
                "id": 1,
                "name_en": "Fooladvand Hedayatfar",
                "name_fa": " فولاوند هدایتفر"
            }, {
                "id": 2,
                "name_en": "Makarem Kabiri",
                "name_fa": "مکارم کبیری"
            }]
        }
}	
            </code>
          </pre>
                </div>
            </div>
        </div>
        <div id="get-surah" v-intersect="onIntersectSurah">
            <div style="font-size: 24px">گرفتن سوره</div>
            <v-divider class="my-4"></v-divider>
            <div>
                <p>
                    برای دریافت آیات یک سوره نیاز به شماره سوره است . (در متد
                    <a class="link-style" href="#">گرفتن تمام سوره ها </a>
                    میتوانید شماره سوره را پیدا کنید.)
                </p>
                <p>شماره سوره ها در تکویر، شماره سوره در لیست قرآن است .</p>
                <p>
                    ترجمه ی هر آیه به دو زبان فارسی و انگلیسی موجود میباشد که در صورت
                    افزودن پارامتر <span class="bold-word">lang</span> میتوانید نوع زبان
                    را مشخص کنید
                </p>
                <div>
                    <table class="mt-4">
                        <tr class="tr-title">
                            <th style="font-weight: 800; color: #7b7d7f">پارامتر</th>
                            <th style="font-weight: 800; color: #7b7d7f">اجباری؟</th>
                            <th style="font-weight: 800; color: #7b7d7f">توضیحات</th>
                            <th style="font-weight: 800; color: #7b7d7f">نمونه</th>
                        </tr>
                        <tr>
                            <th>lang</th>
                            <th>اختیاری</th>
                            <th>
                                نوع زبان ترجمه ی آیه (fa نشان دهنده زبان فارسی و en نشان دهنده ی
                                زبان انگلیسی) - پیشفرض زبان فارسی
                            </th>
                            <th>en</th>
                        </tr>
                    </table>
                    <table class="mt-4">
                        <tr class="tr-title">
                            <th style="font-weight: 800; color: #7b7d7f">مشخصه</th>
                            <th style="font-weight: 800; color: #7b7d7f">توضیحات</th>
                        </tr>
                        <tr>
                            <th>surah</th>
                            <th>شماره سوره</th>
                        </tr>
                        <tr>
                            <th>number</th>
                            <th>شماره آیه</th>
                        </tr>
                        <tr>
                            <th>page</th>
                            <th>شماره صفحه</th>
                        </tr>
                        <tr>
                            <th>ayah</th>
                            <th>متن آیه قرآن</th>
                        </tr>
                        <tr>
                            <th>plain</th>
                            <th>متن ساده و بدون اعراب آیه قرآن</th>
                        </tr>
                    </table>
                    <div>
                        <p style="font-size: 18px; font-weight: 400" class="mt-3">
                            آدرس ارسالی
                        </p>
                        <p class="address">https://takv.ir/surah/{SurahID}?api=1</p>

                        <p style="font-size: 18px; font-weight: 400" class="mt-8">
                            نمونه درخواست
                        </p>
                        <v-divider class="my-4"></v-divider>
                        <p class="code-box">GET https://takv.ir/surah/1?api=1</p>
                        <p>پاسخ</p>
                        <pre class="code-box">
            <code>			
{
        "status": true,
        "items": [{
            "ayah": {
                "id": 1,
                "surah": 1,
                "number": 1,
                "page": 1,
                "ayah": "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
                "plain": "بسم الله الرحمن الرحيم",
                "audios": [{
                    "qarie": "عبدالباسط - مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی موجاواد",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
                }, {
                    "qarie": "ناصر القطامی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
                }, {
                    "qarie": "شهریار پرهیزکار",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
                }...]
            },
            "translates": [{
                "id": 1,
                "ayah": 1,
                "lang": "fa",
                "translate": "ستايش خدايى را كه پروردگار جهانيان ",
                "audios": [{
                    "qarie": " فولاوند هدایتفر",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/1\/1.mp3"
                }, {
                    "qarie": "مکارم کبیری",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/1\/1.mp3"
                }]
            }, {
                "id": 11237,
                "ayah": 1,
                "lang": "en",
                "translate": "In the Name of Allah, the Merciful, the Most Merciful",
                "audios": []
            }]
        }, {
            "ayah": {
                "id": 2,
                "surah": 1,
                "number": 2,
                "page": 1,
                "ayah": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                "plain": "الحمد لله رب العالمين",
                "audios": [{
                    "qarie": "عبدالباسط - مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی موجاواد",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
                }, {
                    "qarie": "ناصر القطامی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
                }, {
                    "qarie": "شهریار پرهیزکار",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
                }...]
            },
            "translates": [{
                "id": 2,
                "ayah": 2,
                "lang": "fa",
                "translate": "رحمتگر مهربان ",
                "audios": [{
                    "qarie": " فولاوند هدایتفر",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/1\/2.mp3"
                }, {
                    "qarie": "مکارم کبیری",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/1\/2.mp3"
                }]
            }, {
                "id": 11238,
                "ayah": 2,
                "lang": "en",
                "translate": "Praise be to Allah, Lord of the Worlds,",
                "audios": []
            }]
        }, {
            "ayah": {
                "id": 3,
                "surah": 1,
                "number": 3,
                "page": 1,
                "ayah": "الرَّحْمَنِ الرَّحِيمِ",
                "plain": "الرحمن الرحيم",
                "audios": [{
                    "qarie": "عبدالباسط - مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی موجاواد",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
                }, {
                    "qarie": "ناصر القطامی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
                }, {
                    "qarie": "شهریار پرهیزکار",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
                }...]
            },
            "translates": [{
                "id": 3,
                "ayah": 3,
                "lang": "fa",
                "translate": "[و] خداوند روز جزاست ",
                "audios": [{
                    "qarie": " فولاوند هدایتفر",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/1\/3.mp3"
                }, {
                    "qarie": "مکارم کبیری",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/1\/3.mp3"
                }]
            }, {
                "id": 11239,
                "ayah": 3,
                "lang": "en",
                "translate": "the Merciful, the Most Merciful,",
                "audios": []
            }]
        }, {
            "ayah": {
                "id": 4,
                "surah": 1,
                "number": 4,
                "page": 1,
                "ayah": "مَالِكِ يَوْمِ الدِّينِ",
                "plain": "مالك يوم الدين",
                "audios": [{
                    "qarie": "عبدالباسط - مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی موجاواد",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
                }, {
                    "qarie": "ناصر القطامی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
                }, {
                    "qarie": "شهریار پرهیزکار",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
                }...]
            },
            "translates": [{
                "id": 4,
                "ayah": 4,
                "lang": "fa",
                "translate": "[بار الها] تنها تو را مى ‏پرستيم و تنها از تو يارى مى‏ جوييم ",
                "audios": [{
                    "qarie": " فولاوند هدایتفر",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/1\/4.mp3"
                }, {
                    "qarie": "مکارم کبیری",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/1\/4.mp3"
                }]
            }, {
                "id": 11240,
                "ayah": 4,
                "lang": "en",
                "translate": "Owner of the Day of Recompense.",
                "audios": []
            }]
        }, {
            "ayah": {
                "id": 5,
                "surah": 1,
                "number": 5,
                "page": 1,
                "ayah": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                "plain": "اياك نعبد واياك نستعين",
                "audios": [{
                    "qarie": "عبدالباسط - مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی موجاواد",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
                }, {
                    "qarie": "ناصر القطامی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
                }, {
                    "qarie": "شهریار پرهیزکار",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
                }...]
            },
            "translates": [{
                "id": 5,
                "ayah": 5,
                "lang": "fa",
                "translate": "ما را به راه راست هدايت فرما ",
                "audios": [{
                    "qarie": " فولاوند هدایتفر",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/1\/5.mp3"
                }, {
                    "qarie": "مکارم کبیری",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/1\/5.mp3"
                }]
            }, {
                "id": 11241,
                "ayah": 5,
                "lang": "en",
                "translate": "You (alone) we worship; and You (alone) we rely for help.",
                "audios": []
            }]
        }, {
            "ayah": {
                "id": 6,
                "surah": 1,
                "number": 6,
                "page": 1,
                "ayah": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                "plain": "اهدنا الصراط المستقيم",
                "audios": [{
                    "qarie": "عبدالباسط - مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی موجاواد",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
                }, {
                    "qarie": "ناصر القطامی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
                }, {
                    "qarie": "شهریار پرهیزکار",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
                }...]
            },
            "translates": [{
                "id": 6,
                "ayah": 6,
                "lang": "fa",
                "translate": "راه آنان كه گرامى‏ شان داشته اى نه [راه] مغضوبان و نه [راه] گمراهان ",
                "audios": [{
                    "qarie": " فولاوند هدایتفر",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/1\/6.mp3"
                }, {
                    "qarie": "مکارم کبیری",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/1\/6.mp3"
                }]
            }, {
                "id": 11242,
                "ayah": 6,
                "lang": "en",
                "translate": "Guide us to the Straight Path,",
                "audios": []
            }]
        }, {
            "ayah": {
                "id": 7,
                "surah": 1,
                "number": 7,
                "page": 1,
                "ayah": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
                "plain": "صراط الذين انعمت عليهم غير المغضوب عليهم ولا الضالين",
                "audios": [{
                    "qarie": "عبدالباسط - مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی موجاواد",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
                }, {
                    "qarie": "منشاوی مرتل",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
                }, {
                    "qarie": "ناصر القطامی",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
                }, {
                    "qarie": "شهریار پرهیزکار",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
                }...]
            },
            "translates": [{
                "id": 7,
                "ayah": 7,
                "lang": "fa",
                "translate": "راه آنان كه گرامى‏ شان داشته اى نه [راه] مغضوبان و نه [راه] گمراهان ",
                "audios": [{
                    "qarie": " فولاوند هدایتفر",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/1\/7.mp3"
                }, {
                    "qarie": "مکارم کبیری",
                    "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/1\/7.mp3"
                }]
            }, {
                "id": 11243,
                "ayah": 7,
                "lang": "en",
                "translate": "the Path of those upon whom You have favored, not those upon whom is the anger, nor the astray. (Amen please answer)",
                "audios": []
            }]
        }]
}	
            </code>
          </pre>
                    </div>
                </div>
            </div>
        </div>
        <div id="get-page" v-intersect="onIntersectPage">
            <div style="font-size: 24px">گرفتن آیات یک صفحه</div>
            <v-divider class="my-4"></v-divider>
            <div>
                <p>
                    صفحه بندی آیات بر اساس قرآن با رسم الخط عثمان طه در نظر گرفته شده که
                    در این رسم الخط هر یک از صفحات با یک آیه شروع شده و با اتمام یک آیه در
                    انتهای صفحه تمام میشود .
                </p>
                <p>در این رسم الخط قرآن دارای 604 صفحه است .</p>
                <p>
                    ترجمه ی هر آیه به دو زبان فارسی و انگلیسی موجود میباشد که در صورت
                    افزودن پارامتر <span class="bold-word">lang</span> میتوانید نوع زبان
                    را مشخص کنید
                </p>
                <div>
                    <table class="mt-4">
                        <tr class="tr-title">
                            <th style="font-weight: 800; color: #7b7d7f">پارامتر</th>
                            <th style="font-weight: 800; color: #7b7d7f">اجباری؟</th>
                            <th style="font-weight: 800; color: #7b7d7f">توضیحات</th>
                            <th style="font-weight: 800; color: #7b7d7f">نمونه</th>
                        </tr>
                        <tr>
                            <th>lang</th>
                            <th>اختیاری</th>
                            <th>
                                نوع زبان ترجمه ی آیه (fa نشان دهنده زبان فارسی و en نشان دهنده ی
                                زبان انگلیسی) - پیشفرض زبان فارسی
                            </th>
                            <th>en</th>
                        </tr>
                    </table>
                    <table class="mt-4">
                        <tr class="tr-title">
                            <th style="font-weight: 800; color: #7b7d7f">مشخصه</th>
                            <th style="font-weight: 800; color: #7b7d7f">توضیحات</th>
                        </tr>
                        <tr>
                            <th>surah</th>
                            <th>شماره سوره</th>
                        </tr>
                        <tr>
                            <th>number</th>
                            <th>شماره آیه</th>
                        </tr>
                        <tr>
                            <th>page</th>
                            <th>شماره صفحه</th>
                        </tr>
                        <tr>
                            <th>ayah</th>
                            <th>متن آیه قرآن</th>
                        </tr>
                        <tr>
                            <th>plain</th>
                            <th>متن ساده و بدون اعراب آیه قرآن</th>
                        </tr>
                    </table>
                    <div>
                        <p style="font-size: 18px; font-weight: 400" class="mt-3">
                            آدرس ارسالی
                        </p>
                        <p class="address">https://takv.ir/page/{PageNumber}?api=1</p>

                        <p style="font-size: 18px; font-weight: 400" class="mt-8">
                            نمونه درخواست
                        </p>
                        <v-divider class="my-4"></v-divider>
                        <p class="code-box">GET https://takv.ir/page/2?api=1</p>
                        <p>پاسخ</p>
                        <pre class="code-box">
            <code>			
{
      "status": true,
      "items": {
        "2": {
          "id": 2,
          "title_fa": "البقرة",
          "title_en": "Al-Baqarah",
          "ayahs": [{
            "ayah": {
              "id": 8,
              "surah": 2,
              "number": 1,
              "page": 2,
              "ayah": "الم",
              "plain": "الم",
              "audios": [{
                "qarie": "عبدالباسط - مرتل",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
              }, {
                "qarie": "منشاوی",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
              }, {
                "qarie": "منشاوی موجاواد",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
              }, {
                "qarie": "منشاوی مرتل",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
              }, {
                "qarie": "ناصر القطامی",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
              }, {
                "qarie": "شهریار پرهیزکار",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
              }...]
            },
            "translates": [{
              "id": 8,
              "ayah": 8,
              "lang": "fa",
              "translate": "الف لام ميم ",
              "audios": [{
                "qarie": " فولاوند هدایتفر",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/2\/8.mp3"
              }, {
                "qarie": "مکارم کبیری",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/2\/8.mp3"
              }]
            }, {
              "id": 11244,
              "ayah": 8,
              "lang": "en",
              "translate": "AlifLaamMeem.",
              "audios": []
            }]
          }, {
            "ayah": {
              "id": 9,
              "surah": 2,
              "number": 2,
              "page": 2,
              "ayah": "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ",
              "plain": "ذلك الكتاب لا ريب فيه هدى للمتقين",
              "audios": [{
                "qarie": "عبدالباسط - مرتل",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
              }, {
                "qarie": "منشاوی",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
              }, {
                "qarie": "منشاوی موجاواد",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
              }, {
                "qarie": "منشاوی مرتل",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
              }, {
                "qarie": "ناصر القطامی",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
              }, {
                "qarie": "شهریار پرهیزکار",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
              }...]
            },
            "translates": [{
              "id": 9,
              "ayah": 9,
              "lang": "fa",
              "translate": "اين است كتابى كه در [حقانيت] آن هيچ ترديدى نيست [و] مايه هدايت تقواپيشگان است ",
              "audios": [{
                "qarie": " فولاوند هدایتفر",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/2\/9.mp3"
              }, {
                "qarie": "مکارم کبیری",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/2\/9.mp3"
              }]
            }, {
              "id": 11245,
              "ayah": 9,
              "lang": "en",
              "translate": "That is the (Holy) Book, where there is no doubt. It is a guidance for the cautious (of evil and Hell).",
              "audios": []
            }]
          }, {
            "ayah": {
              "id": 10,
              "surah": 2,
              "number": 3,
              "page": 2,
              "ayah": "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ",
              "plain": "الذين يؤمنون بالغيب ويقيمون الصلاة ومما رزقناهم ينفقون",
              "audios": [{
                "qarie": "عبدالباسط - مرتل",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
              }, {
                "qarie": "منشاوی",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
              }, {
                "qarie": "منشاوی موجاواد",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
              }, {
                "qarie": "منشاوی مرتل",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
              }, {
                "qarie": "ناصر القطامی",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
              }, {
                "qarie": "شهریار پرهیزکار",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
              }...]
            },
            "translates": [{
              "id": 10,
              "ayah": 10,
              "lang": "fa",
              "translate": "آنان كه به غيب ايمان مى ‏آورند و نماز را بر پا مى دارند و از آنچه به ايشان روزى داده‏ ايم انفاق مى كنند ",
              "audios": [{
                "qarie": " فولاوند هدایتفر",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/2\/10.mp3"
              }, {
                "qarie": "مکارم کبیری",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/2\/10.mp3"
              }]
            }, {
              "id": 11246,
              "ayah": 10,
              "lang": "en",
              "translate": "Who believe in the unseen and establish the (daily) prayer; who spend out of what We have provided them.",
              "audios": []
            }]
          }, {
            "ayah": {
              "id": 11,
              "surah": 2,
              "number": 4,
              "page": 2,
              "ayah": "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ",
              "plain": "والذين يؤمنون بما انزل اليك وما انزل من قبلك وبالآخرة هم يوقنون",
              "audios": [{
                "qarie": "عبدالباسط - مرتل",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
              }, {
                "qarie": "منشاوی",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
              }, {
                "qarie": "منشاوی موجاواد",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
              }, {
                "qarie": "منشاوی مرتل",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
              }, {
                "qarie": "ناصر القطامی",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
              }, {
                "qarie": "شهریار پرهیزکار",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
              }...]
            },
            "translates": [{
              "id": 11,
              "ayah": 11,
              "lang": "fa",
              "translate": "و آنان كه بدانچه به سوى تو فرود آمده و به آنچه پيش از تو نازل شده است ايمان مى آورند و آنانند كه به آخرت يقين دارند ",
              "audios": [{
                "qarie": " فولاوند هدایتفر",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/2\/11.mp3"
              }, {
                "qarie": "مکارم کبیری",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/2\/11.mp3"
              }]
            }, {
              "id": 11247,
              "ayah": 11,
              "lang": "en",
              "translate": "Who believe in that which has been sent down to you (Prophet Muhammad) and what has been sent down before you (to Prophets Jesus and Moses) and firmly believe in the Everlasting Life.",
              "audios": []
            }]
          }, {
            "ayah": {
              "id": 12,
              "surah": 2,
              "number": 5,
              "page": 2,
              "ayah": "أُولَئِكَ عَلَى هُدًى مِنْ رَبِّهِمْ وَأُولَئِكَ هُمُ الْمُفْلِحُونَ",
              "plain": "اولئك على هدى من ربهم واولئك هم المفلحون",
              "audios": [{
                "qarie": "عبدالباسط - مرتل",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/1\/1.mp3"
              }, {
                "qarie": "منشاوی",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/1\/1.mp3"
              }, {
                "qarie": "منشاوی موجاواد",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/1\/1.mp3"
              }, {
                "qarie": "منشاوی مرتل",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/1\/1.mp3"
              }, {
                "qarie": "ناصر القطامی",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Nasser Alqatami\/1\/1.mp3"
              }, {
                "qarie": "شهریار پرهیزکار",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/1\/1.mp3"
              }...]
            },
            "translates": [{
              "id": 12,
              "ayah": 12,
              "lang": "fa",
              "translate": "آنان برخوردار از هدايتى از سوى پروردگار خويشند و آنان همان رستگارانند ",
              "audios": [{
                "qarie": " فولاوند هدایتفر",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/2\/12.mp3"
              }, {
                "qarie": "مکارم کبیری",
                "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/2\/12.mp3"
              }]
            }, {
              "id": 11248,
              "ayah": 12,
              "lang": "en",
              "translate": "These are guided by their Lord; these surely are the prosperous.",
              "audios": []
            }]
          }]
        }
      }
}	
            </code>
          </pre>
                    </div>
                </div>
            </div>
        </div>
        <div id="get-ayeh" v-intersect="onIntersectAyeh">
            <div style="font-size: 24px">گرفتن آیه</div>
            <v-divider class="my-4"></v-divider>
            <div>
                <p>
                    برای دریافت آیه نیاز به شماره آیه به همراه شماره سوره است . (در متد
                    <a class="link-style" href="#">گرفتن تمام سوره ها </a> میتوانید شماره
                    سوره را پیدا کنید) . شماره سوره ها در تکویر، شماره سوره در لیست قرآن
                    است
                </p>
                <p>شماره سوره ها در تکویر، شماره سوره در لیست قرآن است</p>
                <p>
                    ترجمه ی هر آیه به دو زبان فارسی و انگلیسی موجود میباشد که در صورت
                    افزودن پارامتر <span class="bold-word">lang</span> میتوانید نوع زبان
                    را مشخص کنید
                </p>
                <div>
                    <table class="mt-4">
                        <tr class="tr-title">
                            <th style="font-weight: 800; color: #7b7d7f">پارامتر</th>
                            <th style="font-weight: 800; color: #7b7d7f">اجباری؟</th>
                            <th style="font-weight: 800; color: #7b7d7f">توضیحات</th>
                            <th style="font-weight: 800; color: #7b7d7f">نمونه</th>
                        </tr>
                        <tr>
                            <th>lang</th>
                            <th>اختیاری</th>
                            <th>
                                نوع زبان ترجمه ی آیه (fa نشان دهنده زبان فارسی و en نشان دهنده ی
                                زبان انگلیسی) - پیشفرض زبان فارسی
                            </th>
                            <th>en</th>
                        </tr>
                    </table>
                    <table class="mt-4">
                        <tr class="tr-title">
                            <th style="font-weight: 800; color: #7b7d7f">مشخصه</th>
                            <th style="font-weight: 800; color: #7b7d7f">توضیحات</th>
                        </tr>
                        <tr>
                            <th>surah</th>
                            <th>شماره سوره</th>
                        </tr>
                        <tr>
                            <th>number</th>
                            <th>شماره آیه</th>
                        </tr>
                        <tr>
                            <th>page</th>
                            <th>شماره صفحه</th>
                        </tr>
                        <tr>
                            <th>ayah</th>
                            <th>متن آیه قرآن</th>
                        </tr>
                        <tr>
                            <th>plain</th>
                            <th>متن ساده و بدون اعراب آیه قرآن</th>
                        </tr>
                    </table>
                    <div>
                        <p style="font-size: 18px; font-weight: 400" class="mt-3">
                            آدرس ارسالی
                        </p>
                        <p class="address">
                            https://takv.ir/surah/{SurahID}/{AyahID}?api=1
                        </p>

                        <p style="font-size: 18px; font-weight: 400" class="mt-8">
                            نمونه درخواست
                        </p>
                        <v-divider class="my-4"></v-divider>
                        <p class="code-box">GET https://takv.ir/surah/55/13?api=1</p>
                        <p>پاسخ</p>
                        <pre class="code-box">
            <code>			
{
      "status": true,
      "items": [{
        "ayah": {
          "id": 4914,
          "surah": 55,
          "number": 13,
          "page": 531,
          "ayah": "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
          "plain": "فباي آلاء ربكما تكذبان",
          "audios": [{
            "qarie": "عبدالباسط",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit\/55\/4914.mp3"
          }, {
            "qarie": "عبدالباسط - مرتل",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/AbdulBasit - murattal\/55\/4914.mp3"
          }, {
            "qarie": "عبدالله عواد الجهنی",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Abdullah Awad Al Juhany\/55\/4914.mp3"
          }, {
            "qarie": "أبو بكر الشاطري",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Abu Bakr Ash-Shaatree\/55\/4914.mp3"
          }, {
            "qarie": "فارس عباد",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fares Abbad\/55\/4914.mp3"
          }, {
            "qarie": "منشاوی",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Menshawi\/55\/4914.mp3"
          }, {
            "qarie": "منشاوی موجاواد",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Mujawwad\/55\/4914.mp3"
          }, {
            "qarie": "منشاوی مرتل",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Minshawy Murattal\/55\/4914.mp3"
          }, {
            "qarie": "شهریار پرهیزکار",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Shahriar Parhizgar\/55\/4914.mp3"
          }...]
        },
        "translates": [{
          "id": 9914,
          "ayah": 4914,
          "lang": "fa",
          "translate": "پس كدام يك از نعمتهاى پروردگارتان را منكريد ",
          "audios": [{
            "qarie": " فولاوند هدایتفر",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Fooladvand Hedayatfar\/55\/4914.mp3"
          }, {
            "qarie": "مکارم کبیری",
            "url": "http:\/takvir.anbari.space\/packages\/takvir\/storage\/public\/Makarem Kabiri\/55\/4914.mp3"
          }]
        }, {
          "id": 16150,
          "ayah": 4914,
          "lang": "en",
          "translate": "Which favors of your Lord will you both (humans and jinn) belie?",
          "audios": []
        }]
      }]
}
            </code>
          </pre>
                    </div>
                </div>
            </div>
        </div>
        <div id="search" class="mb-8" v-intersect="onIntersectSearch">
            <div style="font-size: 24px">جستجو</div>
            <v-divider class="my-4"></v-divider>
            <div>
                <p>
                    در این متد میتوانید حروف و کلماتی را در اسم سوره ها، متن قرآن و متن
                    ترجمه ی قرآن جستجو کنید .
                </p>
                <div>
                    <table class="mt-4">
                        <tr class="tr-title">
                            <th style="font-weight: 800; color: #7b7d7f">پارامتر</th>
                            <th style="font-weight: 800; color: #7b7d7f">اجباری؟</th>
                            <th style="font-weight: 800; color: #7b7d7f">توضیحات</th>
                            <th style="font-weight: 800; color: #7b7d7f">نمونه</th>
                        </tr>
                        <tr>
                            <th>word</th>
                            <th>اجباری</th>
                            <th>کلمه ای که به دنبال آن هستید</th>
                            <th>معارج</th>
                        </tr>
                    </table>
                    <div>
                        <p style="font-size: 18px; font-weight: 400" class="mt-3">
                            آدرس ارسالی
                        </p>
                        <p class="address">https://takv.ir/search?word=term&api=1</p>

                        <p style="font-size: 18px; font-weight: 400" class="mt-8">
                            نمونه درخواست
                        </p>
                        <v-divider class="my-4"></v-divider>
                        <p class="code-box">GET https://takv.ir/search?word=معارج&api=1</p>
                        <p>پاسخ</p>
                        <pre class="code-box">
            <code>			
{
      "status": true,
      "items": [{
        "type": "surah",
        "id": 70,
        "title_fa": "المعارج",
        "title_en": "Al-Maarij",
        "url": "\/surah\/70"
      }, {
        "type": "ayah",
        "id": 4358,
        "surah": 43,
        "number": 33,
        "page": 491,
        "ayah": "وَلَوْلَا أَنْ يَكُونَ النَّاسُ أُمَّةً وَاحِدَةً لَجَعَلْنَا لِمَنْ يَكْفُرُ بِالرَّحْمَنِ لِبُيُوتِهِمْ سُقُفًا مِنْ فِضَّةٍ وَمَعَارِجَ عَلَيْهَا يَظْهَرُونَ",
        "plain": "ولولا ان يكون الناس امة واحدة لجعلنا لمن يكفر بالرحمن لبيوتهم سقفا من فضة ومعارج عليها يظهرون",
        "translate": {
          "id": 9358,
          "ayah": 4358,
          "lang": "fa",
          "translate": "و اگر نه آن بود كه [همه] مردم [در انكار خدا] امتى واحد گردند قطعا براى خانه ‏هاى آنان كه به [خداى] رحمان كفر مى ‏ورزيدند سقفها و نردبانهايى از نقره كه بر آنها بالا روند قرار مى‏ داديم "
        },
        "url": "\/surah\/43\/33"
      }, {
        "type": "ayah",
        "id": 5378,
        "surah": 70,
        "number": 3,
        "page": 568,
        "ayah": "مِنَ اللَّهِ ذِي الْمَعَارِجِ",
        "plain": "من الله ذي المعارج",
        "translate": {
          "id": 10378,
          "ayah": 5378,
          "lang": "fa",
          "translate": "[و] از جانب خداوند صاحب درجات [و مراتب] است "
        },
        "url": "\/surah\/70\/3"
      }]
}
            </code>
          </pre>
                    </div>
                </div>
            </div>
        </div>
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
    props: {
        // navItem: {
        //   type: undefined,
        //   require: true,
        // },
        currentNavItem: {
            type: undefined,
            require: true,
        },
    },
    methods: {
        onIntersectStart(isIntersecting) {
            if (isIntersecting) {
                this.$emit("update:currentNavItem", "start");
            }
        },
        onIntersectSurahs(isIntersecting) {
            if (isIntersecting) {
                this.$emit("update:currentNavItem", "get-surahs");
            }
        },
        onIntersectQari(isIntersecting) {
            if (isIntersecting) {
                this.$emit("update:currentNavItem", "get-qaries");
            }
        },
        onIntersectSurah(isIntersecting) {
            if (isIntersecting) {
                this.$emit("update:currentNavItem", "get-surah");
            }
        },
        onIntersectPage(isIntersecting) {
            if (isIntersecting) {
                this.$emit("update:currentNavItem", "get-page");
            }
        },
        onIntersectAyeh(isIntersecting) {
            if (isIntersecting) {
                this.$emit("update:currentNavItem", "get-ayeh");
            }
        },
        onIntersectSearch(isIntersecting) {
            if (isIntersecting) {
                this.$emit("update:currentNavItem", "search");
            }
        },
    },
    watch: {
        currentNavItem(newValue) {
            console.log(newValue);
            window.location.hash = newValue;
            return;

            document.getElementById(newValue).scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        },
    },
});
</script>
<style lang="scss">
.api-content-con {
  padding-left: 7%;
  font-family: yekan;
  color: #939598;
  font-size: 14px;
  line-height: 32px;
  .bold-word {
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
    padding-top: 3px;
    padding-right: 4px;
    padding-left: 4px;
    font-size: 13px;
  }
  .link-style {
    text-decoration: none;
    color: #2ca4ab;
  }
  .address {
    float: left;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
    padding-right: 5px;
    padding-left: 5px;
  }
  .code-box {
    overflow: hidden;
    white-space: pre-wrap;

    line-break: auto;
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    margin-bottom: 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333333;
    word-break: break-all;
    word-wrap: break-word;
    word-break: break-all;
    overflow-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    direction: ltr;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  tr,
  th {
    border: 1px solid #dddddd;
    text-align: right;
    padding: 8px;
  }
  .tr-title {
    border-bottom: 2px solid #dddddd;
  }
  table {
    font-family: yekan;
  }
}
.top-menu {
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;

  .top-menu-title {
    font-family: yekan;
    color: #939598;
    font-size: 14px;
  }

}
.list-item-style{
    line-height: 10px;
    color:  #939598;
    font-size: 14px;
    &:hover{
      color:#2ca4ab;
    }
    .v-list-item__prepend{
      width: 30px;
    }
  }
.top-menu-display {
  display: block;
  padding-top: 0px;
  margin-top: 0px;
}
@media (min-width: 959px) {
  .top-menu-display {
    display: none;
  }
}
@media (max-width: 959px) {
  .api-content-con {
    padding-right: 7%;
    padding-top: 0px;
    margin-top: 0px;
  }
  #start {
    margin-top: 25px;
  }
}
</style>

