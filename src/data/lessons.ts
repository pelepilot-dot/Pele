export type Lesson = {
  id: string;
  title: string;
  description: string;
  language: 'th' | 'en';
  content: string;
};

export const lessons: Lesson[] = [
  // Thai Lessons
  {
    id: 'th-home',
    language: 'th',
    title: 'บทที่ 1: แป้นเหย้า (Home Row)',
    description: 'วางนิ้วมือซ้ายที่ ฟ ห ก ด และนิ้วมือขวาที่ ่ า ส ว',
    content: 'ฟหกด ่าสว ฟหกด ่าสว ดกหฟ วสา่ ฟหกด ่าสว ฟฟ หห กก ดด ่่ าา สส วว'
  },
  {
    id: 'th-top',
    language: 'th',
    title: 'บทที่ 2: แป้นบน (Top Row)',
    description: 'ฝึกพิมพ์แป้นพิมพ์แถวบน พ แ อ ิ ื ท ม ใ ฝ',
    content: 'พพ แแ ออ ิิ ืื ทท มม ใใ ฝฝ พแอิ ืทมใฝ พแอิ ืทมใฝ'
  },
  {
    id: 'th-bottom',
    language: 'th',
    title: 'บทที่ 3: แป้นล่าง (Bottom Row)',
    description: 'ฝึกพิมพ์แป้นพิมพ์แถวล่าง ผ ป แ อ ิ ื ท ม',
    content: 'ผผ ปป แแ ออ ิิ ืื ทท มม ผปแอ ิืทม ผปแอ ิืทม'
  },
  {
    id: 'th-words',
    language: 'th',
    title: 'บทที่ 4: ฝึกพิมพ์เป็นคำ',
    description: 'ฝึกพิมพ์คำศัพท์ภาษาไทยพื้นฐาน',
    content: 'หมา แมว นก ปลา ช้าง ม้า วัว ควาย ไก่ เป็ด โรงเรียน คุณครู นักเรียน'
  },
  {
    id: 'th-shift',
    language: 'th',
    title: 'บทที่ 5: การใช้ปุ่ม Shift (ตัวยก)',
    description: 'ฝึกพิมพ์ตัวอักษรแถวบนสุดและตัวยก ฤ ฆ ฏ โ ฌ ็ ๋ ษ ศ ซ',
    content: 'ฤฆฏโฌ ็๋ษศซ ฤฆฏโฌ ็๋ษศซ โฌฏฆฤ ซศษ๋็'
  },
  {
    id: 'th-mixed-1',
    language: 'th',
    title: 'บทที่ 6: คำศัพท์ผสม (แป้นเหย้า + แป้นบน)',
    description: 'ฝึกพิมพ์คำศัพท์ที่ใช้แป้นเหย้าและแป้นบนผสมกัน',
    content: 'พาด ฟาด หอม กอด ดม ทาม ทิม ทีม ฝาก ใส'
  },
  {
    id: 'th-mixed-2',
    language: 'th',
    title: 'บทที่ 7: คำศัพท์ผสม (แป้นเหย้า + แป้นล่าง)',
    description: 'ฝึกพิมพ์คำศัพท์ที่ใช้แป้นเหย้าและแป้นล่างผสมกัน',
    content: 'ผาด ปาด แมว แปด แอบ แมบ แซบ แสบ'
  },
  {
    id: 'th-sentences-short',
    language: 'th',
    title: 'บทที่ 8: ประโยคสั้นๆ',
    description: 'ฝึกพิมพ์ประโยคภาษาไทยขนาดสั้น',
    content: 'ฉันรักเธอ เธอรักฉัน แมวกินปลา หมาวิ่งเล่น นกบินบนฟ้า'
  },
  {
    id: 'th-sentences-long',
    language: 'th',
    title: 'บทที่ 9: ประโยคยาว',
    description: 'ฝึกพิมพ์ประโยคภาษาไทยขนาดยาวเพื่อเพิ่มความคล่องตัว',
    content: 'การพิมพ์ดีดเป็นทักษะที่สำคัญในยุคดิจิทัล ช่วยให้เราทำงานได้รวดเร็วขึ้น'
  },
  // English Lessons
  {
    id: 'en-home',
    language: 'en',
    title: 'Lesson 1: Home Row',
    description: 'Place left fingers on a s d f and right fingers on j k l ;',
    content: 'asdf jkl; asdf jkl; fdsa ;lkj asdf jkl; aa ss dd ff jj kk ll ;;'
  },
  {
    id: 'en-top',
    language: 'en',
    title: 'Lesson 2: Top Row',
    description: 'Practice the top row q w e r t y u i o p',
    content: 'qq ww ee rr tt yy uu ii oo pp qwer tyuiop qwer tyuiop'
  },
  {
    id: 'en-bottom',
    language: 'en',
    title: 'Lesson 3: Bottom Row',
    description: 'Practice the bottom row z x c v b n m , . /',
    content: 'zz xx cc vv bb nn mm ,, .. // zxcv bnm,./ zxcv bnm,./'
  },
  {
    id: 'en-words',
    language: 'en',
    title: 'Lesson 4: Basic Words',
    description: 'Practice typing basic English words',
    content: 'the quick brown fox jumps over the lazy dog hello world typing game'
  },
  {
    id: 'en-numbers',
    language: 'en',
    title: 'Lesson 5: Numbers',
    description: 'Practice the number row 1 2 3 4 5 6 7 8 9 0',
    content: '12345 67890 13579 24680 09876 54321'
  },
  {
    id: 'en-shift',
    language: 'en',
    title: 'Lesson 6: Shift Key (Capitals)',
    description: 'Practice using the Shift key for capital letters',
    content: 'ASDF JKL: QWER TYUI ZXCV BNM<>?'
  },
  {
    id: 'en-mixed-1',
    language: 'en',
    title: 'Lesson 7: Mixed Words',
    description: 'Practice words combining different rows',
    content: 'water earth fire air typing master keyboard screen'
  },
  {
    id: 'en-sentences-short',
    language: 'en',
    title: 'Lesson 8: Short Sentences',
    description: 'Practice typing short English sentences',
    content: 'how are you today i am fine thank you very much'
  },
  {
    id: 'en-sentences-long',
    language: 'en',
    title: 'Lesson 9: Long Sentences',
    description: 'Practice typing longer English sentences for fluency',
    content: 'typing fast requires practice patience and good muscle memory'
  }
];
