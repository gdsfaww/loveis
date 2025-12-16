import { Quest, QuestCategory, SecretClue } from './types';

export const APP_PASSWORD = "LOVE"; // Simple password for the partner to enter first

// !!! ANTON: CHANGE THESE TEXTS TO YOUR REAL DIALOGUE PHRASES !!!
export const SECRET_CLUES: SecretClue[] = [
  {
    id: "1",
    text: "— Я люблю тебя больше, чем пиццу.\n— А я тебя больше, чем спать.",
    note: "Записка 1 из 5"
  },
  {
    id: "2",
    text: "Помнишь, как мы промокли до нитки в Питере,\nно нам было все равно?",
    note: "Записка 2 из 5"
  },
  {
    id: "3",
    text: "— Ты мое самое лучшее приключение.\n— А ты мой самый надежный компас.",
    note: "Записка 3 из 5"
  },
  {
    id: "4",
    text: "Твоя улыбка освещает комнату ярче,\nчем эти умные лампочки.",
    note: "Записка 4 из 5"
  },
  {
    id: "5",
    text: "55.7887, 49.1221\n(Это не просто цифры, это координаты тайника...)",
    note: "Финальная подсказка"
  }
];

export const QUESTS: Quest[] = [
  // Block 1: Home
  {
    id: 1,
    day: 1,
    title: "QR-Охота",
    description: "Я расклеил по квартире 5 QR-кодов. Каждый ведет на страницу с фразой из наших диалогов. Найди их все, чтобы собрать координаты тайника. В тайнике ты найдешь код для завершения этого уровня.",
    category: QuestCategory.HOME,
    unlockCode: "CANDY",
    rewardText: "Награда: Твои любимые конфеты",
    iconName: "QrCode"
  },
  {
    id: 2,
    day: 2,
    title: "Аудио-шифр",
    description: "Послушай аудиосообщение (я отправил его в Telegram). Оно на итальянском, но там скрыто место следующей записки. Найди записку и введи код с неё сюда.",
    category: QuestCategory.HOME,
    unlockCode: "ROMA",
    rewardText: "Награда: Кофе редкого сорта",
    iconName: "Headphones"
  },
  {
    id: 3,
    day: 3,
    title: "Пазл из фотографий",
    description: "Я разрезал наше фото на 12 частей и спрятал их (книги, карманы, кухня). Собери пазл, переверни его — там код от замка на коробке. Введи код замка сюда.",
    category: QuestCategory.HOME,
    unlockCode: "1205",
    rewardText: "Награда: Косметика",
    iconName: "Image"
  },
  {
    id: 4,
    day: 4,
    title: "Кроссворд воспоминаний",
    description: "Ответь на вопросы о нас: первая встреча, фильм, место признания. Ответы — это координаты. Найди точку в квартире. Код написан там.",
    category: QuestCategory.HOME,
    unlockCode: "MEMORY",
    rewardText: "Награда: Билеты в кино",
    iconName: "PenTool"
  },
  {
    id: 5,
    day: 5,
    title: "Холодно-Горячо",
    description: "Включи умные лампы в гостиной. Ходи по комнате: синий — холодно, красный — горячо. Найди тайник и код внутри.",
    category: QuestCategory.HOME,
    unlockCode: "LIGHT",
    rewardText: "Награда: Украшение",
    iconName: "Lightbulb"
  },
  // Block 2: City
  {
    id: 6,
    day: 6,
    title: "Маршрут Казани",
    description: "Посмотри карту в мессенджере. 3 точки: знакомство, свидание, кафе. Собери части стихотворения. Финал в камере хранения ТЦ. Код от ячейки — это пароль сюда.",
    category: QuestCategory.CITY,
    unlockCode: "KAZAN",
    rewardText: "Награда: Сюрприз в ТЦ",
    iconName: "Map"
  },
  {
    id: 7,
    day: 7,
    title: "Фотоквест",
    description: "Сделай селфи: Кремль, Кул-Шариф, Площадь Тысячелетия. Отправь мне. Я скину локацию финиша. В ресторане на столе тебя ждет код.",
    category: QuestCategory.CITY,
    unlockCode: "DINNER",
    rewardText: "Награда: Романтический ужин",
    iconName: "Camera"
  },
  {
    id: 8,
    day: 8,
    title: "Геокешинг",
    description: "Парк Тысячелетия. Координаты зашифрованы в судоку (лежит на столе). Найди капсулу. В ней ключ и кодовое слово.",
    category: QuestCategory.CITY,
    unlockCode: "SUDOKU",
    rewardText: "Награда: Ключ от банковской ячейки",
    iconName: "Navigation"
  },
  {
    id: 9,
    day: 9,
    title: "Такси-Квест",
    description: "Вызови такси к подъезду ровно в 18:00. Водитель знает маршрут. Выполни мини-задания. В конце пути я жду тебя с кодом.",
    category: QuestCategory.CITY,
    unlockCode: "TAXI",
    rewardText: "Награда: Я и подарок",
    iconName: "Car"
  },
  {
    id: 10,
    day: 10,
    title: "Театр & Музей",
    description: "Индивидуальная экскурсия в Нац. музее РТ. Экскурсовод передаст конверт. Внутри карта и код.",
    category: QuestCategory.CITY,
    unlockCode: "MUSEUM",
    rewardText: "Награда: Культурный вечер",
    iconName: "Ticket"
  },
  // Block 3: Hybrid
  {
    id: 11,
    day: 11,
    title: "История ИИ",
    description: "Посмотри видео, которое я сгенерировал (ссылка внизу). В конце видео мой ИИ-голос назовет шифр.",
    category: QuestCategory.HYBRID,
    unlockCode: "SORA",
    rewardText: "Награда: Сертификат на СПА",
    iconName: "Video"
  },
  {
    id: 12,
    day: 12,
    title: "Веб-квест",
    description: "Пройди мини-игру по ссылке. Угадай песню по эмодзи. Выигрыш — промокод, который нужно ввести сюда.",
    category: QuestCategory.HYBRID,
    unlockCode: "SONG",
    rewardText: "Награда: Шопинг",
    iconName: "Globe"
  },
  {
    id: 13,
    day: 13,
    title: "Бот-Детектив",
    description: "Напиши нашему Telegram-боту. Он проведет расследование. Финал — координаты тайника дома. Введи слово с тайника.",
    category: QuestCategory.HYBRID,
    unlockCode: "DETECTIVE",
    rewardText: "Награда: Ювелирное изделие",
    iconName: "MessageCircle"
  },
  {
    id: 14,
    day: 14,
    title: "AR Охота",
    description: "Скачай приложение Wallame. Наведи на картину в прихожей. Там скрыто виртуальное послание с кодом.",
    category: QuestCategory.HYBRID,
    unlockCode: "VIRTUAL",
    rewardText: "Награда: Новый гаджет",
    iconName: "Smartphone"
  },
  {
    id: 15,
    day: 15,
    title: "Финал",
    description: "Соберись. Следуй за видео-инструкцией. Найди QR в городе. Он откроет AR портал. Введи финальное слово с сертификата.",
    category: QuestCategory.HYBRID,
    unlockCode: "FOREVER",
    rewardText: "Награда: Путешествие!",
    iconName: "Heart"
  }
];