'use client';

import { motion } from 'framer-motion';
import { 
  Eye, 
  Calendar,
  ArrowRight
} from 'lucide-react';

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Интернет-магазин электроники",
      category: "E-commerce",
      description: "Современный интернет-магазин с интеграцией 1С и системой аналитики",
      image: "/api/placeholder/600/400",
      results: {
        conversion: "+45%",
        traffic: "+120%",
        sales: "+200%"
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "1С API"],
      duration: "14 дней",
      price: "85 000₽"
    },
    {
      title: "Корпоративный сайт строительной компании",
      category: "Corporate",
      description: "Многостраничный сайт с каталогом услуг и системой заявок",
      image: "/api/placeholder/600/400",
      results: {
        conversion: "+35%",
        traffic: "+80%",
        sales: "+150%"
      },
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      duration: "10 дней",
      price: "65 000₽"
    },
    {
      title: "Лендинг для салона красоты",
      category: "Landing Page",
      description: "Конверсионный лендинг с онлайн-записью и системой лояльности",
      image: "/api/placeholder/600/400",
      results: {
        conversion: "+60%",
        traffic: "+90%",
        sales: "+180%"
      },
      technologies: ["Vue.js", "Firebase", "Stripe", "Google Analytics"],
      duration: "7 дней",
      price: "45 000₽"
    },
    {
      title: "Платформа для онлайн-обучения",
      category: "SaaS",
      description: "Полнофункциональная платформа с видеокурсами и системой платежей",
      image: "/api/placeholder/600/400",
      results: {
        conversion: "+40%",
        traffic: "+200%",
        sales: "+300%"
      },
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      duration: "21 день",
      price: "120 000₽"
    },
    {
      title: "Мобильное приложение для доставки",
      category: "Mobile App",
      description: "Кроссплатформенное приложение с геолокацией и push-уведомлениями",
      image: "/api/placeholder/600/400",
      results: {
        conversion: "+50%",
        traffic: "+150%",
        sales: "+250%"
      },
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      duration: "28 дней",
      price: "150 000₽"
    },
    {
      title: "Сайт для медицинского центра",
      category: "Healthcare",
      description: "Сайт с онлайн-записью, личным кабинетом и интеграцией с CRM",
      image: "/api/placeholder/600/400",
      results: {
        conversion: "+55%",
        traffic: "+100%",
        sales: "+170%"
      },
      technologies: ["Angular", "NestJS", "PostgreSQL", "Redis"],
      duration: "18 дней",
      price: "95 000₽"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Портфолио
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные проекты с измеримыми результатами. Каждый сайт приносит клиентам прибыль
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Изображение проекта */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Eye className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <p className="text-sm opacity-80">Превью проекта</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {item.description}
                </p>

                {/* Результаты */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.results.conversion}</div>
                    <div className="text-xs text-gray-500">Конверсия</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{item.results.traffic}</div>
                    <div className="text-xs text-gray-500">Трафик</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{item.results.sales}</div>
                    <div className="text-xs text-gray-500">Продажи</div>
                  </div>
                </div>

                {/* Технологии */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Метаинформация */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="font-semibold text-gray-900">{item.price}</div>
                </div>

                {/* Кнопка */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Подробнее</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Статистика портфолио */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">200+</div>
              <div className="text-gray-600">Проектов выполнено</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">95%</div>
              <div className="text-gray-600">Клиентов возвращаются</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">40%</div>
              <div className="text-gray-600">Средний рост конверсии</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">7</div>
              <div className="text-gray-600">Дней средний срок</div>
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Хотите такой же результат?
            </h3>
            <p className="text-blue-100 mb-6">
              Обсудим ваш проект и создадим сайт, который будет приносить прибыль
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Обсудить проект
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
