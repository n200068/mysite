'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Target, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Разработка сайта",
      price: "от 40 000₽",
      description: "Современный сайт, который приносит клиентов и увеличивает продажи",
      features: [
        "Адаптивный дизайн для всех устройств",
        "SEO-оптимизация из коробки",
        "Интеграция с CRM и аналитикой",
        "Техническая поддержка 3 месяца"
      ],
      popular: true
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Настройка Яндекс.Директ",
      price: "от 30 000₽",
      description: "Профессиональная настройка рекламных кампаний для максимальной эффективности",
      features: [
        "Анализ конкурентов и целевой аудитории",
        "Создание объявлений с высокой конверсией",
        "Настройка автоматических стратегий",
        "Оптимизация по ключевым метрикам"
      ],
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Ведение рекламных кампаний",
      price: "от 15 000₽/мес",
      description: "Постоянная оптимизация и масштабирование ваших рекламных кампаний",
      features: [
        "Еженедельные отчеты по результатам",
        "A/B тестирование объявлений",
        "Расширение на новые ключевые слова",
        "Контроль бюджета и ROI"
      ],
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Мои услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный цикл создания и продвижения вашего бизнеса в интернете
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                service.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярно
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {service.price}
                </div>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Получить консультацию</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Быстрый старт
              </h4>
              <p className="text-gray-600">
                Сайт готов за 7 дней, реклама запускается за 3 дня
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Личный подход
              </h4>
              <p className="text-gray-600">
                Работаю только с вами, без посредников и менеджеров
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Гарантия результата
              </h4>
              <p className="text-gray-600">
                Возврат средств, если не достигнем поставленных целей
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
