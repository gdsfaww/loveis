import { Quest, QuestCategory, SecretClue } from './types';

export const APP_PASSWORD = "LOVE"; 

// CHAIN FOR DAY 1:
// 1-1 (Mirror) -> 1-2 (Washing Machine) -> 1-3 (Cat Place) -> 1-4 (Kitchen/Rolls) -> 1-5 (Window/Taxi)

export const SECRET_CLUES: SecretClue[] = [
  // --- DAY 1 CHAIN START ---
  { 
    id: "1-1", 
    text: "— Ты у меня самая умная удмурточка.\n— Я русская.\n— И я русский.\n— Мы чё оба русские?", 
    note: "День 1: Начало (1/5)", 
    nextLocation: "Ищи там, где крутится барабан и стираются вещи." // Washing Machine
  },
  { 
    id: "1-2", 
    text: "— Никто меня не целует, когда уходят на работу...\n— Я полежала две минутки, поцеловала тебя в плечико. И ушла.", 
    note: "День 1: Нежность (2/5)", 
    nextLocation: "Ищи там, где 'коты — это жидкость'. (Какая-то щель или коробка)" // Cat place
  },
  { 
    id: "1-3", 
    text: "— Он там пролезет?\n— Коты же это жидкость. И щель большая.", 
    note: "День 1: Физика (3/5)", 
    nextLocation: "Ищи там, где ты громко требуешь еду (РОЛЛЫ)." // Dining table / Kitchen
  },
  { 
    id: "1-4", 
    text: "— Что сегодня ел?\n— РООООООООООЛЛЛЛЛЛЛЛЛЛЛЛЛЛЛЛЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ", 
    note: "День 1: Эмоции (4/5)", 
    nextLocation: "ФИНАЛ ЭТАПА: Ищи там, где мы выглядываем 'того, который в трех минутах'." // Window
  },
  { 
    id: "1-5", 
    text: "— Прикинь такси не едет\n— Это что за х***я\n— О нашелся, который в трех минутах", 
    note: "День 1: Финиш (5/5)", 
    codeToReveal: "ТАКСИ" // The Code
  },
  // --- DAY 1 CHAIN END ---

  // Other Days
  { id: "2", text: "— Ага, правда сначала он получил п***ы за попытку отнять...", note: "День 2", codeToReveal: "КЫСТЫБЫ" },
  { id: "3", text: "— Я хочу батон с ...\n— 23:00...", note: "День 3", codeToReveal: "МАСЛО" },
  { id: "4", text: "— Оладьи с протеином и псилиумс", note: "День 4", codeToReveal: "ОЛАДЬИ" },
  { id: "5", text: "— Может будешь моим первым на фгдс?\n— Если только в ...", note: "День 5", codeToReveal: "ЯНВАРЬ" },
  { id: "6", text: "— Ты ... не принесла\n— Пришлось спускаться\n— Ну когда просыпаешься проверяй есть ли ...", note: "День 6", codeToReveal: "ВОДА" },
  { id: "7", text: "— Зачем ты его склеила?\n— ...", note: "День 7", codeToReveal: "СНЕГОМ" },
  { id: "8", text: "— Главная ... у Чаши откроется 23 декабря", note: "День 8", codeToReveal: "ЕЛКА" },
  { id: "9", text: "— Мы копаем какашку\n— Тебе надо будет каждого к ... приучать", note: "День 9", codeToReveal: "ЛОТОК" },
  { id: "10", text: "— Там если что ..., котлета и салат в холодильнике", note: "День 10", codeToReveal: "ПЮРЕ" },
  { id: "11", text: "— Надо быстрее ... на тачку получать", note: "День 11", codeToReveal: "НОМЕРА" },
  { id: "12", text: "— Обнаружено ещё одно место в Удмуртии, где есть снег!\n— И это ...!", note: "День 12", codeToReveal: "НЕЧКИНО" },
  { id: "13", text: "— «Свои плюсы понедельника»\n— 10 ...\n— В итоге у меня 20", note: "День 13", codeToReveal: "АПТЕКИ" },
  { id: "14", text: "— Свари 3 ...\n— ... не будет твои сварим", note: "День 14", codeToReveal: "ЯЙЦА" },
];

