'use client';

import { motion } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  ArrowUp,
  Heart
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { href: '#services', label: 'Услуги' },
    { href: '#advantages', label: 'Преимущества' },
    { href: '#portfolio', label: 'Портфолио' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacts', label: 'Контакты' }
  ];

  const services = [
    'Разработка сайтов',
    'Настройка Яндекс.Директ',
    'Ведение рекламных кампаний',
    'SEO-оптимизация',
    'Техническая поддержка'
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+7 (922) 902-90-02',
      link: 'tel:+79229029002'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      text: 'Telegram: @internetvkirove',
      link: 'https://t.me/internetvkirove'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      text: 'WhatsApp: +7 (922) 902-90-02',
      link: 'https://wa.me/79229029002'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'info@webmaster.ru',
      link: 'mailto:info@webmaster.ru'
    }
  ];

  const years = Array.from({ length: 8 }, (_, i) => 2018 + i);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Основной контент футера */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Логотип и описание */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                  WebMaster
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Профессиональная разработка сайтов и настройка рекламы в Яндекс.Директ. 
                  Помогаю бизнесу расти и приносить больше прибыли.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://t.me/internetvkirove"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/79229029002"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Навигация */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Навигация</h4>
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Услуги */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Услуги</h4>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index}>
                      <span className="text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Контакты */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                <ul className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <li key={index}>
                      <a
                        href={contact.link}
                        target={contact.link.startsWith('http') ? '_blank' : undefined}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {contact.icon}
                        <span className="text-sm">{contact.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-800"></div>

        {/* Нижняя часть футера */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Копирайт */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 text-sm">
                © 2024 WebMaster. Все права защищены.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Сделано с <Heart className="w-3 h-3 inline text-red-500" /> для вашего успеха
              </p>
            </motion.div>

            {/* Меню с годами */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center md:justify-end space-x-4"
            >
              {years.map((year) => (
                <span
                  key={year}
                  className={`text-sm transition-colors duration-200 ${
                    year === 2024 
                      ? 'text-blue-400 font-semibold' 
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {year}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Кнопка "Наверх" */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-200 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
}
