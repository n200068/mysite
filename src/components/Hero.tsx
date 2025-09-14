'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  TrendingUp,
  Send,
  User,
  Phone
} from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Я свяжусь с вами в течение 15 минут.');
    setFormData({ name: '', phone: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const advantages = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Сайт за 7 дней с гарантией качества"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      text: "Рост конверсии на 30% по стандартам Яндекс.Директ"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      text: "Возврат средств, если результат не достигнут"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      text: "Поддержка 24/7 и долгосрочное сотрудничество"
    }
  ];

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - УТП и преимущества */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Превращаю ваши идеи в{' '}
                <span className="text-blue-600">прибыльные сайты</span>{' '}
                и эффективную рекламу
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                <strong>Не упустите шанс</strong> увеличить продажи в 2-3 раза. 
                Получите профессиональный сайт и настроенную рекламу, 
                которая окупится уже в первый месяц.
              </p>
            </div>

            {/* Преимущества */}
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {advantage.icon}
                  <span className="text-gray-700 font-medium">{advantage.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Правая часть - форма заявки */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Получить консультацию
              </h2>
              <p className="text-gray-600">
                Оставьте заявку и получите персональное предложение в течение 15 минут
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Введите ваше имя"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Номер телефона
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Получить консультацию</span>
              </motion.button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
