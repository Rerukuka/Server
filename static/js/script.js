// Импорт Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqrJmeWFgdZZU0X8u9Z4wf4Borz1vUtDg",
  authDomain: "miningpool-bd0f8.firebaseapp.com",
  databaseURL: "https://miningpool-bd0f8-default-rtdb.firebaseio.com",
  projectId: "miningpool-bd0f8",
  storageBucket: "miningpool-bd0f8.firebasestorage.app",
  messagingSenderId: "982729141280",
  appId: "1:982729141280:web:a442e7122a8f4e60666045",
  measurementId: "G-CNL8DZY9LN"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

// Объект переводов для всех поддерживаемых языков
export const translations = {
  "ru": {
    "site-name": "BTCAIwork",
    "nav-index": "Главная",
    "nav-dashboard": "Статистика",
    "nav-tokens": "Купить токены",
    "nav-login": "Вход",
    "nav-profile": "Аккаунт",
    "nav-scripts": "Скрипты",
    "nav-connection": "Контакты",
    "nav-roadmap": "Дорожная карта",
    "nav-staking": "Стейкинг",
    "profile-logout": "Выход",
    "roadmap-title": "Дорожная карта",
    "intro-line": "— когда Биткойн работает на тебя с силой искусственного интеллекта",
    "mining-concept": "Представь майнинг, где не ты ищешь блок — а искусственный интеллект находит его за тебя.",
    "ecosystem-desc": "— это не просто соло-майнинг. Это умная экосистема, которая зарабатывает быстрее, точнее и выгоднее, чем обычные пулы.",
    "ai-prediction": "Наш ИИ в реальном времени предсказывает наилучшие диапазоны Nonce — и направляет твоего майнера сразу туда, где больше шансов найти блок. Это значит:",
    "ai-benefit": "Меньше времени — больше наград.",
    "why-choose": "Почему выбирают BTCAIwork?",
    "feature-ai-acceleration": "AI-ускорение добычи",
    "feature-ai-desc": "Модель самообучается на динамике сети Биткойн.",
    "feature-solo-mining": "Честный соло-майнинг",
    "feature-solo-desc": "Ты находишь блок — ты получаешь награду.",
    "feature-browser-mining": "Браузерный майнинг и DePIN",
    "feature-browser-desc": "Зарабатывай даже без ASIC — с обычного ПК или участвуя в децентрализованной инфраструктуре.",
    "feature-payouts-analytics": "Автоматические выплаты и мощная аналитика",
    "feature-payouts-desc": "Всё под контролем, всё в реальном времени.",
    "feature-investment": "Возможность инвестировать в рост",
    "feature-investment-desc": "Выпуск токенов, сжигание, управление через DAO — будь не просто участником, будь совладельцем будущего.",
    "new-gen-mining": "— это твой шанс зайти в соло-майнинг на старте нового поколения.",
    "no-middlemen": "Здесь нет посредников. Нет скрытых комиссий. Только ты, твой майнер и умный AI, который работает на твой доход 24/7.",
    "ready-to-earn": "Готов получать больше от Биткойна?",
    "join-call-1": "Подключайся к ",
    "join-call-2": ". Пусть интеллект работает — а ты зарабатывай.",
    "footer-text": "© 2025 BtcAIworK. Все права защищены.",
    "home-title": "Главная - BtcAIworK",
    "home-welcome": "Добро пожаловать в BtcAIworK!",
    "home-description": "BtcAIworK — это инновационная платформа для майнинга криптовалют с использованием искусственного интеллекта.",
    "home-feature1": "AI-оптимизация майнинга",
    "home-feature2": "Прозрачная статистика",
    "home-feature3": "Высокая доходность",
    "home-get-started": "Начать сейчас",
    "dashboard-title": "Статистика майнинга",
    "miners-label": "Количество майнеров:",
    "current-block-label": "Текущий блок:",
    "hashrate-label": "Хэшрейт:",
    "best-share-label": "Лучший шар:",
    "blocks-found-label": "Найдено блоков:",
    "uptime-label": "Время работы:",
    "main-title": "Купить Токены",
    "main-description": "Приобретайте токены BtcAIworK для участия в нашей экосистеме.",
    "token-price-title": "Текущая цена",
    "token-price-value": "0.001 BTC за токен",
    "token-available-title": "Доступно токенов",
    "token-available-value": "10,000,000",
    "token-balance-title": "Ваши токены",
    "token-balance-value": "0",
    "label-wallet": "Адрес кошелька",
    "wallet-placeholder": "Введите адрес вашего кошелька",
    "label-amount": "Количество токенов",
    "btn-buy-tokens": "Купить токены",
    "transaction-title": "История транзакций",
    "table-date": "Дата",
    "table-wallet": "Кошелек",
    "table-amount": "Количество",
    "table-sum": "Сумма (BTC)",
    "table-status": "Статус",
    "status-completed": "Завершено",
    "notification-success": "Токены успешно куплены!",
    "market-stats-title": "Статистика токенов",
    "total-sold-label": "Всего продано",
    "market-cap-label": "Рыночная капитализация",
    "btn-clear-history": "Очистить историю",
    "scripts-title": "Скрипты",
    "scripts-description": "Управляйте скриптами для майнинга и анализа данных.",
    "script-extract-nonce": "extract_nonce",
    "script-extract-nonce-desc": "Извлекает текущий nonce из данных блока.",
    "script-import-requests": "import_requests",
    "script-import-requests-desc": "Импортирует данные запросов для анализа.",
    "script-make-full-block-node": "make_full_block_node",
    "script-make-full-block-node-desc": "Создаёт полную ноду блока для майнинга.",
    "script-predict-range": "predict_range",
    "script-predict-range-desc": "Предсказывает оптимальный диапазон nonce.",
    "script-target": "target",
    "script-target-desc": "Определяет текущую цель сложности сети.",
    "script-train-ai": "train_ai",
    "script-train-ai-desc": "Обучает AI для оптимизации майнинга.",
    "table-header-script": "Скрипт",
    "table-header-description": "Описание",
    "table-header-action": "Действие",
    "run-script": "Запустить",
    "output-title": "Вывод скрипта",
    "btn-clear-output": "Очистить вывод",
    "notification-success": "Скрипт успешно выполнен!",
    "connection-title": "Контакты для Связи",
    "connection-intro": "Мы здесь, чтобы помочь вам с любыми вопросами. Подключайтесь к нашему пулу и начинайте майнинг с BtcAIworK!",
    "connection-servers-title": "Серверы для Подключения",
    "connection-table-region": "Регион",
    "connection-table-address": "Адрес Сервера",
    "connection-table-port": "Порт",
    "connection-table-protocol": "Протокол",
    "connection-table-status": "Статус",
    "connection-region-europe": "Европа",
    "connection-region-america": "Северная Америка",
    "connection-region-asia": "Азия",
    "connection-guide-title": "Как Подключиться к Пулу",
    "connection-guide-step1": "Выберите сервер, ближайший к вашему региону, из таблицы выше.",
    "connection-guide-step2": "Настройте ваше майнинг-оборудование (например, ASIC или GPU) с помощью адреса сервера и порта.",
    "connection-guide-step3": "Используйте ваш кошелёк Bitcoin в качестве имени пользователя (без пароля, если не указано иное).",
    "connection-guide-step4": "Пример команды для cgminer: <code>cgminer -o stratum+tcp://eu.btcaiwork.com:3333 -u YOUR_BTC_WALLET_ADDRESS</code>",
    "connection-guide-step5": "Запустите майнинг и отслеживайте статистику на странице <a href='dashboard.html'>Статистика</a>.",
    "connection-contact-title": "Свяжитесь с Нами",
    "connection-support-label": "Поддержка:",
    "connection-telegram-label": "Telegram:",
    "connection-discord-label": "Discord:",
    "connection-stats-title": "Статистика Подключений",
    "connection-active-miners-label": "Активных майнеров:",
    "connection-last-update-label": "Последнее обновление:",
    "register-title": "Создать аккаунт",
    "tab-email": "Email",
    "tab-phone": "Телефон",
    "email-placeholder": "Электронная почта",
    "phone-placeholder": "Номер телефона (10-15 цифр)",
    "code-placeholder": "Код верификации",
    "username-placeholder": "Имя пользователя",
    "password-placeholder": "Пароль (мин. 8 символов)",
    "confirm-password-placeholder": "Повторите пароль",
    "ai-placeholder": "Выберите AI-алгоритм для майнинга",
    "ai-neural": "Neural Mining",
    "ai-quantum": "Quantum Hash",
    "ai-deep": "Deep Block",
    "send-sms": "Отправить код",
    "agreement-text": "Я ознакомлен и согласен с <a href='./terms.html' target='_blank'>условиями пользования</a>",
    "register-button": "Зарегистрироваться",
    "login-link": "Уже есть аккаунт? Войти",
    "terms-last-update": "Последнее обновление: 09:29 PM +05, 28.05.2025",
    "terms-section1-1": "Использование услуг BtcAIworK означает полное согласие с настоящими условиями.",
    "terms-section1-2": "BtcAIworK предоставляет инфраструктуру для майнинга, распределяя вознаграждение пропорционально вкладу.",
    "terms-section1-3": "Мы оставляем за собой право обновлять условия с уведомлением за 7 дней.",
    "terms-section2-1": "Регистрация требует указания достоверных данных (email или телефон).",
    "terms-section2-2": "После регистрации вы получите доступ к серверным данным (адреса, порты).",
    "terms-section2-3": "Сохранность ваших данных — ваша ответственность.",
    "terms-section2-4": "Мультиаккаунтинг запрещён и может привести к блокировке.",
    "terms-section3-1": "Пользователь обязуется:",
    "terms-section3-1a": "Использовать платформу только законно.",
    "terms-section3-1b": "Не нарушать стабильность системы.",
    "terms-section3-1c": "Не применять вредоносное ПО.",
    "terms-section3-2": "Вы несёте ответственность за настройку оборудования и соблюдение правил.",
    "terms-section3-3": "Нарушение условий может привести к отключению без предупреждения.",
    "terms-section4-1": "BtcAIworK не отвечает за:",
    "terms-section4-1a": "Сбои сети или оборудования пользователя.",
    "terms-section4-1b": "Перерывы по техническим причинам или форс-мажору.",
    "terms-section4-1c": "Изменения курса криптовалют.",
    "terms-section4-2": "Вознаграждение начисляется только при успешной валидации.",
    "terms-section4-3": "Не гарантируется постоянная доступность или прибыль.",
    "terms-section5-1": "Споры решаются путём переговоров, иначе — по законодательству.",
    "terms-section5-2": "Соглашение вступает в силу при регистрации.",
    "terms-section5-3": "Мы можем приостановить доступ при нарушении условий.",
    "privacy-title": "Политика конфиденциальности",
    "privacy-last-update": "Последнее обновление: 09:29 PM +05, 28.05.2025",
    "privacy-welcome": "Мы в BtcAIworK уважаем вашу конфиденциальность и защищаем ваши данные.",
    "privacy-section1-title": "1. Сбор данных",
    "privacy-section1-text": "Мы собираем: email, имя пользователя, телефон (при регистрации), данные активности (транзакции, подключения).",
    "privacy-section2-title": "2. Использование данных",
    "privacy-section2-text": "Данные используются для работы платформы, безопасности и аналитики. Передача третьим лицам возможна только по закону.",
    "privacy-section3-title": "3. Защита данных",
    "privacy-section3-text": "Применяем шифрование и меры безопасности. Вы отвечаете за сохранность пароля.",
    "privacy-section4-title": "4. Ваши права",
    "privacy-section4-text": "Вы можете запросить доступ, исправление или удаление своих данных, связавшись с поддержкой.",
    "privacy-section5-title": "5. Cookies и аналитика",
    "privacy-section5-text": "Мы используем cookies для улучшения сервиса. Вы можете отключить их в настройках браузера.",
    "back-to-register": "Назад",
    "login-title": "Вход",
    "login-button": "Войти",
    "forgot-password": "Забыли пароль?",
    "register-link": "Нет аккаунта? Зарегистрироваться",
    "account-title": "Аккаунт",
    "profile-username": "Имя пользователя:",
    "profile-email": "Email:",
    "profile-date": "Дата регистрации:",
    "profile-wallet": "Bitcoin-кошелёк:",
    "profile-save-wallet": "Сохранить",
    "staking-title": "Ваш стейкинг",
    "staking-option1-title": "Базовый стейкинг",
    "staking-option1-desc": "Годовая доходность: 5%",
    "staking-option1-amount": "Ваши токены:",
    "staking-option2-title": "Премиум стейкинг",
    "staking-option2-desc": "Годовая доходность: 10%",
    "staking-option2-amount": "Ваши токены:",
    "staking-manage": "Стейк",
    "login-fill-fields": "Пожалуйста, заполните все поля.",
    "login-success": "Вход выполнен успешно!",
    "login-error": "Ошибка входа:",
    "register-fill-fields": "Пожалуйста, заполните все поля.",
    "passwords-not-match": "Пароли не совпадают.",
    "password-too-short": "Пароль должен содержать не менее 6 символов.",
    "recaptcha-error": "Ошибка проверки reCAPTCHA.",
    "register-success": "Регистрация прошла успешно!",
    "register-error": "Ошибка регистрации:",
    "phone-auth-unavailable": "Аутентификация по телефону недоступна. Используйте регистрацию по email.",
    "error-fetch": "Ошибка получения данных:",
    "logout-error": "Ошибка выхода:",
    "wallet-save-error": "Ошибка сохранения кошелька:"
  },
  "en": {
    "site-name": "BTCAIwork",
    "nav-index": "Home",
    "nav-dashboard": "Statistics",
    "nav-tokens": "Buy Tokens",
    "nav-login": "Login",
    "nav-profile": "Account",
    "nav-scripts": "Scripts",
    "nav-connection": "Contacts",
    "nav-roadmap": "Roadmap",
    "nav-staking": "Staking",
    "profile-logout": "Logout",
    "roadmap-title": "Roadmap",
    "intro-line": "— when Bitcoin works for you with the power of artificial intelligence",
    "mining-concept": "Imagine mining where you don’t search for a block—artificial intelligence finds it for you.",
    "ecosystem-desc": "— is not just solo mining. It’s a smart ecosystem that earns faster, more accurately, and more profitably than traditional pools.",
    "ai-prediction": "Our AI predicts the best Nonce ranges in real-time and directs your miner straight to where the chances of finding a block are highest. This means:",
    "ai-benefit": "Less time—more rewards.",
    "why-choose": "Why choose BTCAIwork?",
    "feature-ai-acceleration": "AI-Accelerated Mining",
    "feature-ai-desc": "The model self-learns from Bitcoin network dynamics.",
    "feature-solo-mining": "Fair Solo Mining",
    "feature-solo-desc": "You find the block—you get the reward.",
    "feature-browser-mining": "Browser Mining and DePIN",
    "feature-browser-desc": "Earn even without an ASIC—using a regular PC or by participating in decentralized infrastructure.",
    "feature-payouts-analytics": "Automated Payouts and Powerful Analytics",
    "feature-payouts-desc": "Everything under control, all in real-time.",
    "feature-investment": "Opportunity to Invest in Growth",
    "feature-investment-desc": "Token issuance, burning, governance via DAO—be more than a participant, be a co-owner of the future.",
    "new-gen-mining": "— is your chance to enter solo mining at the start of a new generation.",
    "no-middlemen": "No middlemen. No hidden fees. Just you, your miner, and smart AI working for your income 24/7.",
    "ready-to-earn": "Ready to earn more from Bitcoin?",
    "join-call-1": "Join ",
    "join-call-2": ". Let intelligence work—while you earn.",
    "footer-text": "© 2025 BTCAIworK. All rights reserved.",
    "home-title": "Home - BtcAIworK",
    "home-welcome": "Welcome to BtcAIworK!",
    "home-description": "BtcAIworK is an innovative platform for cryptocurrency mining using artificial intelligence.",
    "home-feature1": "AI-Optimized Mining",
    "home-feature2": "Transparent Statistics",
    "home-feature3": "High Profitability",
    "home-get-started": "Get Started Now",
    "dashboard-title": "Mining Statistics",
    "miners-label": "Number of Miners:",
    "current-block-label": "Current Block:",
    "hashrate-label": "Hashrate:",
    "best-share-label": "Best Share:",
    "blocks-found-label": "Blocks Found:",
    "uptime-label": "Uptime:",
    "main-title": "Buy Tokens",
    "main-description": "Purchase BtcAIworK tokens to participate in our ecosystem.",
    "token-price-title": "Current Price",
    "token-price-value": "0.001 BTC per token",
    "token-available-title": "Available Tokens",
    "token-available-value": "10,000,000",
    "token-balance-title": "Your Tokens",
    "token-balance-value": "0",
    "label-wallet": "Wallet Address",
    "wallet-placeholder": "Enter your wallet address",
    "label-amount": "Number of tokens",
    "btn-buy-tokens": "Buy Tokens",
    "transaction-title": "Transaction History",
    "table-date": "Date",
    "table-wallet": "Wallet",
    "table-amount": "Amount",
    "table-sum": "Sum (BTC)",
    "table-status": "Status",
    "status-completed": "Completed",
    "notification-success": "Tokens successfully purchased!",
    "market-stats-title": "Token Statistics",
    "total-sold-label": "Total Sold",
    "market-cap-label": "Market Capitalization",
    "btn-clear-history": "Clear History",
    "scripts-title": "Scripts",
    "scripts-description": "Manage scripts for mining and data analysis.",
    "script-extract-nonce": "extract_nonce",
    "script-extract-nonce-desc": "Extracts the current nonce from block data.",
    "script-import-requests": "import_requests",
    "script-import-requests-desc": "Imports request data for analysis.",
    "script-make-full-block-node": "make_full_block_node",
    "script-make-full-block-node-desc": "Creates a full block node for mining.",
    "script-predict-range": "predict_range",
    "script-predict-range-desc": "Predicts the optimal nonce range.",
    "script-target": "target",
    "script-target-desc": "Determines the current network difficulty target.",
    "script-train-ai": "train_ai",
    "script-train-ai-desc": "Trains AI for mining optimization.",
    "table-header-script": "Script",
    "table-header-description": "Description",
    "table-header-action": "Action",
    "run-script": "Run",
    "output-title": "Script Output",
    "btn-clear-output": "Clear Output",
    "notification-success": "Script executed successfully!",
    "connection-title": "Contact Information",
    "connection-intro": "We are here to assist you with any questions. Connect to our pool and start mining with BtcAIworK!",
    "connection-servers-title": "Connection Servers",
    "connection-table-region": "Region",
    "connection-table-address": "Server Address",
    "connection-table-port": "Port",
    "connection-table-protocol": "Protocol",
    "connection-table-status": "Status",
    "connection-region-europe": "Europe",
    "connection-region-america": "North America",
    "connection-region-asia": "Asia",
    "connection-guide-title": "How to Connect to the Pool",
    "connection-guide-step1": "Select the server closest to your region from the table above.",
    "connection-guide-step2": "Configure your mining equipment (e.g., ASIC or GPU) using the server address and port.",
    "connection-guide-step3": "Use your Bitcoin wallet as the username (no password unless specified).",
    "connection-guide-step4": "Example cgminer command: <code>cgminer -o stratum+tcp://eu.btcaiwork.com:3333 -u YOUR_BTC_WALLET_ADDRESS</code>",
    "connection-guide-step5": "Start mining and monitor statistics on the <a href='dashboard.html'>Statistics</a> page.",
    "connection-contact-title": "Contact Us",
    "connection-support-label": "Support:",
    "connection-telegram-label": "Telegram:",
    "connection-discord-label": "Discord:",
    "connection-stats-title": "Connection Statistics",
    "connection-active-miners-label": "Active Miners:",
    "connection-last-update-label": "Last Update:",
    "register-title": "Create Account",
    "tab-email": "Email",
    "tab-phone": "Phone",
    "email-placeholder": "Email address",
    "phone-placeholder": "Phone number (10-15 digits)",
    "code-placeholder": "Verification code",
    "username-placeholder": "Username",
    "password-placeholder": "Password (min 8 characters)",
    "confirm-password-placeholder": "Confirm password",
    "ai-placeholder": "Select AI algorithm for mining",
    "ai-neural": "Neural Mining",
    "ai-quantum": "Quantum Hash",
    "ai-deep": "Deep Block",
    "send-sms": "Send code",
    "agreement-text": "I have read and agree to the <a href='./terms.html' target='_blank'>Terms of Use</a>",
    "register-button": "Register",
    "login-link": "Already have an account? Log in",
    "terms-last-update": "Last updated: 09:29 PM +05, 28.05.2025",
    "terms-section1-1": "Using BtcAIworK services means full agreement with these terms.",
    "terms-section1-2": "BtcAIworK provides mining infrastructure, distributing rewards proportionally.",
    "terms-section1-3": "We reserve the right to update terms with a 7-day notice.",
    "terms-section2-1": "Registration requires accurate data (email or phone number).",
    "terms-section2-2": "After registration, you will receive server data (addresses, ports).",
    "terms-section2-3": "Data security is your responsibility.",
    "terms-section2-4": "Multi-accounting is prohibited and may lead to a ban.",
    "terms-section3-1": "Users must:",
    "terms-section3-1a": "Use the platform legally.",
    "terms-section3-1b": "Not disrupt system stability.",
    "terms-section3-1c": "Not use malicious software.",
    "terms-section3-2": "You are responsible for equipment setup and compliance.",
    "terms-section3-3": "Violations may result in disconnection without warning.",
    "terms-section4-1": "BtcAIworK is not liable for:",
    "terms-section4-1a": "Network or user equipment failures.",
    "terms-section4-1b": "Downtime due to technical issues or force majeure.",
    "terms-section4-1c": "Cryptocurrency price fluctuations.",
    "terms-section4-2": "Rewards are credited only upon successful validation.",
    "terms-section4-3": "No guarantee of constant availability or profit.",
    "terms-section5-1": "Disputes are resolved through negotiation, otherwise by law.",
    "terms-section5-2": "Agreement takes effect upon registration.",
    "terms-section5-3": "We may suspend access for violations.",
    "privacy-title": "Privacy Policy",
    "privacy-last-update": "Last updated: 09:29 PM +05, 28.05.2025",
    "privacy-welcome": "We at BtcAIworK respect your privacy and protect your data.",
    "privacy-section1-title": "1. Data Collection",
    "privacy-section1-text": "We collect: email address, username, phone number (upon registration), activity data (transactions, connections).",
    "privacy-section2-title": "2. Data Usage",
    "privacy-section2-text": "Data is used for platform operation, security, and analytics. Sharing with third parties is only legally required.",
    "privacy-section3-title": "3. Data Protection",
    "privacy-section3-text": "We use encryption and security measures. You are responsible for password safety.",
    "privacy-section4-title": "4. Your Rights",
    "privacy-section4-text": "You can request access to, correction, or deletion of your data by contacting support.",
    "privacy-section5-title": "5. Cookies and Analytics",
    "privacy-section5-text": "We use cookies to improve the service. You can disable them in browser settings.",
    "back-to-register": "Back",
    "login-title": "Login",
    "login-button": "Login",
    "forgot-password": "Forgot password?",
    "register-link": "Don't have an account? Register",
    "account-title": "Account",
    "profile-username": "Username:",
    "profile-email": "Email",
    "profile-date": "Registration Date:",
    "profile-wallet": "Bitcoin Wallet:",
    "profile-save-wallet": "Save",
    "staking-title": "Your Staking",
    "staking-option1-title": "Basic Staking",
    "staking-option1-desc": "Annual Yield: 5%",
    "staking-option1-amount": "Your Tokens:",
    "staking-option2-title": "Premium Staking",
    "staking-option2-desc": "Annual Yield: 10%",
    "staking-option2-amount": "Your Tokens:",
    "staking-manage": "Stake",
    "login-fill-fields": "Please fill in all fields.",
    "login-success": "Login successful!",
    "login-error": "Login failed:",
    "register-fill-fields": "Please fill in all fields.",
    "passwords-not-match": "Passwords do not match.",
    "password-too-short": "Password must be at least 6 characters long.",
    "recaptcha-error": "Error verifying reCAPTCHA.",
    "register-success": "Registration successful!",
    "register-error": "Registration failed:",
    "phone-auth-unavailable": "Phone authentication is unavailable. Please use email registration.",
    "error-fetch": "Error fetching data:",
    "logout-error": "Error logging out:",
    "wallet-save-error": "Error saving wallet address:"
  },
  "de": {
    "site-name": "BTCAIwork",
    "nav-index": "Startseite",
    "nav-dashboard": "Statistiken",
    "nav-tokens": "Token Kaufen",
    "nav-login": "Einloggen",
    "nav-profile": "Konto",
    "nav-scripts": "Skripte",
    "nav-connection": "Kontakte",
    "nav-roadmap": "Roadmap",
    "nav-staking": "Staking",
    "profile-logout": "Abmelden",
    "roadmap-title": "Roadmap",
    "intro-line": "— wenn Bitcoin mit der Kraft künstlicher Intelligenz für dich arbeitet",
    "mining-concept": "Stell dir Mining vor, bei dem du nicht nach einem Block suchst—die künstliche Intelligenz findet ihn für dich.",
    "ecosystem-desc": "— ist nicht nur Solo-Mining. Es ist ein intelligentes Ökosystem, das schneller, präziser und profitabler verdient als traditionelle Pools.",
    "ai-prediction": "Unsere KI prognostiziert in Echtzeit die besten Nonce-Bereiche und leitet deinen Miner direkt dorthin, wo die Chancen, einen Block zu finden, am höchsten sind. Das bedeutet:",
    "ai-benefit": "Weniger Zeit—mehr Belohnungen.",
    "why-choose": "Warum BTCAIwork wählen?",
    "feature-ai-acceleration": "KI-beschleunigtes Mining",
    "feature-ai-desc": "Das Modell lernt aus den Dynamiken des Bitcoin-Netzwerks selbst.",
    "feature-solo-mining": "Fairer Solo-Mining",
    "feature-solo-desc": "Du findest den Block—du erhältst die Belohnung.",
    "feature-browser-mining": "Browser-Mining und DePIN",
    "feature-browser-desc": "Verdiene auch ohne ASIC—mit einem normalen PC oder durch Teilnahme an dezentralisierter Infrastruktur.",
    "feature-payouts-analytics": "Automatisierte Auszahlungen und leistungsstarke Analytik",
    "feature-payouts-desc": "Alles unter Kontrolle, alles in Echtzeit.",
    "feature-investment": "Möglichkeit, in Wachstum zu investieren",
    "feature-investment-desc": "Token-Ausgabe, Verbrennung, Governance über DAO—sei mehr als ein Teilnehmer, sei ein Mitbesitzer der Zukunft.",
    "new-gen-mining": "— ist deine Chance, am Anfang einer neuen Generation in Solo-Mining einzusteigen.",
    "no-middlemen": "Keine Mittelsmänner. Keine versteckten Gebühren. Nur du, dein Miner und smarte KI, die 24/7 für dein Einkommen arbeitet.",
    "ready-to-earn": "Bereit, mehr vom Bitcoin zu verdienen?",
    "join-call-1": "Schließe dich an ",
    "join-call-2": ". Lass die Intelligenz arbeiten—während du verdienst.",
    "footer-text": "© 2025 BTCAIworK. Alle Rechte vorbehalten.",
    "home-title": "Startseite - BtcAIworK",
    "home-welcome": "Willkommen bei BtcAIworK!",
    "home-description": "BtcAIworK ist eine innovative Plattform für das Mining von Kryptowährungen mit künstlicher Intelligenz.",
    "home-feature1": "KI-Optimiertes Mining",
    "home-feature2": "Transparente Statistiken",
    "home-feature3": "Hohe Rentabilität",
    "home-get-started": "Jetzt starten",
    "dashboard-title": "Mining-Statistiken",
    "miners-label": "Anzahl der Miner:",
    "current-block-label": "Aktueller Block:",
    "hashrate-label": "Hashrate:",
    "best-share-label": "Bester Share:",
    "blocks-found-label": "Gefundene Blöcke:",
    "uptime-label": "Betriebszeit:",
    "main-title": "Token Kaufen",
    "main-description": "Kaufen Sie BtcAIworK-Token, um an unserem Ökosystem teilzunehmen.",
    "token-price-title": "Aktueller Preis",
    "token-price-value": "0.001 BTC pro Token",
    "token-available-title": "Verfügbare Token",
    "token-available-value": "10,000,000",
    "token-balance-title": "Ihre Token",
    "token-balance-value": "0",
    "label-wallet": "Wallet-Adresse",
    "wallet-placeholder": "Geben Sie Ihre Wallet-Adresse ein",
    "label-amount": "Anzahl der Token",
    "btn-buy-tokens": "Token kaufen",
    "transaction-title": "Transaktionsverlauf",
    "table-date": "Datum",
    "table-wallet": "Wallet",
    "table-amount": "Menge",
    "table-sum": "Summe (BTC)",
    "table-status": "Status",
    "status-completed": "Abgeschlossen",
    "notification-success": "Token erfolgreich gekauft!",
    "market-stats-title": "Token-Statistiken",
    "total-sold-label": "Insgesamt verkauft",
    "market-cap-label": "Marktkapitalisierung",
    "btn-clear-history": "Verlauf löschen",
    "scripts-title": "Skripte",
    "scripts-description": "Verwalten Sie Skripte für Mining und Datenanalyse.",
    "script-extract-nonce": "extract_nonce",
    "script-extract-nonce-desc": "Extrahiert den aktuellen Nonce aus Blockdaten.",
    "script-import-requests": "import_requests",
    "script-import-requests-desc": "Importiert Anfragedaten zur Analyse.",
    "script-make-full-block-node": "make_full_block_node",
    "script-make-full-block-node-desc": "Erstellt einen vollständigen Blockknoten für Mining.",
    "script-predict-range": "predict_range",
    "script-predict-range-desc": "Prognostiziert den optimalen Nonce-Bereich.",
    "script-target": "target",
    "script-target-desc": "Bestimmt das aktuelle Netzwerk-Schwierigkeitsziel.",
    "script-train-ai": "train_ai",
    "script-train-ai-desc": "Trainiert KI für Mining-Optimierung.",
    "table-header-script": "Skript",
    "table-header-description": "Beschreibung",
    "table-header-action": "Aktion",
    "run-script": "Ausführen",
    "output-title": "Skriptausgabe",
    "btn-clear-output": "Ausgabe löschen",
    "notification-success": "Skript erfolgreich ausgeführt!",
    "connection-title": "Kontaktdaten",
    "connection-intro": "Wir sind hier, um Ihnen bei allen Fragen zu helfen. Verbinden Sie sich mit unserem Pool und beginnen Sie mit dem Mining mit BtcAIworK!",
    "connection-servers-title": "Verbindungsserver",
    "connection-table-region": "Region",
    "connection-table-address": "Serveradresse",
    "connection-table-port": "Port",
    "connection-table-protocol": "Protokoll",
    "connection-table-status": "Status",
    "connection-region-europe": "Europa",
    "connection-region-america": "Nordamerika",
    "connection-region-asia": "Asien",
    "connection-guide-title": "Wie man sich mit dem Pool verbindet",
    "connection-guide-step1": "Wählen Sie den Server, der Ihrem Standort am nächsten ist, aus der Tabelle oben.",
    "connection-guide-step2": "Konfigurieren Sie Ihre Mining-Ausrüstung (z. B. ASIC oder GPU) mit der Serveradresse und dem Port.",
    "connection-guide-step3": "Verwenden Sie Ihre Bitcoin-Wallet als Benutzernamen (kein Passwort, es sei denn, es ist angegeben).",
    "connection-guide-step4": "Beispiel-Befehl für cgminer: <code>cgminer -o stratum+tcp://eu.btcaiwork.com:3333 -u YOUR_BTC_WALLET_ADDRESS</code>",
    "connection-guide-step5": "Starten Sie das Mining und überprüfen Sie die Statistiken auf der <a href='dashboard.html'>Statistik</a>-Seite.",
    "connection-contact-title": "Kontaktiere uns",
    "connection-support-label": "Support:",
    "connection-telegram-label": "Telegram:",
    "connection-discord-label": "Discord:",
    "connection-stats-title": "Verbindungsstatistiken",
    "connection-active-miners-label": "Aktive Miner:",
    "connection-last-update-label": "Letztes Update:",
    "register-title": "Konto erstellen",
    "tab-email": "Email",
    "tab-phone": "Telefon",
    "email-placeholder": "E-Mail-Adresse",
    "phone-placeholder": "Telefonnummer (10-15 Ziffern)",
    "code-placeholder": "Bestätigungscode",
    "username-placeholder": "Benutzername",
    "password-placeholder": "Passwort (min. 8 Zeichen)",
    "confirm-password-placeholder": "Passwort bestätigen",
    "ai-placeholder": "Wählen Sie einen KI-Algorithmus für das Mining aus",
    "ai-neural": "Neural Mining",
    "ai-quantum": "Quantum Hash",
    "ai-deep": "Deep Block",
    "send-sms": "Code senden",
    "agreement-text": "Ich akzeptiere die <a href='./terms.html' target='_blank'>Nutzungsbedingungen</a>",
    "register-button": "Registrieren",
    "login-link": "Haben Sie bereits ein Konto? Anmelden",
    "terms-last-update": "Letzte Aktualisierung: 09:29 PM +05, 28.05.2025",
    "terms-section1-1": "Die Nutzung von BtcAIworK-Diensten bedeutet volle Zustimmung zu diesen Bedingungen.",
    "terms-section1-2": "BtcAIworK stellt Mining-Infrastruktur bereit und verteilt Belohnungen proportional.",
    "terms-section1-3": "Wir behalten uns das Recht vor, die Bedingungen mit einer 7-tägigen Vorankündigung zu aktualisieren.",
    "terms-section2-1": "Die Registrierung erfordert genaue Daten (E-Mail oder Telefonnummer).",
    "terms-section2-2": "Nach der Registrierung erhalten Sie Serverdaten (Adressen, Ports).",
    "terms-section2-3": "Die Datensicherheit liegt in Ihrer Verantwortung.",
    "terms-section2-4": "Mehrfachkonten sind verboten und können zu einem Bann führen.",
    "terms-section3-1": "Benutzer müssen:",
    "terms-section3-1a": "Die Plattform nur legal nutzen.",
    "terms-section3-1b": "Die Systemstabilität nicht stören.",
    "terms-section3-1c": "Keine schädliche Software verwenden.",
    "terms-section3-2": "Sie sind für die Einrichtung der Ausrüstung und die Einhaltung der Regeln verantwortlich.",
    "terms-section3-3": "Verstöße können zu einer Trennung ohne Vorwarnung führen.",
    "terms-section4-1": "BtcAIworK haftet nicht für:",
    "terms-section4-1a": "Netzwerk- oder Benutzerausrüstungsausfälle.",
    "terms-section4-1b": "Ausfallzeiten aufgrund technischer Probleme oder höherer Gewalt.",
    "terms-section4-1c": "Schwankungen der Kryptowährungskurse.",
    "terms-section4-2": "Belohnungen werden nur bei erfolgreicher Validierung gutgeschrieben.",
    "terms-section4-3": "Keine Garantie für ständige Verfügbarkeit oder Gewinn.",
    "terms-section5-1": "Streitigkeiten werden durch Verhandlungen gelöst, andernfalls nach dem Gesetz.",
    "terms-section5-2": "Die Vereinbarung tritt bei der Registrierung in Kraft.",
    "terms-section5-3": "Wir können den Zugriff bei Verstößen sperren.",
    "privacy-title": "Datenschutzrichtlinie",
    "privacy-last-update": "Letzte Aktualisierung: 09:29 PM +05, 28.05.2025",
    "privacy-welcome": "Wir bei BtcAIworK respektieren Ihre Privatsphäre und schützen Ihre Daten.",
    "privacy-section1-title": "1. Datenerfassung",
    "privacy-section1-text": "Wir erfassen: E-Mail-Adresse, Benutzernamen, Telefonnummer (bei Registrierung), Aktivitätsdaten (Transaktionen, Verbindungen).",
    "privacy-section2-title": "2. Datennutzung",
    "privacy-section2-text": "Daten werden für den Betrieb der Plattform, Sicherheit und Analyse verwendet. Weitergabe an Dritte erfolgt nur gesetzlich vorgeschrieben.",
    "privacy-section3-title": "3. Datenschutz",
    "privacy-section3-text": "Wir verwenden Verschlüsselung und Sicherheitsmaßnahmen. Sie sind für die Sicherheit Ihres Passworts verantwortlich.",
    "privacy-section4-title": "4. Ihre Rechte",
    "privacy-section4-text": "Sie können Zugriff, Korrektur oder Löschung Ihrer Daten anfordern, indem Sie den Support kontaktieren.",
    "privacy-section5-title": "5. Cookies und Analytik",
    "privacy-section5-text": "Wir verwenden Cookies, um den Service zu verbessern. Sie können sie in den Browser-Einstellungen deaktivieren.",
    "back-to-register": "Zurück",
    "login-title": "Einloggen",
    "login-button": "Einloggen",
    "forgot-password": "Passwort vergessen?",
    "register-link": "Kein Konto? Registrieren",
    "account-title": "Konto",
    "profile-username": "Benutzername:",
    "profile-email": "E-Mail",
    "profile-date": "Registrierungsdatum:",
    "profile-wallet": "Bitcoin-Wallet:",
    "profile-save-wallet": "Speichern",
    "staking-title": "Ihr Staking",
    "staking-option1-title": "Grundlegendes Staking",
    "staking-option1-desc": "Jährliche Rendite: 5%",
    "staking-option1-amount": "Ihre Token:",
    "staking-option2-title": "Premium Staking",
    "staking-option2-desc": "Jährliche Rendite: 10%",
    "staking-option2-amount": "Ihre Token:",
    "staking-manage": "Staking",
    "login-fill-fields": "Bitte füllen Sie alle Felder aus.",
    "login-success": "Erfolgreich eingeloggt!",
    "login-error": "Anmeldung fehlgeschlagen:",
    "register-fill-fields": "Bitte füllen Sie alle Felder aus.",
    "passwords-not-match": "Passwörter stimmen nicht überein.",
    "password-too-short": "Passwort muss mindestens 6 Zeichen lang sein.",
    "recaptcha-error": "Fehler bei der reCAPTCHA-Überprüfung.",
    "register-success": "Registrierung erfolgreich!",
    "register-error": "Registrierung fehlgeschlagen:",
    "phone-auth-unavailable": "Telefon-Authentifizierung nicht verfügbar. Bitte nutzen Sie die E-Mail-Registrierung.",
    "error-fetch": "Fehler beim Abrufen der Daten:",
    "logout-error": "Fehler beim Abmelden:",
    "wallet-save-error": "Fehler beim Speichern der Wallet-Adresse:"
  },
  "zh": {
    "site-name": "BTCAIwork",
    "nav-index": "首页",
    "nav-dashboard": "统计数据",
    "nav-tokens": "购买代币",
    "nav-login": "登录",
    "nav-profile": "账户",
    "nav-scripts": "脚本",
    "nav-connection": "联系方式",
    "nav-roadmap": "路线图",
    "nav-staking": "质押",
    "profile-logout": "退出",
    "roadmap-title": "路线图",
    "intro-line": "— 当比特币通过人工智能的力量为你工作",
    "mining-concept": "想象一种挖矿方式，你无需寻找区块—人工智能为你找到它。",
    "ecosystem-desc": "— 不仅仅是独立挖矿。这是一个智能生态系统，比传统矿池更快、更准确且更盈利。",
    "ai-prediction": "我们的AI实时预测最佳Nonce范围，并将你的矿机引导至最有可能找到区块的位置。这意味着：",
    "ai-benefit": "更少时间—更多奖励。",
    "why-choose": "为什么选择BTCAIwork？",
    "feature-ai-acceleration": "AI加速挖矿",
    "feature-ai-desc": "模型从比特币网络动态中自我学习。",
    "feature-solo-mining": "公平独立挖矿",
    "feature-solo-desc": "你找到区块—你获得奖励。",
    "feature-browser-mining": "浏览器挖矿和DePIN",
    "feature-browser-desc": "即使没有ASIC，也可以使用普通PC或参与去中心化基础设施赚取收益。",
    "feature-payouts-analytics": "自动 payouts 和强大分析",
    "feature-payouts-desc": "一切尽在掌握，实时更新。",
    "feature-investment": "投资增长的机会",
    "feature-investment-desc": "代币发行、销毁、通过DAO治理—做不仅仅是参与者，而是未来的共同拥有者。",
    "new-gen-mining": "— 是你进入新一代独立挖矿的起点。",
    "no-middlemen": "没有中介。没有隐藏费用。只有你、你的矿机和智能AI 24/7为你工作。",
    "ready-to-earn": "准备好从比特币中赚取更多？",
    "join-call-1": "加入 ",
    "join-call-2": ". 让智能工作—你赚取收益。",
    "footer-text": "© 2025 BTCAIworK。版权所有。",
    "home-title": "首页 - BtcAIworK",
    "home-welcome": "欢迎体验BtcAIworK！",
    "home-description": "BtcAIworK 是一个利用人工智能进行加密货币挖矿的创新平台。",
    "home-feature1": "AI优化挖矿",
    "home-feature2": "透明统计",
    "home-feature3": "高收益",
    "home-get-started": "立即开始",
    "dashboard-title": "挖矿统计",
    "miners-label": "矿工数量:",
    "current-block-label": "当前区块:",
    "hashrate-label": "算力:",
    "best-share-label": "最佳份额:",
    "blocks-found-label": "找到的区块:",
    "uptime-label": "运行时间:",
    "main-title": "购买代币",
    "main-description": "购买BtcAIworK代币以参与我们的生态系统。",
    "token-price-title": "当前价格",
    "token-price-value": "0.001 BTC/代币",
    "token-available-title": "可用代币",
    "token-available-value": "10,000,000",
    "token-balance-title": "你的代币",
    "token-balance-value": "0",
    "label-wallet": "钱包地址",
    "wallet-placeholder": "输入你的钱包地址",
    "label-amount": "代币数量",
    "btn-buy-tokens": "购买代币",
    "transaction-title": "交易历史",
    "table-date": "日期",
    "table-wallet": "钱包",
    "table-amount": "数量",
    "table-sum": "总额 (BTC)",
    "table-status": "状态",
    "status-completed": "完成",
    "notification-success": "代币购买成功！",
    "market-stats-title": "代币统计",
    "total-sold-label": "总售出",
    "market-cap-label": "市场 capitalization",
    "btn-clear-history": "清除历史",
    "scripts-title": "脚本",
    "scripts-description": "管理用于挖矿和数据分析的脚本。",
    "script-extract-nonce": "extract_nonce",
    "script-extract-nonce-desc": "从区块数据中提取当前Nonce。",
    "script-import-requests": "import_requests",
    "script-import-requests-desc": "导入请求数据进行分析。",
    "script-make-full-block-node": "make_full_block_node",
    "script-make-full-block-node-desc": "创建完整的区块节点用于挖矿。",
    "script-predict-range": "predict_range",
    "script-predict-range-desc": "预测最佳Nonce范围。",
    "script-target": "target",
    "script-target-desc": "确定当前网络难度目标。",
    "script-train-ai": "train_ai",
    "script-train-ai-desc": "训练AI以优化挖矿。",
    "table-header-script": "脚本",
    "table-header-description": "描述",
    "table-header-action": "操作",
    "run-script": "运行",
    "output-title": "脚本输出",
    "btn-clear-output": "清除输出",
    "notification-success": "脚本执行成功！",
    "connection-title": "联系信息",
    "connection-intro": "我们在这里帮助您解答任何问题。连接到我们的矿池，开始使用BtcAIworK挖矿！",
    "connection-servers-title": "连接服务器",
    "connection-table-region": "地区",
    "connection-table-address": "服务器地址",
    "connection-table-port": "端口",
    "connection-table-protocol": "协议",
    "connection-table-status": "状态",
    "connection-region-europe": "欧洲",
    "connection-region-america": "北美",
    "connection-region-asia": "亚洲",
    "connection-guide-title": "如何连接到矿池",
    "connection-guide-step1": "从上表中选择离您地区最近的服务器。",
    "connection-guide-step2": "使用服务器地址和端口配置您的挖矿设备（例如ASIC或GPU）。",
    "connection-guide-step3": "使用您的比特币钱包作为用户名（除非另有说明，无需密码）。",
    "connection-guide-step4": "示例cgminer命令：<code>cgminer -o stratum+tcp://eu.btcaiwork.com:3333 -u YOUR_BTC_WALLET_ADDRESS</code>",
    "connection-guide-step5": "启动挖矿并在<a href='dashboard.html'>统计</a>页面监控统计数据。",
    "connection-contact-title": "联系我们",
    "connection-support-label": "支持:",
    "connection-telegram-label": "Telegram:",
    "connection-discord-label": "Discord:",
    "connection-stats-title": "连接统计",
    "connection-active-miners-label": "活跃矿工:",
    "connection-last-update-label": "最后更新:",
    "register-title": "创建账户",
    "tab-email": "邮箱",
    "tab-phone": "电话",
    "email-placeholder": "电子邮件地址",
    "phone-placeholder": "电话号码 (10-15位)",
    "code-placeholder": "验证码",
    "username-placeholder": "用户名",
    "password-placeholder": "密码 (至少8个字符)",
    "confirm-password-placeholder": "确认密码",
    "ai-placeholder": "选择用于挖矿的AI算法",
    "ai-neural": "神经挖矿",
    "ai-quantum": "量子哈希",
    "ai-deep": "深度区块",
    "send-sms": "发送验证码",
    "agreement-text": "我已阅读并同意<a href='./terms.html' target='_blank'>使用条款</a>",
    "register-button": "注册",
    "login-link": "已有账户？登录",
    "terms-last-update": "最后更新: 09:29 PM +05, 28.05.2025",
    "terms-section1-1": "使用BtcAIworK服务意味着完全同意这些条款。",
    "terms-section1-2": "BtcAIworK提供挖矿基础设施，按贡献比例分配奖励。",
    "terms-section1-3": "我们保留7天通知后更新条款的权利。",
    "terms-section2-1": "注册需要提供准确的数据 (邮箱或电话号码)。",
    "terms-section2-2": "注册后，您将获得服务器数据 (地址，端口)。",
    "terms-section2-3": "您的数据安全由您负责。",
    "terms-section2-4": "多账户被禁止，可能导致封禁。",
    "terms-section3-1": "用户必须:",
    "terms-section3-1a": "仅合法使用平台。",
    "terms-section3-1b": "不干扰系统稳定性。",
    "terms-section3-1c": "不使用恶意软件。",
    "terms-section3-2": "您负责设备设置和规则遵守。",
    "terms-section3-3": "违反条款可能导致无警告断开连接。",
    "terms-section4-1": "BtcAIworK不对以下情况负责:",
    "terms-section4-1a": "网络或用户设备故障。",
    "terms-section4-1b": "因技术问题或不可抗力导致的停机。",
    "terms-section4-1c": "加密货币价格波动。",
    "terms-section4-2": "奖励仅在成功验证后发放。",
    "terms-section4-3": "不保证持续可用性或利润。",
    "terms-section5-1": "争议通过谈判解决，否则按法律处理。",
    "terms-section5-2": "协议于注册时生效。",
    "terms-section5-3": "我们可因违反条款暂停访问。",
    "privacy-title": "隐私政策",
    "privacy-last-update": "最后更新: 09:29 PM +05, 28.05.2025",
    "privacy-welcome": "我们在BtcAIworK尊重您的隐私并保护您的数据。",
    "privacy-section1-title": "1. 数据收集",
    "privacy-section1-text": "我们收集: 电子邮件地址、用户名、电话号码 (注册时)、活动数据 (交易、连接)。",
    "privacy-section2-title": "2. 数据使用",
    "privacy-section2-text": "数据用于平台运营、安全和分析。仅在法律要求时与第三方共享。",
    "privacy-section3-title": "3. 数据保护",
    "privacy-section3-text": "我们使用加密和安全措施。密码安全由您负责。",
    "privacy-section4-title": "4. 您的权利",
    "privacy-section4-text": "您可以联系支持请求访问、修正或删除您的数据。",
    "privacy-section5-title": "5. Cookies和分析",
    "privacy-section5-text": "我们使用Cookies改善服务。您可在浏览器设置中禁用它们。",
    "back-to-register": "返回",
    "login-title": "登录",
    "login-button": "登录",
    "forgot-password": "忘记密码？",
    "register-link": "没有账户？注册",
    "account-title": "账户",
    "profile-username": "用户名:",
    "profile-email": "邮箱",
    "profile-date": "注册日期:",
    "profile-wallet": "比特币钱包:",
    "profile-save-wallet": "保存",
    "staking-title": "你的质押",
    "staking-option1-title": "基础质押",
    "staking-option1-desc": "年收益率: 5%",
    "staking-option1-amount": "你的代币:",
    "staking-option2-title": "高级质押",
    "staking-option2-desc": "年收益率: 10%",
    "staking-option2-amount": "你的代币:",
    "staking-manage": "质押",
    "login-fill-fields": "请填写所有字段。",
    "login-success": "登录成功！",
    "login-error": "登录失败:",
    "register-fill-fields": "请填写所有字段。",
    "passwords-not-match": "密码不匹配。",
    "password-too-short": "密码必须至少6个字符。",
    "recaptcha-error": "reCAPTCHA验证错误。",
    "register-success": "注册成功！",
    "register-error": "注册失败:",
    "phone-auth-unavailable": "电话认证不可用。请使用邮箱注册。",
    "error-fetch": "获取数据错误:",
    "logout-error": "退出错误:",
    "wallet-save-error": "保存钱包地址错误:"
  }
};

