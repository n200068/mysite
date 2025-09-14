'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "5+ лет опыта",
      description: "Более 5 лет создаю сайты и настраиваю рекламу. Знаю все тонкости и подводные камни.",
      highlight: "200+ успешных проектов"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Быстрый результат",
      description: "Сайт готов за 7 дней, реклама запускается за 3 дня. Не теряем время на бюрократию.",
      highlight: "Сайт за 7 дней"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Гарантия качества",
      description: "Возврат средств, если результат не достигнут. Работаю только на результат.",
      highlight: "100% гарантия"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Личный подход",
      description: "Работаю только с вами, без посредников. Всегда на связи и готов помочь.",
      highlight: "Поддержка 24/7"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Долгосрочное сотрудничество",
      description: "Не бросаю после сдачи проекта. Помогаю развивать и масштабировать бизнес.",
      highlight: "Сотрудничество на годы"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: "Проверенные методы",
      description: "Использую только работающие стратегии. Рост конверсии на 30% гарантирован.",
      highlight: "+30% к конверсии"
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
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают меня
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Не просто создаю сайты и настраиваю рекламу — я помогаю вашему бизнесу расти и приносить больше прибыли
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {advantage.title}
                  </h3>
                  <div className="inline-flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4" />
                    <span>{advantage.highlight}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Дополнительный блок с цифрами */}
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
              <div className="text-gray-600">Успешных проектов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">5+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">30%</div>
              <div className="text-gray-600">Рост конверсии</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">7</div>
              <div className="text-gray-600">Дней на сайт</div>
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
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Готовы увеличить продажи в 2-3 раза?
            </h3>
            <p className="text-blue-100 mb-6">
              Получите персональное предложение и узнайте, как ваш бизнес может зарабатывать больше
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Получить консультацию
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
