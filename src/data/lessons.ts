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
  }
];