export const QUESTS: Quest[] = [
  // PHRASE: Т-Ы-М-О-Я-В-С-Е-Л-Е-Н-Н-А-Я
  {
    id: 1, day: 1, category: QuestCategory.HOME, iconName: "Search",
    title: "Цепочка Событий", description: "Сегодня тебе предстоит пройти путь из 5 QR-кодов. Каждый код подскажет, где искать следующий. Первый код я спрятал на Зеркале в прихожей (там, где мы спорили про национальность).",
    unlockCode: "ТАКСИ", clueLetter: "Т", rewardText: "Буква 'Т' получена!"
  },
  {
    id: 2, day: 2, category: QuestCategory.HOME, iconName: "Utensils",
    title: "Битва за еду", description: "Что пытался отнять кот и получил люлей? (Татарское блюдо)",
    unlockCode: "КЫСТЫБЫ", clueLetter: "Ы", rewardText: "Буква 'Ы' получена!"
  },
  {
    id: 3, day: 3, category: QuestCategory.HOME, iconName: "ShoppingBag",
    title: "Ночной дожор", description: "С чем ты хотела батон в 11 вечера?",
    unlockCode: "МАСЛО", clueLetter: "М", rewardText: "Буква 'М' получена!"
  },
  {
    id: 4, day: 4, category: QuestCategory.HOME, iconName: "Coffee",
    title: "ПП Завтрак", description: "Что было с протеином и псилиумом?",
    unlockCode: "ОЛАДЬИ", clueLetter: "О", rewardText: "Буква 'О' получена!"
  },
  {
    id: 5, day: 5, category: QuestCategory.HYBRID, iconName: "HeartPulse",
    title: "Первый пациент", description: "На какой месяц я записался к тебе на ФГДС?",
    unlockCode: "ЯНВАРЬ", clueLetter: "Я", rewardText: "Буква 'Я' получена!"
  },
  {
    id: 6, day: 6, category: QuestCategory.HOME, iconName: "Droplets",
    title: "Утро начинается", description: "Чего не было с утра, и мне пришлось спускаться?",
    unlockCode: "ВОДА", clueLetter: "В", rewardText: "Буква 'В' получена!"
  },
  {
    id: 7, day: 7, category: QuestCategory.CITY, iconName: "Snowflake",
    title: "Реставрация", description: "Чем ты склеила то, что не могла закинуть?",
    unlockCode: "СНЕГОМ", clueLetter: "С", rewardText: "Буква 'С' получена!"
  },
  {
    id: 8, day: 8, category: QuestCategory.CITY, iconName: "TreePine",
    title: "Центр семьи", description: "Что открывается у Чаши 23 декабря?",
    unlockCode: "ЕЛКА", clueLetter: "Е", rewardText: "Буква 'Е' получена!"
  },
  {
    id: 9, day: 9, category: QuestCategory.HOME, iconName: "Cat",
    title: "Раскопки", description: "К чему надо приучать каждого (даже нас с тобой в квартире 90кв)?",
    unlockCode: "ЛОТОК", clueLetter: "Л", rewardText: "Буква 'Л' получена!"
  },
  {
    id: 10, day: 10, category: QuestCategory.HOME, iconName: "UtensilsCrossed",
    title: "Готовый ужин", description: "Что лежало в холодильнике вместе с котлетой?",
    unlockCode: "ПЮРЕ", clueLetter: "Е", rewardText: "Буква 'Е' получена!"
  },
  {
    id: 11, day: 11, category: QuestCategory.CITY, iconName: "Hash",
    title: "Автомобильное", description: "Что нужно быстрее получать на тачку?",
    unlockCode: "НОМЕРА", clueLetter: "Н", rewardText: "Буква 'Н' получена!"
  },
  {
    id: 12, day: 12, category: QuestCategory.CITY, iconName: "Mountain",
    title: "Где снег?", description: "Единственное место в Удмуртии, где есть снег (из новостей).",
    unlockCode: "НЕЧКИНО", clueLetter: "Н", rewardText: "Буква 'Н' получена!"
  },
  {
    id: 13, day: 13, category: QuestCategory.HYBRID, iconName: "Pill",
    title: "Колесо фортуны", description: "Какую категорию ты проиграла, а у меня выпало 20%?",
    unlockCode: "АПТЕКИ", clueLetter: "А", rewardText: "Буква 'А' получена!"
  },
  {
    id: 14, day: 14, category: QuestCategory.HOME, iconName: "Egg",
    title: "Кулинария", description: "Что нужно было сварить 3 штуки (но их не было)?",
    unlockCode: "ЯЙЦА", clueLetter: "Я", rewardText: "Буква 'Я' получена!"
  },
  {
    id: 15, day: 15, category: QuestCategory.HYBRID,
    title: "ФИНАЛ", description: "Введи фразу, которую ты собрала из букв (без пробелов).",
    unlockCode: "ТЫМОЯВСЕЛЕННАЯ", rewardText: "СУПЕР-ПРИЗ!",
    iconName: "Star"
  }
];