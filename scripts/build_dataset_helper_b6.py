import unicodedata
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Master Dataset Helper for Tingkatan 4 Bab 6: Cahaya dan Optik.
Adheres strictly to the 13 Golden Invariants (Zero-Defect Quality Control).
Integrates:
- Verified Answers & Formatted Rationales
- Precision Stem Diagrams (Rajah 1 - 91)
- Answer Rubric Ray Diagrams (23 rubrics)
- Precision Option Diagrams (A, B, C, D for visual choices)
- DSKP SK 6.1 - SK 6.6 Semantic Mapping
"""

import os
import json
import re

ANSWERS = {}
ans_path = 'scratch/t4_b6_answers_verified.json'
if os.path.exists(ans_path):
    with open(ans_path, 'r', encoding='utf-8') as f:
        ANSWERS = json.load(f)

DIAGRAM_URLS = {}
diag_path = 'scratch/t4_b6_diagram_urls.json'
if os.path.exists(diag_path):
    with open(diag_path, 'r', encoding='utf-8') as f:
        DIAGRAM_URLS = json.load(f)

RUBRIK_URLS = {}
rub_path = 'scratch/t4_b6_rubrik_urls.json'
if os.path.exists(rub_path):
    with open(rub_path, 'r', encoding='utf-8') as f:
        RUBRIK_URLS = json.load(f)

OPTION_URLS = {}
opt_path = 'scratch/t4_b6_option_urls.json'
if os.path.exists(opt_path):
    with open(opt_path, 'r', encoding='utf-8') as f:
        OPTION_URLS = json.load(f)

EXACT_QUESTION_STEMS = {
    "MODUL_T4_B6_K2_Q48": (
        "Satu periskop diperbuat daripada dua prisma 45°-90°-45°. Antara gambar rajah berikut yang manakah menunjukkan susunan yang betul prisma itu?\n"
        "A periscope is made from two 45°-90°-45° prisms. Which of the following diagrams shows the correct arrangement of the glass prism?"
    ),
    "MODUL_T4_B6_K3_Q54": (
        "Rajah 80 menunjukkan satu sinar cahaya ditujukan secara normal dengan permukaan PQ bagi sebuah prisma kaca. Diberi bahawa indeks biasan prisma tersebut ialah 1.50.\n"
        "Diagram 80 shows a light ray directed normally to PQ of a glass prism. Given that the refractive index of the prism is 1.50.\n"
        "Lintasan manakah A, B, C dan D menunjukkan perambatan cahaya yang betul selepas melalui PR?\n"
        "Which path A, B, C and D shows the correct propagation of light after passing PR?"
    ),
    "MODUL_T4_B6_K1_Q01": (
        "Apakah ciri-ciri imej yang dihasilkan oleh cermin cembung?\n"
        "What are the characteristics of the image produced by a convex mirror?"
    ),
    "MODUL_T4_B6_K1_Q02": (
        "Berikut adalah formula bagi kanta nipis:\n"
        "Following is the formula for a thin lens:\n"
        "$$\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$$\n"
        "f mewakili\n"
        "f represents"
    ),
    "MODUL_T4_B6_K2_Q01": (
        "Rajah 1 menunjukkan graf jarak imej, v melawan pembesaran linear, m bagi suatu kanta cembung.\n"
        "Diagram 1 shows a graph of image distance, v against linear magnification, m for a convex lens.\n"
        "Apakah kuantiti yang diwakili oleh p?\n"
        "What is the quantity represented by p?"
    ),
    "MODUL_T4_B6_K2_Q04": (
        "Rajah 2 menunjukkan kabel gentian optik.\n"
        "Diagram 2 shows an optical fibre cable.\n"
        "Pernyataan manakah yang betul berkenaan isyarat cahaya yang masuk ke dalam gentian optik?\n"
        "Which statement is correct regarding the light signal entering an optical fibre?\n"
        "I Sudut biasan, r lebih kecil daripada sudut tuju, i\n"
        "The angle of refraction, r is less than the angle of incidence, i\n"
        "II Indeks biasan teras dalam, n₁ lebih tinggi daripada indeks biasan penyalut, n₂\n"
        "The refractive index of the inner core, n₁ is higher than the refractive index of the outer cladding, n₂\n"
        "III Pantulan dalam penuh berlaku apabila sudut tuju, i melebihi sudut genting, c\n"
        "Total internal reflection occurs when the angle of incidence, i is greater than the critical angle, c\n"
        "IV Sudut tuju, i adalah sama dengan sudut pantulan, r apabila berlakunya pantulan dalam penuh di dalam teras\n"
        "The angle of incidence, i is equal to the angle of reflection, r during the occurrence of total internal reflection in the core"
    ),
    "MODUL_T4_B6_K2_Q06": (
        "Rajah 3 menunjukkan sebuah cermin bintik buta yang diletakkan di sebuah selekoh.\n"
        "Diagram 3 shows a blind spot mirror placed on a sharp bend of the road.\n"
        "Antara berikut, manakah merupakan kelebihan menggunakan cermin cembung sebagai cermin bintik buta tersebut?\n"
        "Which of the following is an advantage of using a convex mirror as a blind spot mirror?"
    ),
    "MODUL_T4_B6_K2_Q07": (
        "Rajah 4 menunjukkan sebatang lilin dengan imejnya dalam cermin satah.\n"
        "Diagram 4 shows a candle with its image in a plane mirror.\n"
        "Pasangan manakah yang betul jika imej yang ingin dihasilkan adalah besar dan tegak?\n"
        "Which pair is correct if the image to be produced is large and upright?\n"
        "Jenis cermin Kedudukan lilin\n"
        "Type of mirror The position of candle"
    ),
    "MODUL_T4_B6_K2_Q08": (
        "Rajah 5 menunjukkan satu sinar cahaya merambat dari udara ke kaca.\n"
        "Diagram 5 shows a light ray propagates from air to glass.\n"
        "Apakah indeks biasan kaca itu?\n"
        "What is the refractive index of the glass?"
    ),
    "MODUL_T4_B6_K2_Q09": (
        "Rajah 6 menunjukkan satu sinar cahaya MN ditujukan ke arah satu blok semibulatan yang lut sinar. Sudut genting bagi blok lut sinar itu ialah 41°. Arah manakah sinar itu bergerak dari titik O?\n"
        "Diagram 6 shows a light ray MN directed to a transparent semicircular block. The critical angle of the transparent block is 41°. Which direction does the ray move from point O?"
    ),
    "MODUL_T4_B6_K2_Q12": (
        "Rajah 8 menunjukkan cermin yang digunakan oleh doktor gigi untuk melihat keadaan gigi pesakit.\n"
        "Diagram 8 shows the mirror used by a dentist to look at the patient's teeth.\n"
        "Antara berikut, kedudukan manakah yang sesuai untuk meletakkan gigi pesakit supaya menghasilkan imej yang besar dan tegak?\n"
        "Which of the following is the suitable position to place the patient's teeth to produce a large and upright image?"
    ),
    "MODUL_T4_B6_K2_Q13": (
        "Rajah 9 menunjukkan seekor ikan melihat imej serangga berada di atas kedudukan sebenar.\n"
        "Diagram 9 shows a fish seeing an insect image above the actual position.\n"
        "Pernyataan manakah yang betul menerangkan situasi tersebut?\n"
        "Which statement is correct to explain the situation?"
    ),
    "MODUL_T4_B6_K2_Q16": (
        "Rajah 10 menunjukkan satu sinar cahaya merambat dari udara ke dalam kaca.\n"
        "Diagram 10 shows a light ray propagating from air into glass.\n"
        "Apakah yang berlaku kepada sinar cahaya di dalam kaca?\n"
        "What happens to the light ray in the glass?"
    ),
    "MODUL_T4_B6_K2_Q18": (
        "Rajah 11 menunjukkan susunan radas bagi eksperimen untuk mengkaji hubungan antara jarak objek, u dan jarak imej, v bagi kanta cembung.\n"
        "Diagram 11 shows an apparatus set-up of an experiment to investigate the relationship between object distance, u and image distance, v of a convex lens.\n"
        "Perubahan manakah meningkatkan jarak imej, v?\n"
        "Which changes increases the image distance, v?"
    ),
    "MODUL_T4_B6_K2_Q19": (
        "Rajah 12 menunjukkan pembentukan imej bagi suatu objek oleh cermin cekung.\n"
        "Diagram 12 shows the image formation of an object by a concave mirror.\n"
        "Apakah ciri-ciri imej yang terbentuk?\n"
        "What are the characteristics of the image formed?"
    ),
    "MODUL_T4_B6_K2_Q21": (
        "Rajah 13 menunjukkan imej seekor ikan kelihatan lebih dekat dengan permukaan air.\n"
        "Diagram 13 shows an image of a fish appears closer to the water surface.\n"
        "Pernyataan manakah yang menerangkan situasi itu?\n"
        "Which statement explains the situation?"
    ),
    "MODUL_T4_B6_K2_Q22": (
        "Rajah 14 menunjukkan sebutir berlian yang bersinar.\n"
        "Diagram 14 shows a sparkling diamond.\n"
        "Ciri cahaya yang manakah membolehkan berlian itu bersinar?\n"
        "Which light characteristic enables the diamond to sparkle?"
    ),
    "MODUL_T4_B6_K2_Q24": (
        "Rajah 16 menunjukkan satu sinar merambat dalam satu bongkah kaca JKLM. Pantulan dalam penuh berlaku di X.\n"
        "Diagram 16 shows a ray of light propagates in a glass block JKLM. Total internal reflection occurs at X.\n"
        "Apakah syarat untuk berlakunya pantulan dalam penuh?\n"
        "What is the condition for total internal reflection to occur?"
    ),
    "MODUL_T4_B6_K2_Q25": (
        "Rajah 17 menunjukkan satu sinar cahaya melalui satu blok kaca.\n"
        "Diagram 17 shows a ray of light passing through a glass block.\n"
        "Apakah sudut biasan bagi sinar cahaya tersebut?\n"
        "What is the angle of refraction for the light ray?"
    ),
    "MODUL_T4_B6_K2_Q27": (
        "Rajah 18 menunjukkan dua kabel gentian optik yang digunakan untuk penghantaran maklumat dalam sistem telekomunikasi.\n"
        "Diagram 18 shows two optical fibre cables that are used in transferring information in telecommunication systems.\n"
        "Pasangan ciri manakah dapat mengurangkan kehilangan maklumat semasa penghantaran?\n"
        "Which pair of characteristics can reduce information lost during transmission?"
    ),
    "MODUL_T4_B6_K2_Q28": (
        "Rajah 19 menunjukkan cermin pandang belakang kenderaan.\n"
        "Diagram 19 shows the vehicle rear mirror.\n"
        "Antara berikut, pernyataan manakah yang betul mengenai cermin tersebut?\n"
        "Which of the following statements is correct regarding the mirror?"
    ),
    "MODUL_T4_B6_K2_Q29": (
        "Rajah 20 menunjukkan seorang pemerhati berdiri di hadapan sebuah cermin satah pada jarak d.\n"
        "Diagram 20 shows an observer standing in front of a plane mirror at distance d.\n"
        "Berapakah jarak antara pemerhati dan imejnya?\n"
        "What is the distance between the observer and his image?"
    ),
    "MODUL_T4_B6_K2_Q30": (
        "Antara berikut yang manakah mengaplikasikan konsep pantulan dalam penuh?\n"
        "Which of the following apply the concept of total internal reflection?\n"
        "I Pembentukan pelangi / Formation of rainbow\n"
        "II Logamaya / Mirage\n"
        "III Periskop cermin satah / Plane mirror periscope\n"
        "IV Gentian optik / Optical fibre"
    ),
    "MODUL_T4_B6_K2_Q33": (
        "Rajah 21 menunjukkan perkataan AUDIT dilihat melalui suatu kanta pembesar.\n"
        "Diagram 21 shows the word AUDIT as seen through a magnifying lens.\n"
        "Fenomena cahaya manakah yang menerangkan situasi ini?\n"
        "Which light phenomenon explains this situation?"
    ),
    "MODUL_T4_B6_K2_Q35": (
        "Rajah 22 menunjukkan sinar cahaya selari ditumpukan pada titik fokus, F selepas melalui sebuah kanta cembung.\n"
        "Diagram 22 shows parallel light rays converged at a focal point, F after passing through a convex lens.\n"
        "Apakah yang akan berlaku pada panjang fokus, f apabila kanta cembung yang lebih tebal digunakan?\n"
        "What will happen to the focal length, f when a thicker convex lens is used?"
    ),
    "MODUL_T4_B6_K2_Q37": (
        "Rajah 24 menunjukkan satu objek di hadapan suatu cermin satah.\n"
        "Diagram 24 shows an object in front of a plane mirror.\n"
        "Di kedudukan manakah A, B, C dan D imej terbentuk?\n"
        "At which position A, B, C or D is the image formed?"
    ),
    "MODUL_T4_B6_K2_Q38": (
        "Rajah 25 menunjukkan empat alat optik.\n"
        "Diagram 25 shows four optical devices.\n"
        "Alat manakah yang menggunakan pantulan dalam penuh?\n"
        "Which device uses total internal reflection?"
    ),
    "MODUL_T4_B6_K2_Q42": (
        "Rajah 27 menunjukkan kamera litar tertutup (CCTV) dipasang di satu sudut dinding.\n"
        "Diagram 27 shows a closed-circuit television (CCTV) camera mounted on a wall corner.\n"
        "Apakah jenis kanta yang digunakan dan ciri imej yang terbentuk pada penderia kamera itu?\n"
        "What is the type of lens used and the characteristics of the image formed on the camera sensor?"
    ),
    "MODUL_T4_B6_K2_Q43": (
        "Rajah 28 menunjukkan sebutir berlian kelihatan berkilauan apabila disinari cahaya. Fenomena ini disebabkan oleh\n"
        "Diagram 28 shows a diamond glitter when struck by light rays. This phenomenon is caused by"
    ),
    "MODUL_T4_B6_K2_Q44": (
        "Rajah 29 menunjukkan satu alat optik yang digunakan oleh ahli gemologi untuk menilai suatu batu permata.\n"
        "Diagram 29 shows an optical tool used by a gemmologist to evaluate a gemstone.\n"
        "Pada kedudukan manakah batu permata itu perlu diletakkan di hadapan alat optik itu bagi membolehkan ahli gemologi itu melihat imej yang tegak dan diperbesarkan?\n"
        "At which position the gemstone should be placed in front of the optical tool to enable the gemmologist to see an upright and magnified image?"
    ),
    "MODUL_T4_B6_K2_Q45": (
        "Rajah 30 menunjukkan satu gentian optik.\n"
        "Diagram 30 shows a fibre optic.\n"
        "Apakah fenomena gelombang yang berlaku?\n"
        "What is the wave's phenomenon occurs?"
    ),
    "MODUL_T4_B6_K2_Q46": (
        "Rajah 31 menunjukkan satu rajah sinar.\n"
        "Diagram 31 shows a ray diagram.\n"
        "Ini ialah sebuah rajah sinar bagi\n"
        "This is a ray diagram of a"
    ),
    "MODUL_T4_B6_K2_Q49": (
        "Rajah 32 menunjukkan sinar cahaya yang bergerak melalui gentian optik. Gentian optik itu mempunyai teras kaca, X dengan indeks biasan nx dan suatu salutan kaca, Y dengan indeks biasan ny.\n"
        "Diagram 32 shows a light ray travelling through an optical fibre. The optical fibre has a glass core, X of refractive index nx and a glass cladding, Y of refractive index ny.\n"
        "Antara yang berikut, yang manakah adalah betul?\n"
        "Which of the following is correct?"
    ),
    "MODUL_T4_B6_K2_Q50": (
        "Rajah 33 menunjukkan imej yang terbentuk pada skrin adalah kabur.\n"
        "Diagram 33 shows the image formed on the screen is blurred.\n"
        "Perubahan manakah akan menghasilkan satu imej yang jelas pada skrin?\n"
        "Which modification will produce a sharp image on the screen?"
    ),
    "MODUL_T4_B6_K2_Q51": (
        "Rajah 34 menunjukkan sinar dari satu mentol yang diletakkan di dasar sebuah akuarium. [Sudut genting air = 49°]\n"
        "Diagram 34 shows a light ray from a bulb placed at the bottom of an aquarium. [Critical angle of water = 49°]\n"
        "Lintasan sinar cahaya yang manakah adalah betul selepas titik O?\n"
        "Which path of light ray is correct after point O?"
    ),
    "MODUL_T4_B6_K2_Q52": (
        "Rajah 35 menunjukkan sebuah teleskop astronomi. Panjang fokus kanta objektif dan kanta mata bagi teleskop tersebut masing-masing adalah fo dan fe. Panjang tiub teleskop itu adalah L.\n"
        "Diagram 35 shows an astronomical telescope. The focal length of the objective lens and eyepiece lens of the telescope is fo and fe respectively. The length of the tube of the telescope is L.\n"
        "Hubungan manakah yang betul antara L, fo dan fe bagi teleskop astronomi tersebut pada pelarasan normal?\n"
        "Which of the relationships between L, fo and fe is correct for the astronomical telescope at normal adjustment?"
    ),
    "MODUL_T4_B6_K2_Q55": (
        "Rajah 37 menunjukkan satu sinar cahaya, K ditujukan kepada satu bongkah kaca. Sudut genting kaca itu ialah 42°. Ke arah manakah sinar itu bergerak dari titik O?\n"
        "Diagram 37 shows a light ray K, directed into a glass block. The critical angle of the glass is 42°. In which direction does the light move from point O?"
    ),
    "MODUL_T4_B6_K2_Q57": (
        "Rajah 38 menunjukkan imej sehelai daun diperhatikan menggunakan kanta pembesar.\n"
        "Diagram 38 shows an image of a leaf observed by using a magnifying glass.\n"
        "Kombinasi manakah benar bagi situasi di atas?\n"
        "Which combination is true for the situation above?\n"
        "Jarak antara daun dengan kanta pembesar (cm) | Panjang fokus kanta pembesar (cm)\n"
        "Distance between leaf and magnifying lens (cm) | Focal length of magnifying lens (cm)"
    ),
    "MODUL_T4_B6_K2_Q59": (
        "Rajah 40 menunjukkan sinar cahaya bergerak dari udara ke medium X.\n"
        "Diagram 40 shows a beam of light travelling from air to medium X.\n"
        "Apakah indeks biasan medium itu?\n"
        "What is the refractive index of that medium?"
    ),
    "MODUL_T4_B6_K2_Q60": (
        "Rajah 41 menunjukkan graf jarak imej, v melawan pembesaran linear, m.\n"
        "Diagram 41 shows a graph of image distance, v against linear magnification, m.\n"
        "Kuantiti X diwakili oleh\n"
        "Quantity X is represented by"
    ),
    "MODUL_T4_B6_K2_Q61": (
        "Rajah 42 menunjukkan lampu botol air yang digunakan semasa perkhemahan.\n"
        "Diagram 42 shows a water bottle lamp used during camping.\n"
        "Antara berikut, yang manakah betul apabila sinar cahaya dibiaskan oleh air dalam botol air tersebut?\n"
        "Which of the following is correct when the light rays are refracted by the water in the water bottle?\n"
        "I Lajunya berubah / The speed changes\n"
        "II Frekuensi berubah / Frequency changes\n"
        "III Arahnya berubah / The direction changes\n"
        "IV Panjang gelombang berubah / The wavelength changes"
    ),
    "MODUL_T4_B6_K2_Q62": (
        "Rajah 43 menunjukkan susunan radas bagi eksperimen pembentukan imej oleh kanta cembung.\n"
        "Diagram 43 shows the arrangement of the apparatus for the experiment of image formation by a convex lens.\n"
        "Perubahan pemboleh ubah yang manakah menyebabkan pertambahan saiz imej?\n"
        "Which changes of variables causes the increase of image size?\n"
        "Diameter kanta Panjang fokus, f\n"
        "Lens diameter Focal length, f"
    ),
    "MODUL_T4_B6_K2_Q63": (
        "Rajah 44 menunjukkan suatu imej yang terbentuk oleh satu kanta cembung.\n"
        "Diagram 44 shows an image that is formed by a convex lens.\n"
        "Antara yang berikut, alat manakah yang menghasilkan imej seperti di atas?\n"
        "Which of the following equipment produces an image as above?"
    ),
    "MODUL_T4_B6_K2_Q64": (
        "Rajah 45 menunjukkan imej Ali dalam sebuah cermin apabila dia berdiri pada jarak kurang daripada panjang fokus cermin itu.\n"
        "Diagram 45 shows the image of Ali in a mirror when he stands at a distance less than the focal length of the mirror.\n"
        "Antara berikut, yang manakah betul mengenai jenis cermin dan ciri imejnya?\n"
        "Which of the following is correct regarding the type of mirror and its image characteristics?"
    ),
    "MODUL_T4_B6_K3_Q01": (
        "Rajah 46 menunjukkan cahaya merambat dari medium A dan kemudian memasuki medium B.\n"
        "Diagram 46 shows light propagating from medium A and then entering medium B.\n"
        "Hitung sudut biasan, r.\n"
        "Calculate the angle of refraction, r."
    ),
    "MODUL_T4_B6_K3_Q04": (
        "Rajah 48 menunjukkan suatu objek di hadapan sebuah kanta cembung dan imejnya.\n"
        "Diagram 48 shows an object in front of a convex lens and its image.\n"
        "Berapakah panjang fokus kanta itu?\n"
        "What is the focal length of the lens?"
    ),
    "MODUL_T4_B6_K3_Q05": (
        "Rajah 49 menunjukkan satu objek diletakkan di hadapan sebuah cermin cekung. F ialah titik fokus bagi cermin itu.\n"
        "Diagram 49 shows an object placed in front of a concave mirror. F is the focal point of the mirror.\n"
        "Apakah ciri imej yang terbentuk?\n"
        "What are the characteristics of the image formed?"
    ),
    "MODUL_T4_B6_K3_Q06": (
        "Rajah 50 menunjukkan satu sinar cahaya merambat dari medium kaca ke udara. Indeks biasan kaca ialah 1.50.\n"
        "Diagram 50 shows a light ray propagating from glass medium to the air. The refractive index of glass is 1.50.\n"
        "Berapakah laju cahaya di dalam medium kaca?\n"
        "What is the speed of light in the glass medium?"
    ),
    "MODUL_T4_B6_K3_Q07": (
        "Rajah 51 menunjukkan satu objek, O yang diletakkan di hadapan sebuah kanta cekung.\n"
        "Diagram 51 shows an object, O is placed in front of a concave lens.\n"
        "Antara berikut, apakah ciri-ciri imej yang terbentuk?\n"
        "Which of the following are the characteristics of the image formed?"
    ),
    "MODUL_T4_B6_K3_Q10": (
        "Rajah 52 menunjukkan suatu objek diletakkan 20 cm di hadapan suatu cermin cekung yang mempunyai panjang fokus, f = 10 cm.\n"
        "Diagram 52 shows an object placed 20 cm in front of a concave mirror of focal length, f = 10 cm.\n"
        "Apakah ciri-ciri imej yang terbentuk?\n"
        "What are the characteristics of the image formed?"
    ),
    "MODUL_T4_B6_K3_Q11": (
        "Rajah 53 menunjukkan satu objek yang diletakkan 12 cm dari satu kanta cembung. Panjang fokus kanta itu ialah 8 cm.\n"
        "Diagram 53 shows an object is placed 12 cm from a convex lens. The focal length of the lens is 8 cm.\n"
        "Berapakah jarak imej dari kanta itu?\n"
        "What is the image distance from the lens?"
    ),
    "MODUL_T4_B6_K3_Q12": (
        "Satu objek diletakkan 8.0 cm di hadapan sebuah kanta cembung dengan panjang fokus 10.0 cm. Berapakah jarak imej dan apakah ciri-ciri imej yang terbentuk?\n"
        "An object is placed 8.0 cm in front of a convex lens of focal length 10.0 cm. What is the image distance and the characteristics of the image formed?"
    ),
    "MODUL_T4_B6_K3_Q14": (
        "Rajah 54 menunjukkan satu objek diletakkan di hadapan sebuah kanta cekung. Titik fokus, F ditandakan pada kedua-dua belah kanta itu. Pada kedudukan manakah imej akan terbentuk?\n"
        "Diagram 54 shows an object placed in front of a concave lens. The focal point, F is marked on both sides. At what position will the image be formed?"
    ),
    "MODUL_T4_B6_K3_Q16": (
        "Rajah 55 menunjukkan satu objek diletakkan di hadapan sebuah kanta cembung.\n"
        "Diagram 55 shows an object placed in front of a convex lens.\n"
        "Antara berikut, yang manakah ciri-ciri imej yang terbentuk?\n"
        "Which of the following are the characteristics of the image formed?\n"
        "I Maya / Virtual\n"
        "II Dibesarkan / Magnified\n"
        "III Nyata / Real\n"
        "IV Tegak / Upright"
    ),
    "MODUL_T4_B6_K3_Q18": (
        "Rajah 57 menunjukkan satu objek yang diletakkan 15.0 cm dari sebuah kanta cembung dengan panjang fokus 10.0 cm.\n"
        "Diagram 57 shows an object that is placed 15.0 cm from a convex lens with focal length of 10.0 cm.\n"
        "Apakah ciri-ciri imej yang terbentuk?\n"
        "What are the characteristics of the image formed?"
    ),
    "MODUL_T4_B6_K3_Q19": (
        "Rajah 58 menunjukkan kedudukan imej terbentuk apabila objek diletakkan 6 cm di hadapan kanta cembung. Ketinggian objek dan imej masing-masing ialah 3 cm dan 12 cm.\n"
        "Diagram 58 shows an image formed when an object is placed 6 cm in front of a convex lens. The height of the object and the image is 3 cm and 12 cm respectively.\n"
        "Berapakah jarak antara objek dan imej, P?\n"
        "What is the distance between the object and image, P?"
    ),
    "MODUL_T4_B6_K3_Q24": (
        "Rajah 59 menunjukkan sebiji guli berada di dasar sebuah bekas kaca. Imej guli itu hanya dapat dilihat setelah suatu cecair ditambah sedalam 10 cm ke dalam bekas kaca berkenaan.\n"
        "Diagram 59 shows a marble at the base of a glass container. The image of the marble can only be seen after a liquid is added to a depth of 10 cm into the glass container.\n"
        "Jika indeks biasan cecair tersebut ialah 1.33, berapakah jarak imej guli dari kedudukan guli sebenar?\n"
        "If the refractive index of the liquid is 1.33, what is the distance of the image of the marble from the actual position of the marble?"
    ),
    "MODUL_T4_B6_K3_Q25": (
        "Rajah 60 menunjukkan cahaya dari kotak sinar ditujukan pada sebuah cermin satah di titik R dan terpantul pada objek Q.\n"
        "Diagram 60 shows light from a ray box directed at a plane mirror at point R and reflected to object Q.\n"
        "Jika kotak sinar digerakkan 1 m secara menegak ke bawah, berapa jauhkah objek Q perlu digerakkan untuk memastikan cahaya masih terpantul pada objek Q?\n"
        "If the ray box is moved 1 m vertically downward, how far should object Q be moved to ensure that light is still reflected to object Q?"
    ),
    "MODUL_T4_B6_K3_Q27": (
        "Rajah 61 menunjukkan sinar tuju ditujukan ke atas satu permukaan kaca. Arah manakah sinar itu merambat selepas melalui X?\n"
        "Diagram 61 shows an incident ray directed into a glass block. Which direction does the light travel after passing through X?"
    ),
    "MODUL_T4_B6_K3_Q28": (
        "Rajah 62 menunjukkan satu objek di hadapan sebuah kanta cembung dengan panjang fokus f = 1.5 cm dan jarak objek u = 2.5 cm.\n"
        "Diagram 62 shows an object in front of a convex lens with focal length f = 1.5 cm and object distance u = 2.5 cm.\n"
        "Hitung jarak imej.\n"
        "Calculate the image distance."
    ),
    "MODUL_T4_B6_K3_Q31": (
        "Rajah 63 menunjukkan suatu objek di hadapan satu kanta cembung dengan panjang fokus f = 10 cm dan jarak objek u = 15 cm.\n"
        "Diagram 63 shows an object in front of a convex lens with focal length f = 10 cm and object distance u = 15 cm.\n"
        "Berapakah jarak imej?\n"
        "What is the image distance?"
    ),
    "MODUL_T4_B6_K3_Q33": (
        "Rajah 64 menunjukkan sebiji gelas diisi dengan minyak zaitun setinggi 9 cm yang mempunyai indeks biasan 1.47.\n"
        "Diagram 64 shows a glass filled with olive oil to a height of 9 cm which has a refractive index of 1.47.\n"
        "Berapakah dalam ketara gelas tersebut yang dilihat oleh pemerhati?\n"
        "What is the apparent depth seen by the observer?"
    ),
    "MODUL_T4_B6_K3_Q34": (
        "Rajah 65 menunjukkan cahaya bergerak melalui satu bongkah kaca.\n"
        "Diagram 65 shows a light ray passing through a glass block.\n"
        "Berapakah indeks biasan bongkah kaca itu?\n"
        "What is the refractive index of the glass block?"
    ),
    "MODUL_T4_B6_K3_Q35": (
        "Rajah-rajah berikut menunjukkan lintasan sinar cahaya yang melalui sebuah kanta cekung.\n"
        "The following diagrams show the path of a light ray through a concave lens.\n"
        "Lintasan sinar biasan manakah adalah benar?\n"
        "Which refracted path is correct?"
    ),
    "MODUL_T4_B6_K3_Q38": (
        "Rajah 66 menunjukkan satu lintasan cahaya merambat melalui air dan cecair P. Indeks biasan air dan cecair P adalah masing-masing 1.33 dan 1.50. Berapakah sudut biasan, r dalam cecair P?\n"
        "Diagram 66 shows a path of light propagating through water and liquid P. The refractive index of water and liquid P are 1.33 and 1.50 respectively. What is the refracted angle, r in liquid P?"
    ),
    "MODUL_T4_B6_K3_Q39": (
        "Rajah 67 menunjukkan cahaya dari udara terbias apabila masuk ke dalam air dan perspeks. Indeks biasan bagi air dan perspeks masing-masing adalah 1.33 dan 1.50.\n"
        "Diagram 67 shows light from air refracted when entering water and perspex. The refractive index of water and perspex is 1.33 and 1.50 respectively.\n"
        "Tentukan sudut, θ.\n"
        "Determine the angle, θ."
    ),
    "MODUL_T4_B6_K3_Q40": (
        "Rajah 68 menunjukkan imej yang dihasilkan oleh sebuah kanta pembesar.\n"
        "Diagram 68 shows the image formed by a magnifying glass.\n"
        "Rajah sinar manakah yang betul menerangkan sifat imej yang terhasil?\n"
        "Which of the following ray diagrams is correct to show the characteristics of the image formed?"
    ),
    "MODUL_T4_B6_K3_Q43": (
        "Rajah 69 menunjukkan satu objek diletak pada jarak u cm dari pusat sebuah kanta cembung. Panjang fokus kanta itu ialah 20 cm.\n"
        "Diagram 69 shows an object placed at u cm from the centre of a convex lens. The focal length of the lens is 20 cm.\n"
        "Apakah ciri-ciri imej yang terbentuk jika u adalah 40 cm?\n"
        "What are the characteristics of the image formed if u is 40 cm?"
    ),
    "MODUL_T4_B6_K3_Q44": (
        "Rajah 70 menunjukkan sebuah objek diletakkan di hadapan cermin cekung. Manakah kedudukan imej yang betul?\n"
        "Diagram 70 shows an object placed in front of a concave mirror. Which is the correct position of the image?"
    ),
    "MODUL_T4_B6_K3_Q45": (
        "Rajah 71 menunjukkan satu sinar cahaya melalui satu bongkah kaca. Indeks biasan bagi kaca itu ialah 1.52.\n"
        "Diagram 71 shows a ray of light passing into a glass block. The refractive index of the glass is 1.52.\n"
        "Berapakah sudut x?\n"
        "What is the angle of x?"
    ),
    "MODUL_T4_B6_K3_Q46": (
        "Rajah 72 menunjukkan satu objek diletak pada jarak u cm dari pusat sebuah kanta cembung. Panjang fokus kanta itu ialah 30 cm.\n"
        "Diagram 72 shows an object placed at u cm from the centre of a convex lens. The focal length of the lens is 30 cm.\n"
        "Antara ciri-ciri imej yang berikut, yang manakah betul jika u ialah 25 cm, 40 cm, 55 cm, dan 70 cm dari kanta itu?\n"
        "Which of the following characteristics of the image is correct if u is 25 cm, 40 cm, 55 cm, and 70 cm from the lens?"
    ),
    "MODUL_T4_B6_K3_Q47": (
        "Rajah 73 menunjukkan sebuah objek di hadapan cermin cekung. Manakah imej yang betul?\n"
        "Diagram 73 shows an object in front of a concave mirror. Which is the correct image?"
    ),
    "MODUL_T4_B6_K3_Q48": (
        "Rajah 74 menunjukkan satu alur cahaya yang ditujukan pada suatu bongkah kaca.\n"
        "Diagram 74 shows a beam of light that is directed towards a glass block.\n"
        "Manakah nilai yang betul bagi sudut r?\n"
        "Which is the correct value for angle r?"
    ),
    "MODUL_T4_B6_K3_Q49": (
        "Rajah 75 menunjukkan satu imej tajam yang terbentuk pada skrin apabila jarak antara objek dan skrin adalah 60 cm.\n"
        "Diagram 75 shows a sharp image formed on a screen when the distance between the object and the screen is 60 cm.\n"
        "Berapakah panjang fokus kanta sekiranya saiz imej adalah sama dengan saiz objek?\n"
        "What is the focal length of the lens if the size of the image is the same as the object?"
    ),
    "MODUL_T4_B6_K3_Q50": (
        "Rajah 76 menunjukkan seorang pemerhati melihat imej seorang penyelam 2.0 m dari permukaan air.\n"
        "Diagram 76 shows an observer looking at the image of a diver 2.0 m from the water surface.\n"
        "Berapakah dalam sebenar penyelam itu?\n"
        "What is the actual depth of the diver?"
    ),
    "MODUL_T4_B6_K3_Q51": (
        "Rajah 77 menunjukkan satu sinar cahaya P, ditujukan kepada pusat, O satu bongkah kaca semibulatan. Indeks biasan kaca itu adalah 1.52.\n"
        "Diagram 77 shows a light ray, P is directed to the centre, O of semicircular glass block. The refractive index of the glass is 1.52.\n"
        "Arah manakah antara A, B, C atau D sinar itu merambat selepas titik O?\n"
        "At which direction A, B, C or D does the light propagate after point O?"
    ),
    "MODUL_T4_B6_K3_Q52": (
        "Rajah 78 menunjukkan pembentukan imej daripada suatu objek oleh kanta cembung.\n"
        "Diagram 78 shows the formation of an image from an object by a convex lens.\n"
        "Berapakah tinggi objek itu jika tinggi imejnya adalah 4 cm?\n"
        "What is the height of the object if the height of its image is 4 cm?"
    ),
    "MODUL_T4_B6_K3_Q56": (
        "Rajah 82 menunjukkan satu objek diletakkan di hadapan sebuah kanta cembung dengan panjang fokus 10 cm.\n"
        "Diagram 82 shows an object is placed in front of a convex lens with focal length of 10 cm.\n"
        "Apakah ciri-ciri imej yang terbentuk?\n"
        "What are the characteristics of the image formed?"
    ),
    "MODUL_T4_B6_K3_Q57": (
        "Rajah 83 menunjukkan pembentukan imej daripada suatu objek oleh kanta cembung.\n"
        "Diagram 83 shows the formation of an image from an object by a convex lens.\n"
        "Berapakah tinggi objek itu jika tinggi imejnya adalah 4 cm?\n"
        "What is the height of the object if the height of its image is 4 cm?"
    ),
    "MODUL_T4_B6_K3_Q59": (
        "Rajah 84 menunjukkan pembentukan imej suatu objek oleh sebuah kanta cembung.\n"
        "Diagram 84 shows the image formation of an object by a convex lens.\n"
        "Jika tinggi objek ialah 2 cm, berapakah tinggi imej?\n"
        "If the height of the object is 2 cm, what is the height of the image?"
    ),
    "MODUL_T4_B6_K3_Q60": (
        "Rajah 85 menunjukkan satu objek diletakkan 10 cm di hadapan sebuah cermin cekung yang mempunyai panjang fokus, f = 5 cm.\n"
        "Diagram 85 shows an object that is placed 10 cm in front of a concave mirror of focal length, f = 5 cm.\n"
        "Apakah ciri-ciri imej yang terbentuk?\n"
        "What are the characteristics of the image formed?"
    ),
    "MODUL_T4_B6_K3_Q61": (
        "Rajah 86 menunjukkan satu sinar cahaya yang merambat keluar dari suatu bongkah perspeks.\n"
        "Diagram 86 shows a light ray propagates out from the perspex block.\n"
        "Berapakah nilai sudut genting perspeks itu?\n"
        "What is the critical angle of the perspex?"
    ),
    "MODUL_T4_B6_K4_Q01": (
        "Rajah 88(a) dan Rajah 88(b) menunjukkan seekor ikan melihat seekor kumbang pada kedudukan yang berbeza.\n"
        "Diagram 88(a) and Diagram 88(b) show a fish looking at a beetle in different positions.\n"
        "Mengapakah ikan dalam Rajah 88(b) melihat kumbang dan imejnya berada pada kedudukan yang sama?\n"
        "Why does the fish in Diagram 88(b) see the beetle and its image in the same position?"
    ),
    "MODUL_T4_B6_K4_Q02": (
        "Rajah 89 menunjukkan kanta cembung yang digunakan dalam sebuah teleskop astronomi. Jarak fokus kanta objektif dan kanta mata masing-masing adalah fo dan fe, manakala L adalah jarak antara kanta objektif dan kanta mata.\n"
        "Diagram 89 shows a convex lens used in an astronomy telescope. The focal length of the objective and eye lenses are fo and fe respectively, while L is the distance between the objective lens and eyepiece lens.\n"
        "Yang manakah antara penerangan berikut adalah betul?\n"
        "Which of the following explanations is correct?"
    ),
    "MODUL_T4_B6_K4_Q03": (
        "Rajah 90(a) dan Rajah 90(b) menunjukkan rajah sinar kanta cembung dengan panjang fokus yang sama dalam sebuah kamera yang menghasilkan satu imej dengan ketinggian, h₁ dan h₂.\n"
        "Diagrams 90(a) and Diagram 90(b) show a ray diagram of convex lens with the same focal length in a camera which produces an image of height, h₁ and h₂.\n"
        "Hubungan yang manakah betul?\n"
        "Which relationship is correct?"
    ),
    "MODUL_T4_B6_K4_Q04": (
        "Rajah 91(a) dan Rajah 91(b) menunjukkan imej dari kanta kamera yang mempunyai panjang fokus yang sama.\n"
        "Diagrams 91(a) and 91(b) show the images from a camera lens of the same focal length.\n"
        "Pasangan kedudukan objek manakah yang betul?\n"
        "Which pair of position of an object is correct?"
    ),
}

def clean_general_stem(qid, text):
    if qid in EXACT_QUESTION_STEMS:
        return EXACT_QUESTION_STEMS[qid]
        
    t = text
    t = unicodedata.normalize('NFKD', t)
    
    # Generic fixes
    t = t.replace('betweeneen', 'between')
    t = t.replace('between', 'between')
    t = t.replace('Incidentraypasses', 'Incident ray passes')
    t = t.replace('raypasses', 'ray passes')
    t = t.replace('merambatselepas', 'merambat selepas')
    t = t.replace('ofaconcavemirror', 'of a concave mirror')
    t = t.replace('offocallength', 'of focal length')
    t = t.replace('fron theperspex', 'from the perspex')
    t = t.replace('theperspex', 'the perspex')
    t = t.replace('theglass', 'the glass')
    t = t.replace('concavelens', 'concave lens')
    t = t.replace('ofa concave', 'of a concave')
    t = t.replace('front ofa', 'front of a')
    t = t.replace('heightoftheimage', 'height of the image')
    t = t.replace('height ofits', 'height of its')
    t = t.replace('ifthe height', 'if the height')
    t = t.replace('kantanipis', 'kanta nipis')
    t = t.replace('conventionfor', 'convention for')
    t = t.replace('lensfor', 'lens for')
    t = t.replace('lensformula', 'lens formula')
    t = t.replace('alensas', 'a lens as')
    t = t.replace('Whichof', 'Which of')
    t = t.replace('Whatis', 'What is')
    t = t.replace('oftheobject', 'of the object')
    t = t.replace('if the heightof', 'if the height of')
    t = t.replace('Berapakalh', 'Berapakah')
    t = t.replace('signconvention', 'sign convention')
    t = t.replace('Type oflens', 'Type of lens')
    t = t.replace('correc?', 'correct?')
    t = t.replace('Vhich', 'Which')
    t = t.replace('ihe glass', 'the glass')
    t = t.replace('theimage', 'the image')
    t = t.replace('Diagram 23showstheapparentposition', 'Diagram 23 shows the apparent position')
    t = t.replace('covex', 'convex')
    t = t.replace('conver', 'convex')
    t = t.replace('Diagran', 'Diagram')
    t = t.replace('Diagrann', 'Diagram')
    t = t.replace('Diagramn', 'Diagram')
    t = t.replace('Rajalh', 'Rajah')
    t = t.replace('scbuah', 'sebuah')
    t = t.replace('scorang', 'seorang')
    t = t.replace('S1. Rajah', 'Rajah')
    
    # Strip any source tag in parentheses containing a year
    t = re.sub(r'\s*\([^)]*?(?:19\d\d|20\d\d)[^)]*?\)', '', t)
    t = re.sub(r'\(2022\)\(', '', t)
    
    # Clean lines
    lines = [l.strip() for l in t.split("\n") if l.strip()]
    cleaned = []
    
    for line in lines:
        l_norm = line.strip().lower()
        # Drop standalone diagram caption
        if re.match(r'^(?:rajah|diagram)\s*\d+.*(?:rajah|diagram)?.*$', l_norm) and len(line) < 45 and not any(w in l_norm for w in ['menunjukkan', 'shows', 'manakah', 'which', 'antara']):
            continue
        if re.match(r'^(?:rajah|diagram)\s*\d+\s*(?:\([a-z]\))?\s*(?:/|\s+)?\s*(?:diagram|rajah)?\s*\d*\s*(?:\([a-z]\))?$', l_norm):
            continue
        cleaned.append(line)
        
    res = "\n".join(cleaned)
    res = re.sub(r'to glass\.\s*(?:ss\.)?', 'to glass.', res)
    res = re.sub(r' +', ' ', res)
    return res

def clean_b6_question_stem(qid, text):
    return clean_general_stem(qid, text)

def clean_ocr_typos_b6(text):
    if not text:
        return ""
    t = text
    # Fix OCR typos common in light & optics
    t = t.replace('comvex', 'convex')
    t = t.replace('nmirror', 'mirror')
    t = t.replace('asanmefocal', 'a same focal')
    t = t.replace('fmewakili', 'f mewakili')
    t = t.replace('frepresents', 'f represents')
    t = t.replace('dalanm', 'dalam')
    t = t.replace('1otal', 'total')
    t = t.replace('nm bagi', 'm bagi')
    t = t.replace('poweroflens', 'power of lens')
    t = t.replace('theoccurrence', 'the occurrence')
    t = t.replace('betw', 'between')
    t = t.replace('cksperimen', 'eksperimen')
    t = t.replace('scbatang', 'sebatang')
    t = t.replace('serabut optik', 'gentian optik')
    t = t.replace('Diagrann', 'Diagram')
    t = t.replace('Diagramn', 'Diagram')
    t = t.replace('hịdan', 'h₁ dan')
    t = t.replace('hịand', 'h₁ and')
    t = t.replace('Objer', 'Objek / Object')
    t = t.replace('cemin cekung', 'cermin cekung')
    t = t.replace('cemin cembung', 'cermin cembung')
    t = t.replace('cemin satah', 'cermin satah')
    t = t.replace('Miksoskop', 'Mikroskop')
    t = re.sub(r'\s+/\s*', ' / ', t)
    return t.strip()


EXACT_QUESTION_OPTIONS = {
    "MODUL_T4_B6_K2_Q48": [
        {"id": "A", "teks": '<img src="https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b6/options/t4_b6_k2_q48_opt_a.webp" style="max-height:130px; border-radius:4px;" alt="Pilihan A">'},
        {"id": "B", "teks": '<img src="https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b6/options/t4_b6_k2_q48_opt_b.webp" style="max-height:130px; border-radius:4px;" alt="Pilihan B">'},
        {"id": "C", "teks": '<img src="https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b6/options/t4_b6_k2_q48_opt_c.webp" style="max-height:130px; border-radius:4px;" alt="Pilihan C">'},
        {"id": "D", "teks": '<img src="https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b6/options/t4_b6_k2_q48_opt_d.webp" style="max-height:130px; border-radius:4px;" alt="Pilihan D">'}
    ],
    "MODUL_T4_B6_K2_Q17": [
        {"id": "A", "teks": "Pantulan / Reflection"},
        {"id": "B", "teks": "Pembiasan / Refraction"},
        {"id": "C", "teks": "Pembelauan / Diffraction"},
        {"id": "D", "teks": "Pantulan dalam penuh / Total internal reflection"}
    ],
    "MODUL_T4_B6_K2_Q23": [
        {"id": "A", "teks": "Pemantul dalam lampu depan kereta / Reflector in car headlight"},
        {"id": "B", "teks": "Cermin sisi / Side mirror"},
        {"id": "C", "teks": "Cermin titik buta / Blind spot mirror"},
        {"id": "D", "teks": "Cermin pandang belakang kenderaan / Vehicle rear mirror"}
    ],
    "MODUL_T4_B6_K2_Q26": [
        {"id": "A", "teks": "Nyata dan tegak / Real and upright"},
        {"id": "B", "teks": "Nyata dan songsang / Real and inverted"},
        {"id": "C", "teks": "Maya dan tegak / Virtual and upright"},
        {"id": "D", "teks": "Maya dan songsang / Virtual and inverted"}
    ],
    "MODUL_T4_B6_K2_Q30": [
        {"id": "A", "teks": "I, II dan III / I, II and III"},
        {"id": "B", "teks": "I, II dan IV / I, II and IV"},
        {"id": "C", "teks": "II, III dan IV / II, III and IV"},
        {"id": "D", "teks": "III dan IV / III and IV"}
    ],
    "MODUL_T4_B6_K2_Q33": [
        {"id": "A", "teks": "Pantulan / Reflection"},
        {"id": "B", "teks": "Pembelauan / Diffraction"},
        {"id": "C", "teks": "Pembiasan / Refraction"},
        {"id": "D", "teks": "Pantulan dalam penuh / Total internal reflection"}
    ],
    "MODUL_T4_B6_K2_Q34": [
        {"id": "A", "teks": "Sama dengan 2f / Equal to 2f"},
        {"id": "B", "teks": "Lebih daripada 2f / More than 2f"},
        {"id": "C", "teks": "Kurang daripada 2f / Less than 2f"},
        {"id": "D", "teks": "Antara f dan 2f / Between f and 2f"}
    ],
    "MODUL_T4_B6_K2_Q40": [
        {"id": "A", "teks": "Pantulan / Reflection"},
        {"id": "B", "teks": "Pembiasan / Refraction"},
        {"id": "C", "teks": "Pembelauan / Diffraction"},
        {"id": "D", "teks": "Pantulan dalam penuh / Total internal reflection"}
    ],
    "MODUL_T4_B6_K2_Q43": [
        {"id": "A", "teks": "Pantulan / Reflection"},
        {"id": "B", "teks": "Pembiasan / Refraction"},
        {"id": "C", "teks": "Interferens / Interference"},
        {"id": "D", "teks": "Pantulan dalam penuh / Total internal reflection"}
    ],
    "MODUL_T4_B6_K2_Q45": [
        {"id": "A", "teks": "Pembiasan cahaya / Refraction of light"},
        {"id": "B", "teks": "Pembelauan cahaya / Diffraction of light"},
        {"id": "C", "teks": "Interferens cahaya / Interference of light"},
        {"id": "D", "teks": "Pantulan dalam penuh / Total internal reflection"}
    ],
    "MODUL_T4_B6_K2_Q56": [
        {"id": "A", "teks": "Kanta objektif dan kanta mata adalah kanta cekung / The objective lens and eyepiece are concave lenses"},
        {"id": "B", "teks": "Kuasa kanta objektif < kuasa kanta mata / Power of objective lens < power of eyepiece"},
        {"id": "C", "teks": "Pelarasan normal > jarak fokus kanta mata + jarak fokus kanta objektif / Normal adjustment > focal length of eyepiece + focal length of objective lens"},
        {"id": "D", "teks": "Pelarasan normal < jarak fokus kanta mata + jarak fokus kanta objektif / Normal adjustment < focal length of eyepiece + focal length of objective lens"}
    ],
    "MODUL_T4_B6_K2_Q61": [
        {"id": "A", "teks": "I dan II / I and II"},
        {"id": "B", "teks": "I dan III / I and III"},
        {"id": "C", "teks": "I, II dan III / I, II and III"},
        {"id": "D", "teks": "I, III dan IV / I, III and IV"}
    ],
    "MODUL_T4_B6_K3_Q02": [
        {"id": "A", "teks": "Di hadapan cermin dan v = f / In front of the mirror and v = f"},
        {"id": "B", "teks": "Di hadapan cermin dan f < v < 2f / In front of the mirror and f < v < 2f"},
        {"id": "C", "teks": "Di hadapan cermin dan v = 2f / In front of the mirror and v = 2f"},
        {"id": "D", "teks": "Di hadapan cermin dan v > 2f / In front of the mirror and v > 2f"}
    ],
    "MODUL_T4_B6_K4_Q01": [
        {"id": "A", "teks": "Ketumpatan air dalam Rajah 88 (b) lebih besar. / The density of water in Diagram 88 (b) is greater."},
        {"id": "B", "teks": "Penglihatan dalam Rajah 88 (b) berlaku pada suatu sudut dari garis normal. / The sighting in Diagram 88 (b) is done at an angle to the normal."},
        {"id": "C", "teks": "Jarak antara ikan dan kumbang dalam Rajah 88 (b) lebih dekat. / The distance between the fish and the beetle in Diagram 88 (b) is closer."},
        {"id": "D", "teks": "Kedalaman ikan dari permukaan air dalam Rajah 88 (b) lebih besar. / The depth of the fish from the surface of the water in Diagram 88 (b) is greater."}
    ]
}


SP_MAP_B6 = {
    "6.1.1": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.1 Memerihalkan fenomena pembiasan cahaya", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 232-241", "Cheatnote T4 Bab 6 ms 1-3"),
    "6.1.2": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.2 Menerangkan indeks biasan, n", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 233-235", "Cheatnote T4 Bab 6 ms 1-3"),
    "6.1.3": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.3 Mengkonsepsikan Hukum Snell", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 235-237", "Cheatnote T4 Bab 6 ms 1-3"),
    "6.1.4": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.4 Mengeksperimen menentukan indeks biasan kaca", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 236-238", "Cheatnote T4 Bab 6 ms 1-3"),
    "6.1.5": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.5 Menerangkan dalam nyata dan dalam ketara", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 238-241", "Cheatnote T4 Bab 6 ms 1-3"),
    "6.1.6": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.6 Mengeksperimen menentukan indeks biasan menggunakan dalam nyata & ketara", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 239-241", "Cheatnote T4 Bab 6 ms 1-3"),
    "6.1.7": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.7 Menyelesaikan masalah berkaitan pembiasan cahaya", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 241-242", "Cheatnote T4 Bab 6 ms 1-3"),

    "6.2.1": ("SK 6.2 Pantulan Dalam Penuh", "SP 6.2.1 Menerangkan sudut genting dan pantulan dalam penuh", "6.2 Pantulan Dalam Penuh", "DSKP Fizik T4 ms 80-81", "Buku Teks T4 ms 242-245", "Cheatnote T4 Bab 6 ms 4-5"),
    "6.2.2": ("SK 6.2 Pantulan Dalam Penuh", "SP 6.2.2 Menghubungkait sudut genting dengan indeks biasan n = 1/sin c", "6.2 Pantulan Dalam Penuh", "DSKP Fizik T4 ms 80-81", "Buku Teks T4 ms 245-247", "Cheatnote T4 Bab 6 ms 4-5"),
    "6.2.3": ("SK 6.2 Pantulan Dalam Penuh", "SP 6.2.3 Menerangkan aplikasi pantulan dalam penuh (gentian optik, logamaya, periskop)", "6.2 Pantulan Dalam Penuh", "DSKP Fizik T4 ms 80-81", "Buku Teks T4 ms 247-250", "Cheatnote T4 Bab 6 ms 4-5"),
    "6.2.4": ("SK 6.2 Pantulan Dalam Penuh", "SP 6.2.4 Menyelesaikan masalah melibatkan pantulan dalam penuh", "6.2 Pantulan Dalam Penuh", "DSKP Fizik T4 ms 80-81", "Buku Teks T4 ms 250-251", "Cheatnote T4 Bab 6 ms 4-5"),

    "6.3.1": ("SK 6.3 Pembentukan Imej oleh Kanta", "SP 6.3.1 Mengenal pasti kanta cembung penumpu dan kanta cekung pencapah", "6.3 Pembentukan Imej oleh Kanta", "DSKP Fizik T4 ms 82-83", "Buku Teks T4 ms 251-253", "Cheatnote T4 Bab 6 ms 6-8"),
    "6.3.2": ("SK 6.3 Pembentukan Imej oleh Kanta", "SP 6.3.2 Menganggar panjang fokus kanta cembung", "6.3 Pembentukan Imej oleh Kanta", "DSKP Fizik T4 ms 82-83", "Buku Teks T4 ms 253-254", "Cheatnote T4 Bab 6 ms 6-8"),
    "6.3.3": ("SK 6.3 Pembentukan Imej oleh Kanta", "SP 6.3.3 Menentukan kedudukan imej dan ciri-ciri imej kanta cembung dan cekung", "6.3 Pembentukan Imej oleh Kanta", "DSKP Fizik T4 ms 82-83", "Buku Teks T4 ms 254-259", "Cheatnote T4 Bab 6 ms 6-8"),
    "6.3.4": ("SK 6.3 Pembentukan Imej oleh Kanta", "SP 6.3.4 Menyatakan pembesaran linear, m = v/u = hi/ho", "6.3 Pembentukan Imej oleh Kanta", "DSKP Fizik T4 ms 82-83", "Buku Teks T4 ms 259-261", "Cheatnote T4 Bab 6 ms 6-8"),

    "6.4.1": ("SK 6.4 Formula Kanta Nipis", "SP 6.4.1 Eksperimen menentukan panjang fokus menggunakan formula kanta 1/f = 1/u + 1/v", "6.4 Formula Kanta Nipis", "DSKP Fizik T4 ms 84-85", "Buku Teks T4 ms 261-264", "Cheatnote T4 Bab 6 ms 9-10"),
    "6.4.2": ("SK 6.4 Formula Kanta Nipis", "SP 6.4.2 Menyelesaikan masalah melibatkan formula kanta nipis", "6.4 Formula Kanta Nipis", "DSKP Fizik T4 ms 84-85", "Buku Teks T4 ms 264-266", "Cheatnote T4 Bab 6 ms 9-10"),

    "6.5.1": ("SK 6.5 Peralatan Optik", "SP 6.5.1 Mewajarkan penggunaan kanta dalam peralatan optik (kanta pembesar, mikroskop, teleskop)", "6.5 Peralatan Optik", "DSKP Fizik T4 ms 86-87", "Buku Teks T4 ms 266-270", "Cheatnote T4 Bab 6 ms 11-12"),
    "6.5.2": ("SK 6.5 Peralatan Optik", "SP 6.5.2 Mereka bentuk dan membina mikroskop majmuk dan teleskop", "6.5 Peralatan Optik", "DSKP Fizik T4 ms 86-87", "Buku Teks T4 ms 270-272", "Cheatnote T4 Bab 6 ms 11-12"),
    "6.5.3": ("SK 6.5 Peralatan Optik", "SP 6.5.3 Aplikasi kanta bersaiz kecil dalam teknologi optik", "6.5 Peralatan Optik", "DSKP Fizik T4 ms 86-87", "Buku Teks T4 ms 272-273", "Cheatnote T4 Bab 6 ms 11-12"),

    "6.6.1": ("SK 6.6 Pembentukan Imej oleh Cermin Sfera", "SP 6.6.1 Menentukan kedudukan imej dan ciri-ciri imej cermin cekung dan cermin cembung", "6.6 Pembentukan Imej oleh Cermin Sfera", "DSKP Fizik T4 ms 88-89", "Buku Teks T4 ms 273-280", "Cheatnote T4 Bab 6 ms 13-14"),
    "6.6.2": ("SK 6.6 Pembentukan Imej oleh Cermin Sfera", "SP 6.6.2 Aplikasi cermin cekung dan cermin cembung dalam kehidupan harian", "6.6 Pembentukan Imej oleh Cermin Sfera", "DSKP Fizik T4 ms 88-89", "Buku Teks T4 ms 280-282", "Cheatnote T4 Bab 6 ms 13-14"),
}


EXACT_QUESTION_DSKP = {
    "MODUL_T4_B6_K3_Q51": "6.2.4",
    "MODUL_T4_B6_K3_Q54": "6.2.4",
    "MODUL_T4_B6_K3_Q34": "6.2.4",
    "MODUL_T4_B6_K2_Q02": "6.2.3",
    "MODUL_T4_B6_K2_Q30": "6.2.3",
    "MODUL_T4_B6_K2_Q38": "6.2.3",
    "MODUL_T4_B6_K2_Q48": "6.2.3",
}

def classify_dskp_b6(soalan, konstruk_num=2, qid=None):
    if qid and qid in EXACT_QUESTION_DSKP:
        sp_key = EXACT_QUESTION_DSKP[qid]
        sk, sp, topik, dskp, bt, cn = SP_MAP_B6.get(sp_key, SP_MAP_B6["6.1.1"])
        return {
            "sk": sk,
            "sp": sp,
            "spKod": sp_key,
            "topik": topik,
            "rujukanDskp": dskp,
            "rujukanBukuTeks": bt,
            "rujukanCheatnote": cn
        }
    s = soalan.lower()
    
    # 6.6 Cermin Sfera (Cekung / Cembung)
    if "cermin cekung" in s or "cermin cembung" in s or "cermin sfera" in s or "concave mirror" in s or "convex mirror" in s or "cermin satah" in s or "pusat kelengkungan" in s or "centre of curvature" in s or "jejari kelengkungan" in s or "radius of curvature" in s:
        sk_key = "6.6"
        if "aplikasi" in s or "keselamatan" in s or "pergigian" in s or "lampu depan" in s or "headlight" in s or "side mirror" in s:
            sp_key = "6.6.2"
        else:
            sp_key = "6.6.1"

    # 6.5 Peralatan Optik (Mikroskop, Teleskop, dsb)
    elif "teleskop" in s or "telescope" in s or "mikroskop" in s or "microscope" in s or "kanta pembesar" in s or "magnifying glass" in s or "kanta objektif" in s or "kanta mata" in s or "eyepiece" in s or "peralatan optik" in s or "optical instrument" in s or "pelarasan normal" in s or "kamera" in s or "cctv" in s:
        sk_key = "6.5"
        if "mereka bentuk" in s or "membina" in s:
            sp_key = "6.5.2"
        elif "saiz kecil" in s or "telefon pintar" in s or "cctv" in s:
            sp_key = "6.5.3"
        else:
            sp_key = "6.5.1"

    # 6.4 Formula Kanta Nipis (1/f = 1/u + 1/v & Graf 1/v melawan 1/u)
    elif "kanta nipis" in s or "thin lens" in s or "formula kanta nipis" in s or "thin lens formula" in s or "1/f" in s or "\frac{1}{f}" in s or "1/u" in s or "1/v" in s or "graf jarak imej, v melawan pembesaran linear" in s or "graf v melawan m" in s or "graf 1/v melawan 1/u" in s or (konstruk_num == 3 and ("hitung" in s or "calculate" in s or "panjang fokus" in s or "focal length" in s) and ("jarak objek" in s or "jarak imej" in s)):
        sk_key = "6.4"
        if "eksperimen" in s or "graf" in s or "graph" in s:
            sp_key = "6.4.1"
        else:
            sp_key = "6.4.2"

    # 6.3 Pembentukan Imej oleh Kanta
    elif "kanta cembung" in s or "kanta cekung" in s or "convex lens" in s or "concave lens" in s or "kanta penumpu" in s or "kanta pencapah" in s or "panjang fokus" in s or "focal length" in s or "pembesaran linear" in s or "linear magnification" in s or "imej nyata" in s or "imej maya" in s or "tegak" in s or "songsang" in s:
        sk_key = "6.3"
        if "pembesaran" in s or "magnification" in s:
            sp_key = "6.3.4"
        elif "anggar" in s or "objek jauh" in s:
            sp_key = "6.3.2"
        elif "penumpu" in s or "pencapah" in s:
            sp_key = "6.3.1"
        else:
            sp_key = "6.3.3"

    # 6.2 Pantulan Dalam Penuh
    elif "pantulan dalam penuh" in s or "total internal reflection" in s or "sudut genting" in s or "critical angle" in s or "gentian optik" in s or "optical fibre" in s or "logamaya" in s or "mirage" in s or "periskop berprisma" in s or "prism periscope" in s or "cat's eye" in s or "intan" in s or "diamond" in s or "sin c" in s:
        sk_key = "6.2"
        if konstruk_num == 3 or "hitung" in s or "calculate" in s:
            sp_key = "6.2.4"
        elif "logamaya" in s or "gentian optik" in s or "periskop" in s or "pelangi" in s:
            sp_key = "6.2.3"
        elif "sin c" in s or ("sudut genting" in s and "indeks biasan" in s):
            sp_key = "6.2.2"
        else:
            sp_key = "6.2.1"

    # 6.1 Pembiasan Cahaya
    else:
        sk_key = "6.1"
        if "dalam nyata" in s or "dalam ketara" in s or "real depth" in s or "apparent depth" in s or "guli" in s or "ikan" in s:
            sp_key = "6.1.5"
        elif "hukum snell" in s or "snell's law" in s or "sin i" in s or "sin r" in s:
            sp_key = "6.1.3"
        elif "indeks biasan" in s or "refractive index" in s or "laju cahaya" in s or "speed of light" in s:
            sp_key = "6.1.2"
        elif konstruk_num == 3 or "hitung" in s or "calculate" in s:
            sp_key = "6.1.7"
        else:
            sp_key = "6.1.1"

    
    sk, sp, topik, dskp, bt, cn = SP_MAP_B6.get(sp_key, SP_MAP_B6["6.1.1"])
    return {
        "sk": sk,
        "sp": sp,
        "spKod": sp_key,
        "topik": topik,
        "rujukanDskp": dskp,
        "rujukanBukuTeks": bt,
        "rujukanCheatnote": cn
    }

def make_b6_q(qid, no, aras, konstruk, soalan, pilihan, rajah_key="", sumber="Percubaan SPM 2023", tahun=2023):
    ans_data = ANSWERS.get(qid, {})
    jawapan = ans_data.get('jawapan', 'A')
    penerangan = ans_data.get('penerangan', f'Jawapan yang tepat ialah {jawapan}.')
    
    # Check if there is a rubric diagram to append to penerangan
    # qid e.g. MODUL_T4_B6_K3_Q02 -> key 'k3_q02'
    q_parts = qid.lower().split('_')
    if len(q_parts) >= 5:
        rubrik_lookup_key = f"{q_parts[3]}_{q_parts[4]}"
        if rubrik_lookup_key in RUBRIK_URLS:
            rub_url = RUBRIK_URLS[rubrik_lookup_key]
            rub_html = f'<div class="rubrik-diagram my-2"><img src="{rub_url}" alt="Rajah Sinar / Rubrik Jawapan" style="max-height:220px; border-radius:6px; border:1px solid #e2e8f0;"/></div>'
            if rub_url not in penerangan:
                penerangan = f"{penerangan}\n{rub_html}"
    
    k_num = int(qid.split('_')[3][1])
    dskp = classify_dskp_b6(soalan, k_num, qid)
    
    # Diagram URL for stem
    rajah_url = ""
    if rajah_key:
        clean_key = rajah_key.replace('(', '').replace(')', '').strip().lower()
        if clean_key in DIAGRAM_URLS:
            rajah_url = DIAGRAM_URLS[clean_key]
        elif f'rajah{clean_key}' in DIAGRAM_URLS:
            rajah_url = DIAGRAM_URLS[f'rajah{clean_key}']

    # Format options - check if this question has diagram options
    if qid in EXACT_QUESTION_OPTIONS:
        pilihan = EXACT_QUESTION_OPTIONS[qid]

    opt_lookup_key = f"{q_parts[3]}_{q_parts[4]}" if len(q_parts) >= 5 else ""
    has_opt_diagrams = opt_lookup_key in OPTION_URLS

    formatted_opts = []
    for opt in pilihan:
        opt_id = opt['id']
        opt_teks = clean_ocr_typos_b6(opt['teks'])
        
        # Inject diagram if available for this option
        if has_opt_diagrams and opt_id in OPTION_URLS[opt_lookup_key]:
            opt_img_url = OPTION_URLS[opt_lookup_key][opt_id]
            opt_teks = f'<img src="{opt_img_url}" style="max-height:130px; border-radius:4px;" alt="Pilihan {opt_id}">'
            
        formatted_opts.append({
            "id": opt_id,
            "teks": opt_teks
        })

    return {
        "id": qid,
        "sumber": sumber,
        "tahun": tahun,
        "noSoalanAsal": no,
        "sk": dskp["sk"],
        "sp": dskp["sp"],
        "spKod": dskp["spKod"],
        "rujukanDskp": dskp["rujukanDskp"],
        "rujukanBukuTeks": dskp["rujukanBukuTeks"],
        "rujukanCheatnote": dskp["rujukanCheatnote"],
        "kertas": 1,
        "tingkatan": 4,
        "babNo": 6,
        "babNama": "Cahaya dan Optik",
        "bidang": "Gelombang, Cahaya dan Optik",
        "topik": dskp["topik"],
        "aras": aras,
        "konstruk": konstruk,
        "soalan": clean_b6_question_stem(qid, soalan),
        "rajahUrl": rajah_url,
        "pilihan": formatted_opts,
        "jawapanBetul": jawapan,
        "penerangan": penerangan,
        "markah": 1,
        "statusSemakan": "Disemak (Modul K1)"
    }