// Функция переключения языка
export function toggleLanguage() {
  const langs = ["ru", "en", "de", "zh"];
  const currentLang = localStorage.getItem("language") || "ru";
  const currentIndex = langs.indexOf(currentLang);
  const nextLang = langs[(currentIndex + 1) % langs.length];
  localStorage.setItem("language", nextLang);
  applyLanguage();
}

// Применение языка на основе localStorage
export function applyLanguage() {
  const lang = localStorage.getItem("language") || "ru";
  document.documentElement.lang = lang;

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    const labels = { ru: "RU", en: "EN", de: "DE", zh: "中文" };
    langBtn.textContent = labels[lang] || "RU";
  }

  const i18nElements = document.querySelectorAll("[data-i18n]");
  i18nElements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = key === "agreement-text" || key === "connection-guide-step4" || key === "connection-guide-step5"
        ? translations[lang][key]
        : translations[lang][key];
    }
  });

  const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
  placeholderElements.forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  const titleElement = document.querySelector("title[data-i18n]");
  if (titleElement && translations[lang][titleElement.getAttribute("data-i18n")]) {
    document.title = translations[lang][titleElement.getAttribute("data-i18n")];
  }

  const runScriptButtons = document.querySelectorAll(".run-script");
  runScriptButtons.forEach(button => {
    button.textContent = translations[lang]["run-script"];
  });
}

