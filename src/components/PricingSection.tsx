import { Button } from "@/components/ui/button";
import { Clock, Calendar, Video, MapPin } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Услуги и стоимость
          </h2>
          <div className="w-20 h-1 bg-marina-rose mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Индивидуальные консультации для вашего психологического благополучия
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border border-marina-pink/20 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-marina-lavender/20 rounded-full"></div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-6 relative z-10">Разовая консультация</h3>
            
            <div className="flex items-baseline mb-6 relative z-10">
              <span className="text-3xl font-bold text-marina-rose">3000₽</span>
              <span className="text-slate-500 ml-2">/ сессия</span>
            </div>
            
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-marina-rose mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-800">Продолжительность 50 минут</p>
                  <p className="text-sm text-slate-600">Достаточно для проработки актуальной проблемы</p>
                </div>
              </li>
              <li className="flex items-start">
                <Video className="h-5 w-5 text-marina-rose mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-800">Онлайн или офлайн формат</p>
                  <p className="text-sm text-slate-600">По вашему выбору</p>
                </div>
              </li>
              <li className="flex items-start">
                <Calendar className="h-5 w-5 text-marina-rose mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-800">Гибкий график</p>
                  <p className="text-sm text-slate-600">Запись по предварительной договоренности</p>
                </div>
              </li>
            </ul>
            
            <Button className="w-full rounded-full py-6 bg-marina-rose hover:bg-marina-rose/90 relative z-10">
              Записаться на консультацию
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-marina-pink/20 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-marina-pink/20 rounded-full"></div>
            
            <div className="absolute -left-2 top-8 bg-marina-rose px-4 py-1 rounded-r-lg">
              <span className="text-white text-sm font-medium">Рекомендуется</span>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-6 relative z-10">Регулярная терапия</h3>
            
            <div className="flex items-baseline mb-6 relative z-10">
              <span className="text-3xl font-bold text-marina-rose">2500₽</span>
              <span className="text-slate-500 ml-2">/ сессия</span>
            </div>
            
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-marina-rose mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-800">Продолжительность 50 минут</p>
                  <p className="text-sm text-slate-600">Еженедельные встречи для глубинной работы</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-marina-rose mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-800">Постоянное сопровождение</p>
                  <p className="text-sm text-slate-600">Для достижения устойчивых изменений</p>
                </div>
              </li>
              <li className="flex items-start">
                <Calendar className="h-5 w-5 text-marina-rose mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-800">Фиксированное время</p>
                  <p className="text-sm text-slate-600">Удобный день и время каждую неделю</p>
                </div>
              </li>
            </ul>
            
            <Button className="w-full rounded-full py-6 bg-marina-rose hover:bg-marina-rose/90 relative z-10">
              Начать регулярную терапию
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Не уверены, какой формат подходит именно вам?
          </p>
          <Button variant="link" className="text-marina-rose font-medium mt-2 hover:underline">
            Свяжитесь со мной для консультации
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;