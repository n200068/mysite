'use client';

import { motion } from 'framer-motion';
import { 
  Play, 
  Award, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

export default function SocialProof() {
  const certificates = [
    {
      title: "Сертификат Яндекс.Директ",
      description: "Официальный сертификат специалиста по настройке рекламы"
    },
    {
      title: "Google Ads Certified",
      description: "Сертификация Google по работе с рекламными кампаниями"
    },
    {
      title: "Web Development Expert",
      description: "Эксперт по веб-разработке с 5+ летним опытом"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "200+", label: "Довольных клиентов" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "30%", label: "Средний рост конверсии" },
    { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Гарантия результата" },
    { icon: <Clock className="w-6 h-6" />, value: "7", label: "Дней на создание сайта" }
  ];

  return (
    <section id="social-proof" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Доверие и надежность
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мои клиенты получают результат, а не просто красивые обещания
          </p>
        </motion.div>

        {/* Видеопрезентация */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300"
              >
                <Play className="w-12 h-12 text-white ml-1" />
              </motion.button>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Посмотрите, как я работаю</h3>
                <p className="text-white/80">3-минутная презентация моих услуг</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Сертификаты */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Мои сертификаты и достижения
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                  </div>
                </div>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Отзывы клиентов (краткие) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Что говорят клиенты
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Сайт готов был за неделю, как и обещал. Конверсия выросла на 40%!"
              </p>
              <div className="font-semibold text-gray-900">Анна К.</div>
              <div className="text-sm text-gray-500">Владелец интернет-магазина</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Реклама в Директе окупилась за первый месяц. Очень доволен результатом."
              </p>
              <div className="font-semibold text-gray-900">Михаил С.</div>
              <div className="text-sm text-gray-500">Директор строительной компании</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Профессиональный подход, всегда на связи. Рекомендую всем!"
              </p>
              <div className="font-semibold text-gray-900">Елена В.</div>
              <div className="text-sm text-gray-500">Владелец салона красоты</div>
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Станьте следующим успешным клиентом
            </h3>
            <p className="text-blue-100 mb-6">
              Присоединяйтесь к 200+ довольным клиентам, которые уже увеличили свои продажи
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