// Функция переключения темы
export function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme();
}

// Применение темы на основе localStorage
export function applyTheme() {
  const theme = localStorage.getItem("theme") || "dark";
  document.body.classList.remove("dark-theme", "light-theme");
  document.body.classList.add(`${theme}-theme`);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
}

// Подсветка активного пункта меню
function highlightActiveMenu() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a.btn-nav");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === currentPath);
  });
}

// Обновление статистики на дашборде
async function updateDashboardStats() {
  if (!window.location.pathname.includes("dashboard.html")) {
    return;
  }

  const elements = {
    minersCount: document.getElementById("miners-count"),
    currentBlock: document.getElementById("current-block"),
    hashrate: document.getElementById("hashrate"),
    bestShare: document.getElementById("best-share"),
    blocksFound: document.getElementById("blocks-found"),
    uptime: document.getElementById("uptime")
  };

  if (Object.values(elements).some(el => !el)) {
    console.error("Some dashboard elements are missing in the DOM.");
    return;
  }

  try {
    const token = localStorage.getItem("authToken");
    const response = await fetch("/mining-info", { // Относительный путь
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const result = data.result || {};

    elements.currentBlock.textContent = result.blocks ?? "-";
    elements.hashrate.textContent = result.networkhashps
      ? `${(result.networkhashps / 1e18).toFixed(2)} EH/s`
      : "-";
    elements.minersCount.textContent = result.miners ?? "-";
    elements.bestShare.textContent = result.bestshare ? `${result.bestshare.toFixed(2)}` : "-";
    elements.blocksFound.textContent = result.blocksFound ?? "-";
    elements.uptime.textContent = result.runtime ? `${result.runtime.toFixed(2)} сек` : "-";
  } catch (error) {
    console.error("Error fetching mining data:", error.message);
    Object.values(elements).forEach(el => (el.textContent = "-"));
  }
}

// Настройка навигации на основе состояния авторизации
export function setupNavigation() {
  onAuthStateChanged(auth, (user) => {
    const navLinks = document.querySelector(".nav-links");
    if (!navLinks) return;

    const loginLink = navLinks.querySelector('a[href="./Login.html"]');
    const accountLink = navLinks.querySelector('a[href="./Profile.html"]');
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    if (user) {
      if (currentPath === "Profile.html") {
        if (loginLink) loginLink.style.display = "none";
        const logoutBtn = document.getElementById("logout-btn");
        if (logoutBtn) {
          logoutBtn.style.display = "block";
          logoutBtn.textContent = translations[localStorage.getItem("language") || "ru"]["profile-logout"];
          logoutBtn.setAttribute("data-i18n", "profile-logout");
          logoutBtn.onclick = () => signOut(auth)
            .then(() => window.location.href = "./Login.html")
            .catch((error) => console.error(translations[localStorage.getItem("language") || "ru"]["logout-error"], error));
        }
      } else {
        if (loginLink) {
          loginLink.href = "./Profile.html";
          loginLink.textContent = translations[localStorage.getItem("language") || "ru"]["nav-profile"];
          loginLink.setAttribute("data-i18n", "nav-profile");
        }
        if (!accountLink) {
          const newAccountLink = document.createElement("a");
          newAccountLink.href = "./Profile.html";
          newAccountLink.className = "btn-nav";
          newAccountLink.setAttribute("data-i18n", "nav-profile");
          newAccountLink.textContent = translations[localStorage.getItem("language") || "ru"]["nav-profile"];
          navLinks.appendChild(newAccountLink);
        }
      }
    } else {
      if (loginLink) {
        loginLink.style.display = "block";
        loginLink.href = "./Login.html";
        loginLink.textContent = translations[localStorage.getItem("language") || "ru"]["nav-login"];
        loginLink.setAttribute("data-i18n", "nav-login");
      }
      if (accountLink) accountLink.remove();
      if (currentPath === "Profile.html") window.location.href = "./Login.html";
    }
    highlightActiveMenu();
  });
}

// Настройка покупки токенов
export function setupBuyTokens() {
  if (!window.location.pathname.includes("tokens.html")) return;

  const buyTokensBtn = document.getElementById("buy-tokens-btn");
  const transactionTable = document.getElementById("transaction-table")?.querySelector("tbody");
  const clearHistoryBtn = document.getElementById("clear-history-btn");

  if (!buyTokensBtn || !transactionTable || !clearHistoryBtn) return;

  buyTokensBtn.addEventListener("click", () => {
    const walletInput = document.getElementById("wallet").value;
    const amountInput = document.getElementById("amount").value;

    if (!walletInput || !amountInput || amountInput <= 0) {
      alert(translations[localStorage.getItem("language") || "ru"]["register-fill-fields"]);
      return;
    }

    const transaction = {
      date: new Date().toLocaleString(),
      wallet: walletInput,
      amount: amountInput,
      sum: (amountInput * 0.001).toFixed(3) + " BTC",
      status: translations[localStorage.getItem("language") || "ru"]["status-completed"]
    };

    const row = transactionTable.insertRow();
    row.innerHTML = `
      <td>${transaction.date}</td>
      <td>${transaction.wallet}</td>
      <td>${transaction.amount}</td>
      <td>${transaction.sum}</td>
      <td>${transaction.status}</td>
    `;

    alert(translations[localStorage.getItem("language") || "ru"]["notification-success"]);
  });

  clearHistoryBtn.addEventListener("click", () => {
    while (transactionTable.rows.length > 0) transactionTable.deleteRow(0);
  });
}

// Настройка функциональности страницы скриптов
export function setupScripts() {
  if (!window.location.pathname.includes("scripts.html")) return;

  const scriptTable = document.getElementById("script-table");
  const outputDiv = document.getElementById("script-output");
  const clearOutputBtn = document.getElementById("clear-output");
  const notificationEl = document.getElementById("notification");

  if (!scriptTable || !outputDiv || !clearOutputBtn || !notificationEl) return;

  const scriptData = {
    "extract_nonce": "Извлечённый nonce: 1234567890\nВремя выполнения: 0.5 сек",
    "import_requests": "Импортировано 150 запросов\nРазмер данных: 2.3 МБ",
    "make_full_block_node": "Полная нода блока создана\nХэш: 0000000000000abc...",
    "predict_range": "Предсказанный диапазон nonce: 1000000 - 2000000\nВероятность успеха: 85%",
    "target": "Текущая цель сложности: 00000000ffff...\nСложность сети: 22.5T",
    "train_ai": "AI обучен на 10,000 блоков\nТочность предсказания: 92%"
  };

  window.runScript = function(scriptName) {
    outputDiv.textContent = "Выполняется...";
    setTimeout(() => {
      outputDiv.textContent = scriptData[scriptName] || "Результат не определён.";
      showNotification();
    }, 1000);
  };

  function showNotification() {
    notificationEl.style.display = "block";
    setTimeout(() => {
      notificationEl.style.display = "none";
    }, 3000);
  }

  clearOutputBtn.addEventListener("click", () => {
    outputDiv.textContent = "";
    applyLanguage();
  });
}

// Инициализация страницы
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
  applyTheme();
  setupNavigation();
  updateDashboardStats(); // Первый вызов
  setupBuyTokens();
  setupScripts();

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) langBtn.addEventListener("click", toggleLanguage);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);

  // Автоматическое обновление дашборда каждые 10 секунд
  setInterval(updateDashboardStats, 10000);
});