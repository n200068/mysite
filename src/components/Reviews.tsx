'use client';

import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  User, 
  Calendar,
  TrendingUp,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Анна Козлова",
      position: "Владелец интернет-магазина",
      company: "Магазин детской одежды",
      rating: 5,
      date: "15 декабря 2024",
      text: "Заказала сайт для интернет-магазина детской одежды. Результат превзошел все ожидания! Сайт готов был за 6 дней, а не за неделю, как обещал. Конверсия выросла на 45%, продажи увеличились в 2 раза. Очень довольна работой и рекомендую всем!",
      results: {
        conversion: "+45%",
        sales: "+200%",
        time: "6 дней"
      },
      avatar: "АК"
    },
    {
      name: "Михаил Соколов",
      position: "Директор строительной компании",
      company: "СтройМонтаж",
      rating: 5,
      date: "8 декабря 2024",
      text: "Нужен был корпоративный сайт с каталогом услуг. Сделали все быстро и качественно. Особенно понравилось, что сайт сразу начал приносить заявки. За первый месяц получили 15 новых клиентов. Реклама в Директе окупилась за 3 недели!",
      results: {
        conversion: "+35%",
        leads: "+15",
        time: "10 дней"
      },
      avatar: "МС"
    },
    {
      name: "Елена Волкова",
      position: "Владелец салона красоты",
      company: "Салон 'Красота'",
      rating: 5,
      date: "2 декабря 2024",
      text: "Создали лендинг для салона красоты с онлайн-записью. Клиенты теперь записываются через сайт, что очень удобно. Записей стало в 3 раза больше, а администратор освободился от постоянных звонков. Сайт работает стабильно уже полгода.",
      results: {
        conversion: "+60%",
        bookings: "+300%",
        time: "7 дней"
      },
      avatar: "ЕВ"
    },
    {
      name: "Дмитрий Петров",
      position: "Владелец автосервиса",
      company: "АвтоМастер",
      rating: 5,
      date: "25 ноября 2024",
      text: "Сайт для автосервиса с системой записи на ремонт. Очень удобно для клиентов - можно выбрать время и услугу онлайн. Заявок стало больше, клиенты довольны удобством. Рекомендую как профессионала своего дела!",
      results: {
        conversion: "+40%",
        bookings: "+150%",
        time: "8 дней"
      },
      avatar: "ДП"
    },
    {
      name: "Ольга Морозова",
      position: "Владелец кафе",
      company: "Кафе 'Уют'",
      rating: 5,
      date: "18 ноября 2024",
      text: "Сделали сайт для кафе с меню и возможностью заказа столиков. Клиенты теперь могут посмотреть меню и забронировать столик онлайн. Это очень удобно! Заказов стало больше, особенно в выходные дни.",
      results: {
        conversion: "+50%",
        orders: "+180%",
        time: "5 дней"
      },
      avatar: "ОМ"
    },
    {
      name: "Сергей Новиков",
      position: "Владелец студии дизайна",
      company: "ДизайнСтудия",
      rating: 5,
      date: "12 ноября 2024",
      text: "Портфолио для студии дизайна с галереей работ. Сайт получился очень стильным и функциональным. Клиенты могут посмотреть наши работы и сразу оставить заявку. Новых проектов стало больше на 40%.",
      results: {
        conversion: "+55%",
        projects: "+40%",
        time: "9 дней"
      },
      avatar: "СН"
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
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные истории успеха от довольных клиентов, которые увеличили свои продажи
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              {/* Заголовок отзыва */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.position}</p>
                  <p className="text-sm text-blue-600 font-medium">{review.company}</p>
                </div>
              </div>

              {/* Рейтинг */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-500 ml-2">{review.date}</span>
              </div>

              {/* Текст отзыва */}
              <div className="mb-6">
                <Quote className="w-6 h-6 text-gray-300 mb-3" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Результаты */}
              <div className="border-t border-gray-100 pt-4">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Результаты:</h5>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {Object.entries(review.results).map(([key, value], resultIndex) => (
                    <div key={resultIndex} className="bg-gray-50 rounded-lg p-2">
                      <div className="text-sm font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key === 'conversion' ? 'Конверсия' : 
                         key === 'sales' ? 'Продажи' :
                         key === 'leads' ? 'Заявки' :
                         key === 'bookings' ? 'Записи' :
                         key === 'orders' ? 'Заказы' :
                         key === 'projects' ? 'Проекты' :
                         key === 'time' ? 'Срок' : key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Статистика отзывов */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-500">4.9</div>
              <div className="text-gray-600">Средняя оценка</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">200+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">95%</div>
              <div className="text-gray-600">Возвращаются за новыми проектами</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">40%</div>
              <div className="text-gray-600">Средний рост конверсии</div>
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h3 className="text-2xl font-bold mb-4">
              Станьте следующим довольным клиентом
            </h3>
            <p className="text-blue-100 mb-6">
              Присоединяйтесь к 200+ клиентам, которые уже увеличили свои продажи с моей помощью
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
