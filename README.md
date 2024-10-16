# Objects-js

Yandex cup masalasi




Вы устроились работать в лабораторию по изучению антиматерии, где проводят различные опыты. Ваш отдел изучает процессы, которые происходят при объединении материи и антиматерии. Вам необходимо провести серию опытов над некоторым количеством молекул.

Соседний отдел разработал аппарат, который превращает материю в антиматерию на небольшое время. Он пригодится вам в проведении опытов, в которых используется следующий алгоритм:

Находим 2 самых тяжёлых молекулы.
Одну из них превращаем в антиматерию.
Объединяем их. При этом, если вес одинаковый, они аннигилируются. Если же вес различается, то мы получаем новую молекулу, вес которой равен разнице весов предыдущих двух. Сама получившаяся молекула является материей.
Если осталась одна молекула — нужно выяснить её вес. Если же молекул много — возвращаемся к пункту 1.
Вам необходимо узнать, молекула какого веса останется в конце опыта, это знание нужно учёным другого отдела.

Предыдущий разработчик набросал код, который занимался этими расчётами, однако код не может закончить расчёты в случае, когда опыт проводится на большом количестве молекул. Вам необходимо усовершенствовать код, чтобы он работал за приемлемое время.

Код, доставшийся вам в «наследство»

В качестве входных данных у вас будет массив с весами молекул. В качестве выходных данных необходимо вернуть число, которое обозначает вес последней молекулы. Если молекул не останется, то необходимо вернуть 0.




Siz antimateriya tadqiqotlari bo‘yicha tajribalar o‘tkazilayotgan laboratoriyaga ishga kirdingiz. Sizning bo‘limingiz materiya va antimateriya birlashganda sodir bo‘ladigan jarayonlarni o‘rganmoqda. Tajribalar o‘tkazish uchun sizga ma’lum miqdordagi molekulalar bilan ishlash kerak bo‘ladi.

Qo‘shni bo‘lim materiyani qisqa vaqtga antimateriyaga aylantiradigan qurilma ishlab chiqdi. Bu qurilma sizga quyidagi algoritm asosida tajribalar o‘tkazishda yordam beradi:

Eng og‘ir 2 molekulani topamiz.
Ular orasidan birini antimateriyaga aylantiramiz.
Ularni birlashtiramiz. Agar ularning vazni bir xil bo‘lsa, ular annihilatsiya qilinadi. Agar vaznlar farq qilsa, biz yangi molekula hosil qilamiz, uning vazni avvalgi ikkita molekulaning vaznlaridagi farqga teng bo‘ladi. Hosil bo‘lgan molekula materiya hisoblanadi.
Agar bitta molekula qolgan bo‘lsa, uning vaznini aniqlash kerak bo‘ladi. Agar ko‘p molekulalar qolgan bo‘lsa, 1-qadamga qaytamiz.
Siz tajriba natijasida oxirida qanday vaznga ega molekula qolishini aniqlashingiz kerak, chunki bu ma’lumot boshqa bo‘lim olimlariga zarur.

Oldingi dasturchi bu hisob-kitoblarni amalga oshiradigan dastur yozgan edi, lekin kod katta miqdordagi molekulalar bilan ishlaganda hisob-kitoblarni tugata olmaydi. Siz kodni takomillashtirib, uni maqbul vaqt ichida ishlashini ta’minlashingiz kerak.

Sizga kiritish ma’lumotlari sifatida molekulalar og‘irligi ro‘yxati beriladi. Natijada esa so‘nggi molekulaning og‘irligi ko‘rsatilgan raqamni qaytarish kerak. Agar molekulalar qolmasa, natija sifatida 0 ni qaytarish kerak bo‘ladi.




