import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-marina-light/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Свяжитесь со мной
          </h2>
          <div className="w-20 h-1 bg-marina-rose mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Я готова ответить на ваши вопросы и помочь в решении психологических проблем
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-marina-pink/20">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-marina-pink/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-marina-rose h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Телефон</p>
                    <p className="font-medium text-slate-800">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-marina-pink/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-marina-rose h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-medium text-slate-800">marina@psychologist.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-marina-pink/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-marina-rose h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Адрес</p>
                    <p className="font-medium text-slate-800">г. Пермь, ул. Ленина, 10, офис 305</p>
                    <p className="text-sm text-slate-600 mt-1">Онлайн-консультации также доступны</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full rounded-full flex items-center gap-2 justify-center bg-marina-rose hover:bg-marina-rose/90">
                  <Calendar className="h-5 w-5" />
                  <span>Записаться на консультацию</span>
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-marina-pink/20">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Часы работы</h3>
              <ul className="space-y-2 mt-4">
                <li className="flex justify-between">
                  <span className="text-slate-600">Понедельник - Пятница</span>
                  <span className="font-medium text-slate-800">9:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-600">Суббота</span>
                  <span className="font-medium text-slate-800">10:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-600">Воскресенье</span>
                  <span className="font-medium text-slate-800">Выходной</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-marina-pink/20">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Напишите мне</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="name">
                    Ваше имя
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Введите ваше имя" 
                    className="rounded-lg border-marina-pink/20 focus:border-marina-rose focus:ring-marina-rose/20" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="phone">
                    Телефон
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="+7 (___) ___-__-__" 
                    className="rounded-lg border-marina-pink/20 focus:border-marina-rose focus:ring-marina-rose/20" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="email">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="your@email.com" 
                  className="rounded-lg border-marina-pink/20 focus:border-marina-rose focus:ring-marina-rose/20" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="message">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Опишите вашу ситуацию или вопрос..." 
                  className="min-h-[120px] rounded-lg border-marina-pink/20 focus:border-marina-rose focus:ring-marina-rose/20" 
                />
              </div>
              
              <Button className="rounded-full w-full py-6 flex items-center gap-2 justify-center bg-marina-rose hover:bg-marina-rose/90">
                <Send className="h-5 w-5" />
                <span>Отправить сообщение</span>
              </Button>
              
              <p className="text-sm text-slate-500 text-center mt-4">
                Отправляя форму, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;