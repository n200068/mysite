'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  MessageCircle,
  Phone
} from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Сколько времени занимает создание сайта?",
      answer: "Стандартный лендинг готов за 7 дней, корпоративный сайт за 10-14 дней, интернет-магазин за 14-21 день. Сроки зависят от сложности проекта и количества страниц. Я всегда соблюдаю оговоренные сроки или завершаю проект раньше."
    },
    {
      question: "Что входит в стоимость разработки сайта?",
      answer: "В стоимость входит: дизайн, верстка, программирование, настройка хостинга, подключение домена, базовое SEO, интеграция с аналитикой, обучение работе с админкой, 3 месяца технической поддержки. Дополнительно оплачиваются только хостинг и домен (от 2000₽/год)."
    },
    {
      question: "Можно ли изменить дизайн после утверждения?",
      answer: "Да, конечно! В течение 30 дней после сдачи проекта я делаю бесплатные правки по дизайну и функционалу. Это входит в стоимость разработки. После 30 дней правки оплачиваются отдельно по договоренности."
    },
    {
      question: "Как происходит оплата?",
      answer: "Оплата происходит поэтапно: 50% предоплата при подписании договора, 30% после утверждения дизайна, 20% после сдачи проекта. Это защищает обе стороны и позволяет контролировать процесс разработки."
    },
    {
      question: "Что если сайт не принесет клиентов?",
      answer: "Если в течение 3 месяцев после запуска сайт не принесет клиентов (не будет заявок/звонков), я верну 100% стоимости разработки. Это моя гарантия результата. Но за 5 лет работы такого еще не случалось."
    },
    {
      question: "Нужно ли мне что-то знать о программировании?",
      answer: "Нет, абсолютно ничего! Я создаю сайт под ключ, настраиваю хостинг, подключаю домен, обучаю работе с админкой. Вы получаете готовый к работе сайт и простую систему управления контентом."
    },
    {
      question: "Сколько стоит настройка рекламы в Яндекс.Директ?",
      answer: "Настройка рекламы стоит от 30 000₽. В стоимость входит: анализ конкурентов, создание объявлений, настройка кампаний, подключение аналитики, обучение работе с рекламным кабинетом. Ведение кампаний - от 15 000₽/месяц."
    },
    {
      question: "Можно ли заказать только дизайн или только верстку?",
      answer: "Да, можно заказать отдельные услуги. Дизайн сайта - от 15 000₽, верстка - от 20 000₽, программирование - от 25 000₽. Но рекомендую заказывать сайт под ключ - это дешевле и надежнее."
    },
    {
      question: "Какой хостинг лучше выбрать?",
      answer: "Рекомендую качественный хостинг с хорошей техподдержкой. Обычно это стоит 2000-5000₽/год. Я помогу выбрать подходящий вариант и настрою сайт на хостинге. Плохой хостинг может замедлить сайт и привести к потере клиентов."
    },
    {
      question: "Что делать, если сайт сломается?",
      answer: "В течение 3 месяцев после сдачи проекта я исправляю любые технические проблемы бесплатно. После этого - по договоренности. Также я делаю регулярные резервные копии, поэтому данные не потеряются."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на самые популярные вопросы клиентов
          </p>
        </motion.div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная помощь */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8 text-center"
        >
          <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-gray-600 mb-6">
            Свяжитесь со мной любым удобным способом, и я отвечу на все ваши вопросы
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+79229029002"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>+7 (922) 902-90-02</span>
            </motion.a>
            
            <motion.a
              href="https://t.me/internetvkirove"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Telegram</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
