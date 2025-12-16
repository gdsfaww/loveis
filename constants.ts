import { Quest, QuestCategory, SecretClue } from './types';

export const APP_PASSWORD = "LOVE"; 

export const SECRET_CLUES: SecretClue[] = [
  {
    id: "1",
    text: "— Я хочу батон с маслом\n— 23:00...",
    note: "Гастрономическое",
    codeToReveal: "МАСЛО"
  },
  {
    id: "2",
    text: "— Ты у меня самая умная удмурточка.\n— Я русская.\n— И я русский.\n— Мы чё оба русские?",
    note: "Национальный вопрос",
    codeToReveal: "УДМУРТИЯ"
  },
  {
    id: "3",
    text: "— Он там пролезет?\n— Коты же это жидкость. И щель большая.",
    note: "Физика котов",
    codeToReveal: "ЖИДКОСТЬ"
  },
  {
    id: "4",
    text: "— Может будешь моим первым на фгдс? Я договорюсь.\n— Если только в январе))",
    note: "Медицинское",
    codeToReveal: "ЯНВАРЬ"
  },
  {
    id: "5",
    text: "— Никто меня не целует, когда уходят на работу...\n— Я полежала две минутки, поцеловала тебя в плечико. И ушла.",
    note: "Самое нежное",
    codeToReveal: "ПЛЕЧИКО"
  }
];

export const QUESTS: Quest[] = [
  // Block 1: Home (Day 1-5)
  {
    id: 1,
    day: 1,
    title: "Вкус ночи",
    description: "Найди QR-код там, где хранятся продукты для твоих ночных желаний (батон и масло).",
    category: QuestCategory.HOME,
    unlockCode: "МАСЛО",
    rewardText: "Награда: Завтрак в постель",
    iconName: "Home"
  },
  {
    id: 2,
    day: 2,
    title: "Кто мы?",
    description: "Ищи подсказку там, где мы смотрим на себя перед выходом. Вспомни наш спор про корни.",
    category: QuestCategory.HOME,
    unlockCode: "УДМУРТИЯ",
    rewardText: "Награда: Вечер без гаджетов",
    iconName: "Smile"
  },
  {
    id: 3,
    day: 3,
    title: "Агрегатное состояние",
    description: "Где прячется Ричик, когда он 'жидкость'? Ищи QR там, где его туалет или еда.",
    category: QuestCategory.HOME,
    unlockCode: "ЖИДКОСТЬ",
    rewardText: "Награда: Вкусняшка для кота (и для тебя)",
    iconName: "Cat"
  },
  {
    id: 4,
    day: 4,
    title: "Первый пациент",
    description: "Там, где лежат лекарства и бинты. Вспомни, на когда я записался к тебе на прием.",
    category: QuestCategory.HOME,
    unlockCode: "ЯНВАРЬ",
    rewardText: "Награда: Массаж (без ФГДС)",
    iconName: "HeartPulse"
  },
  {
    id: 5,
    day: 5,
    title: "Утренний ритуал",
    description: "Ищи там, где ты спишь. Там, где я жду поцелуя перед работой.",
    category: QuestCategory.HOME,
    unlockCode: "ПЛЕЧИКО",
    rewardText: "Награда: Кино на вечер",
    iconName: "BedDouble"
  },
  // Placeholders for future days
  {
    id: 6,
    day: 6,
    title: "Камское Устье",
    description: "Там, где мы мечтаем о доме. (Введи: ДОМ)",
    category: QuestCategory.CITY,
    unlockCode: "ДОМ",
    rewardText: "Награда: Поездка",
    iconName: "Map"
  },
  {
    id: 7,
    day: 7,
    title: "Сладкая жизнь",
    description: "Вспомни про 'Киндер шоколад'. (Введи: КИНДЕР)",
    category: QuestCategory.HOME,
    unlockCode: "КИНДЕР",
    rewardText: "Награда: Сладости",
    iconName: "Gift"
  },
  {
    id: 8,
    day: 8,
    title: "Такси-квест",
    description: "Вспомни ожидание 15 минут. (Введи: ТАКСИ)",
    category: QuestCategory.CITY,
    unlockCode: "ТАКСИ",
    rewardText: "Награда: Поездка в ресторан",
    iconName: "Car"
  },
  {
    id: 9,
    day: 9,
    title: "Зимние шины",
    description: "Надо быстрее номера получать. (Введи: НОМЕРА)",
    category: QuestCategory.CITY,
    unlockCode: "НОМЕРА",
    rewardText: "Награда: Автомойка (шутка)",
    iconName: "Settings"
  },
  {
    id: 10,
    day: 10,
    title: "Отпуск",
    description: "Куда мы хотим? Шри-Ланка? (Введи: ОКЕАН)",
    category: QuestCategory.HYBRID,
    unlockCode: "ОКЕАН",
    rewardText: "Награда: Планирование отпуска",
    iconName: "Plane"
  },
  {
    id: 11,
    day: 11,
    title: "Учеба",
    description: "Ты умняшка. (Введи: УМНЯШКА)",
    category: QuestCategory.HYBRID,
    unlockCode: "УМНЯШКА",
    rewardText: "Награда: Книга",
    iconName: "Book"
  },
  {
    id: 12,
    day: 12,
    title: "Шоппинг",
    description: "На ВБ зайду еще. (Введи: ВБ)",
    category: QuestCategory.HYBRID,
    unlockCode: "ВБ",
    rewardText: "Награда: Сертификат WB",
    iconName: "ShoppingBag"
  },
  {
    id: 13,
    day: 13,
    title: "Прогулка",
    description: "Оденемся и пойдем гуль. (Введи: ГУЛЯТЬ)",
    category: QuestCategory.CITY,
    unlockCode: "ГУЛЯТЬ",
    rewardText: "Награда: Прогулка по парку",
    iconName: "Trees"
  },
  {
    id: 14,
    day: 14,
    title: "Роллы",
    description: "РООООЛЛЛЫЫЫ. (Введи: РОЛЛЫ)",
    category: QuestCategory.HOME,
    unlockCode: "РОЛЛЫ",
    rewardText: "Награда: Заказ еды",
    iconName: "Utensils"
  },
  {
    id: 15,
    day: 15,
    title: "Финал",
    description: "Я тебя люблю. (Введи: ЛЮБЛЮ)",
    category: QuestCategory.HYBRID,
    unlockCode: "ЛЮБЛЮ",
    rewardText: "Награда: Главный подарок",
    iconName: "Heart"
  }
];