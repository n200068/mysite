'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  RefreshCw,
  Award,
  Users,
  ArrowRight
} from 'lucide-react';

export default function Guarantees() {
  const guarantees = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Гарантия результата",
      description: "Если сайт не принесет клиентов в течение 3 месяцев, верну 100% стоимости",
      details: "Полный возврат средств при невыполнении KPI"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Соблюдение сроков",
      description: "Сайт будет готов точно в срок или раньше. За каждый день просрочки — скидка 5%",
      details: "Финансовая ответственность за задержки"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-purple-500" />,
      title: "Бесплатные правки",
      description: "30 дней бесплатных правок после сдачи проекта. Исправляю любые замечания",
      details: "Неограниченное количество правок в течение месяца"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Гарантия качества",
      description: "Сайт будет работать стабильно на всех устройствах и браузерах",
      details: "Тестирование на 20+ устройствах и браузерах"
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Техническая поддержка",
      description: "3 месяца бесплатной поддержки после запуска сайта",
      details: "Помощь с настройкой, обновлениями и оптимизацией"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-indigo-500" />,
      title: "Конфиденциальность",
      description: "Подписываю NDA и гарантирую полную конфиденциальность ваших данных",
      details: "Юридическая защита интеллектуальной собственности"
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
    <section id="guarantees" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Мои гарантии
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Работаю только на результат. Если не достигнем поставленных целей — верну деньги
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {guarantee.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {guarantee.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {guarantee.description}
              </p>
              
              <div className="text-sm text-gray-500 bg-white rounded-lg p-3">
                <strong>Детали:</strong> {guarantee.details}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Основная гарантия */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <Shield className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h3 className="text-3xl font-bold mb-4">
              Главная гарантия: возврат средств
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Если сайт не принесет клиентов в течение 3 месяцев после запуска, 
              я верну 100% стоимости разработки. Без вопросов и условий.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-white/80">Возврат средств</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">3 месяца</div>
                <div className="text-white/80">Гарантийный период</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">0%</div>
                <div className="text-white/80">Скрытых условий</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Дополнительные гарантии */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-blue-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Гарантия качества кода
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Чистый, документированный код</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Соответствие стандартам веб-разработки</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Оптимизация скорости загрузки</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>SEO-оптимизация из коробки</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Гарантия безопасности
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Защита от хакерских атак</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>SSL-сертификат и HTTPS</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Регулярные резервные копии</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Мониторинг работоспособности 24/7</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Готовы работать с гарантиями?
            </h3>
            <p className="text-gray-300 mb-6">
              Риск минимален — вы получаете результат или возврат денег
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
            >
              <span>Начать проект</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
