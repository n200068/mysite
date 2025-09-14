# 🚀 Развертывание на Vercel

## Автоматическое развертывание

### 1. Подключение к Vercel
1. Перейдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub аккаунт
3. Нажмите "New Project"
4. Выберите репозиторий `n200068/mysite`

### 2. Настройки проекта
- **Framework Preset**: Next.js (автоматически определится)
- **Root Directory**: `./` (корневая папка)
- **Build Command**: `npm run build` (автоматически)
- **Output Directory**: `.next` (автоматически)
- **Install Command**: `npm install` (автоматически)

### 3. Переменные окружения (если нужны)
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Ручное развертывание

### 1. Установка Vercel CLI
```bash
npm i -g vercel
```

### 2. Логин в Vercel
```bash
vercel login
```

### 3. Развертывание
```bash
vercel
```

### 4. Продакшн развертывание
```bash
vercel --prod
```

## Настройки домена

### 1. Кастомный домен
1. В панели Vercel перейдите в Settings → Domains
2. Добавьте ваш домен
3. Настройте DNS записи согласно инструкциям

### 2. SSL сертификат
- Автоматически предоставляется Vercel
- Поддерживает Let's Encrypt

## Оптимизации

### 1. Кэширование
- Статические файлы кэшируются на 1 год
- API роуты кэшируются на 10 секунд

### 2. CDN
- Автоматическое распределение по CDN
- Оптимизация изображений

### 3. Аналитика
- Встроенная аналитика Vercel
- Интеграция с Google Analytics

## Мониторинг

### 1. Логи
```bash
vercel logs
```

### 2. Статистика
- Доступна в панели Vercel
- Метрики производительности

## Поддержка

- [Документация Vercel](https://vercel.com/docs)
- [Next.js на Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Поддержка](https://vercel.com/support)

## Полезные команды

```bash
# Просмотр развертываний
vercel ls

# Просмотр логов
vercel logs [deployment-url]

# Удаление проекта
vercel remove [project-name]

# Переменные окружения
vercel env add
vercel env ls
vercel env rm [name]
```
